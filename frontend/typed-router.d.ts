/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/artisans/': RouteRecordInfo<'/artisans/', '/artisans', Record<never, never>, Record<never, never>>,
    '/artisans/[id]': RouteRecordInfo<'/artisans/[id]', '/artisans/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/contests': RouteRecordInfo<'/contests', '/contests', Record<never, never>, Record<never, never>>,
    '/contests/[id]': RouteRecordInfo<'/contests/[id]', '/contests/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/contests/active': RouteRecordInfo<'/contests/active', '/contests/active', Record<never, never>, Record<never, never>>,
    '/contests/previous': RouteRecordInfo<'/contests/previous', '/contests/previous', Record<never, never>, Record<never, never>>,
    '/plaza/': RouteRecordInfo<'/plaza/', '/plaza', Record<never, never>, Record<never, never>>,
    '/plaza/[id]': RouteRecordInfo<'/plaza/[id]', '/plaza/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/plaza/popular': RouteRecordInfo<'/plaza/popular', '/plaza/popular', Record<never, never>, Record<never, never>>,
    '/plaza/top': RouteRecordInfo<'/plaza/top', '/plaza/top', Record<never, never>, Record<never, never>>,
    '/search': RouteRecordInfo<'/search', '/search', Record<never, never>, Record<never, never>>,
  }
}
