# Java || Custom Class || Simple and Easy to Follow

**Author:** merwin95
**Votes:** 7
**Link:** [https://leetcode.com/problems/design-sql/solutions/3990500/](https://leetcode.com/problems/design-sql/solutions/3990500/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The upper SQL class will contain a mapping of table names to table class objects. This makes maintaining row data and id counts simple. There no need for hashmaps upon hashmaps to track ids, rows, etc. all in the parent SQL class. 
# Approach
<!-- Describe your approach to solving the problem. -->
Custom Table class to encapsulate table specific functionality


# Code
```
class SQL {

    private Map<String, table> tables;

    public SQL(List<String> names, List<Integer> columns) {
        tables = new HashMap<>();

        // Create table for each name
        for (int i = 0; i < names.size(); i++) {
            tables.put(names.get(i), new table(columns.get(i)));
        }

    }
    
    public void insertRow(String name, List<String> row) {
        tables.get(name).insert(row);
    }
    
    public void deleteRow(String name, int rowId) {
        /* Technically don't need to do anything for delete. But in reality we
            would want to maintain space */
        //tables.get(name).delete(rowId);
    }
    
    public String selectCell(String name, int rowId, int columnId) {
        return tables.get(name).getCell(rowId, columnId);
    }

    private class table {

        private int id = 0;

        /* Technically don't need number of columns for this problem. But that is only because
            we have the guarantee that the row provided will equal the number of columns. In reality
            we would want to compare row length to column count */
        //private int columnCount;
        
        private Map<Integer, List<String>> rows;

        public table(int columns) {
            //columnCount = columns;
            rows = new HashMap<>();
        }

        public void insert(List<String> row) {
            rows.put(++id, row);
        }

        public void delete(int rowId) {
            rows.remove(rowId);
        }

        public String getCell(int rowId, int columnId) {
            return rows.get(rowId).get(columnId-1);
        }
    }
}
```

Leave a like if you enjoyed this solution