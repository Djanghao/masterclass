# Easy Solution in Java

**Author:** hashcoderz
**Votes:** 89
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/3112480/](https://leetcode.com/problems/first-bad-version/solutions/3112480/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
The code uses a binary search algorithm to find the first bad version of a software.


# Complexity
- Time complexity: $$O(logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {

    public int firstBadVersion(int n) {
        int low = 0;
        int high = n;

        while(low<=high){
            int mid = low + (high-low)/2;
            if(isBadVersion(mid)==true && isBadVersion(mid-1)==false)   return mid;
            else if(isBadVersion(mid)==false ) low = mid+1;
            else high= mid;
        }     
        return -1;
    }
}
```
### If you like the solution then please upvote me it gives me encouragement to do more...........