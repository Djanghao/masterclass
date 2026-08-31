# C# DP, Trie, Suffix solutions

**Author:** clewBy
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/2919517/](https://leetcode.com/problems/longest-repeating-substring/solutions/2919517/)

---

DP solution:
```
public class Solution {
    public int LongestRepeatingSubstring(string s) {
        int n = s.Length, max = 0;
        int[,] dp = new int[n+1,n+1];
        for(int i = 1; i <= n; i++){
            for(int j = i+1; j <= n; j++){
                if(s[i-1] == s[j-1]){
                    dp[i,j] = dp[i-1,j-1]+1;
                    max = Math.Max(max, dp[i,j]);
                }
            }
        }
        return max;
    }
}
```
Trie solution:
```
public class Solution {
    class Trie{
        public Trie[] children = new Trie[26];
    }    
    public int LongestRepeatingSubstring(string s) {
        int res = 0;
        Trie trie = new Trie();
        for(int i = 0; i < s.Length; i++){
            Trie curr = trie;
            for(int j = i; j < s.Length; j++){
                if(curr.children[s[j]-'a'] == null){
                    curr.children[s[j]-'a'] = new Trie();
                } else{
                    res = Math.Max(res, j-i+1);
                }
                curr = curr.children[s[j]-'a'];
            }
        }
        return res;
    }
}
```
Suffix array solution:
```
public class Solution {
    public int LongestRepeatingSubstring(string s) {
        int n = s.Length, res = 0;
        string[] suffixes = new string[n];
        for(int i = 0; i < n; i++)
            suffixes[i] = s.Substring(i);
        Array.Sort(suffixes);
        for(int i = 1; i < n; i++){
            int j = 0, len1 = suffixes[i-1].Length, len2 = suffixes[i].Length;
            while(j < len1 && j < len2 && suffixes[i-1][j] == suffixes[i][j])
                j++;
            res = Math.Max(res, j);
        }
        return res;
    }
}
```