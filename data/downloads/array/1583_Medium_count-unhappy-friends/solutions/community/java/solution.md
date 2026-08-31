# 4ms java solution

**Author:** bluntKatana
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-unhappy-friends/solutions/844542/](https://leetcode.com/problems/count-unhappy-friends/solutions/844542/)

---

Looks like the fastest java solution according to the submissions page. Did a simple optimization -
Reduce the number of compares by starting the second loop from i+1 instead of 0(like in the other solutions) because according to the unhappy friend definition, friends will be unhappy in pairs.

Below is the code. Do comment if you find any issues with the code.

```
class Solution {
    public int unhappyFriends(int n, int[][] preferences, int[][] pairs) {
        int[][] prefMap = new int[n][n];
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n-1; j++) {
                prefMap[i][preferences[i][j]] = j;
            }
        }
        
        int a,b,prefA,prefB,prefEle1,prefEle2,ele1,ele2;
        int count = 0;
        boolean[] flags = new boolean[n];
        for (int i = 0; i < pairs.length; i++) {
            a = pairs[i][0];
            b = pairs[i][1];
            prefB = prefMap[a][b];
            prefA = prefMap[b][a];
            for (int j = i+1; j < pairs.length; j++) {
                ele1 = pairs[j][0];
                ele2 = pairs[j][1];
                prefEle2 = prefMap[ele1][ele2];
                prefEle1 = prefMap[ele2][ele1];
      
                if (prefB > prefMap[a][ele1] && prefEle2 > prefMap[ele1][a]) {
                    flags[a] = true;
                    flags[ele1] = true;
                }
                if (prefB > prefMap[a][ele2] && prefEle1 > prefMap[ele2][a]) {
                    flags[a] = true;
                    flags[ele2] = true;
                }
                
                if (prefA > prefMap[b][ele1] && prefEle2 > prefMap[ele1][b]) {
                    flags[b] = true;
                    flags[ele1] = true;
                }
                if (prefA > prefMap[b][ele2] && prefEle1 > prefMap[ele2][b]) {
                    flags[b] = true;
                    flags[ele2] = true;
                }
            }
            
        }
        
        for (boolean flag : flags) {
            if (flag) {
                count++;
            }
        }
        return count;
    }
}
```