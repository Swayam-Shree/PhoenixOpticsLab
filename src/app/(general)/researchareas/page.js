"use client";

import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useRouter } from 'next/navigation';

export default function Login() {
	const router = useRouter();
	const [user, authLoading, authError] = useAuthState(auth);

	if (user) {
		router.push('/dashboard');
	} else if (authLoading) {
		return (<div>Loading...</div>);
	} else if (authError) {
		return (<div>Error</div>);
	} else {
		return (<div className='flex flex-col items-center'>
			<div>
				project areas page, @app/(general)/researchareas/page.js
			</div>
		</div>);
	}
}