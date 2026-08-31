# Clean quick custom class implementation Python

**Author:** AlrikF
**Votes:** 5
**Link:** [https://leetcode.com/problems/design-sql/solutions/5617850/](https://leetcode.com/problems/design-sql/solutions/5617850/)

---



# Code
```
class Table:
    def __init__(self,name, columns):
        self.name=name
        self.no_columns=columns
        self.rows={}
        self.row_inserted=0


class SQL:

    def __init__(self, names: List[str], columns: List[int]):
        self.tables={}
        for name in names:
            self.tables[name]=Table(name, columns)

    def insertRow(self, name: str, row: List[str]) -> None:
        self.tables[name].row_inserted+=1
        self.tables[name].rows[self.tables[name].row_inserted]=row
        

    def deleteRow(self, name: str, rowId: int) -> None:
        del self.tables[name].rows[rowId]

    def selectCell(self, name: str, rowId: int, columnId: int) -> str:
        return self.tables[name].rows[rowId][columnId-1]


# Your SQL object will be instantiated and called as such:
# obj = SQL(names, columns)
# obj.insertRow(name,row)
# obj.deleteRow(name,rowId)
# param_3 = obj.selectCell(name,rowId,columnId)
```