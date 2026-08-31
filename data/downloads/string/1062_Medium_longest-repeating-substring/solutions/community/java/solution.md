# Simple Java DP

**Author:** varundhiman421
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/1936688/](https://leetcode.com/problems/longest-repeating-substring/solutions/1936688/)

---


DP Table for "abbaba"
 _ | _ a. b. b. a. b. a
[ [0, 0, 0, 0, 0, 0, 0], 
a[0, 0, 0, 0, 1, 0, 1], 
b[0, 0, 0, 1, 0, 2, 0], 
b[0, 0, 0, 0, 0, 1, 0], 
a[0, 0, 0, 0, 0, 0, 2], 
b[0, 0, 0, 0, 0, 0, 0], 
a[0, 0, 0, 0, 0, 0, 0]]



```
public int longestRepeatingSubstring(String s) {
        
        char[] str = s.toCharArray();
        int max=0;
        int len = str.length;
        int[][] dp = new int[len+1][len+1];
        
        for(int i=0; i<len; i++){
            for(int j=i+1; j<len; j++){
                if(str[i]==str[j]){
                    dp[i+1][j+1] = dp[i][j]+1;
                    max = Math.max(dp[i+1][j+1],max);
                }
            }
        }
        return max;
    }
	```