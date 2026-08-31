# go solution

**Author:** gopherCatchy
**Votes:** 1
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/3014501/](https://leetcode.com/problems/integer-replacement/solutions/3014501/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
One way to do this would be to manually compute the number of operations needed for a few small integers and try to identify a pattern. For example, we can see that it takes 0 operations to replace 1 with 1, 1 operation to replace 2 with 1 (by dividing it by 2), and 3 operations to replace 3 with 1 (by subtracting 1 twice).
# Approach
<!-- Describe your approach to solving the problem. -->
Understand the problem statement and the constraints of the problem. In this case, we are given an integer n and are asked to find the minimum number of operations needed to replace n with 1, where an operation is either dividing n by 2 (if it is even) or replacing it with either n + 1 or n - 1 (if it is odd). The constraints are 1 <= n <= 2^31 - 1.
Identify the pattern in the number of operations needed to replace different integers with 1. One way to do this is to manually compute the number of operations needed for a few small integers and try to identify a pattern. For example, we can see that it takes 0 operations to replace 1 with 1, 1 operation to replace 2 with 1 (by dividing it by 2), and 3 operations to replace 3 with 1 (by subtracting 1 twice).
Come up with a formula or an algorithm that takes an integer as input and returns the minimum number of operations needed to replace it with 1. One approach is to divide the problem into two cases:
If the integer is even, it is always optimal to divide it by 2, as this will get us closer to 1 in the fewest number of steps.
If the integer is odd, we need to decide whether to add 1 or subtract 1. We can do this by examining the last two bits of the integer. If the integer ends in 01, it is optimal to subtract 1. If the integer ends in 11, it is optimal to add 1. If the integer ends in 1 (i.e., it is 3), either operation is optimal.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this algorithm is O(n), where n is the number of operations needed to replace the integer with 1. 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1), as the algorithm only uses a fixed amount of space independent of the input.
# Code
```
func integerReplacement(n int) int {
    operationsCount:=0
    for n>1{
        //if number is even, then divide by 2
        if n&1==0{
            n>>=1
        //if number is odd, and ends in 011, then add by 1
        }else if n!=3 && n&3==3{
            n++
        //if number is odd, and ends in 001, then subtract by 1
        }else{
            n--
        }
        operationsCount++
    }
    return operationsCount
}
```