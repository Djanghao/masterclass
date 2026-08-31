# simple C# solution - IlanBitan :)

**Author:** bitanilan
**Votes:** 2
**Link:** [https://leetcode.com/problems/elimination-game/solutions/3578799/](https://leetcode.com/problems/elimination-game/solutions/3578799/)

---

# Intuition.
In each iteration:
If it's the left-to-right pass or if the remaining count is odd, update the head position by adding the step value.
Reduce the remaining count by half since half of the elements will be eliminated in each round.
Double the step value since the interval between adjacent elements is doubled after each round.
Toggle the isLeftToRight flag to switch the direction of elimination for the next round.
# Approach
The approach used in this solution is based on the observation of patterns in the elimination process. By understanding the behavior of the elements being eliminated, we can determine the position of the last remaining element without actually performing the eliminations one by one.

# Complexity
- Time complexity:
O(log n) 

- Space complexity:
O(1) 

# Code
```
public class Solution {
    public int LastRemaining(int n) {
        bool isLeftToRight = true; 
        int remaining = n; 
        int step = 1;  
        int head = 1;  

        while (remaining > 1) {
            if (isLeftToRight || remaining % 2 == 1) {
                head += step;
            }
            remaining /= 2;
            step *= 2;
            isLeftToRight = !isLeftToRight;
        }

        return head;
    }
}

```