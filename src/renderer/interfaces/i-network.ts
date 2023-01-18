/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
export default interface INetwork {
  iface?: string,
  addressType?: string,
  address?: string,
  netmask?: string,
  gateway?: string,
  domain: string
  dns?: string,
}
