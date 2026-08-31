# Not so hard

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4894640/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4894640/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(26*n) n is number of questation mark
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public string MinimizeStringValue(string s) {
        int c=0;
        int[] h= new int[26];
        for (int i=0; i< s.Length; i++){
           if (s[i]!='?') h[s[i]-'a']++;
           else c++;
        }

        char[] c1= new char[c];
        string s3="";
        for (char c3='a'; c3<='z'; c3++){
            s3+=c3;
        }
        int ind=0;
        for (int i=0; i< c; i++){
            int min=100000;
            int minind=-1;
            for (int j=0; j<26; j++){
                if (h[j]<min){min=h[j]; minind=j;} ;
            }
            c1[ind]=s3[minind];
            h[minind]++;
            ind++;
        }
        ind=0;
        Array.Sort(c1);
       
        char []s1=s.ToArray();
        StringBuilder ans= new StringBuilder();
        for (int i=0; i<s1.Length; i++){
            if (s1[i]=='?'){ s1[i]=c1[ind]; ind++;}
            ans.Append(s1[i]);
        }
        return ans.ToString();
    }
}
```