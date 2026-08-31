# Ruby solution, faster than 100%

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/right-triangles/solutions/5089653/](https://leetcode.com/problems/right-triangles/solutions/5089653/)

---

```
# @param {Integer[][]} grid
# @return {Integer}
def number_of_right_triangles(grid)
  rs = grid.map(&:sum)
  cs = grid.transpose.map(&:sum)
  rs.zip(grid).sum do |rc, gr|  
    cs.zip(gr).sum do |cc, g|
      g * (rc - 1) * (cc - 1)
    end
  end
end
```