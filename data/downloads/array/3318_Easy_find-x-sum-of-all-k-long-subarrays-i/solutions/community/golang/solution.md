# golang   best  solution  99%

**Author:** zarifjorayev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5944526/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5944526/)

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
```golang []
func findXSum(nums []int, k int, x int) []int {
 n := len(nums)
 answer := make([]int, n-k+1)

 // Function to calculate the x-sum of a given subarray
 calculateXSum := func(subarray []int) int {
  frequencyMap := make(map[int]int)

  // Count occurrences of all elements in the subarray
  for _, value := range subarray {
   frequencyMap[value]++
  }

  // Create a slice to hold frequencies and values
  freqSlice := make([][2]int, 0, len(frequencyMap))
  for key, count := range frequencyMap {
   freqSlice = append(freqSlice, [2]int{key, count})
  }

  // Sort by frequency (descending) and value (descending) if equal
  sort.Slice(freqSlice, func(i, j int) bool {
   if freqSlice[i][1] == freqSlice[j][1] {
    return freqSlice[i][0] > freqSlice[j][0]
   }
   return freqSlice[i][1] > freqSlice[j][1]
  })

  // Sum the top x elements
  sum := 0
  for i := 0; i < x && i < len(freqSlice); i++ {
   sum += freqSlice[i][0] * freqSlice[i][1]
  }

  return sum
 }

 // Iterate over all possible k-length subarrays
 for i := 0; i <= n-k; i++ {
  subarray := nums[i : i+k]
  answer[i] = calculateXSum(subarray)
 }

 return answer
}

```