# Ruby - T: O(nlogn), S: O(n). 100% 100%

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/2414871/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/2414871/)

---

```
# @param {Integer[]} arr
# @return {Float}
def trim_mean(arr)
  arr.sort!
  n = arr.size
  removed = n / 20
  new_size = n - 2 * removed
  arr[removed, new_size].sum.to_f / new_size
end