export default function Login() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', textAlign: 'center' }}>
      <h1>Вход в кабинет</h1>
      <form style={{ display: 'inline-block', textAlign: 'left', margin: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input type="email" style={{ padding: '8px', width: '250px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Пароль:</label><br />
          <input type="password" style={{ padding: '8px', width: '250px' }} />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#1a365d',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            marginTop: '10px',
            cursor: 'pointer',
          }}
        >
          Войти
        </button>
      </form>
      <p>
        <a href="/">← На главную</a>
      </p>
    </div>
  );
}
