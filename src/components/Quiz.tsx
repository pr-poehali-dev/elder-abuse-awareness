import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: 'Что является признаком физического насилия над пожилым человеком?',
    options: [
      'Забывчивость и рассеянность',
      'Необъяснимые синяки, ссадины и переломы',
      'Желание побыть в одиночестве',
      'Снижение аппетита'
    ],
    correctAnswer: 1,
    explanation: 'Необъяснимые травмы, синяки в разных стадиях заживления, переломы — это явные признаки физического насилия.'
  },
  {
    question: 'Какой номер горячей линии помощи при жестоком обращении?',
    options: [
      '112',
      '8-800-2000-122',
      '103',
      '102'
    ],
    correctAnswer: 1,
    explanation: 'Круглосуточная горячая линия помощи: 8-800-2000-122. Звонок бесплатный и конфиденциальный.'
  },
  {
    question: 'Что такое психологическое насилие?',
    options: [
      'Отсутствие медицинской помощи',
      'Незаконное использование денежных средств',
      'Запугивание, угрозы, изоляция и унижение',
      'Физические повреждения'
    ],
    correctAnswer: 2,
    explanation: 'Психологическое насилие включает запугивание, угрозы, изоляцию от близких, постоянное унижение и контроль.'
  },
  {
    question: 'Куда в первую очередь следует обратиться при подозрении на жестокое обращение?',
    options: [
      'В аптеку',
      'На горячую линию помощи или в социальные службы',
      'К соседям',
      'В интернет-форум'
    ],
    correctAnswer: 1,
    explanation: 'Первый шаг — позвонить на горячую линию 8-800-2000-122 или обратиться в социальные службы вашего района.'
  },
  {
    question: 'Что относится к финансовой эксплуатации пожилых людей?',
    options: [
      'Помощь в оплате счетов',
      'Незаконное использование пенсии и вымогательство денег',
      'Совместное планирование бюджета',
      'Открытие банковского счета'
    ],
    correctAnswer: 1,
    explanation: 'Финансовая эксплуатация — это незаконное использование денежных средств пожилого человека, вымогательство, принуждение к передаче имущества.'
  },
  {
    question: 'Какие признаки указывают на пренебрежение потребностями пожилого человека?',
    options: [
      'Регулярные прогулки на свежем воздухе',
      'Отсутствие должного ухода, питания и медицинской помощи',
      'Наличие хобби и увлечений',
      'Общение с родственниками'
    ],
    correctAnswer: 1,
    explanation: 'Пренебрежение — это отсутствие необходимого ухода, питания, гигиены, медицинской помощи и безопасных условий проживания.'
  },
  {
    question: 'По какому телефону можно обратиться в полицию при экстренной ситуации?',
    options: [
      '101',
      '103',
      '102',
      '104'
    ],
    correctAnswer: 2,
    explanation: 'В экстренных ситуациях, требующих немедленного вмешательства правоохранительных органов, звоните 102 или единый номер 112.'
  },
  {
    question: 'Где находится Управление социальной защиты населения по городу Барнаулу?',
    options: [
      'Только на ул. Короленко, 67',
      'На ул. Короленко, 67; пр. Ленина, 179; ул. Шукшина, 32а',
      'Только на пр. Ленина, 179',
      'На ул. Телефонная, 50а'
    ],
    correctAnswer: 1,
    explanation: 'УСЗН имеет три адреса: ул. Короленко, 67; пр. Ленина, 179 (2-й этаж); ул. Шукшина, 32а. Единый телефон: (3852) 65-89-80.'
  },
  {
    question: 'Что предоставляет Краевой кризисный центр для женщин?',
    options: [
      'Только юридическую помощь',
      'Психологическую помощь и социальную гостиницу для женщин с детьми',
      'Только медицинскую помощь',
      'Трудоустройство'
    ],
    correctAnswer: 1,
    explanation: 'Кризисный центр для женщин (ул. Смирнова, 79Г, тел. 8 (3852) 34-22-55) предоставляет психологическую помощь и социальную гостиницу для беременных и женщин с детьми до 3 лет.'
  },
  {
    question: 'Какой график работы у Краевого кризисного центра для мужчин?',
    options: [
      'Круглосуточно',
      'Только по будням с 9:00 до 18:00',
      'Пн-пт: 8:30-21:30, сб-вс: по индивидуальному графику',
      'Только по предварительной записи'
    ],
    correctAnswer: 2,
    explanation: 'Кризисный центр для мужчин (ул. Георгия Исакова, 113е) работает: пн-пт с 8:30 до 21:30, в выходные — по индивидуальному графику. Телефон: +7 (3852) 55-12-88.'
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Тест завершён!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="py-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
              <span className="text-5xl font-bold text-primary">{percentage}%</span>
            </div>
            <p className="text-2xl font-semibold mb-2">
              Ваш результат: {score} из {questions.length}
            </p>
            {percentage >= 80 && (
              <p className="text-lg text-green-600">
                <Icon name="CheckCircle" className="inline mr-2" size={24} />
                Отличный результат! Вы хорошо разбираетесь в теме защиты пожилых людей.
              </p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-lg text-blue-600">
                <Icon name="Info" className="inline mr-2" size={24} />
                Хороший результат! Рекомендуем ещё раз изучить материалы на сайте.
              </p>
            )}
            {percentage < 60 && (
              <p className="text-lg text-orange-600">
                <Icon name="AlertCircle" className="inline mr-2" size={24} />
                Стоит внимательнее изучить информацию о защите пожилых людей.
              </p>
            )}
          </div>
          <Button onClick={handleRestart} size="lg" className="text-lg">
            <Icon name="RotateCcw" className="mr-2" size={20} />
            Пройти тест заново
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-muted-foreground">
            Вопрос {currentQuestion + 1} из {questions.length}
          </span>
          <span className="text-sm font-medium text-primary">
            Правильных ответов: {score}
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
      <CardContent className="space-y-4">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          
          let buttonStyle = '';
          if (showExplanation) {
            if (isCorrect) {
              buttonStyle = 'border-green-500 bg-green-50 text-green-900';
            } else if (isSelected && !isCorrect) {
              buttonStyle = 'border-red-500 bg-red-50 text-red-900';
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={showExplanation}
              className={`w-full p-4 text-left border-2 rounded-lg transition-all hover:border-primary hover:bg-accent ${buttonStyle} ${
                isSelected && !showExplanation ? 'border-primary bg-accent' : 'border-border'
              } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  showExplanation && isCorrect ? 'border-green-500 bg-green-500' :
                  showExplanation && isSelected && !isCorrect ? 'border-red-500 bg-red-500' :
                  isSelected ? 'border-primary bg-primary' : 'border-muted-foreground'
                }`}>
                  {showExplanation && isCorrect && (
                    <Icon name="Check" size={16} className="text-white" />
                  )}
                  {showExplanation && isSelected && !isCorrect && (
                    <Icon name="X" size={16} className="text-white" />
                  )}
                </div>
                <span className="text-base flex-1">{option}</span>
              </div>
            </button>
          );
        })}

        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded animate-fade-in">
            <p className="font-medium text-blue-900 mb-2">
              <Icon name="Info" className="inline mr-2" size={18} />
              Пояснение:
            </p>
            <p className="text-blue-800">{question.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <Button 
            onClick={handleNext} 
            size="lg" 
            className="w-full mt-4 text-lg"
          >
            {currentQuestion < questions.length - 1 ? 'Следующий вопрос' : 'Показать результаты'}
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Quiz;
