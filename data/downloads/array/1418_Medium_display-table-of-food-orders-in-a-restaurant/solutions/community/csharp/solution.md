# Simple Solution in C# (LinQ)

**Author:** yeuhoahuuco
**Votes:** 2
**Link:** [https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/5650707/](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/5650707/)

---

# Code
```
public class Solution {
    public IList<IList<string>> DisplayTable(IList<IList<string>> orders) {
        var food = orders.Select(x => x[2]).OrderBy(x => x, StringComparer.Ordinal).ToHashSet();
        return (new List<List<string>>() { })
            .Append(new List<string>() { "Table" }.Concat(food).ToList()).Concat(
                orders.GroupBy(x => x[1],
                                        (table, items) =>
                                        (new List<string>() { })
                                            .Append(table)
                                            .Concat(food.Select(f => items.Count(item => item[2] == f).ToString()))
                                            .ToList()
                                ).OrderBy(x => int.Parse(x[0])).ToList()
            ).ToList().Cast<IList<string>>().ToList();
    }
}
```