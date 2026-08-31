# Best time complexety

**Author:** user7046jn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/5951971/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/5951971/)

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
func countBeautifulPairs(nums []int) int {
    result := 0
    for i := 0; i < len(nums) - 1; i++ {
        first := nums[i]
        for first > 9 {
            first /= 10
        }
        for j := i+ 1; j < len(nums); j++ {
            last := nums[j]
            for last > 9 {
                last %= 10
            }
            if  calculateGcd(first, last) == 1 {
                result += 1
            }
        }
    }
    return result
}

func calculateGcd(a, b int) int {
    for b != 0{
        a, b = b, a%b
    }
    return a
}
```