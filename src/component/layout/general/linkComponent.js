import Link from "next/link";

const LinkComponent = ({ href , text , className }) => {
    return(
        <Link href={href}>
            <a className={className}>{text}</a>
        </Link>
    )
}

export default LinkComponent;