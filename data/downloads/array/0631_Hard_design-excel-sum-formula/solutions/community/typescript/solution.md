# TypeScript, using Map to store cell values and formulas

**Author:** divermak
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-excel-sum-formula/solutions/3231148/](https://leetcode.com/problems/design-excel-sum-formula/solutions/3231148/)

---

# Code
```
enum CellType {
    Value = "Value",
    Formula = "Formula"
}

class Cell {
    column: string;
    row: number;
    type: CellType;
    value: number | Array<string>;

    constructor(row: number, column: string, type: CellType, value: number | Array<string>) {
        this.column = column;
        this.row = row;
        this.type = type;
        this.value = value;
    }    
}

type ColumnRowPair = {
    row: number;
    column: string;
}

class Excel {
    height: number;
    width: string;
    cells: Map<string, Cell>;
    
    constructor(height: number, width: string) {
        this.height = height;
        this.width = width;
        this.cells = new Map<string, Cell>();
    }

    buildKey(row: number, column: string): string {
        return `${column}${row}`;
    }

    set(row: number, column: string, val: number): void {
        const key = this.buildKey(row, column);

        let cell: Cell;
        if (this.cells.has(key)) {
            cell = this.cells.get(key);
            cell.type = CellType.Value;
            cell.value = val;
        } else {
            cell = new Cell(row, column, CellType.Value, val);
            this.cells.set(key, cell);
        }
    }

    parse(number: string): ColumnRowPair {
        const column = number[0];
        const row = parseInt(number.slice(1), 10);

        return { row, column };
    }

    *range(topLeft: string, bottomRight: string) {
        const { row: topRow, column: leftColumn } = this.parse(topLeft);
        const { row: bottomRow, column: rightColumn } = this.parse(bottomRight);

        for (let row = topRow; row <= bottomRow; row++) {
            let column = leftColumn;
            while (column.charCodeAt(0) <= rightColumn.charCodeAt(0)) {
                yield { row, column };
                column = String.fromCharCode((column.charCodeAt(0) + 1));
            }
        }
    }

    evaluate(cell: Cell): number {
        const numbers = cell.value as Array<string>;
        let sum = 0;

        for (const number of numbers) {
            const colonIndex = number.indexOf(':');

            if (colonIndex === -1) {
                // single cell
                const { row, column } = this.parse(number);
                sum += this.get(row, column);
            } else {
                // range
                const topLeft = number.slice(0, colonIndex);
                const bottomRight = number.slice(colonIndex + 1);
                for (const { row, column } of this.range(topLeft, bottomRight)) {
                    sum += this.get(row, column);
                }
            }
        }

        return sum;
    }

    get(row: number, column: string): number {
        const key = this.buildKey(row, column);

        if (!this.cells.has(key)) {
            return 0;
        }

        const cell = this.cells.get(key);
        if (cell.type === CellType.Value) {
            return cell.value as number;
        }

        return this.evaluate(cell);
    }

    sum(row: number, column: string, numbers: string[]): number {
        const key = this.buildKey(row, column);

        let cell: Cell;
        if (this.cells.has(key)) {
            cell = this.cells.get(key);
            cell.type = CellType.Formula;
            cell.value = numbers;
        } else {
            cell = new Cell(row, column, CellType.Formula, numbers);
            this.cells.set(key, cell);
        }

        return this.get(row, column);
    }
}

/**
 * Your Excel object will be instantiated and called as such:
 * var obj = new Excel(height, width)
 * obj.set(row,column,val)
 * var param_2 = obj.get(row,column)
 * var param_3 = obj.sum(row,column,numbers)
 */
```