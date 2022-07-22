import styles from './main.module.css';
import Link from 'next/link';

interface LayoutMainProps {
  children: React.ReactNode;
}

export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <Link href="/" passHref>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="321" height="45">
                <path
                  fill="#000"
                  d="m126.2 20.9 8.6 14.2 8.6-14.2 1.9 17h6.3L147.2 6l-12.4 19.6L122.4 6 118 38h6.3l1.9-17.1Zm35.2 9.2V17.9h-5.6v12.8c0 2.4.5 4.2 1.7 5.6 1.1 1.4 2.9 2 5.2 2 1.4 0 2.5-.2 3.5-.8a7 7 0 0 0 2.3-2.6v3h5.5V18h-5.5v12.2a4 4 0 0 1-.5 2.2c-.3.6-.7 1-1.3 1.4a4 4 0 0 1-2 .5c-1.2 0-2-.4-2.5-1-.5-.8-.8-1.8-.8-3.1ZM184.8 18h-5.4v20h5.4V18Zm5.7 5.8L193 19c-.4-.5-1-.9-1.6-1.1a4.7 4.7 0 0 0-5 .7 7 7 0 0 0-2.3 3 9.5 9.5 0 0 0-.9 4.2l1.6 1.5c0-1 0-1.7.3-2.4s.6-1.2 1-1.6a3.2 3.2 0 0 1 3.2-.3l1.2.8Zm8.9 4.2c0-1.2.2-2.2.7-3a5.5 5.5 0 0 1 4.9-2.8 7.5 7.5 0 0 1 4.6 1.4c.6.5 1.1 1 1.5 1.7v-5.8c-.7-.6-1.6-1-2.7-1.4-1-.4-2.3-.6-3.7-.6-2 0-4 .4-5.6 1.3-1.7.9-3 2-3.9 3.7a9.5 9.5 0 0 0-1.4 5.4c0 2 .5 4 1.4 5.5a10 10 0 0 0 3.9 3.6c1.6 1 3.5 1.3 5.6 1.3 1.4 0 2.7-.1 3.7-.5a7 7 0 0 0 2.7-1.5v-5.8c-.4.7-.8 1.2-1.5 1.7-.6.5-1.3.9-2.1 1.2-.8.2-1.6.3-2.5.3-1 0-2-.2-2.8-.7a5.6 5.6 0 0 1-2-2 6 6 0 0 1-.8-3Zm16.3-17.8a3 3 0 0 0 1 2.3c.6.6 1.4.9 2.3.9.9 0 1.6-.3 2.2-1a3 3 0 0 0 1-2.2c0-1-.3-1.7-1-2.2-.6-.7-1.3-1-2.2-1-1 0-1.7.3-2.4 1-.6.5-1 1.3-1 2.2Zm.6 7.7v20h5.3V18h-5.3Zm15 13.8c0-.6.1-1 .4-1.4.2-.4.6-.7 1.1-1 .6-.2 1.3-.3 2.1-.3 1 0 2 .2 3 .4a8 8 0 0 1 2.5 1.4V28a10 10 0 0 0-3.8-2c-.9-.3-2-.4-3.2-.4-2.4 0-4.3.6-5.6 1.7a5.7 5.7 0 0 0-2 4.6c0 1.4.3 2.5 1 3.5.6 1 1.4 1.6 2.4 2.1s2.2.7 3.4.7a9 9 0 0 0 3.4-.6c1.1-.4 2-1 2.7-2 .7-.8 1-1.9 1-3.2L239 30c0 1-.2 1.8-.6 2.5-.4.7-1 1.2-1.6 1.6a5 5 0 0 1-4 .2l-1.1-1c-.3-.4-.4-1-.4-1.5Zm-2.1-8.1a9.6 9.6 0 0 1 3.4-1.5 10.7 10.7 0 0 1 4.2-.1l1.2.5c.4.3.6.6.8 1 .2.4.2.9.2 1.4v13h5.3V23.8c0-1.4-.3-2.5-1-3.5-.8-1-1.8-1.6-3.1-2.1s-2.8-.8-4.4-.8c-1.9 0-3.5.3-5 .8-1.4.5-2.7 1-3.7 1.6l2 3.8ZM250 7.5V38h6.1V7.5h-6.2ZM260 38c3 0 5.8-.6 8.1-1.9 2.3-1.2 4.2-3 5.5-5.2 1.2-2.3 1.9-5 1.9-8 0-3.2-.7-5.9-2-8.1-1.2-2.3-3-4-5.4-5.3-2.3-1.3-5-1.9-8.1-1.9h-6.2v5.7h6c1.3 0 2.5.2 3.7.5a7.8 7.8 0 0 1 5 4.7 12 12 0 0 1 0 8.7 7.8 7.8 0 0 1-5 4.6c-1.2.4-2.4.6-3.7.6h-6V38h6.2Zm28.8.3c2.4 0 4.4-.4 6-1.3 1.7-1 3-2.4 4.1-4.3l-4.8-1.5c-.5 1-1.3 1.7-2.1 2.2-.9.4-2 .7-3.1.7-1 0-2-.3-2.8-.8a4.6 4.6 0 0 1-1.7-2.1c-.4-1-.5-2-.5-3.4s.2-2.5.5-3.5c.4-1 1-1.6 1.7-2.1s1.6-.7 2.7-.7a4 4 0 0 1 3.8 2.3c.3.6.5 1.5.5 2.4 0 .2 0 .5-.2.8 0 .3-.1.5-.3.7l1.5-2h-12.6v3.5h17.4v-1.5c0-2.2-.3-4-1.1-5.5s-2-2.7-3.5-3.5c-1.5-.8-3.3-1.2-5.4-1.2-2.2 0-4 .4-5.6 1.3a9 9 0 0 0-3.7 3.6c-.8 1.5-1.2 3.4-1.2 5.5s.4 4 1.2 5.5a9.3 9.3 0 0 0 3.7 3.6 10 10 0 0 0 5.5 1.3ZM299.7 18l10.7 22L321 18h-5.9l-4.7 12-4.8-12h-5.9ZM12.6 16.6 27 11.4v-9L0 13.8V20l26.9 11.2v-9l-14.3-5.5ZM54.3 0 31 45h9.2L63 0h-8.7Zm27.1 27.6L67 32.8v9l27-11.3v-6.1L67.1 13v9l14.3 5.5Z"
                />
              </svg>
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </>
  );
}
