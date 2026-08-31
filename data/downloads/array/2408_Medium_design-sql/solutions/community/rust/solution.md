# Rust solution with RefCell<HashMap>

**Author:** jkile9
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-sql/solutions/5011032/](https://leetcode.com/problems/design-sql/solutions/5011032/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
There's probably better ways of solving this via safe Rust but this is the cleanest solution I could come up with given the constraints of nested mutable data structures like this.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Insert: O(1)
Select: O(1)
Delete: O(1)

By using HashMap's across the board, you get a constant time time complexity for every operation! Hooray!

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
use std::{
    cell::{Cell, RefCell},
    collections::HashMap,
    ops::Add,
    rc::Rc,
};

#[derive(Debug)]
struct SQL {
    tables: RefCell<HashMap<String, Table>>,
}

#[derive(Debug)]
struct Table {
    pub rows: RefCell<HashMap<i32, Vec<String>>>,
    pub current_id: Cell<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl SQL {
    fn new(names: Vec<String>, columns: Vec<i32>) -> Self {
        let mut tables: HashMap<String, Table> = HashMap::with_capacity(names.len());
        for i in 0..names.len() {
            let table = Table {
                rows: RefCell::new(HashMap::with_capacity(columns[i] as usize)),
                current_id: Cell::new(1),
            };
            tables.insert(names[i].clone(), table);
        }
        SQL {
            tables: RefCell::new(tables),
        }
    }

    fn insert_row(&self, name: String, row: Vec<String>) {
        let tables = self.tables.borrow_mut();
        if let Some(table) = tables.get(&name) {
            let current_id = table.current_id.get();
            let mut rows = table.rows.borrow_mut();
            rows.insert(current_id, row);
            table.current_id.set(current_id.add(1));
        }
    }

    fn delete_row(&self, name: String, row_id: i32) {
        let tables = self.tables.borrow_mut();
        if let Some(table) = tables.get(&name) {
            let mut rows = table.rows.borrow_mut();
            rows.remove(&row_id);
        }
    }

    fn select_cell(&self, name: String, row_id: i32, column_id: i32) -> String {
        let tables = self.tables.borrow();
        if let Some(table) = tables.get(&name) {
            let rows = table.rows.borrow();
            if let Some(row) = rows.get(&row_id) {
                return row[column_id as usize - 1].clone();
            } else {
                return String::from("");
            }
        } else {
            return String::from("");
        }
    }
}

/**
 * Your SQL object will be instantiated and called as such:
 * let obj = SQL::new(names, columns);
 * obj.insert_row(name, row);
 * obj.delete_row(name, rowId);
 * let ret_3: String = obj.select_cell(name, rowId, columnId);
 */
```