# Aculumative sum

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-addition/solutions/5625896/](https://leetcode.com/problems/range-addition/solutions/5625896/)

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
    public int[] GetModifiedArray(int l, int[][] u) {
        int []ans= new int[l];
        for (int i=0; i< u.Length; i++){
            ans[u[i][0]]+=u[i][2];
            if(u[i][1]+1<l)ans[u[i][1]+1]-=u[i][2];
        }
        for (int i=1; i<l; i++){
            ans[i]+=ans[i-1];
        }
        return ans;
    }
}
```