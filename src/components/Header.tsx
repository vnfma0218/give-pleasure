import Link from 'next/link';
import { DiCode } from 'react-icons/di';

interface IHeaderProps {}

export default function Header() {
  return (
    <header id="header" className="relative w-full mx-auto bg-orange-400 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <div className="flex justify-between items-center mx-8 py-2">
            <Link className="mr-7" href="/">
              <DiCode size={45} />
            </Link>

            <ul className="nav-list flex">
              <Link className="mr-7" href="/blog">
                <span className="text-sm">Blog</span>
              </Link>
              <Link href="/about">
                <span className="text-sm">About</span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
