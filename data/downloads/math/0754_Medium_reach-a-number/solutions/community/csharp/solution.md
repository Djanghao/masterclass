# Reach a Number Problem

**Author:** dogukansoysal97
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-a-number/solutions/5662606/](https://leetcode.com/problems/reach-a-number/solutions/5662606/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First, think the movement numbers as a double sided abacus. If you move one from another, you will change the total sum by the number * 2. 
(Ex. number : 3, if you move it from left to right, Sum = Sum -(-3) + (+3))


# Approach
<!-- Describe your approach to solving the problem. -->
By swiping numbers you should focus to reach exact target or exceed it. 
When you exceed the make sure the difference between the sum and target is even. The first move you got the even difference, its done.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int ReachNumber(int target) {
        int numMoves = 0;
        int currentValue = 0;
        target *= target < 0 ? -1 : 1;

        while(currentValue < target || (currentValue > target && (currentValue - target) % 2 == 1)){
            Calculate(ref numMoves, ref currentValue);
        }
        return numMoves;
    }

    public void Calculate(ref int numMoves, ref int currentValue){
            numMoves++;
            currentValue += numMoves;
    }
}
```