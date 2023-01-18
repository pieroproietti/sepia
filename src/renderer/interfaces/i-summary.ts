import ILocation from "./i-location";
import INetwork from "./i-network";
import IUsers from "./i-users";
import IWelcome from "./i-welcome";

/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
export default interface ISummary {
  welcome: IWelcome
  location: ILocation
  users: IUsers
  network: INetwork
}
