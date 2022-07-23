import markdownService from 'markdown-service';
import ContainerStatic, {
  type ContainerStaticProps,
} from '../../containers/static';

export default function PageCodeOfConduct({
  content,
  head,
}: ContainerStaticProps) {
  return <ContainerStatic content={content} head={head} />;
}

export async function getStaticProps() {
  const { content } = await markdownService(
    'https://raw.githubusercontent.com/MurciaDev/CODE_OF_CONDUCT/main/README.md'
  );

  const head = { title: 'Código de conducta', description: 'lorem ipsum' };

  return {
    props: { head, content },
  };
}
