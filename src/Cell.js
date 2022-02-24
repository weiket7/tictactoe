import classes from './css/Cell.module.css';
import { SYMBOL } from './utilities/Symbol';

const Cell = ({rowIndex, columnIndex, children, disabled, stateChanger}) => {
    const className = children === SYMBOL.Default ? classes.BtnDefault + " btn-outline-secondary" : 
        children === SYMBOL.O ? " btn-primary" : " btn-info";

    const isOccupied = children === SYMBOL.O || children === SYMBOL.X ? classes.Occupied : "";

    return <span className='col p-2'>
        <button className={classes.Btn + " btn " + className + " " + isOccupied} disabled={disabled}
            onClick={() => stateChanger(rowIndex, columnIndex)}>{children}</button>
        </span>
}

export default Cell;