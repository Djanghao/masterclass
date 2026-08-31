# Simplest Java solution - easy to understand, no DFS

**Author:** dsingh
**Votes:** 6
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/1367944/](https://leetcode.com/problems/next-closest-time/solutions/1367944/)

---

```
// Simple brute force idea:
// Increment given time by 1 minute and see if it satisfies constraints,
//   if yes, return it as the answer
//   if no, increment by 1 minute and loop
// There will definitely be an answer within the next 24 hours of the given time.
class Solution {
    public String nextClosestTime(String time) {
        // store given digits in a set
        Set<Integer> set = new HashSet<>();
        for (char c : time.toCharArray()) {
            set.add(c - '0');
        }
        
        // convert given time into minutes since midnight
        int mins = Integer.parseInt(time.substring(0, 2)) * 60 + // hours part of "HH:MM", hence multiply with 60
            Integer.parseInt(time.substring(3)); // minutes part of "HH:MM"
        
        while (true) {
            mins++;
            // Important: reset minutes to 0 if we hit midnight
            if (mins == 24*60) mins = 0;
            
            // extract "HH:MM" parts from total minutes
            // divide by 60 to get hours part, then extract both digits for the HH part
            int H = (mins/60)/10;
            int h = (mins/60)%10; 
            // modulo 60 to get minutes part, then extract both digits for the MM part
            int M = (mins%60)/10;
            int m = (mins%60)%10;
            
            // check if these digits satisfy the constraint, i.e., the given time comprises of these digits
            if (!set.contains(H) || !set.contains(h) || !set.contains(M) || !set.contains(m)) {
                // if "HH" or "MM" is not made from the given digits, increment minutes
                continue;
            }
            // if constraint is satisfied, this is the answer
            return H + "" + h + ":" + M + "" + m;
        }
    }
}
```