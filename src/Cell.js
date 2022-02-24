import classes from './css/Cell.module.css';

const Cell = ({id, children, click, colour="primary", className="", loading=false}) => {
    return <li id={id} className={"btn span1"}>{children}</li>
}

export default Cell;