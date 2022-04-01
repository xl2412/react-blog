import Link from "next/link";
import Navs from "./navs"; // 导航菜单

export default function Header({ title }) {
    const headerImg = "/images/" + (title || "cover.png");

    return (
        <header>
            <p className="logo">
                <Link href="/">
                    <a>
                        Next.js 博客
                    </a>
                </Link>
            </p>
            <Navs />
            <figure>
                <img src={headerImg} width="400" alt="decoration" />
            </figure>
        </header>
    );
}
