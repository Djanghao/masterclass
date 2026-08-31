# [Ruby] DP

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/3042691/](https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/3042691/)

---

```ruby
def min_path_cost g, c
    while g.size > 1
        x = g.pop
        g.last.map! do
            _1 + c[_1].zip(x).map!(&:sum).min
        end
    end
    g.last.min
end
```