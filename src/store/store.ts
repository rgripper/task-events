import { init, RematchStore, Action } from '@rematch/core'
import * as models from 'root/store/models'

export const store: RematchStore<typeof models, Action<any, any>> = init({
  models,
})

