import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectCurrentUser } from '../../store/userSlice';

interface AuthWrapperProps {
  children: ReactElement<unknown, string>;
}

function AuthWrapper({ children }: Readonly<AuthWrapperProps>) {
  const selectCurrentUserId = useSelector(selectCurrentUser)?.id;
  if (selectCurrentUserId) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}
export default AuthWrapper;
