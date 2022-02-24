import classes from './css/Cell.module.css';

const Cell = ({rowIndex, columnIndex, children, disabled, stateChanger}) => {
    const className = children === "+" ? classes.BtnDefault + " btn-outline-secondary" : children === "O" ? "btn-primary" : "btn-info";

    return <span className='col p-2'>
        <button className={classes.Btn + " btn " + className} disabled={disabled}
            onClick={() => stateChanger(rowIndex, columnIndex)}>{children}</button>
        </span>
}

export default Cell;