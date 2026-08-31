# c#, Simple for loop

**Author:** bytchenko
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3694216/](https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3694216/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Skip first opened door and close all the others; the last closed door will be the first one skipped in the beginning. 

# Approach
<!-- Describe your approach to solving the problem. -->
Just a `for` loop

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
/**
 * Definition for a street.
 * class Street {
 *     public Street(int[] doors);
 *     public void CloseDoor();
 *     public bool IsDoorOpen();
 *     public void MoveRight();
 * }
 */
public class Solution {
    public int HouseCount(Street street, int k) {
        int result = 0;
        bool isFirst = true;
          
        for (int current = 0, first = 0; current <= first + k; ++current, street.MoveRight()) 
            if (street.IsDoorOpen()) {
                result = current - first;

                if (!isFirst) 
                    street.CloseDoor();
                else
                    first = current; 

                isFirst = false;
            }

        return result; 
    }
}
```