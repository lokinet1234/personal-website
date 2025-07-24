/*
🌟 SUPER EASY BLOG POST MAKER 🌟

TO MAKE A NEW BLOG POST:
1. Copy this WHOLE file
2. Create a new file at: /app/blog/YOUR-POST-NAME/page.tsx
3. Paste and follow the EASY STEPS below!
*/

// ======================
// 🎨 EASY STEP 1: CHANGE THESE LINES
// ======================
// Just update the words inside the quotes ("") to make it yours!
const POST_TITLE = "My Awesome Blog Post";
const POST_DATE = "2025-07-24"; // Use today's date: YYYY-MM-DD
const POST_IMAGE = "/images/your-picture.jpg"; // Or leave as "" for no image

// ======================
// 📝 EASY STEP 2: WRITE YOUR POST
// ======================
// Just type your blog post below, between the ` marks
// Use # for big titles, ## for smaller titles, and - for bullet points
const BLOG_CONTENT = `
# Welcome to My First Blog Post!

Hi! This is my first blog post. I'm so excited to share my thoughts with you!

## My Favorite Things
- Pizza 🍕
- Video games 🎮
- Hanging out with friends 👯

## My Day Today
Today I learned how to make a blog! It was super fun and easier than I thought.

# The End!
Thanks for reading my blog post! 😊
`;

// ======================
// 🚀 DON'T TOUCH BELOW HERE! 
// (This part makes your blog look awesome!)
// ======================
import { formatDate } from '@/lib/utils';
import { SectionDefault } from '@/components/ui/Section';
import { H1, H2, H3, P, Small } from '@/components/ui/Typography';

export default function BlogPost() {
  // This part makes your text look nice
  const makeItPretty = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('# ')) {
        return <H1 key={i} className="text-4xl mb-6">{line.substring(2)}</H1>;
      } else if (line.startsWith('## ')) {
        return <H2 key={i} className="text-2xl mt-8 mb-4">{line.substring(3)}</H2>;
      } else if (line.startsWith('### ')) {
        return <H3 key={i} className="text-xl mt-6 mb-3">{line.substring(4)}</H3>;
      } else if (line.startsWith('- ')) {
        return (
          <li key={i} className="flex items-start mb-2">
            <span className="mr-2">•</span>
            <span>{line.substring(2)}</span>
          </li>
        );
      } else if (line.trim() === '') {
        return <br key={i} className="my-4" />;
      } else {
        return <P key={i} className="mb-4">{line}</P>;
      }
    });
  };

  return (
    <SectionDefault>
      <article className="max-w-3xl mx-auto p-4">
        <header className="mb-8">
          <Small className="block mb-2">{formatDate(POST_DATE)}</Small>
          <H1 className="text-5xl mb-6">{POST_TITLE}</H1>
          
          {POST_IMAGE && (
            <div className="my-8 overflow-hidden rounded-lg">
              <img
                src={POST_IMAGE}
                alt={POST_TITLE}
                className="w-full h-auto"
              />
            </div>
          )}
        </header>

        <div className="text-lg leading-relaxed">
          {makeItPretty(BLOG_CONTENT)}
        </div>

        <footer className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div>
              <P className="font-medium">Your Name</P>
              <Small>Blog Author</Small>
            </div>
          </div>
        </footer>
      </article>
    </SectionDefault>
  );
}
