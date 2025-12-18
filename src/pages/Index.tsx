import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Survey from '@/components/Survey';

const Index = () => {
  const [hotlineOpen, setHotlineOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const signs = [
    {
      icon: 'UserX',
      title: 'Физическое насилие',
      description: 'Побои, толчки, шлепки, удушение, ограничение движений',
      consequences: 'Травмы, переломы, хронические боли, инвалидность, летальный исход',
      color: 'bg-red-50 border-red-200'
    },
    {
      icon: 'Brain',
      title: 'Психологическое насилие',
      description: 'Запугивание, угрозы, изоляция, контроль, манипуляции',
      consequences: 'Депрессия, тревожность, потеря самооценки, суицидальные мысли, ПТСР',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: 'MessageSquare',
      title: 'Вербальное насилие',
      description: 'Оскорбления, крики, унижения, постоянная критика',
      consequences: 'Низкая самооценка, страх общения, социальная изоляция, эмоциональная травма',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      icon: 'HeartCrack',
      title: 'Моральное насилие',
      description: 'Игнорирование, обесценивание чувств, газлайтинг, пренебрежение потребностями',
      consequences: 'Потеря самоидентификации, эмоциональное выгорание, зависимость от агрессора',
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      icon: 'HeartOff',
      title: 'Эмоциональное насилие',
      description: 'Постоянная критика, игнорирование, холодность, эмоциональный шантаж',
      consequences: 'Тревожные расстройства, депрессия, нарушение привязанности, потеря доверия',
      color: 'bg-pink-50 border-pink-200'
    },
    {
      icon: 'Wallet',
      title: 'Экономическое насилие',
      description: 'Контроль финансов, запрет работать, незаконное использование средств, вымогательство',
      consequences: 'Финансовая зависимость, бедность, невозможность уйти, потеря имущества',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      icon: 'ShieldAlert',
      title: 'Сексуальное насилие',
      description: 'Принуждение к интимным отношениям, домогательства, насильственные действия',
      consequences: 'Физические травмы, ПТСР, сексуальные расстройства, инфекции, психологическая травма',
      color: 'bg-rose-50 border-rose-200'
    }
  ];

  const helpSteps = [
    { step: 1, text: 'Позвоните на горячую линию — вы не одни', icon: 'Phone' },
    { step: 2, text: 'Обратитесь в социальные службы вашего района', icon: 'Building' },
    { step: 3, text: 'При необходимости обратитесь в полицию (102)', icon: 'ShieldAlert' },
    { step: 4, text: 'Получите юридическую консультацию', icon: 'Scale' }
  ];

  const stories = [
    {
      title: 'История Анны Ивановны, 72 года',
      problem: 'Финансовая эксплуатация со стороны родственников',
      solution: 'Обращение в социальные службы помогло восстановить контроль над пенсией и оформить опеку',
      icon: 'Heart'
    },
    {
      title: 'История Петра Сергеевича, 68 лет',
      problem: 'Пренебрежение основными потребностями в частном пансионате',
      solution: 'Жалоба в надзорные органы привела к проверке и улучшению условий содержания',
      icon: 'CheckCircle'
    }
  ];

  const resources = [
    { name: 'Горячая линия помощи', contact: '8-800-2000-122', icon: 'Phone' },
    { 
      name: 'Управление социальной защиты населения по городу Барнаулу (УСЗН)', 
      contact: 'Адреса: ул. Короленко, 67; пр. Ленина, 179 (2-й этаж); ул. Шукшина, 32а. Телефон: (3852) 65-89-80. График: пн-чт 9:00-18:00, пт 9:00-17:00, обед 13:00-13:48', 
      icon: 'Building2' 
    },
    { 
      name: 'Комплексный центр социального обслуживания населения', 
      contact: 'Адрес: ул. Телефонная, 50а. Филиалы: Железнодорожный р-н (3852) 55-36-27, Индустриальный р-н (3852) 47-52-95, Ленинский р-н (3852) 49-12-88, Октябрьский р-н (3852) 34-00-73, Центральный р-н (3852) 55-84-50', 
      icon: 'Building' 
    },
    { 
      name: 'Краевой кризисный центр для женщин', 
      contact: 'Адрес: ул. Смирнова, 79Г. Телефон: 8 (3852) 34-22-55. Услуги: психологическая помощь, социальная гостиница для беременных и женщин с детьми до 3 лет', 
      icon: 'Heart' 
    },
    { 
      name: 'Краевой кризисный центр для мужчин', 
      contact: 'Адрес: ул. Георгия Исакова, 113е, 2-й этаж. Телефон: +7 (3852) 55-12-88. Email: criscentr@mail.ru. График: пн-пт 8:30-21:30, сб-вс по индивидуальному графику', 
      icon: 'Users' 
    },
    { name: 'Правовая помощь', contact: 'Бесплатная юридическая консультация', icon: 'Scale' },
    { name: 'Психологическая поддержка', contact: '8-800-333-44-34', icon: 'MessageCircle' }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <Icon name="Shield" className="text-primary" size={32} />
              <h1 className="text-2xl md:text-3xl font-bold text-primary">Защита достоинства</h1>
            </div>
            <Button 
              onClick={() => setHotlineOpen(!hotlineOpen)}
              size="lg"
              className="text-lg font-medium"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Горячая линия
            </Button>
          </div>
          <nav className="hidden md:flex gap-3 justify-center flex-wrap">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('signs')}
              className="text-base"
            >
              <Icon name="AlertCircle" className="mr-2" size={18} />
              Признаки
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('help')}
              className="text-base"
            >
              <Icon name="LifeBuoy" className="mr-2" size={18} />
              Помощь
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('prevention')}
              className="text-base"
            >
              <Icon name="ShieldCheck" className="mr-2" size={18} />
              Предотвращение
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('stories')}
              className="text-base"
            >
              <Icon name="BookOpen" className="mr-2" size={18} />
              Истории
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('resources')}
              className="text-base"
            >
              <Icon name="BookMarked" className="mr-2" size={18} />
              Ресурсы
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('survey')}
              className="text-base"
            >
              <Icon name="ClipboardList" className="mr-2" size={18} />
              Анкета
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-base"
            >
              <Icon name="MessageSquare" className="mr-2" size={18} />
              Контакты
            </Button>
          </nav>
        </div>
      </header>

      {hotlineOpen && (
        <div className="bg-primary text-primary-foreground py-6 px-4 animate-fade-in">
          <div className="container mx-auto text-center">
            <p className="text-xl md:text-2xl font-bold mb-2">Круглосуточная горячая линия</p>
            <a href="tel:88002000122" className="text-3xl md:text-4xl font-bold hover:underline">
              8-800-2000-122
            </a>
            <p className="mt-3 text-lg opacity-90">Звонок бесплатный и конфиденциальный</p>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 py-12 space-y-20">
        <section className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Каждый человек заслуживает уважения и заботы
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Жестокое обращение с пожилыми людьми — это серьезная проблема. 
            Мы здесь, чтобы помочь распознать признаки и получить поддержку.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection('signs')}
            >
              <Icon name="AlertCircle" className="mr-2" size={22} />
              Признаки насилия
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection('help')}
            >
              <Icon name="Info" className="mr-2" size={22} />
              Получить помощь
            </Button>
          </div>
        </section>

        <section id="signs" className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Признаки жестокого обращения</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Важно знать, на что обращать внимание
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {signs.map((sign, index) => (
              <Card 
                key={index} 
                className={`${sign.color} border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Icon name={sign.icon} size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{sign.title}</CardTitle>
                      <CardDescription className="text-base text-foreground/80 mb-3">
                        <strong>Признаки:</strong> {sign.description}
                      </CardDescription>
                      <CardDescription className="text-base text-foreground/70">
                        <strong>Последствия:</strong> {sign.consequences}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="help" className="bg-accent/50 -mx-4 px-4 py-16 rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как получить помощь</h2>
              <p className="text-xl text-muted-foreground">
                Пошаговое руководство к действию
              </p>
            </div>
            <div className="space-y-6">
              {helpSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1 flex items-center gap-4">
                    <Icon name={step.icon} size={28} className="text-primary flex-shrink-0" />
                    <p className="text-xl font-medium">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="prevention" className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Меры предотвращения</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Что можно сделать, чтобы защитить пожилых людей
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="education" className="border-2 rounded-lg px-6 bg-blue-50 border-blue-200">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="GraduationCap" size={28} className="text-primary" />
                    Образование и просвещение
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg pt-4 space-y-2">
                  <p>• Проведение информационных кампаний о правах пожилых людей</p>
                  <p>• Обучение родственников и опекунов основам ухода</p>
                  <p>• Повышение осведомленности общества о проблеме</p>
                  <p>• Семинары и тренинги для социальных работников</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support" className="border-2 rounded-lg px-6 bg-green-50 border-green-200">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="HandHeart" size={28} className="text-primary" />
                    Социальная поддержка
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg pt-4 space-y-2">
                  <p>• Создание групп поддержки для пожилых людей</p>
                  <p>• Развитие служб социального обслуживания</p>
                  <p>• Организация досуга и общения для пожилых</p>
                  <p>• Помощь опекунам для снижения стресса</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="legal" className="border-2 rounded-lg px-6 bg-purple-50 border-purple-200">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="Scale" size={28} className="text-primary" />
                    Правовая защита
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg pt-4 space-y-2">
                  <p>• Усиление законодательства по защите прав пожилых</p>
                  <p>• Упрощение доступа к юридической помощи</p>
                  <p>• Контроль за деятельностью домов престарелых</p>
                  <p>• Создание механизмов быстрого реагирования</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="medical" className="border-2 rounded-lg px-6 bg-rose-50 border-rose-200">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="Stethoscope" size={28} className="text-primary" />
                    Медицинская помощь
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg pt-4 space-y-2">
                  <p>• Регулярные медицинские осмотры</p>
                  <p>• Обучение врачей выявлению признаков насилия</p>
                  <p>• Психологическая помощь пострадавшим</p>
                  <p>• Программы поддержки ментального здоровья</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="monitoring" className="border-2 rounded-lg px-6 bg-amber-50 border-amber-200">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="Eye" size={28} className="text-primary" />
                    Мониторинг и контроль
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg pt-4 space-y-2">
                  <p>• Регулярные проверки условий проживания</p>
                  <p>• Создание горячих линий для сообщений о насилии</p>
                  <p>• Система визитов социальных работников</p>
                  <p>• Контроль за финансовыми операциями уязвимых лиц</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="community" className="border-2 rounded-lg px-6 bg-teal-50 border-teal-200">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="Users" size={28} className="text-primary" />
                    Вовлечение общества
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg pt-4 space-y-2">
                  <p>• Программы добровольной помощи пожилым соседям</p>
                  <p>• Создание дружественной среды для пожилых людей</p>
                  <p>• Межпоколенческие проекты и мероприятия</p>
                  <p>• Поощрение активного участия пожилых в жизни общества</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="stories" className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Истории и опыт</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные люди, которым удалось решить проблему
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {stories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name={story.icon} size={28} className="text-primary" />
                    <CardTitle className="text-2xl">{story.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg mb-2 text-destructive">Проблема:</p>
                    <p className="text-lg text-muted-foreground">{story.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-2 text-primary">Решение:</p>
                    <p className="text-lg text-muted-foreground">{story.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="resources" className="bg-muted/30 -mx-4 px-4 py-16 rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Полезные ресурсы и контакты</h2>
              <p className="text-xl text-muted-foreground">
                Куда обращаться за помощью
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {resources.map((resource, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl px-6 border-2 shadow-sm">
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <Icon name={resource.icon} size={28} className="text-primary" />
                      <span>{resource.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground pb-6 pl-12">
                    {resource.contact}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="survey" className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Анкета</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Поделитесь вашим мнением о проблеме жестокого обращения с пожилыми людьми. Ваши ответы помогут улучшить систему защиты.
            </p>
          </div>
          <Survey />
          <div className="mt-6 text-center">
            <a 
              href="https://docs.google.com/forms/d/18Yv6DD5nbJ8o9f4AY2Z6ep8Lq1FqCw4sQcoWNSqWRE0/edit?pli=1#responses" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline text-lg font-medium inline-flex items-center gap-2"
            >
              <Icon name="ExternalLink" size={20} />
              Посмотреть результаты анкеты
            </a>
          </div>
        </section>

        <section id="contact" className="text-center max-w-3xl mx-auto space-y-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold">Нужна помощь прямо сейчас?</h2>
          <Card className="bg-primary text-primary-foreground border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center justify-center gap-3">
                <Icon name="Phone" size={36} />
                Круглосуточная горячая линия
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a href="tel:88002000122" className="block text-5xl font-bold hover:underline">
                8-800-2000-122
              </a>
              <p className="text-xl opacity-90">Звонок бесплатный и конфиденциальный</p>
              <p className="text-lg opacity-80">Мы работаем 24/7. Вы не одни.</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted/50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground">
            © 2025 Защита достоинства. Каждый имеет право на уважение и безопасность.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;