# Python Interview style with documentation

**Author:** gregga
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-sql/solutions/2608097/](https://leetcode.com/problems/design-sql/solutions/2608097/)

---

In an interview setting, the interviewer may ask questions like:
1. Is this the most space effecient?
2. What happens if we insert, select, or delete a row in a non-existing table?
3. What happens if we select or delete a non existing row?
4. What happens if we insert too many or too few columns? 

For the last question, I would store the `columnCount` for each table. During insert, if the count does not match, I would raise a `ValueError` with a useful message. I would do this for too few columns because if we're given 3 columns and we expect 9, do we assume they should be inserted as the first 3? Should we add an `offset=0` parameter to account for this? We would still need the `columnCount` to ensure we don't go out of bounds.

```
class SQL:
    def __init__(self, names: List[str], columns: List[int]):
        self.tables = {name: {"nextId": 1} for name in names}

    def insertRow(self, name: str, row: List[str]) -> None:
        """ Insert row into table. Raise KeyError if table does not exist. """
        table = self.tables[name]
        rowId = table["nextId"]
        table[rowId] = row
        table["nextId"] += 1

    def deleteRow(self, name: str, rowId: int) -> None:
        """ Idempotently delete a table row by ID. Raise KeyError if table does not exist. """
        self.tables[name].pop(rowId, None)

    def selectCell(self, name: str, rowId: int, columnId: int) -> str:
        """ Return cell in table. Raise KeyError if table, row, or column does not exist. """
        return self.tables[name][rowId][columnId-1]  
```