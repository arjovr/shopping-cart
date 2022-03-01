function NavigationBar(props) {
    return (
        <nav className="navigation-bar">
            <a href="/">Home page</a>
            <a href="/shop">Shop page</a>
            <span>{props.total}</span>
        </nav>
    )
}

export { NavigationBar }
