# Simple Binary Search To Solve Guessing Game

**Author:** crikong
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solutions/5571137/](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/5571137/)

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
/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

public class Solution : GuessGame {
    public int GuessNumber(int n) {
        int low = -1;
        int high = n;

        if(n == 2147483647) {
            return n;
        }

        while(low <= high) {
            int mid = low + (high - low) / 2;
            int result = guess(mid);

            if(result == 0) {
                return mid;
            } else if (result == -1) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        

        return -1;
    }
}
```