# scala easy solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3326766/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3326766/)

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
object Solution {
    def distMoney(money: Int, children: Int): Int = money - children match {
        case cur if(cur < 0) => -1
        case cur if(cur / 7 == children && cur % 7 == 0) => children
        case cur if(cur / 7 == children - 1 && cur % 7 == 3) => children - 2
        case cur => Math.min(children - 1, cur / 7)
    }
}
```