# Java BottomUp DP O(n*m) + O(min(n, m)) Beats 100% + comments

**Author:** _velasoka
**Votes:** 1
**Link:** [https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5110040/](https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5110040/)

---

**Intuition:** Find longest common substring.
For all the substring calculate minimum operation required.

**Approach:** Find longest common substring using DP.
```
(eg) initial = "abcde", target = "cdef"
if(initial.charAt(i)==target.charAt(j)) {
    dp[i][j]=1+ //take i+1 & j+1 value
} else {
    dp[i][j]=0;
}
```

Time & Space complexity: O(m*n)


```
class Solution {
    public int minOperations(String initial, String target) {
        return lcSubstr(initial, target);
    }

    private int lcSubstr(String s, String t) {
        int n = s.length(), m = t.length();
        int answer = Integer.MAX_VALUE;

        //1D dp
        int[] dp = new int[m+1];
        for(int i = n-1; i>=0; i--) {
            int tmp = dp[m];
            for(int j = m-1; j>=0; j--) {
                //store current `j` so that we can achieve 1D dp
                int nextTmp = dp[j];
                if(s.charAt(i)==t.charAt(j)) {
                    dp[j]=1+tmp;
                    answer = Math.min(answer, minOps(s, t, i, j, dp[j]));
                } else {
                    //char is not matching then next iteration it must be `0`
                    dp[j]=0;
                }
                tmp = nextTmp; //equals to dp[i+1][j+1]
            }
        } 
        return Math.min(answer, n+m);
    }

    private int minOps(String s, String t, int i, int j, int length) {
        int n = s.length(), m = t.length();

        //remaining character in `initial` to be removed
        int sRemain = i+n-(i+length); 

        // remaining character in `target` to be added
        int tRemain = j+m-(j+length); 

        return sRemain+tRemain; 
    }
}
```
Please **UPVOTE**, if you find the solution helpful