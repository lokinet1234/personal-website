import { notFound } from 'next/navigation';
import { formatDate, getReadingTime } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Section, SectionDefault } from '@/components/ui/Section';
import { H1, H2, H3, P, Lead, Small, Muted } from '@/components/ui/Typography';

// This would typically come from a CMS or markdown files
async function getPost(slug: string) {
  // In a real app, this would fetch from your CMS
  const posts = [
    {
      slug: 'designing-with-swiss-precision',
      title: 'Designing with Swiss Precision',
      excerpt: 'Exploring the principles of Swiss design and how to apply them to modern web development.',
      content: `
        ## The Essence of Swiss Design
        
        Swiss design, also known as the International Typographic Style, emphasizes cleanliness, readability, and objectivity. It emerged in Switzerland in the 1950s and has since become a cornerstone of modern graphic design.
        
        ### Key Principles
        
        - **Grid Systems**: The use of mathematical grids to organize content
        - **Typography**: Clean, sans-serif typefaces like Helvetica
        - **Asymmetry**: Dynamic layouts that maintain visual balance
        - **Whitespace**: Generous use of negative space
        - **Objectivity**: Clear, factual presentation of information
        
        ## Applying Swiss Design to Web
        
        Modern web development can benefit greatly from these principles. Here's how:
        
        ### 1. Typography
        
        Use a clean, readable typeface with a strong hierarchy. The Typography component we created makes this easy.
        
        ### 2. Layout
        
        Our Section and Container components help maintain consistent spacing and alignment.
        
        ### 3. Color
        
        Stick to a monochromatic palette with high contrast for readability.
      `,
      date: '2025-07-24',
      readingTime: '4 min read',
      image: '/images/swiss-design.jpg',
    },
  ];

  return posts.find((post) => post.slug === slug);
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  // Parse markdown content (in a real app, you'd use a markdown parser)
  const renderContent = (content: string) => {
    // Simple markdown parser for demonstration
    return content.split('\n').map((line, i) => {
      if (line.startsWith('### ')) {
        return <H3 key={i} className="mt-8 mb-4">{line.substring(4)}</H3>;
      } else if (line.startsWith('## ')) {
        return <H2 key={i} className="mt-12 mb-6">{line.substring(3)}</H2>;
      } else if (line.startsWith('- ')) {
        return (
          <li key={i} className="relative pl-4 mb-2">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-current rounded-full" />
            {line.substring(2)}
          </li>
        );
      } else if (line.trim() === '') {
        return <br key={i} className="my-4" />;
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return <strong key={i} className="font-medium">{line.slice(2, -2)}</strong>;
      } else {
        return <P key={i} className="mb-6">{line}</P>;
      }
    });
  };

  return (
    <SectionDefault isBorderless hasParallax>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <Small className="block mb-4">
            {formatDate(post.date)} · {post.readingTime}
          </Small>
          <H1 className="mb-6">{post.title}</H1>
          <Lead className="text-xl">{post.excerpt}</Lead>
          
          {post.image && (
            <div className="mt-8 mb-12 overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </header>

        <div className="prose dark:prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-900">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800" />
            <div>
              <P className="font-medium">Mike Castillo</P>
              <Muted>Designer & Developer</Muted>
            </div>
          </div>
        </footer>
      </article>
    </SectionDefault>
  );
}

// Generate static params for SSG
export async function generateStaticParams() {
  // In a real app, this would fetch all post slugs
  return [
    { slug: 'designing-with-swiss-precision' },
    // Add other post slugs here
  ];
}

// Set revalidation time (in seconds)
export const revalidate = 3600; // 1 hour
