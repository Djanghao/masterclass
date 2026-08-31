# Ruby Binary Search Optimal Solution Simple

**Author:** emmamm05
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/2637152/](https://leetcode.com/problems/find-k-closest-elements/solutions/2637152/)

---

```
# @param {Integer[]} arr
# @param {Integer} k
# @param {Integer} x
# @return {Integer[]}
def find_closest_elements(arr, k, x)
  i = (0...arr.size - k).bsearch { |i| x - arr[i] <= arr[i + k] - x }
  i ? arr[i...i + k] : arr.last(k)
end
```