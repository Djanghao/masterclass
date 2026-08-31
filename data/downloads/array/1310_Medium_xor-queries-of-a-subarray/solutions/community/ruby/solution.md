# Ruby - T: O(m + n) S: O(n) 100% 100% - prefix array

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/2540062/](https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/2540062/)

---

```
# @param {Integer[]} arr
# @param {Integer[][]} queries
# @return {Integer[]}
def xor_queries(arr, queries)
  n = arr.size

  pref = 0
  0.upto(n - 1) do |i|
    pref ^= arr[i]
    arr[i] = pref
  end

  queries.map do |(l, r)|
    left = l > 0 ? arr[l - 1] : 0
    arr[r] ^ left
  end
end