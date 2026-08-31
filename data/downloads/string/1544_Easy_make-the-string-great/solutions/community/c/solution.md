# C++ Easy | One pass | O(n) Space

**Author:** ayushsingh1081
**Votes:** 113
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/2790806/](https://leetcode.com/problems/make-the-string-great/solutions/2790806/)

---

	\u2705 PLEASE UPVOTE IF YOU LIKE! \u2705
		
```
class Solution {
public:
    string makeGood(string s) {
        
        string ans;
        
        for(int i = 0 ; i < s.size() ; i++)
        {
            ans.push_back(s[i]);
            
            while(ans.size() && (ans.back()==s[i+1]+32 || ans.back()==s[i+1]-32))
            {
                ans.pop_back();
                i++;
            }
        }
        
        return ans;
    }
};
```
**Explanation:**

                    
                    Consider Sample Example 2   s = "abBAcC"
                    
*                     i = 0   ans = a          s[i+1] = b
*                     i = 1   ans = ab         s[i+1] = B
*                     i = 2   ans = a          s[i+1] = A
*                     i = 3   ans = ""         s[i+1] = c
*                     i = 4   ans = c          s[i+1] = C
*                     i = 5   ans = "" 
*                     Finally ans = ""                 


