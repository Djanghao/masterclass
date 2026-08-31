# Using Maps

**Author:** mezzermite
**Votes:** 0
**Link:** [https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/4158184/](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/4158184/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
class Solution {\r
  fun displayTable(orders: List<List<String>>): List<List<String>> {\r
    val tables = mutableMapOf<String, MutableMap<String, Int>>()\r
    val items = mutableSetOf<String>()\r
\r
    orders.forEach {\r
      tables.getOrPut(it[1]) { mutableMapOf() }[it[2]] = (tables[it[1]]!![it[2]] ?: 0) + 1\r
      items.add(it[2])\r
    }\r
\r
    val sorted = items.sorted()\r
    \r
    val headers: List<List<String>> = listOf(listOf("Table") + sorted)\r
    \r
    val data: List<List<String>> = tables.keys.sortedBy { it.toInt() }.map { t ->\r
      listOf(t) + sorted.map { "${tables[t]!![it] ?: 0}" }\r
    }\r
\r
    return headers + data\r
  }\r
}\r
```