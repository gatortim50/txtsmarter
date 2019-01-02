import ConfigStore from './config.store'
import AuthStore from './AuthStore'

const config = new ConfigStore()
const auth = AuthStore

export default {config, auth}