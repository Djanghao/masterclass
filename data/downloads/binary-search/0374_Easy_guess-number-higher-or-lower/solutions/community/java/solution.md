# C++ || Binary Search || Easiest Beginner Friendly Sol

**Author:** singhabhinash
**Votes:** 52
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solutions/3212562/](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/3212562/)

---

# Intuition of this Problem:
<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. Initialize first to 1 and last to n.
2. While first is less than or equal to last, do the following:
    a. Compute mid as first + (last - first) / 2.
    b. If guess(mid) returns 0, return mid.
    c. If guess(mid) returns -1, update last to mid - 1.
    d. If guess(mid) returns 1, update first to mid + 1.
3. Return -1.

<!-- Describe your approach to solving the problem. -->

# Humble Request:
- If my solution is helpful to you then please **UPVOTE** my solution, your **UPVOTE** motivates me to post such kind of solution.
- Please let me know in comments if there is need to do any improvement in my approach, code....anything.
- **Let's connect on** https://www.linkedin.com/in/abhinash-singh-1b851b188

![57jfh9.jpg](./images/0.jpeg)

# Code:
```C++ []
/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

class Solution {
public:
    int guessNumber(int n) {
        int first = 1, last = n;
        while (first <= last) {
            int mid = first + (last - first) / 2;
            if (guess(mid) == 0)
                return mid;
            else if (guess(mid) == -1)
                last = mid - 1;
            else
                first = mid + 1;
        }
        return -1;
    }
};
```
```Java []
public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int first = 1, last = n;
        while (first <= last) {
            int mid = first + (last - first) / 2;
            int res = guess(mid);
            if (res == 0) {
                return mid;
            } else if (res == -1) {
                last = mid - 1;
            } else {
                first = mid + 1;
            }
        }
        return -1;
    }
}

```
```Python []
class Solution(GuessGame):
    def guessNumber(self, n: int) -> int:
        first, last = 1, n
        while first <= last:
            mid = first + (last - first) // 2
            res = self.guess(mid)
            if res == 0:
                return mid
            elif res == -1:
                last = mid - 1
            else:
                first = mid + 1
        return -1

```

# Time Complexity and Space Complexity:
- Time complexity: **O(logn)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(1)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->