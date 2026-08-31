# Ruby solution, beats 100%/100%

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3494130/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3494130/)

---

```
# @param {Integer[]} arr
# @param {Integer[][]} mat
# @return {Integer}
def first_complete_index(arr, mat)
  n = mat.size
  m = mat[0].size
  h = Array.new(n * m + 1)

  mat.each_with_index do |r, i|
    r.each_with_index do |x, j|
      h[x] = i * m + j
    end
  end

  rc = Array.new(m, n)
  cc = Array.new(n, m)

  arr.find_index do |x|
    i, j = h[x].divmod(m)
    (rc[j] -= 1) == 0 || (cc[i] -= 1) == 0
  end
end
```