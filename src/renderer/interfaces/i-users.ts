/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
export default interface IUsers {
  name: string,
  fullname: string,
  password: string,
  rootPassword: string,
  hostname: string,
  autologin: boolean,
  sameUserPassword: boolean
}
