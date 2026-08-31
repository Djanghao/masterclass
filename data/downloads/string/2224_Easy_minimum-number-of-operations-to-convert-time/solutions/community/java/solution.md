# Java | Loop | Easy To Understand

**Author:** SudhanshuMallick
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1908985/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1908985/)

---

**Here I am discussing my approach to this problem**
**Approach:**
1. Convert both **current time** and **correct time** into **minutes**.
2. **Increase** **current time** by 60min until it becomes **just less or equal to correct time**.
3. Similarly do the **same thing** with 15min, 5min, and 1min window.
4. Count the **number of iterations** performed.
5. Return the number of iterations.

**Source Code:**
```
class Solution {
    public int convertTime(String current, String correct) {
        String[] curr = current.split(":");
        String[] corr = correct.split(":");
        int cur = Integer.parseInt(curr[0]) * 60 + Integer.parseInt(curr[1]);
        int cor = Integer.parseInt(corr[0]) * 60 + Integer.parseInt(corr[1]);
        int count = 0;
        
        while(cur + 60 <= cor) {
            ++count;
            cur += 60;
        }
        
         while(cur + 15 <= cor) {
            ++count;
            cur += 15;
        }
        
         while(cur + 5 <= cor) {
            ++count;
            cur += 5;
        }
        
         while(cur + 1 <= cor) {
            ++count;
            cur += 1;
        }
        
        return count;
        
    }
}
```

**Complexity Analysis:**
```
Time Complexity: O(c) // c some constant value <= 100
Space Complexity : O(1)
```