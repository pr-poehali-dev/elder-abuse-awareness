import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

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
      description: 'Синяки, ссадины, переломы, необъяснимые травмы',
      color: 'bg-red-50 border-red-200'
    },
    {
      icon: 'Brain',
      title: 'Психологическое насилие',
      description: 'Запугивание, угрозы, изоляция, унижение',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: 'Wallet',
      title: 'Финансовая эксплуатация',
      description: 'Незаконное использование средств, вымогательство',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      icon: 'HeartOff',
      title: 'Пренебрежение',
      description: 'Отсутствие ухода, питания, медицинской помощи',
      color: 'bg-blue-50 border-blue-200'
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
    { name: 'Социальная защита', contact: 'Департамент соцзащиты вашего города', icon: 'Building2' },
    { name: 'Правовая помощь', contact: 'Бесплатная юридическая консультация', icon: 'Scale' },
    { name: 'Психологическая поддержка', contact: '8-800-333-44-34', icon: 'MessageCircle' }
  ];

  const videos = [
    {
      title: 'Как распознать признаки жестокого обращения',
      description: 'Основные индикаторы, на которые важно обратить внимание',
      duration: '5:30',
      thumbnail: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      title: 'Первые шаги при обнаружении проблемы',
      description: 'Пошаговая инструкция действий для помощи близкому человеку',
      duration: '7:15',
      thumbnail: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      title: 'Правовая защита пожилых людей',
      description: 'Какие законы защищают права старшего поколения',
      duration: '6:45',
      thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      title: 'Психологическая поддержка для пострадавших',
      description: 'Как помочь восстановиться после пережитого',
      duration: '8:20',
      thumbnail: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80',
      videoId: 'dQw4w9WgXcQ'
    }
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
              onClick={() => scrollToSection('videos')}
              className="text-base"
            >
              <Icon name="Video" className="mr-2" size={18} />
              Видео
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
                    <div>
                      <CardTitle className="text-2xl mb-2">{sign.title}</CardTitle>
                      <CardDescription className="text-lg text-foreground/80">
                        {sign.description}
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

        <section id="videos" className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Видео-инструкции</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Наглядные руководства для понимания проблемы и способов помощи
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={32} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{video.title}</CardTitle>
                  <CardDescription className="text-base">
                    {video.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
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
            © 2024 Защита достоинства. Каждый имеет право на уважение и безопасность.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;