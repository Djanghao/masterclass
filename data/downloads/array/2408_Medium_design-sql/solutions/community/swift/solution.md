# Fastest Solution! O(1) operations.

**Author:** juliancodes
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-sql/solutions/4985016/](https://leetcode.com/problems/design-sql/solutions/4985016/)

---

# Intuition
Relational databases provide fast read and writes. The fastest way to achieve constant lookup is by using a Dictionary / HashTable. (Note: there are RDBMS which use B-Trees).

We also need to consider how to handle deletes. The two options that came to my mind were:

1. Mark rows as deleted: this would make it easier to keep track of the id of the new rows as they're added by just accessing the `count` of rows in the `table`. However, this approach can be very wasteful as we're storing `rows` which aren't required anymore and the problem didn't specify whether deleted `rows` should be accessible or not. 
2. Just delete the row: we can determine the new auto incremented ids by adding a counter to the `Table`. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

Insert $$O(1)$$
Delete $$O(1)$$
Select $$O(1)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Only the rows which haven't been deleted are stored.

$$O(n)$$

# Code
```

class SQL {

    final class Table {
        let name: String 
        let columnsCount: Int
        var rows: [Int: [String]] 
        var autoIncrementCounter: Int 

        init(name: String, columnsCount: Int, rows: [Int: [String]] = [:], autoIncrementCounter: Int = 0) {
            self.name = name 
            self.columnsCount = columnsCount
            self.rows = rows 
            self.autoIncrementCounter = autoIncrementCounter
        }
    }
    
    private var tables: [String: Table]

    init(_ names: [String], _ columns: [Int]) {
        tables = [String: Table]()
        for i in 0..<names.count {
            tables[names[i]] = Table(name: names[i], columnsCount: columns[i])
        }
    }
    
    func insertRow(_ name: String, _ row: [String]) {
        guard let table = tables[name] else {
            return
        }
        
        table.autoIncrementCounter += 1
        let id = table.autoIncrementCounter 
        table.rows[id] = row
    }
    
    func deleteRow(_ name: String, _ rowId: Int) {
        tables[name]?.rows[rowId] = nil
    }
    
    func selectCell(_ name: String, _ rowId: Int, _ columnId: Int) -> String {
        guard let table = tables[name] else {
            return "" 
        }

        guard let row = table.rows[rowId] else {
            return ""
        }

        return row[columnId - 1] // The columns are not zero indexed!
    }
}

/**
 * Your SQL object will be instantiated and called as such:
 * let obj = SQL(names, columns)
 * obj.insertRow(name, row)
 * obj.deleteRow(name, rowId)
 * let ret_3: String = obj.selectCell(name, rowId, columnId)
 */
```