# JAVA || From Recursion to Memoization to Tabulation || Easy-solution

**Author:** gourav02
**Votes:** 56
**Link:** [https://leetcode.com/problems/count-number-of-texts/solutions/2019208/](https://leetcode.com/problems/count-number-of-texts/solutions/2019208/)

---

Recursion -->>

```
class Solution {
    int mod = (1000000007);

    public int countTexts(String pressedKeys) {
        int[] key = new int[] { 0, 0, 3, 3, 3, 3, 3, 4, 3, 4 };
        int n = pressedKeys.length();
        return solve(0,pressedKeys,key);
    }

    public int solve(int ind, String s, int[] key) {
        if (ind == s.length()) {
            return 1;
        }
        int count = 0;
        int num = s.charAt(ind) - '0';
        int rep = key[num];
        for (int i = 0; i < rep && ind + i < s.length() && s.charAt(ind) == s.charAt(ind + i); i++) {
            count += solve(ind + 1 + i, s, key);
            count %= mod;
        }
        return  count;
    }
}
```

Memoization(Top-Down)-->>

```
class Solution {
    int mod = (1000000007);
    public int countTexts(String pressedKeys) {
         int[] key = new int[] {0,0,3,3,3,3,3,4,3,4};
         int n = pressedKeys.length();
         int[] dp = new int[n];
        Arrays.fill(dp,-1);
         return solve(0,pressedKeys,key,dp);
    }
    public int solve(int ind , String s ,int[] key,int[]dp){
        if(ind==s.length()){
            return 1;
        }
        if(dp[ind]!=-1) return dp[ind];
        int count = 0;
        int num = s.charAt(ind)-'0';
        int rep = key[num];
        for(int i =0;i<rep && ind+i<s.length() && s.charAt(ind)==s.charAt(ind+i);i++){
            count += solve(ind+1+i,s,key,dp);
            count %= mod;
        }
        return dp[ind] = count;
    }
}
```

Tabulation(Bottom up)-->>
```
class Solution {
    int mod = (1000000007);

    public int countTexts(String pressedKeys) {
        int[] key = new int[] { 0, 0, 3, 3, 3, 3, 3, 4, 3, 4 };
        int n = pressedKeys.length();
        int[] dp = new int[n + 1];
        dp[n] = 1;

        for (int ind = n - 1; ind >= 0; ind--) {
            int count = 0;
            int num = pressedKeys.charAt(ind) - '0';
            int rep = key[num];
            for (int i = 0; i < rep && ind + i < pressedKeys.length() && pressedKeys.charAt(ind) == pressedKeys.charAt(ind + i); i++) {
                count += dp[ind+i+1];
                count %= mod;
            }
             dp[ind] = count;
        }
        return dp[0];
    }
}
```

Do Upvote if you find these solution Helpful.