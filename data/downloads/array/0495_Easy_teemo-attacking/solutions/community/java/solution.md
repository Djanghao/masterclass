# Java easy O(n) solution with intuition

**Author:** PhantomGhost
**Votes:** 34
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/1956310/](https://leetcode.com/problems/teemo-attacking/solutions/1956310/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Calculate total duration of attacks from teemo
- If next attack occurs before current duration ends, include the difference
   
# Complexity
- Time complexity: $$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        int total = 0;
        for (int i = 0; i < timeSeries.length-1; i++) {
            // if next attack occurs before current duration ends, include the difference
            if (timeSeries[i+1] <= timeSeries[i] + duration-1) {
                total += timeSeries[i+1] - timeSeries[i];
            } else { // add duration normally
                total += duration;
            }
        }
        total += duration; // include last attack from teemo
        return total;
    }
}