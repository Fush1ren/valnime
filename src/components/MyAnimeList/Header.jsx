import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
    return(
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {linkHref && linkTitle ? 
                <Link href={linkHref} className="md:text-xl sm:text-lg text-base underline hover:text-indigo-400 text-white transition-all">
                    {linkTitle}
                </Link>
                : null
            }
        </div>
    )
}

export default Header;