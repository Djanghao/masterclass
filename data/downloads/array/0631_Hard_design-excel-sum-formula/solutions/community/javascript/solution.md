# JavaScript solution

**Author:** jim11
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-excel-sum-formula/solutions/1595082/](https://leetcode.com/problems/design-excel-sum-formula/solutions/1595082/)

---

```
var Excel = function(height, width) {
    this.aCharCode = 'A'.charCodeAt();
    let w = width.charCodeAt() - this.aCharCode + 1;
    this.matrix = new Array(height).fill(0).map(_ => new Array(w).fill(0).map(_ => ({ val: 0, dependencies: new Set() })));
};


Excel.prototype.set = function(row, column, val) {
    let cell = this.getCell(row, column);
    // set the value
    cell.val = val;
    
    // clear all other cell that has dependency on this cell
    this.unregister(row, column);
    
    // notify all dependencies, "hey I got a new value, you guys should update your values"
    let dependencies = cell.dependencies.values();
    for (let dependency of dependencies) {
        const [dc, dr] = getRC(dependency);
        const newSum = this.getCell(dr, dc).fn?.();
        this.set(dr, dc, newSum);
    }
};

// get the excel cell object
Excel.prototype.getCell = function(row, column) {
    if (typeof column === 'number') {
        return this.matrix[row - 1][column];
    }
    
    let c = column.charCodeAt() - this.aCharCode;
    return this.matrix[row - 1][c];
}

// get the value of the excel cell
Excel.prototype.get = function(row, column) {
    return this.getCell(row, column).val;
};

Excel.prototype.unregister = function(row, column) {
    let cell = this.getCell(row, column);
    if (cell.numbers) {
        this.rangeIterator(cell.numbers, (cell) => cell.dependencies.delete(`${column}${row}`));
    }
}


Excel.prototype.sum = function(row, column, numbers) {
    this.unregister(row, column);
    
    // function to calculate the sum
    const fn = () => {
        let sum = 0;
        this.rangeIterator(numbers, (cell) => {
            cell.dependencies.add(`${column}${row}`);
            sum += cell.val;
        });
        return sum;
    }
    
    const val = fn();
    this.set(row, column, val);
    let cell = this.getCell(row, column);
    cell.numbers = numbers;
    cell.fn = fn;
    return val;
};

Excel.prototype.rangeIterator = function(numbers, cb) {
    for (let number of numbers) {
        if (number.includes(':')) {
            const [start, end] = number.split(':');
            const [cs, rs] = getRC(start);
            const [ce, re] = getRC(end);
            for (let r = rs; r <= re; r++) {
                for (let c = cs; c <= ce; c++) {
                    cb(this.getCell(r, c))
                }
            }
        } else {
            let [c, r] = getRC(number);
            cb(this.getCell(r, c))
        }
    }
}

function getRC(number) {
    // return [column, row]
    return [number[0].charCodeAt() - 'A'.charCodeAt(), +number.substring(1)];
}
```