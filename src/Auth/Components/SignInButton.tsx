import { IPublicClientApplication } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../auth.config";


function handleLogIn(instance: IPublicClientApplication) {
  instance.loginPopup(loginRequest);
}

export const SignInButton = () => {
  const { instance } = useMsal();

  return <button onClick={() => handleLogIn(instance)}>Sign in</button>;
};
