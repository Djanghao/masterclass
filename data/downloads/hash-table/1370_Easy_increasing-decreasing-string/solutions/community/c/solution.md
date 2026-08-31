# [c++]  solution easy to understand ,Runtime: 4 ms, faster than 98.52%  Memory Usage: 7.7 MB

**Author:** ajaykumar0
**Votes:** 31
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/582477/](https://leetcode.com/problems/increasing-decreasing-string/solutions/582477/)

---

***Resources: https://github.com/AJAYKR00KJ/LeetCode_Solution***

**Time Complexity: O( N * 2 * 26 ) = O(N)  for very large N**
**Space Complexity: O ( 52 ) = constant space**
```
class Solution {
public:
    string sortString(string s) {
        string res="";
        int a[26]={0},k=0;
        for(int i=0;i<s.length();i++)
        {a[s[i]-'a']++;k++;}
        while(k)
        {
            for(int i=0;i<26;i++)
            {
                if(a[i]>0) { res+=i+'a';k--;a[i]--;}
            }
            for(int i=25;i>=0;i--)
            {
                if(a[i]>0) { res+=i+'a';k--;a[i]--;}
            }
        }
        
        
        return res;
        
    }
};
```