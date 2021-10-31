import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashvoardState } from './main/analysis/type'

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashvoardState
}

export type IStoreType = IRootState & IRootWithModule
