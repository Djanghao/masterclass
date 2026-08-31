# c#, Table class extracted

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-sql/solutions/2685480/](https://leetcode.com/problems/design-sql/solutions/2685480/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Let's extract `Table` class and keep `Dictionary<string, Table>` for all tables within `SQL` class.

# Approach
<!-- Describe your approach to solving the problem. -->
We can use `Dictionary<int, IList<string>>` (`Key` is row id) to keep rows within table 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(1)` for each of `insert`, `delete`, `select` operation

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(n)` where `n` is number of rows inserted

# Code
```
public class Table {
    private int m_Id = 0;

    private Dictionary<int, IList<string>> m_Records = new();

    public Table(string name) {
        Name = name;
    }

    public string Name {get;}

    public void Insert(IList<string> row) => m_Records.Add(++m_Id, row);
    
    public void Delete(int id) => m_Records.Remove(id);
    
    public string Select(int id, int index) => (m_Records.TryGetValue(id, out var result) && index >= 1 && index <= result.Count)
        ? result[index - 1]
        : null;
}

public class SQL {
    Dictionary<string, Table> m_Tables;

    public SQL(IList<string> names, IList<int> columns) {
        m_Tables = names.ToDictionary(name => name, name => new Table(name));    
    }
    
    public void InsertRow(string name, IList<string> row) =>
         m_Tables[name].Insert(row);    
        
    public void DeleteRow(string name, int rowId) =>
         m_Tables[name].Delete(rowId);
        
    public string SelectCell(string name, int rowId, int columnId) =>
         m_Tables[name].Select(rowId, columnId);
    
}

/**
 * Your SQL object will be instantiated and called as such:
 * SQL obj = new SQL(names, columns);
 * obj.InsertRow(name,row);
 * obj.DeleteRow(name,rowId);
 * string param_3 = obj.SelectCell(name,rowId,columnId);
 */
```