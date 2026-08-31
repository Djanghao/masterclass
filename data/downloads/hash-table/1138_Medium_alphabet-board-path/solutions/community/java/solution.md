# Easy Faster Efficient Java Soln

**Author:** devanshsrivastava707
**Votes:** 4
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/3120261/](https://leetcode.com/problems/alphabet-board-path/solutions/3120261/)

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
class Solution {
    public String alphabetBoardPath(String target) {
        int x = 0, y = 0;
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < target.length(); i++){
            char ch = target.charAt(i);
            int x1 = (ch - 'a') / 5;
            int y1 = (ch - 'a') % 5;
            while(x1 < x)   {x--; sb.append('U');}
            while(y1 > y)   {y++; sb.append('R');}
            while(y1 < y)   {y--; sb.append('L');}
            while(x1 > x)   {x++; sb.append('D');}
            sb.append('!');
        }
        return sb.toString();
    }
}
```