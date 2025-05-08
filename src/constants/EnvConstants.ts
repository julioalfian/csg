import packageJson from "../../package.json"
export const ENV_CONSTANTS = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ENDPOINT: import.meta.env.VITE_APP_BASE_ENDPOINT,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ENV_TYPE: import.meta.env.VITE_APP_ENV,
  VERSION: packageJson.version
}