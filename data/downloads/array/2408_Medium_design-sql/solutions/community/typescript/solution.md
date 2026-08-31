# Simple Map solution with rows as Arrays (Runtime 85.7%)

**Author:** tmythicator
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-sql/solutions/4315061/](https://leetcode.com/problems/design-sql/solutions/4315061/)

---

# Complexity
t = number of tables
r = number of rows
c = number of columns
- Time complexity:
- - insertRow: $$O(1)$$
- - deleteRow: $$O(r)$$, because of find and splice
- - selectCell: $$O(r)$$, because of find
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(t * r * c)$$ for storing all the tables in dictionary

# Code
```
type Row = {
    rowId: number;
    columns: string[];
};

type Table = {
    rows: Row[];
    lastInsertedRow: number;
}
class SQL {
    private tables = new Map<string, Table>();
    constructor(names: string[], _columns: number[]) {
        for(const tabName of names){
            const newTab: Table = {
                rows: [],
                lastInsertedRow: 0
            };
            this.tables.set(tabName, newTab);
        }
    }

    insertRow(name: string, row: string[]): void {
        let curTab = this.tables.get(name);
        const nextId = curTab.lastInsertedRow + 1;
        const newRow: Row = {rowId: nextId, columns: row};
        curTab.rows.push(newRow);
        curTab.lastInsertedRow++;
        this.tables.set(name, curTab)
    }

    deleteRow(name: string, rowId: number): void {
        let curTab = this.tables.get(name);
        const foundRow = curTab.rows.findIndex(r => r.rowId === rowId);
        curTab.rows.splice(foundRow,1);
        this.tables.set(name, curTab)
    }

    selectCell(name: string, rowId: number, columnId: number): string {
        let curTab = this.tables.get(name);
        const row = curTab.rows.find(r => r.rowId === rowId);
        return row.columns[columnId-1];
    }
}

/**
 * Your SQL object will be instantiated and called as such:
 * var obj = new SQL(names, columns)
 * obj.insertRow(name,row)
 * obj.deleteRow(name,rowId)
 * var param_3 = obj.selectCell(name,rowId,columnId)
 */
```