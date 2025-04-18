import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownBlog = ({ path }: { path: string }) => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  }, [path])

  console.log(markdown)

  const sample = `
# Heading 1

## Heading 2

- List item
- List item

**Bold**

[Link](https://example.com)
`

  return (
    <div className="prose max-w-none dark:prose-invert px-4">
      <ReactMarkdown>{sample}</ReactMarkdown>
    </div>
  )
}

export default MarkdownBlog
