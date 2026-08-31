# Go (golang) maps of maps = 100% / 100%

**Author:** bunnycode
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-sql/solutions/3850239/](https://leetcode.com/problems/design-sql/solutions/3850239/)

---

# Intuition
The challenge is not really seeking a full-fledged SQL database. Just a basic "can you make some functions work" pseudo-DB.

# Warning
Do **NOT** make something like this for any real project. Competitive programming challenges have us do little "reinvent the wheel, but badly" stuff all the time. This challenge is a prime example. ...just `import "database/sql"` or something.

# Approach
- Define `Table` type with all key functions performed as methods to `Table`.
- Define `SQL` type as a map of table names to `Table` structures. All methods pass through to the underlying `Table`.

# Code
```
type Table struct {
    data      map[int][]string
    nextRowID int
}

func NewTable() *Table {
    return &Table{
        data:      map[int][]string{},
        nextRowID: 1,
    }
}

func (t *Table) InsertRow(row []string) {
    t.data[t.nextRowID] = row
    t.nextRowID++
}

func (t *Table) DeleteRow(rowID int) {
    delete(t.data, rowID)
}

func (t *Table) SelectCell(r, c int) string {
    row, ok := t.data[r]
    if !ok { return "" }
    return row[c]
}

type SQL map[string]*Table

func Constructor(names []string, columns []int) SQL {
    res := SQL{}
    for _, n := range names {
        res[n] = NewTable()
    }
    return res
}

func (s *SQL) InsertRow(name string, row []string)  {
    if _, ok := (*s)[name]; ok {
        (*s)[name].InsertRow(row)
    }
}

func (s *SQL) DeleteRow(name string, rowID int)  {
    if _, ok := (*s)[name]; ok {
        (*s)[name].DeleteRow(rowID)
    }
}

func (s *SQL) SelectCell(name string, rowID, columnID int) string {
    _, ok := (*s)[name]
    if !ok { return "" }
    return (*s)[name].SelectCell(rowID, columnID-1)
}
```