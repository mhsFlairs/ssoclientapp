import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { SignInButton } from "./Auth/Components/SignInButton";
import { SignOutButton } from "./Auth/Components/SignOutButton";
import { WeatherforcastList } from "./Weather/Components/WeatherforcastList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthenticatedTemplate>
          <span>Hi Customer</span>
          <SignOutButton></SignOutButton>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <span>Hi Anon</span>
          <SignInButton></SignInButton>
        </UnauthenticatedTemplate>
      </header>
      <AuthenticatedTemplate>
        <WeatherforcastList></WeatherforcastList>
      </AuthenticatedTemplate>
    </div>
  );
}

export default App;
