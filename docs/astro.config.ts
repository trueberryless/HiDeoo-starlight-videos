import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightVideos from 'starlight-videos'

export default defineConfig({
  integrations: [
    starlight({
      description: 'Starlight plugin to quickly and easily enhance your documentation with video guides and courses.',
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-videos/edit/main/docs/',
      },
      plugins: [starlightVideos()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started'],
        },
        {
          label: 'Guides',
          items: ['guides/actions', 'guides/i18n'],
        },
        {
          label: 'Content',
          items: [
            'content/video',
            'content/videos',
            'content/collection-video',
            'content/collection',
            'content/collections',
          ],
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
        {
          label: 'Resources',
          items: [{ label: 'Plugins and Tools', slug: 'resources/starlight' }],
        },
        {
          label: 'Demo',
          items: ['demo/video-guides', 'demo/video-courses'],
        },
      ],
      social: {
        blueSky: 'https://bsky.app/profile/hideoo.dev',
        github: 'https://github.com/HiDeoo/starlight-videos',
      },
      title: 'Starlight Videos',
    }),
  ],
  site: 'https://starlight-videos.netlify.app/',
})