import markdownService from 'markdown-service';
import ContainerStatic, {
  type IContainerStatic,
} from '../../containers/static';

export default function PageCodeOfConduct({ content, head }: IContainerStatic) {
  return <ContainerStatic content={content} head={head} />;
}

export async function getStaticProps() {
  const { content } = await markdownService(
    'http://localhost:3000/texts/code-of-conduct.md'
  );

  const head = { title: 'Código de conducta', description: 'lorem ipsum' };

  return {
    props: { head, content },
  };
}
