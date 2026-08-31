# Very easy kotlin solution

**Author:** toravipatel
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3346707/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3346707/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun kItemsWithMaximumSum(numOnes: Int, numZeros: Int, numNegOnes: Int, k: Int): Int {
        
        if(k <= numOnes)
            return k
        
        if(k <= numOnes + numZeros)
            return numOnes
        
        var remainingSum = k - (numOnes + numZeros)
        
        return numOnes - remainingSum
            
    }
}
```