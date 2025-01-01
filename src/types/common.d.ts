/**
 * @file Common types
 */

/**
 * Shortcut type
 */
export interface IBase {
  createTime: number
  id: string
  updateTime: number
}

export type IShortCut<T = string> = Record<string, T>
