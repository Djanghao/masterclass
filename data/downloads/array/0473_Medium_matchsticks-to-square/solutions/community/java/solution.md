# Simple Java solution using recursion

**Author:** odcodes
**Votes:** 43
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/2270381/](https://leetcode.com/problems/matchsticks-to-square/solutions/2270381/)

---

```
class Solution {
    public boolean makesquare(int[] matchsticks) {
        
        int total = 0;
        
        for (int i : matchsticks) {
            total += i;
        }
        
        if (total % 4 != 0) return false; // if we cant make 4 equals sides then theres no way to make a square
        // sort the array and place the largest sides first. required optimization to not TLE
        Arrays.sort(matchsticks); 
        return match(matchsticks, matchsticks.length - 1, 0, 0, 0, 0, total / 4);
    }
    
    public boolean match(int[] matchsticks, int index, int top, int bottom, int left, int right, int target) {
        
        if (top == target && bottom == target && left == target && right == target) return true;

        if (top > target || bottom > target || left > target || right > target) return false;
                        
        int val = matchsticks[index];
        
        boolean t = match(matchsticks, index - 1, top + val, bottom, left, right, target);
        if (t) return true;
        boolean b = match(matchsticks, index - 1, top, bottom + val, left, right, target);
        if (b) return true;
        boolean l = match(matchsticks, index - 1, top, bottom, left + val, right, target);
        if (l) return true;
        boolean r = match(matchsticks, index - 1, top, bottom, left, right + val, target);
        if (r) return true;
        
        return false;
    }
}
```