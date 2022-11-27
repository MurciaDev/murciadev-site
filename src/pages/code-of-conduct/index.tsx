// @ts-ignore
import markdownService from 'markdown-service';
import config from '@murciadev/config';
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
  const markdownUrl = `${config.GITHUB.REPOSITORY_RAW_URL}/CODE_OF_CONDUCT/main/README.md`;
  const { content } = await markdownService(markdownUrl);

  const head = { title: 'Código de conducta', description: 'lorem ipsum' };

  return {
    props: { head, content },
  };
}
