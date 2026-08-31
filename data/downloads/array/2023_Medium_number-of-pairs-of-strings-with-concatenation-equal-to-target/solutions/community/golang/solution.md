# Golang bruteforce

**Author:** ilya-pimenov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/3894667/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/3894667/)

---

# Intuition & Approach

Just two loops with O(n^2).

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

# Code
```
func numOfPairs(nums []string, target string) int {
    var ans int
    for i := 0; i < len(nums); i++ {
        for j := i + 1; j < len(nums); j++ {
            if nums[i]+nums[j] == target {
                ans++
            }
            if nums[j]+nums[i] == target {
                ans++
            }
        }
    }
    return ans    
}
```