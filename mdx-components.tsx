import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        a: ({ href, children }) => (
            <a href={href} style={{ color: '#fff' }}>{children}</a>
        ),
        p: ({ children }) => (
            <p style={{ margin: '2rem 0', padding: '0 2rem' }}>{children}</p>
        ),
        ...components,
    }
}