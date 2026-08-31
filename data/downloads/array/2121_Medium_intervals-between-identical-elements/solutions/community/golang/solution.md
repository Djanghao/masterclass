# prefix sum and hash

**Author:** xxxvitoxxx
**Votes:** 0
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/4346670/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/4346670/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func getDistances(arr []int) []int64 {
  idxMap := make(map[int][]int)
  idxSumMap := make(map[int]int)
  for i := 0; i < len(arr); i++ {
    idxMap[arr[i]] = append(idxMap[arr[i]], i)
    idxSumMap[arr[i]] += i
  }

  ans := make([]int64, len(arr))
  for k, indexes := range idxMap {
    l := len(indexes)
    var leftSum int
    for i, idx := range indexes {
      ans[idx] = int64(idx*i-leftSum+idxSumMap[k]-leftSum-idx-(l-i-1)*idx)
      leftSum += idx
    }
  }
  return ans
}
```