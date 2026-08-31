# Kotlin Solution | custom class and HashMap | Implements deleteRow to save space

**Author:** Nataland
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-sql/solutions/5832428/](https://leetcode.com/problems/design-sql/solutions/5832428/)

---

# Complexity
Constructor - `O(n)`
insertRow, deleteRow, selectCell - `O(1)`


# Code
```kotlin []
class SQL(names: List<String>, columns: List<Int>) {

    data class Table(
        var currIndex: Int = 1,
        val data: HashMap<Int, List<String>> = hashMapOf()
    )
    val map = hashMapOf<String, Table>()

    init {
        names.forEach {
            map[it] = Table()
        }
    }

    fun insertRow(name: String, row: List<String>) {
        val table = map[name] ?: throw IllegalArgumentException("Table does not exist")
        table.data[table.currIndex] = row
        table.currIndex++
    }

    fun deleteRow(name: String, rowId: Int) {
        val table = map[name]?: throw IllegalArgumentException("Table does not exist")
        table.data[rowId] = listOf()
    }

    fun selectCell(name: String, rowId: Int, columnId: Int): String {
        return map[name]?.let { table ->
            table.data[rowId]?.let { row ->
                row[columnId-1] ?: throw IllegalArgumentException("Cell does not exist")
            } ?: throw IllegalArgumentException("Column does not exist")
        } ?: throw IllegalArgumentException("Table does not exist")
    }
}

/**
 * Your SQL object will be instantiated and called as such:
 * var obj = SQL(names, columns)
 * obj.insertRow(name,row)
 * obj.deleteRow(name,rowId)
 * var param_3 = obj.selectCell(name,rowId,columnId)
 */
```