# Go simple,easy to understand solution | 0 ms, beates 100% of users

**Author:** okilov
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/5081850/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/5081850/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. --> Reduce the value of elements after ith element if ith element is greater than 0

# Approach
<!-- Describe your approach to solving the problem. --> re initialize the value of reduction which is 0 at first tthen every time we encounter element greater than 0 we add 1 to reduction and every time before checking element if it is greater than 0 we subtract the reduction from element. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ --> O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func countTestedDevices(batteryPercentages []int) int {
    count := 0
    reduction := 0 
    for _,v := range batteryPercentages {
        if v - reduction > 0 {
            reduction++
            count++
        }
    }
    return count
}
```