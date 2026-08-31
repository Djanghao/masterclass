# Another one ruby solution

**Author:** varentina
**Votes:** 0
**Link:** [https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/3332511/](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/3332511/)

---

```\r
# @param {String[][]} orders\r
# @return {String[][]}\r
def display_table(orders)\r
    dict = Hash.new(0)\r
    meals = Set.new\r
    tables = Set.new\r
\r
    # create a hashMap with orders count\r
    orders.each do |_, table, food|\r
      dict["#{table}_#{food}"] += 1\r
      meals.add(food)\r
      tables.add(table.to_i)\r
    end\r
\r
    # create a table\r
    header = [meals.sort.to_a.unshift('Table')]\r
    body = tables.sort.map do |t|\r
      row = meals.sort.map { |m| dict["#{t}_#{m}"].to_s }\r
      row.unshift(t.to_s)\r
    end\r
\r
    header + body\r
end\r
```