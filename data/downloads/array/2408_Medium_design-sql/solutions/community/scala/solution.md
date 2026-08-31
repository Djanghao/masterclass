# Simple Scala solution using Map approach

**Author:** gorbenkoya
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-sql/solutions/5338089/](https://leetcode.com/problems/design-sql/solutions/5338089/)

---

# Intuition
use Map

# Approach
the same

# Complexity
- Time complexity:
 $$O(n)$$ for init, $$O(1)$$ for all oprations

- Space complexity:
 2 * $$O(n)$$ 

# Code
```
import collection.mutable.HashMap
import collection.mutable.ArrayBuffer

class SQL(_names: List[String], _columns: List[Int]) {

    val rowLastIds = HashMap[String, Int]()

    val tables = HashMap[String, HashMap[Int, List[String]]]()
    _names.foreach(n => tables.put(n, HashMap[Int, List[String]]())) 

    def insertRow(name: String, row: List[String]): Unit = {
        val table = tables(name)
        val lastRowId = rowLastIds.getOrElseUpdate(name, 0)
        val nextId = lastRowId + 1
        rowLastIds.put(name, nextId)
        table.put(nextId, row)
        tables.put(name, table)
    }

    def deleteRow(name: String, rowId: Int): Unit = {
        val table = tables(name)
        table.remove(rowId)
        tables.put(name, table)
    }

    def selectCell(name: String, rowId: Int, columnId: Int): String = {
        tables(name)(rowId)(columnId - 1)
    }

}

/**
 * Your SQL object will be instantiated and called as such:
 * val obj = new SQL(names, columns)
 * obj.insertRow(name,row)
 * obj.deleteRow(name,rowId)
 * val param_3 = obj.selectCell(name,rowId,columnId)
 */
```