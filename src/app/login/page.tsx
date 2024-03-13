'use server';

import { signIn } from '@/auth';

const Login = async () => {
    await signIn('duende-identity-server6');
}

export default Login;