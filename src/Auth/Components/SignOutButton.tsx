import { IPublicClientApplication } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";

function handleLogOut(instance: IPublicClientApplication) {
  instance.logoutPopup().catch(e=>console.error(e));
}

export const SignOutButton = () => {
  const { instance } = useMsal();

  return <button onClick={() => handleLogOut(instance)}>Sign Out</button>;
};
