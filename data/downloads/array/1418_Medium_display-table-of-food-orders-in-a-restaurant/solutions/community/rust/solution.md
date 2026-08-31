# Simple Rust Solution

**Author:** kakafire
**Votes:** 0
**Link:** [https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/4787322/](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/4787322/)

---

# Approach\r
\r
We parse the orders into two structures.\r
\r
First, we need to keep track of all the dishes that exist.\r
Those will be the columns. We use an ordered set (BTreeSet) since the columns/dishes are ordered lexicographically.\r
\r
Second, we need to keep track of the counts of each dish, for each table.\r
We use a ordered map (BTreeMap) to keep track of the counts for each dish. We use another ordered map to keep track of the counts of each table.\r
\r
For example, in python syntax the orders made on table 3 would look something like this:\r
```python\r
table[3] == {\r
  "Beef Burrito": 0,\r
  "Ceviche": 2,\r
  "Fried Chicken": 1,\r
  "Water": 0,\r
}\r
```\r
\r
# Solution\r
\r
```rust\r
impl Solution {\r
  fn display_table(orders: Vec<Vec<String>>) -> Vec<Vec<String>> {\r
    use std::{collections::{BTreeSet, BTreeMap}, iter::once};\r
\r
    let mut tables = BTreeMap::<usize, BTreeMap<String, usize>>::new();\r
    let mut dishes = BTreeSet::<String>::new();\r
\r
    for order in &orders {\r
      let [_name, table, dish] = &order[..] else { unreachable!(); };\r
      dishes.insert(dish.into());\r
      *tables\r
        .entry(table.parse().unwrap()).or_default()\r
        .entry(dish.into()).or_default()\r
        += 1;\r
    }\r
\r
    let header = once("Table".into()).chain(dishes.iter().cloned()).collect();\r
    let rows = tables.iter().map(|(table, dish_counts)| {\r
      let counts = dishes.iter().map(|d| dish_counts.get(d).unwrap_or(&0).to_string());\r
      once(table.to_string()).chain(counts).collect()\r
    });\r
    once(header).chain(rows).collect()\r
  }\r
}\r
```