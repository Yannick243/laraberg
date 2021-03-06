import 'babel-polyfill'

import './../scss/laraberg.scss'

// Gutenberg imports
import './gutenberg/settings'
import getContent from './lib/get-content'
import initGutenberg from './gutenberg/init-gutenberg'
import { registerBlock, registerCategory } from './lib/custom-blocks'

const Laraberg = {
  initGutenberg: initGutenberg,
  getContent: getContent,
  editor: null,
  registerCategory: registerCategory,
  registerBlock: registerBlock
}

window.Laraberg = Laraberg

export default Laraberg
