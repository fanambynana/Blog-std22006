// eslint-disable-next-line
import { useRouter } from 'next/router';

export default function Hello() {
    const router = useRouter();
    console.warn(router.query.id);
    return <div>World Hello !</div>
}