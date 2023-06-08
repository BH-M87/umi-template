import 'umi/typings';

declare namespace global {
  /** 定义一个任意类型的函数声明 */
  export type AnyFunction = (...args: any[]) => any;

  interface AnyObject {
    [key: string]: any;
  }

  /** 可以进行深度递归的类型。用了这个以后，各种深度下都是readonly的 */
  export type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends AnyFunction
      ? T[P]
      : T[P] extends ReadonlySet<infer I>
      ? ReadonlySet<I>
      : T[P] extends ReadonlyMap<infer MK, infer I>
      ? ReadonlyMap<MK, I>
      : T[P] extends Set<infer I>
      ? ReadonlySet<DeepReadonly<I>>
      : T[P] extends Map<infer MK, infer I>
      ? ReadonlyMap<MK, DeepReadonly<I>>
      : T[P] extends Array<infer I>
      ? ReadonlyArray<DeepReadonly<I>>
      : T[P] extends string | boolean | number | Symbol
      ? T[P]
      : DeepReadonly<T[P]>;
  };
  interface HTMLScriptElement {
    onreadystatechange: (() => void) | null;
    onerror: ((error: Error) => void) | null;
    readyState: string;
  }
}
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare namespace NodeJS {
  interface ProcessEnv {
    PROXY_TARGET: 'mock' | 'dev';
  }
}
