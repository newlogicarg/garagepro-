export default function Home() {
  return (
    <div style={{
      fontFamily: ' system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f8fafc',
      color: '#1e293b',
    }}>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: 'bold',
          marginBottom: '16px',
          textShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
          Гаражные ворота <br />
          <span style={{ color: '#ec4899' }}>под ключ</span>
        </h1>
        <p style={{
          fontSize: '1.4rem',
          opacity: 0.9,
          marginBottom: '32px',
          maxWidth: '700px',
          margin: '0 auto 32px'
        }}>
          Установка за 24 часа • Гарантия 5 лет • Бесплатный выезд замерщика
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <a
            href="/login"
            style={{
              backgroundColor: 'white',
              color: '#1e40af',
              padding: '14px 32px',
              borderRadius: '12px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Заказать замер
          </a>
          <a
            href="#catalog"
            style={{
              border: '2px solid white',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '1.1rem',
              textDecoration: 'none',
              transition: 'background 0.3s',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Каталог
          </a>
        </div>
      </section>

      {/* Преимущества */}
      <section style={{
        padding: '80px 20px',
        textAlign: 'center',
        backgroundColor: 'white'
      }}>
        <h2 style={{
          fontSize: '2.2rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '40px'
        }}>
          Почему нас выбирают?
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { icon: "🔧", title: "Установка за 24 часа", desc: "Быстро, чисто, без задержек" },
            { icon: "🛡️", title: "Гарантия 5 лет", desc: "Качество, которому можно доверять" },
            { icon: "📞", title: "Бесплатный выезд", desc: "Замер — 0 ₽, даже если не закажете" }
          ].map((item, i) => (
            <div key={i} style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '16px',
              width: '300px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '16px'
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '8px'
              }}>
                {item.title}
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Каталог */}
      <section id="catalog" style={{
        padding: '80px 20px',
        backgroundColor: '#f1f5f9',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.2rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '40px'
        }}>
          Типы ворот
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { title: "Секционные", price: "от 19 990 ₽", img: "https://via.placeholder.com/300x200/1e40af/ffffff?text=Секционные" },
            { title: "Распашные", price: "от 24 990 ₽", img: "https://via.placeholder.com/300x200/7c3aed/ffffff?text=Распашные" },
            { title: "Рулонные", price: "от 29 990 ₽", img: "https://via.placeholder.com/300x200/ec4899/ffffff?text=Рулонные" }
          ].map((door, i) => (
            <div key={i} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              width: '300px',
              boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-8px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <img
                src={door.img}
                alt={door.title}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                padding: '24px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1e293b'
                }}>
                  {door.title}
                </h3>
                <p style={{
                  color: '#1e40af',
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  marginTop: '12px'
                }}>
                  {door.price}
                </p>
                <button style={{
                  marginTop: '20px',
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#1e40af',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1e3a8a'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#1e40af'}>
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Форма */}
      <section style={{
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '50px 30px',
          borderRadius: '20px',
          maxWidth: '600px',
          margin: '0 auto',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '16px'
          }}>
            Оставьте заявку
          </h2>
          <p style={{
            color: '#64748b',
            marginBottom: '30px',
            fontSize: '1.1rem'
          }}>
            Замерщик приедет сегодня — бесплатно
          </p>
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <input
              type="text"
              placeholder="Ваше имя"
              style={{
                padding: '14px',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <input
              type="tel"
              placeholder="+7 (999) 999-99-99"
              style={{
                padding: '14px',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px',
                backgroundColor: '#ec4899',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#d946ef'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ec4899'}
            >
              Получить консультацию
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        textAlign: 'center',
        color: '#64748b',
        backgroundColor: '#1e293b',
        color: 'white'
      }}>
        <p>© 2025 GaragePro. Все права защищены.</p>
      </footer>
    </div>
  );
}
