# O(1) solution

**Author:** ashis_kar
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5282279/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5282279/)

---

# Approach
Based on the quotient we can find the direction and the using the reminder we can find the result.

# Complexity
- Time complexity:$$O(1)$$

- Space complexity:$$O(1)$$

# Code
```
public class Solution {
    public int NumberOfChild(int n, int k) {
        n--;
        int q=k/n;
        int r=k%n;
        if((q&1)==1) //if odd, direction in reverse
            return n-r;
        return r;
    }
}
```