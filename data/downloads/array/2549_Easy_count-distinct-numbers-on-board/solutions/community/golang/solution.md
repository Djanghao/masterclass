# golang

**Author:** Sashatop123gg
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/5712680/](https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/5712680/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
![image.png](./images/0.png)

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func distinctIntegers(n int) int {
    // return n - 1
    // var m int 
    // if n <= 1  {
    //     return 0
    // } else if n >= 2{
    //     m = n - 1   
    // }
    // if n % m == 1 {
    //     return n - 1 
    // }
    // return 0
    var m int
    if n >= 2 {
        m = n - 1
        if n % m == 1 {
            return n - 1 
        }
    }
    if n <= 2 {
        return 1
    }
    return 0
}
```