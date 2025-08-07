export default function Home() {
  const doorTypes = [
    {
      title: "Секционные",
      desc: "Тихие, компактные, с автоматикой",
      price: "от 19 990 ₽",
      img: "https://via.placeholder.com/300x200?text=Секционные+ворота"
    },
    {
      title: "Распашные",
      desc: "Классика — надёжные и прочные",
      price: "от 24 990 ₽",
      img: "https://via.placeholder.com/300x200?text=Распашные+ворота"
    },
    {
      title: "Рулонные",
      desc: "Минимум места, максимальная защита",
      price: "от 29 990 ₽",
      img: "https://via.placeholder.com/300x200?text=Рулонные+ворота"
    }
  ];

  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Гаражные ворота <br />
          <span className="text-accent">под ключ</span>
        </h1>
        <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
          Установка за 24 часа • Гарантия 5 лет • Бесплатный выезд замерщика
        </p>
        <div className="space-x-6">
          <a
            href="/login"
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
          >
            Заказать замер
          </a>
          <a
            href="#catalog"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition"
          >
            Каталог
          </a>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Почему нас выбирают?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: "🔧", title: "Установка за 24 часа", desc: "Быстро, чисто, без задержек" },
              { icon: "🛡️", title: "Гарантия 5 лет", desc: "Качество, которому можно доверять" },
              { icon: "📞", title: "Бесплатный выезд", desc: "Замер — 0 ₽, даже если не закажете" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Каталог */}
      <section id="catalog" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Типы ворот</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doorTypes.map((door, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
                <img src={door.img} alt={door.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">{door.title}</h3>
                  <p className="text-gray-600 mt-2">{door.desc}</p>
                  <p className="text-primary-dark font-bold text-xl mt-4">{door.price}</p>
                  <button className="mt-6 w-full bg-primary text-white py-3 rounded-xl hover:bg-primary-dark transition">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Оставьте заявку</h2>
          <p className="text-gray-600 mb-8">Замерщик приедет сегодня — бесплатно</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Имя"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="+7 (999) 999-99-99"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-xl font-semibold hover:bg-[#d946ef] transition"
            >
              Получить консультацию
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
