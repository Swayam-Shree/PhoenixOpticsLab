// "use client";

// import { useRouter } from "next/navigation";

// import Button from "@mui/material/Button";

// import { signInWithPopup, googleProvider } from "firebase/auth";
// import { auth } from "./../firebase";
// import { useAuthState } from 'react-firebase-hooks/auth';

// export default function login() {
// 	const router = useRouter();
// 	const [user, authLoading, authError] = useAuthState(auth);

// 	function handleGoogleSignIn() {
// 		signInWithPopup(auth, googleProvider);
// 	}

// 	if (user) {
// 		router.push('/dashboard');
// 	} else if (authLoading) {
// 		return (<div>Loading...</div>);
// 	} else if (authError) {
// 		return (<div>Error</div>);
// 	} else {
// 		return (<div className='flex flex-col items-center'>
// 			<Button	onClick={ () => {router.push("/");} } variant="outlined">Home</Button>
// 			<Button className='w-[200px]' sx={{mt: 30}} variant='contained' onClick={ handleGoogleSignIn }>Google Sign In</Button>
// 		</div>);
// 	}
// }

"use client";

import Button from '@mui/material/Button';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useRouter } from 'next/navigation';

const googleProvider  = new GoogleAuthProvider();

export default function Login() {
	const router = useRouter();
	const [user, authLoading, authError] = useAuthState(auth);

	function handleGoogleSignIn() {
		signInWithPopup(auth, googleProvider);
	}

	if (user) {
		router.push('/dashboard');
	} else if (authLoading) {
		return (<div>Loading...</div>);
	} else if (authError) {
		return (<div>Error</div>);
	} else {
		return (<div className='flex flex-col items-center'>
			<Button	onClick={ () => {router.push("/");} } variant="outlined">Home</Button>
			<Button className='w-[200px]' sx={{mt: 30}} variant='contained' onClick={ handleGoogleSignIn }>Google Sign In</Button>
		</div>);
	}
}