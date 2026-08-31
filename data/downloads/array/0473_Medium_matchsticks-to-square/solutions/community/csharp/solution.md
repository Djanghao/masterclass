# Recursive solution by creating 4 buckets

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/4710422/](https://leetcode.com/problems/matchsticks-to-square/solutions/4710422/)

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
public class Solution {
    public bool Makesquare(int[] matchsticks) {
        int n = matchsticks.Length;
        long sum =0;
        for(int i=0;i<n; i++)
        {
            sum += (long)matchsticks[i];
        }
        if (sum%4 != 0)
        {
            return false;
        }
        return Recur(matchsticks, 0, 0, 0,0,0, (long)(sum/4));
    }

    private bool Recur(int[] m, int index, long s1, long s2, long s3, long s4, long target)
    {
        if (index >= m.Length)
        {
            if ((s1 == s2) &&  (s2== s3) && (s3 == s4) && (s4 == target))
            {
                return true;
            }
            return false;
        }
        if (s1 > target || s2 > target || s3 > target || s4 > target)
        {
            return false;
        }
        long n = (long)m[index];
        bool a = Recur(m, index+1, s1+n, s2, s3, s4, target);
        if (!a && s1 != s2) {
            a = Recur(m, index+1, s1, s2+n, s3, s4, target);
        }
        if (!a && s2 != s3) {
            a=  Recur(m, index+1, s1, s2, s3+n, s4, target);
        }
        if (!a && s3 != s4) {
            a =Recur(m, index+1, s1, s2, s3, s4+n, target);
        }
        return a;
    }
}
```