export default function TabButton({ children, isSelected, ...props }) {
    console.log("TabContent Component Execting")
    
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}