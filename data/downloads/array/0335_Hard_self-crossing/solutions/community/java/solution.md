# Simple Java Solution

**Author:** munsteur
**Votes:** 61
**Link:** [https://leetcode.com/problems/self-crossing/solutions/79168/](https://leetcode.com/problems/self-crossing/solutions/79168/)

---

    public class Solution {
        public boolean isSelfCrossing(int[] x) {
            if (x.length <= 3) {
                return false;
            }
            int i = 2;
            // keep spiraling outward
            while (i < x.length && x[i] > x[i - 2]) {
                i++;
            }
            if (i >= x.length) {
                return false;
            }
            // transition from spiraling outward to spiraling inward
            if ((i >= 4 && x[i] >= x[i - 2] - x[i - 4]) ||
                    (i == 3 && x[i] == x[i - 2])) {
                x[i - 1] -= x[i - 3];
            }
            i++;
            // keep spiraling inward
            while (i < x.length) {
                if (x[i] >= x[i - 2]) {
                    return true;
                }
                i++;
            }
            return false;
        }
    }