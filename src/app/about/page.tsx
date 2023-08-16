import styles from './appPage.module.css';

function About() {
  return (
    <section>
      <h1 className="text-xl font-bold mb-3">About Next.js</h1>
      <h3 className="text-left mb-3">
        Next.js - это фреймворк для создания веб-приложений на основе React, который предлагает
        множество преимуществ, таких как:{' '}
      </h3>
      <ul className="text-left">
        <li className={styles.li}>
          Предварительный рендеринг страниц на стороне сервера (SSR) или статическая генерация
          (SSG), что улучшает производительность, SEO и пользовательский опыт.{' '}
        </li>
        <li className={styles.li}>
          Автоматическое разделение кода для оптимизации загрузки страниц и уменьшения размера
          бандлов.
        </li>
        <li className={styles.li}>
          Простая и гибкая маршрутизация страниц с поддержкой динамических параметров и вложенных
          маршрутов.
        </li>
        <li className={styles.li}>
          Встроенная поддержка CSS-модулей, Sass, Tailwind CSS и других решений для стилизации
          компонентов.
        </li>
        <li className={styles.li}>
          Возможность создавать API-маршруты и конечные точки для обработки запросов на сервере или
          клиенте.
        </li>
        <li className={styles.li}>
          Поддержка TypeScript, JSX и других современных технологий для разработки на JavaScript.
          Легкость настройки и деплоя с помощью Vercel или других платформ.
        </li>
      </ul>
      <h1>
        <b>Выберите подменю</b>
      </h1>
    </section>
  );
}

export default About;
