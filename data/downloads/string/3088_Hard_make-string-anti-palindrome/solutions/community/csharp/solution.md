# C# Approach

**Author:** NSNR
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-string-anti-palindrome/solutions/4927066/](https://leetcode.com/problems/make-string-anti-palindrome/solutions/4927066/)

---


# Code
```
public class Solution {
    public string MakeAntiPalindrome(string s) {
        int[] charCounts = new int[26];
        foreach(char a in s){
            charCounts[a-'a']++;
        }

        foreach(int a in charCounts){
            if(a > s.Length/2) return "-1";
        }

        StringBuilder sb = new StringBuilder();
        for(int i = 0;i<s.Length;i++){
            if(!AddSmallest(charCounts, sb, s.Length)) return "-1";
        }
        return sb.ToString();
    }

    private bool AddSmallest(int[] charCounts, StringBuilder sb, int l){
        for(int i = 0;i<26;i++){
            if(sb.Length >= l/2 && sb[l-sb.Length-1] == 'a'+i) continue;
            if(charCounts[i] > 0){
                sb.Append((char)('a' + i));
                charCounts[i]--;
                return true;
            }
        }
        return false;
    }
}
```