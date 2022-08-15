import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ href, className, children }) {
    const router = useRouter();

    const isActive = router.asPath === href;

    return <Link href={ href }>
        <a className={ `${ className }${ isActive ? ' active' : '' }` }>{ children }</a>
    </Link>;
}

