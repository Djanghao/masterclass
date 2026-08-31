# C++ || Binary Search || Easiest Beginner Friendly Sol

**Author:** singhabhinash
**Votes:** 307
**Link:** [https://leetcode.com/problems/sqrtx/solutions/3212506/](https://leetcode.com/problems/sqrtx/solutions/3212506/)

---

# Intuition of this Problem:
<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. If x is 0, return 0.
2. Initialize first to 1 and last to x.
3. While first is less than or equal to last, do the following:
    a. Compute mid as first + (last - first) / 2.
    b. If mid * mid equals x, return mid.
    c. If mid * mid is greater than x, update last to mid - 1.
    d. If mid * mid is less than x, update first to mid + 1.
4. Return last.

<!-- Describe your approach to solving the problem. -->



# Code:
```C++ []
class Solution {
public:
    int mySqrt(int x) {
        if (x == 0)
            return x;
        int first = 1, last = x;
        while (first <= last) {
            int mid = first + (last - first) / 2;
            // mid * mid == x gives runtime error
            if (mid  == x / mid)
                return mid;
            else if (mid > x / mid) {
                last = mid - 1;
            }
            else {
                first = mid + 1;
            }
        }
        return last;
    }
};
```
```Java []
class Solution {
    public int mySqrt(int x) {
        if (x == 0) {
            return 0;
        }
        int first = 1, last = x;
        while (first <= last) {
            int mid = first + (last - first) / 2;
            if (mid == x / mid) {
                return mid;
            } else if (mid > x / mid) {
                last = mid - 1;
            } else {
                first = mid + 1;
            }
        }
        return last;
    }
}

```
```Python []
class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0:
            return 0
        first, last = 1, x
        while first <= last:
            mid = first + (last - first) // 2
            if mid == x // mid:
                return mid
            elif mid > x // mid:
                last = mid - 1
            else:
                first = mid + 1
        return last

```

# Time Complexity and Space Complexity:
- Time complexity: **O(logn)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(1)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->