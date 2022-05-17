import Logo from "./Logo";
import Link from "next/link";
import { useAuth } from "../Context/AuthContext";

function Header() {

    const { currentUser, signout } = useAuth();

    console.log("Should be false", currentUser)

    return (
        <div>
            <header>
                <nav>
                    <Logo />
                    <>
                        {/* {!isHome && <LogoutButton />} */}


                    </>
                    {!currentUser ? (
                        <>
                            <Link href="/signin" className="logo">Sign In</Link>
                        </>
                    ) :
                        <button onClick={signout}>Sign Out</button>
                    }
                </nav>
            </header>
        </div>
    )
}


export default Header;

