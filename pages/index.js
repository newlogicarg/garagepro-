export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', color: '#1a365d' }}>
        GaragePro
      </h1>
      <p style={{ fontSize: '1.2em', color: '#4a5568', margin: '20px 0' }}>
        Гаражные ворота под ключ
      </p>
      <p>
        <a
          href="/login"
          style={{
            backgroundColor: '#1a365d',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '20px',
          }}
        >
          Войти в кабинет
        </a>
      </p>
    </div>
  );
}
