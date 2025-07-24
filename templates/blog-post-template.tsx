// TEMPLATE: How to create a new blog post
// 1. Create a new file in /app/blog/[slug]/page.tsx
// 2. Copy the content below and replace the placeholders
// 3. Update the metadata and content as needed

import { formatDate, getReadingTime } from '@/lib/utils';
import { SectionDefault } from '@/components/ui/Section';
import { H1, H2, H3, P, Lead, Small, Muted } from '@/components/ui/Typography';

// ============================================================================
// 1. Update the post metadata and content
// ============================================================================
const post = {
  slug: 'your-post-slug', // URL-friendly slug (e.g., 'my-awesome-post')
  title: 'Your Blog Post Title',
  excerpt: 'A short, engaging summary of your post.',
  date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
  image: '/images/your-image.jpg', // Optional: path to your header image
  // The content uses a simple markdown-like syntax
  content: `
    ## Introduction
    
    Start with an engaging introduction that hooks the reader. Keep paragraphs short and focused.
    
    ## Main Points
    
    Break your content into clear sections with descriptive headings.
    
    ### Subsection
    
    - Use bullet points for lists
    - They improve readability
    - And help organize information
    
    ## Code Examples
    
    Use backticks for inline code: \`const example = "Hello, world!"\`
    
    ## Conclusion
    
    Wrap up with a strong conclusion and call to action.
  `,
};

// ============================================================================
// 2. The component code (usually doesn't need modification)
// ============================================================================
export default function BlogPost() {
  // Parse the content into React elements
  const renderContent = (content: string) => {
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
            {formatDate(post.date)} · {getReadingTime(post.content)}
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

// ============================================================================
// 3. Update the static generation (if needed)
// ============================================================================
// Uncomment and update this if you're using static site generation
/*
export async function generateStaticParams() {
  return [
    { slug: 'your-post-slug' },
    // Add other post slugs here
  ];
}
*/

// ============================================================================
// 4. Set revalidation time (if using ISR)
// ============================================================================
// export const revalidate = 3600; // 1 hour