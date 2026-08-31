# Best Solution In Go

**Author:** robinjoseph1998
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4460369/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4460369/)

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
func numberOfCuts(n int) int {
    if n!=1{
    if n%2==0{
        return n/2
    }
    return n
    }
    return 0
}
```