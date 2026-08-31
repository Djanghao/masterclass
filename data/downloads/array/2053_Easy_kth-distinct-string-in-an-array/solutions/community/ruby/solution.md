# One-liner

**Author:** amnesia10
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5588074/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5588074/)

---

```
# @param {String[]} arr
# @param {Integer} k
# @return {String}
def kth_distinct(arr, k)
    arr.select { |l| arr.count(l) == 1 }[k - 1] || ''
end
```