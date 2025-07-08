import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">Анна Петрова</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#hero"
                className="text-gray-700 hover:text-[#FF6B6B] transition-colors"
              >
                Главная
              </a>
              <a
                href="#works"
                className="text-gray-700 hover:text-[#FF6B6B] transition-colors"
              >
                Работы
              </a>
              <a
                href="#skills"
                className="text-gray-700 hover:text-[#FF6B6B] transition-colors"
              >
                Навыки
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-[#FF6B6B] transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#FF6B6B] transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFEAA7] px-4 py-2 rounded-full">
                <Icon name="Award" size={16} />
                <span className="text-sm font-medium">
                  Журналист-корреспондент
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Расскажу вашу
                <span className="gradient-text"> историю</span> миру
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Более 8 лет создаю качественный контент для ведущих изданий.
                Специализируюсь на социальных темах, интервью и расследованиях.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white"
                >
                  <Icon name="Mail" size={20} className="mr-2" />
                  Связаться
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать резюме
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="hero-gradient p-1 rounded-2xl">
                <img
                  src="/img/b0769566-ca0d-4025-906c-4c7f484ae52a.jpg"
                  alt="Анна Петрова - журналист-корреспондент"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Calendar" size={16} />
                  <span>8+ лет опыта</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Избранные работы</h2>
            <p className="text-xl text-gray-600">
              Лучшие материалы за последние годы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Расследование коррупции в медицине",
                description: "Эксклюзивный материал о схемах в здравоохранении",
                publication: "Коммерсант",
                date: "2024",
                category: "Расследование",
              },
              {
                title: "Интервью с лауреатом Нобелевской премии",
                description: "Беседа о будущем науки и образования",
                publication: "Ведомости",
                date: "2024",
                category: "Интервью",
              },
              {
                title: "Социальные проблемы молодежи",
                description: "Серия статей о современном поколении",
                publication: "РБК",
                date: "2023",
                category: "Социальная журналистика",
              },
            ].map((work, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-[#4ECDC4] text-white"
                    >
                      {work.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{work.date}</span>
                  </div>
                  <CardTitle className="text-xl">{work.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {work.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#FF6B6B]">
                      {work.publication}
                    </span>
                    <Button variant="ghost" size="sm">
                      <Icon name="ExternalLink" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Навыки и экспертиза</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { skill: "Расследовательская журналистика", level: "95%" },
                  { skill: "Интервью", level: "90%" },
                  { skill: "Социальная журналистика", level: "88%" },
                  { skill: "Аналитические материалы", level: "85%" },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-sm text-gray-600">
                        {item.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] h-2 rounded-full"
                        style={{ width: item.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Опыт работы</h3>
              <div className="space-y-6">
                {[
                  {
                    position: "Старший корреспондент",
                    company: "Коммерсант",
                    period: "2020 — настоящее время",
                    description:
                      "Расследовательская журналистика, эксклюзивные интервью",
                  },
                  {
                    position: "Корреспондент",
                    company: "Ведомости",
                    period: "2018 — 2020",
                    description: "Освещение социальных и экономических тем",
                  },
                  {
                    position: "Младший корреспондент",
                    company: "РБК",
                    period: "2016 — 2018",
                    description:
                      "Новостная журналистика, аналитические материалы",
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-[#FF6B6B] pl-6 pb-6"
                  >
                    <h4 className="font-bold text-lg">{job.position}</h4>
                    <p className="text-[#4ECDC4] font-medium">{job.company}</p>
                    <p className="text-sm text-gray-600 mb-2">{job.period}</p>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Рекомендации</h2>
            <p className="text-xl text-gray-600">Отзывы коллег и редакторов</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Сергей Иванов",
                position: "Главный редактор, Коммерсант",
                review:
                  "Анна — один из лучших журналистов-расследователей, с которыми я работал. Её материалы всегда качественные и хорошо проработанные.",
                rating: 5,
              },
              {
                name: "Мария Кузнецова",
                position: "Редактор отдела, Ведомости",
                review:
                  "Профессиональный подход к каждому заданию. Анна умеет найти подход к любому собеседнику и получить эксклюзивную информацию.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.position}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь со мной</h2>
          <p className="text-xl text-gray-600 mb-12">
            Готова обсудить ваш проект или предложение
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "Mail",
                title: "Email",
                value: "anna.petrova@email.com",
                link: "mailto:anna.petrova@email.com",
              },
              {
                icon: "Phone",
                title: "Телефон",
                value: "+7 (999) 123-45-67",
                link: "tel:+79991234567",
              },
              {
                icon: "MapPin",
                title: "Местоположение",
                value: "Москва, Россия",
                link: "#",
              },
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-bold mb-2">{contact.title}</h3>
                <a
                  href={contact.link}
                  className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Написать письмо
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold gradient-text mb-2">
                Анна Петрова
              </div>
              <p className="text-gray-400">Журналист-корреспондент</p>
            </div>
            <div className="flex gap-6">
              {[
                { icon: "Linkedin", link: "#" },
                { icon: "Twitter", link: "#" },
                { icon: "Instagram", link: "#" },
                { icon: "Facebook", link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B6B] transition-colors"
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Анна Петрова. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
