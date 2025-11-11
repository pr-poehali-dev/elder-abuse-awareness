import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Question {
  id: string;
  question: string;
  type: 'radio' | 'textarea';
  options?: string[];
}

const questions: Question[] = [
  {
    id: 'q1',
    question: 'Сталкивались ли Вы лично или Ваши близкие с жестоким обращением в отношении пожилых людей?',
    type: 'radio',
    options: ['Да', 'Нет', 'Затрудняюсь ответить']
  },
  {
    id: 'q2',
    question: 'Какие формы жестокого обращения Вы наблюдали? (выберите наиболее распространенную)',
    type: 'radio',
    options: [
      'Физическое насилие',
      'Психологическое насилие',
      'Финансовая эксплуатация',
      'Пренебрежение основными потребностями',
      'Не сталкивался'
    ]
  },
  {
    id: 'q3',
    question: 'Знаете ли Вы, куда можно обратиться за помощью при жестоком обращении с пожилыми людьми?',
    type: 'radio',
    options: ['Да, знаю точно', 'Слышал, но не уверен', 'Нет, не знаю']
  },
  {
    id: 'q4',
    question: 'Обращались ли Вы когда-либо в социальные службы или правоохранительные органы по факту жестокого обращения?',
    type: 'radio',
    options: ['Да, обращался', 'Нет, но планирую', 'Нет, не обращался', 'Не было необходимости']
  },
  {
    id: 'q5',
    question: 'Как Вы оцениваете качество помощи пожилым людям в вашем городе/районе?',
    type: 'radio',
    options: ['Отличное', 'Хорошее', 'Удовлетворительное', 'Плохое', 'Очень плохое']
  },
  {
    id: 'q6',
    question: 'Считаете ли Вы, что пожилые люди достаточно информированы о своих правах и способах защиты?',
    type: 'radio',
    options: ['Да, достаточно', 'Скорее да', 'Скорее нет', 'Нет, совсем не информированы']
  },
  {
    id: 'q7',
    question: 'Какие меры, по Вашему мнению, наиболее эффективны для предотвращения жестокого обращения с пожилыми людьми?',
    type: 'radio',
    options: [
      'Повышение осведомленности населения',
      'Усиление контроля со стороны государства',
      'Развитие социальных служб',
      'Ужесточение наказаний',
      'Все перечисленное'
    ]
  },
  {
    id: 'q8',
    question: 'Готовы ли Вы оказать помощь пожилому человеку, если станете свидетелем жестокого обращения?',
    type: 'radio',
    options: ['Да, обязательно', 'Скорее да', 'Не уверен', 'Скорее нет', 'Нет']
  },
  {
    id: 'q9',
    question: 'Ваш возраст',
    type: 'radio',
    options: ['До 25 лет', '25-40 лет', '41-60 лет', '61-75 лет', 'Старше 75 лет']
  },
  {
    id: 'q10',
    question: 'Ваши предложения по улучшению ситуации с защитой пожилых людей (необязательно)',
    type: 'textarea'
  }
];

const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSurveyCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSurveyCompleted(false);
  };

  const isCurrentAnswered = () => {
    const question = questions[currentQuestion];
    return answers[question.id] !== undefined && answers[question.id] !== '';
  };

  if (surveyCompleted) {
    const answeredCount = Object.keys(answers).filter(key => answers[key] !== '').length;
    
    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Спасибо за участие!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="py-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
              <Icon name="CheckCircle" className="text-primary" size={64} />
            </div>
            <p className="text-2xl font-semibold mb-4">
              Ваша анкета отправлена
            </p>
            <p className="text-lg text-muted-foreground mb-2">
              Вы ответили на {answeredCount} из {questions.length} вопросов
            </p>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Ваше мнение очень важно для улучшения системы защиты пожилых людей. 
              Результаты опроса будут использованы для развития социальных программ и повышения осведомленности населения.
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold mb-2 flex items-center justify-center gap-2">
                <Icon name="Info" size={20} className="text-blue-600" />
                <span>Нужна помощь?</span>
              </p>
              <p className="text-muted-foreground mb-3">
                Круглосуточная горячая линия помощи
              </p>
              <a href="tel:88002000122" className="text-2xl font-bold text-primary hover:underline">
                8-800-2000-122
              </a>
            </div>
            <Button onClick={handleRestart} variant="outline" size="lg" className="text-lg">
              <Icon name="RotateCcw" className="mr-2" size={20} />
              Заполнить анкету заново
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const currentAnswer = answers[question.id] || '';

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-muted-foreground">
            Вопрос {currentQuestion + 1} из {questions.length}
          </span>
          <span className="text-sm font-medium text-primary">
            Заполнено: {Object.keys(answers).filter(key => answers[key] !== '').length}/{questions.length}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-4">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
        <CardTitle className="text-2xl">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {question.type === 'radio' && question.options && (
          <RadioGroup 
            value={currentAnswer} 
            onValueChange={(value) => handleAnswerChange(question.id, value)}
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-accent transition-colors">
                <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                <Label 
                  htmlFor={`${question.id}-${index}`} 
                  className="flex-1 cursor-pointer text-base"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}

        {question.type === 'textarea' && (
          <Textarea
            value={currentAnswer}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            placeholder="Введите ваш ответ..."
            className="min-h-[150px] text-base"
          />
        )}

        <div className="flex gap-4 pt-4">
          <Button
            onClick={handlePrevious}
            variant="outline"
            size="lg"
            disabled={currentQuestion === 0}
            className="flex-1"
          >
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Назад
          </Button>
          <Button
            onClick={handleNext}
            size="lg"
            disabled={question.type === 'radio' && !isCurrentAnswered()}
            className="flex-1"
          >
            {currentQuestion < questions.length - 1 ? 'Далее' : 'Отправить'}
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>

        {question.type === 'textarea' && (
          <p className="text-sm text-muted-foreground text-center">
            * Этот вопрос необязателен, можете пропустить
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default Survey;
