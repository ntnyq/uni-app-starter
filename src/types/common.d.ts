/**
 * @file Common types
 */

/**
 * Shortcut type
 */
export type IShortCut<T = string> = Record<string, T>

export interface IBase {
  id: string
  createTime: number
  updateTime: number
}
