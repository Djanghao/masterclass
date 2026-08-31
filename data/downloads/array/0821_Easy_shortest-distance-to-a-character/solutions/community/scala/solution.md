# Best Explained Solution

**Author:** darian-catalin-cucer
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/3149079/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/3149079/)

---


```
class Solution {
    public int[] shortestToChar(String s, char c) {
        int len = s.length();
        int ans[] = new int[len];
        int prev = len;
        
        // forward
        for(int i = 0; i < len; i++){
            if(s.charAt(i) == c){
                prev = 0;
                ans[i] = 0;
            }
            else
                ans[i] = ++prev;
        }
        
        prev = len;
        for(int i = len-1; i >= 0; i--){
            if(s.charAt(i) == c){
                prev = 0;
                ans[i] = Math.min(ans[i], 0);
            }
            else
                ans[i] = Math.min(ans[i], ++prev);
        }
        
        return ans;
    }
}

```