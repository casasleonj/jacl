const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    return(
        <li className={liClassName}>
            <a href={props.path} classNanme ="nav-link">
            {props.name}</a>
        </li>
    );
}