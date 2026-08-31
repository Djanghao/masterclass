# C# Solution using sort

**Author:** panaeimi
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/3911518/](https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/3911518/)

---

# Code
```
public class Solution {
    public int VisibleMountains(int[][] peaks) {
        for(int i = 0; i < peaks.Length; i++) {
            int prevX = peaks[i][0];
            peaks[i][0] = peaks[i][0] - peaks[i][1];
            peaks[i][1] = prevX + peaks[i][1];
        }

        Array.Sort(peaks, (x, y) => x[0] - y[0] == 0 ? y[1] - x[1] : x[0] - y[0]);
        int count = 0;
        for(int i = 0; i < peaks.Length; ) {
            int j = i + 1;
            bool dup = false; 
            while(j < peaks.Length && peaks[j][1] <= peaks[i][1]) {
                if(peaks[i][0] == peaks[j][0] && peaks[j][1] == peaks[i][1]) dup = true;
                j++;
            }
           
            if(!dup) count++;
            i = j;
        }

        return count;
    }
}
```