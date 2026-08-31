# [Java] DP | Approach For Everyone

**Author:** user8040Co
**Votes:** 4
**Link:** [https://leetcode.com/problems/decremental-string-concatenation/solutions/3677998/](https://leetcode.com/problems/decremental-string-concatenation/solutions/3677998/)

---

# Brute force (TLE)
Just take the complete string `str` formed till now along with index `idx`.
Check the two cases :
`stri = join(stri - 1, words[i])`
`stri = join(words[i], stri - 1)`
while updating the string. 
```
class Solution {
    public static int minimizeConcatenatedLength(String[] words) {
        int n = words.length;

        Map<String, Integer> []dp = new Map[n];
        for(int i = 0; i < n; i++){
            dp[i] = new HashMap<>();
        }

        return solve(1, words[0], words, dp);
    }
    public static int solve(int idx, String str, String []words, Map<String, Integer> []dp){
        if(idx >= words.length){
            return str.length();
        }

        if(dp[idx].containsKey(str)){
            return dp[idx].get(str);
        }

        int ans = (int)1e8;
        // stri = join(stri - 1, words[i])
        StringBuilder sb = new StringBuilder(str);
        if(str.charAt(str.length() - 1) == words[idx].charAt(0)){
            sb.deleteCharAt(sb.length() - 1);
            sb.append(words[idx]);
        }
        else{
            sb.append(words[idx]);
        }

        ans = solve(idx + 1, sb.toString(), words, dp);

        // stri = join(words[i], stri - 1)
        sb = new StringBuilder(words[idx]);
        if(sb.charAt(sb.length() - 1) == str.charAt(0)){
            sb.deleteCharAt(sb.length() - 1);
            sb.append(str);
        }
        else{
            sb.append(str);
        }

        ans = Math.min(ans, solve(idx + 1, sb.toString(), words, dp));

        dp[idx].put(str, ans);
        return ans;
    }
}
``` 

# Optimized Approach (AC)
Just count the number of characters not to count while merging the strings instead of count the length of string.
Maximize the `count` so that our answer should get minimized i.e `n - count`.

Instead of taking the whole string `str` we can just take two characters i.e `start` which tell us start character of our string `str` and `end` which tells about our last character of the string `str`.

```
class Solution {
    int [][][]dp;
    public int minimizeConcatenatedLength(String[] words) {
        int n = words.length;

        int total = 0;
        for(int i = 0; i < n; i++){
            total += words[i].length();
        }

        dp = new int[n+1][26][26];
        for(int [][]ar : dp){
            for(int []ele : ar){
                    Arrays.fill(ele, -1);
            }
        }

        return total - solve(1, words[0].charAt(0), words[0].charAt(words[0].length() - 1), words);
    }
    public int solve(int idx, char start, char end, String []words){
        if(idx >= words.length){
            return 0;
        }

        if(dp[idx][start - 'a'][end - 'a'] != -1){
            return dp[idx][start - 'a'][end - 'a'];
        }

        int ans = (int)1e8;
        
        // stri = join(stri - 1, words[i])
        if(end == words[idx].charAt(0)){
            ans = 1 + solve(idx + 1, start, words[idx].charAt(words[idx].length() - 1), words);
        }
        else{
            ans = solve(idx + 1, start, words[idx].charAt(words[idx].length() - 1), words);
        }

        // stri = join(words[i], stri - 1)
        if(words[idx].charAt(words[idx].length() - 1) == start){
            ans = Math.max(ans, 1 + solve(idx + 1, words[idx].charAt(0), end, words));
        }
        else{
            ans = Math.max(ans, solve(idx + 1, words[idx].charAt(0), end, words));
        }

        return dp[idx][start - 'a'][end - 'a'] = ans;
    }
}
```
If this solution helped a little while thinking and solving then `UPVOTE` !!!!!

Thank You !
