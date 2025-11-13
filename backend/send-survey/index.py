import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from datetime import datetime

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send survey results via email
    Args: event with httpMethod, body containing survey answers
          context with request_id
    Returns: HTTP response with success/error status
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    answers = body_data.get('answers', {})
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    email_to = os.environ.get('SURVEY_EMAIL_TO')
    
    if not all([smtp_host, smtp_user, smtp_password, email_to]):
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Email configuration missing'})
        }
    
    questions = {
        'q1': 'Сталкивались ли вы лично или ваши знакомые с жестоким обращением в отношении пожилых людей?',
        'q2': 'Какие виды насилия вы наблюдали или о которых слышали?',
        'q3': 'Знаете ли вы, куда можно обратиться за помощью в случае жестокого обращения с пожилым человеком?',
        'q4': 'Обращались ли вы когда-либо за помощью в подобной ситуации?',
        'q5': 'Как вы оцениваете работу социальных служб и правоохранительных органов в этой сфере?',
        'q6': 'Считаете ли вы, что в обществе достаточно информации о проблеме жестокого обращения с пожилыми?',
        'q7': 'Какие меры, по вашему мнению, могли бы улучшить ситуацию?',
        'q8': 'Готовы ли вы сами помогать пожилым людям, оказавшимся в трудной ситуации?',
        'q9': 'Ваш возраст',
        'q10': 'Ваш пол'
    }
    
    email_body = '<html><body style="font-family: Arial, sans-serif;">'
    email_body += f'<h2>Результаты анкеты</h2>'
    email_body += f'<p><strong>Дата:</strong> {datetime.now().strftime("%d.%m.%Y %H:%M")}</p>'
    email_body += '<hr>'
    
    for q_id, question in questions.items():
        answer = answers.get(q_id, 'Не указано')
        email_body += f'<p><strong>{question}</strong><br>{answer}</p>'
    
    email_body += '</body></html>'
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Результаты анкеты - {datetime.now().strftime("%d.%m.%Y %H:%M")}'
    msg['From'] = smtp_user
    msg['To'] = email_to
    
    html_part = MIMEText(email_body, 'html', 'utf-8')
    msg.attach(html_part)
    
    server = smtplib.SMTP(smtp_host, smtp_port)
    server.starttls()
    server.login(smtp_user, smtp_password)
    server.send_message(msg)
    server.quit()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'success': True, 'message': 'Email sent successfully'})
    }
