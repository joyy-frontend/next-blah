import Head from 'next/head';

interface Props {
  title: string;
  children: React.ReactNode;
}

// 각페이지를 구성할때 사용하게 됨.
export function ServiceLayout({ title = 'blah x2', children }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
}
