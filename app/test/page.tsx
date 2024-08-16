'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TestPage = () => {
    const pathname = usePathname()
    return ( 
        <nav>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
          Home
        </Link>
   <br />
        <Link
          className={`link ${pathname === '/test' ? 'active' : ''}`}
          href="/test"
        >
          Test
        </Link>
      </nav>
     );
}
 
export default TestPage;