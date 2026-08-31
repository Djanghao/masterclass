# 0 ms Go solution

**Author:** Anjush_Bhargavan
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/4532277/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/4532277/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
we are returning k if it's less than number of '1's, else we are checking if the k is less than sum of number of '1's and '0's. then we return the number of '1's, it will be maximum sum, other are zeros right. if k is higher than that then we return number of '1's minus how many number of '-1' s are wanted to complete k. 

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
func kItemsWithMaximumSum(numOnes int, numZeros int, numNegOnes int, k int) int {
    
    if k <= numOnes {
        return k
    }else if k <= numOnes + numZeros {
        return numOnes
    }
    return numOnes - (k - (numOnes + numZeros))
}
```