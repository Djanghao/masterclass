# easy solution

**Author:** zarifjorayev
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/5944638/](https://leetcode.com/problems/number-of-common-factors/solutions/5944638/)

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
func gcd(a, b int) int{
    
    if b > a{
        a, b = b, a
    }
    
    for b != 0 {
        
        r := a % b
        a, b = b, r
    }
    
    return a
}



func commonFactors(a int, b int) int {
    
    maxFactor := gcd(a, b)
    
    counter := 0
    
    for i := 1 ; i <= maxFactor ; i++{
        
        if maxFactor % i == 0{
            counter += 1
        }
    }
    
    return counter
}
```