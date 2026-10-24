import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import post from './schemas/post'
import bike from './schemas/bike'
import seller from './schemas/seller'
import siteSettings from './schemas/siteSettings'
import event from './schemas/event'
import brand from './schemas/brand' 
import marketplace from './schemas/marketplace' 
import bikeFittingTips from './schemas/bikeFittingTips'

export default defineConfig({
  name: 'default',
  title: 'AJGR CC',
  projectId: '7aulmgx4',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [post, bike, seller, siteSettings, event, brand, marketplace, bikeFittingTips],
  },
})