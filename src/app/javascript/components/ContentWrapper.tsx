'use client';
import Link from 'next/link';

export default function ContentWrapper() {
  return (
    <div className="p-8">
      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Welcome to JavaScript Learning Path</h2>
          <p className="mb-4">
            This is your comprehensive guide to mastering JavaScript, divided into three stages:
            <span className="font-medium text-blue-600"> Basic</span>,
            <span className="font-medium text-blue-600"> Intermediate</span>, and
            <span className="font-medium text-blue-600"> Advanced</span>.
          </p>
          <p className="mb-4">
            Whether youre just starting or preparing for interviews, this roadmap will help you
            systematically learn JavaScript concepts.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic JavaScript Concepts</h2>
          <p className="mb-4">Start your journey with these fundamental concepts:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Variables and Data Types</li>
            <li>Operators and Expressions</li>
            <li>Control Structures (if-else, loops)</li>
            <li>Functions and Scope</li>
            <li>Arrays and Objects</li>
            <li>DOM Manipulation Basics</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 mt-6">Recommended Resources</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link
                href="https://www.w3schools.com/js/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                W3Schools JavaScript Tutorial
              </Link>
            </li>
            <li>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                MDN JavaScript Docs
              </Link>
            </li>
            <li>হাতেকলমে জাভাস্ক্রিপ্ট (Hands-on JavaScript - Bengali Resource)</li>
            <li>JavaScript.info - The Modern JavaScript Tutorial</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Intermediate JavaScript Concepts</h2>
          <p className="mb-4">Build on your basics with these intermediate topics:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Closures and Higher-Order Functions</li>
            <li>Asynchronous JavaScript (Callbacks, Promises, Async/Await)</li>
            <li>ES6+ Features (Arrow functions, Destructuring, etc.)</li>
            <li>Error Handling</li>
            <li>Working with APIs (Fetch, Axios)</li>
            <li>Local Storage and Session Storage</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 mt-6">Practice Projects</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Weather App using API</li>
            <li>Todo List with Local Storage</li>
            <li>Simple Calculator</li>
            <li>Quiz Application</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Advanced JavaScript Concepts</h2>
          <p className="mb-4">Master these advanced topics to become a JavaScript expert:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Design Patterns in JavaScript</li>
            <li>Performance Optimization</li>
            <li>Memory Management</li>
            <li>Web Workers</li>
            <li>Advanced DOM Manipulation</li>
            <li>JavaScript Engines and Runtime</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 mt-6">Advanced Resources</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>You Dont Know JS (Book Series)</li>
            <li>JavaScript: The Good Parts (Book)</li>
            <li>Advanced JavaScript Concepts (YouTube Playlist)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">JavaScript Learning Roadmap</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li className="font-medium">Master the Basics (2-4 weeks)</li>
            <li className="font-medium">Build Simple Projects (1-2 months)</li>
            <li className="font-medium">Learn Intermediate Concepts (2-3 months)</li>
            <li className="font-medium">Work on Complex Projects (3-6 months)</li>
            <li className="font-medium">Study Advanced Topics (Ongoing)</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Interview Preparation</h2>
          <p className="mb-4">Prepare for JavaScript interviews with these resources:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link
                href="https://github.com/sudheerj/javascript-interview-questions"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                JavaScript Interview Questions (GitHub)
              </Link>
            </li>
            <li>
              <Link
                href="https://www.frontendinterviewhandbook.com/javascript-questions/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Frontend Interview Handbook
              </Link>
            </li>
            <li>Common Algorithm Challenges</li>
            <li>System Design for Frontend Engineers</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 mt-6">Interview Tips</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Practice explaining concepts out loud</li>
            <li>Understand this keyword thoroughly</li>
            <li>Master asynchronous JavaScript</li>
            <li>Be prepared for live coding challenges</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Final Advice</h2>
          <p className="mb-4">
            Remember that learning JavaScript is a journey. Dont rush through concepts - take time
            to understand each topic thoroughly before moving to the next.
          </p>
          <p className="mb-4">
            <span className="font-medium">Key recommendation:</span> The best way to learn is by
            building projects. Start small and gradually increase complexity as you become more
            comfortable.
          </p>
          <p>Happy coding! 🚀</p>
        </section>
      </div>
    </div>
  );
}
