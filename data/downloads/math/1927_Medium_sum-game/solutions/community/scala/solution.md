# Scala solution

**Author:** li127
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-game/solutions/4228896/](https://leetcode.com/problems/sum-game/solutions/4228896/)

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
    def sumGame(num: String): Boolean = {
        val leftStr = num.substring(0, num.length/2)
        val rightStr = num.substring(num.length/2)

        var leftQCount = 0
        var leftSum = 0
        var rightQCount = 0
        var rightSum = 0
        leftStr.foreach { x=>
            if (x=='?') leftQCount+=1 else leftSum += x.asDigit
        }
        rightStr.foreach { x=>
            if (x=='?') rightQCount+=1 else rightSum += x.asDigit
        }   
        val diffSum = leftSum - rightSum

    
        if ((leftQCount + rightQCount) % 2 == 1) true
        else if (leftQCount == rightQCount) !(leftSum == rightSum)
        else if (leftQCount > rightQCount && leftSum > rightSum || leftQCount < rightQCount && leftSum < rightSum) true
        else if (diffSum.abs > 9 * (leftQCount - rightQCount).abs / 2)  true
        else if (diffSum.abs < 9 * (leftQCount - rightQCount).abs / 2) true
        else false
        
    }
    
}
```