export default function Home() {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#0f172a',
      color: '#e2e8f0',
      overflowX: 'hidden'
    }}>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Фоновые частицы (имитация) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `,
          zIndex: 1
        }}></div>

        <div style={{ position: 'relative', zIndex: 2, padding: '20px' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #3b82f6, #ec4899, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 0 16px 0'
          }}>
            DUBAI GATE PRO
          </h1>
          <p style={{
            fontSize: '1.4rem',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            Установка и обслуживание гаражных ворот в Дубае <br />
            <strong>Выезд за 1 час • Гарантия 5 лет • 24/7 поддержка</strong>
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <a
              href="#contact"
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '16px 36px',
                borderRadius: '12px',
                fontWeight: 'bold',
                textDecoration: 'none',
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 15px 30px -5px rgba(59, 130, 246, 0.6)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.4)';
              }}
            >
              Вызвать мастера
            </a>
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #3b82f6',
                color: 'white',
                padding: '16px 36px',
                borderRadius: '12px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section style={{
        padding: '100px 20px',
        backgroundColor: '#111827',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '60px',
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Наши услуги
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
            { title: "Установка ворот", desc: "Профессиональный монтаж за 1 день" },
            { title: "Ремонт и обслуживание", desc: "Регулярное ТО и срочный ремонт" },
            { title: "Автоматика", desc: "Умное управление через пульт и телефон" },
            { title: "Шумоизоляция", desc: "Тихая работа — как в пентхаусе" }
          ].map((service, i) => (
            <div key={i} style={{
              backgroundColor: '#1f2937',
              padding: '32px',
              borderRadius: '16px',
              width: '280px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-6px)';
              e.target.style.boxShadow = '0 10px 30px -5px rgba(59, 130, 246, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '12px'
              }}>
                {service.title}
              </h3>
              <p style={{
                color: '#94a3b8',
                lineHeight: '1.6'
              }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Каталог ворот */}
      <section style={{
        padding: '100px 20px',
        backgroundColor: '#0f172a',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '60px',
          background: 'linear-gradient(90deg, #ec4899, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
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
            { name: "Секционные", price: "от AED 4,990" },
            { name: "Распашные", price: "от AED 6,500" },
            { name: "Рулонные", price: "от AED 7,200" },
            { name: "Подъёмные", price: "от AED 5,800" }
          ].map((door, i) => (
            <div key={i} style={{
              backgroundColor: '#1e293b',
              borderRadius: '16px',
              overflow: 'hidden',
              width: '280px',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-8px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>

              <div style={{
                height: '180px',
                backgroundColor: '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: '#cbd5e1'
              }}>
                🚗
              </div>

              <div style={{
                padding: '24px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#ffffff'
                }}>
                  {door.name}
                </h3>
                <p style={{
                  color: '#3b82f6',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  marginTop: '12px'
                }}>
                  {door.price}
                </p>
                <button style={{
                  marginTop: '20px',
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#ec4899',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#d946ef'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#ec4899'}>
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" style={{
        padding: '100px 20px',
        backgroundColor: '#111827',
        textAlign: 'center'
      }}>
        <div style={{
          backgroundColor: '#1f2937',
          padding: '60px 30px',
          borderRadius: '20px',
          maxWidth: '700px',
          margin: '0 auto',
          border: '1px solid rgba(59, 130, 246, 0.3)'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: 'white'
          }}>
            Свяжитесь с нами
          </h2>
          <p style={{
            color: '#94a3b8',
            marginBottom: '30px'
          }}>
            Оставьте заявку — мастер приедет в течение часа
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
                padding: '16px',
                backgroundColor: '#334155',
                border: '1px solid #475569',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
            <input
              type="tel"
              placeholder="+971 50 000 0000"
              style={{
                padding: '16px',
                backgroundColor: '#334155',
                border: '1px solid #475569',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
            <textarea
              placeholder="Сообщение"
              rows="4"
              style={{
                padding: '16px',
                backgroundColor: '#334155',
                border: '1px solid #475569',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: '16px',
                backgroundColor: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Отправить заявку
            </button>
          </form>
          <p style={{
            marginTop: '20px',
            color: '#94a3b8',
            fontSize: '0.9rem'
          }}>
            или напишите в WhatsApp:{" "}
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              style={{
                color: '#3b82f6',
                textDecoration: 'underline'
              }}
            >
              +971 50 000 0000
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        backgroundColor: '#0f172a',
        textAlign: 'center',
        color: '#64748b',
        borderTop: '1px solid #1e293b'
      }}>
        <p>© 2025 DUBAI GATE PRO. Все права защищены.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>
          Лицензия № DXB-12345 • Дубай, ОАЭ
        </p>
      </footer>
    </div>
  );
}
