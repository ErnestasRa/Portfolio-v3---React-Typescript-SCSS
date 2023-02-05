const scrollToDiv = (divId: string) => {
    const div = document.getElementById(divId);
    if (div !== null) {
        const divPosition = div.offsetTop;
        window.scrollTo({ top: divPosition, behavior: 'smooth' });
    }
};

const scrollToTop = (setVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
    // eslint-disable-next-line max-len
    const toggleVisibility = () => (window.pageYOffset > 500 ? setVisible(true) : setVisible(false));

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
};

export { scrollToDiv, scrollToTop };
