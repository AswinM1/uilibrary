
const withNextra = nextra({
  // ... Add Nextra-specific options here
})
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
import nextra from 'nextra'
 
// Set up Nextra with its configuration

 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  nextConfig
})


