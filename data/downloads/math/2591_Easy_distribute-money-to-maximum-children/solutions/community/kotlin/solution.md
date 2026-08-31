# 🎉Solution without using any extra space -> Space O(1) || Time O(N)

**Author:** Tehronshoh
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/5611331/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/5611331/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun distMoney(money: Int, children: Int): Int {
        if(money < children)
            return -1

        var remainingMoney = money
        var countOf8 = 0
        for(i in 1 .. children)
            if(i == children && remainingMoney != 0) {
                if(remainingMoney == 4 && countOf8 != 0 && countOf8 == (children-1))
                    countOf8--
                
                if(remainingMoney == 8)
                    countOf8++
            } else if(remainingMoney >= 8) {
                countOf8++
                remainingMoney -= 8
            } else if(remainingMoney == 0) {   
                countOf8--
                remainingMoney = 6
            } else {
                remainingMoney--
            }

        return countOf8
    }
}
```