# Ruby one-liner, beats 100%/100%

**Author:** DNNX
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2901163/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2901163/)

---

```
# @param {Integer[][]} grid
# @return {Integer}
def delete_greatest_value(grid)
  grid.map(&:sort).transpose.sum(&:max)  
end
```