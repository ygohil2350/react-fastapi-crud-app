import { ReactElement } from 'react';

interface AuthWrapperProps {
  children: ReactElement<unknown, string>;
}

function AuthWrapper({ children }: Readonly<AuthWrapperProps>) {
  return <>{children}</>;
}
export default AuthWrapper;
