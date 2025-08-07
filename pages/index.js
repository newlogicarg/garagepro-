export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', color: '#1a365d' }}>
        GaragePro
      </h1>
      <p style={{ fontSize: '1.2em', color: '#4a5568', margin: '20px 0' }}>
        Гаражные ворота под ключ
      </p>
      <p style={{ color: '#718096', fontSize: '0.9em' }}>
        Установка за 1 день • Гарантия 5 лет • Бесплатный замер
      </p>
      <p>
        <a
          href="/login"
          style={{
            backgroundColor: '#1a365d',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '20px',
            fontWeight: 'bold',
          }}
        >
          Войти в кабинет
        </a>
      </p>
    </div>
  );
}
