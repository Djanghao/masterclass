# [C++] ✅ || O(n)  || Short Code 🔥  || Clean code || fast and easy

**Author:** hoshang2900
**Votes:** 364
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/2426521/](https://leetcode.com/problems/roman-to-integer/solutions/2426521/)

---

**Intuitive**
Roman numerals are usually written largest to smallest from left to right, for example: XII (7), XXVII (27), III (3)...
If a small value is placed before a bigger value then it's a combine number, for exampe: IV (4), IX (9), XIV (14)...
IV = -1 + 5
VI = 5 + 1
XL = -10 + 50
LX = 50 + 10
So, if a smaller number appears before a larger number, it indicates that the number is smaller by a quantity used as a suffix to it, which made going backwards seem easy.

	
	
	
	class Solution {
	public:
    int romanToInt(string s) {
        unordered_map<char,int> mp{
            {'I',1},
            {'V',5},
            {'X',10},
            {'L',50},
            {'C',100},
            {'D',500},
            {'M',1000},
        };
        int ans =0;
        for(int i=0;i<s.size();i++){
            if(mp[s[i]]<mp[s[i+1]])
                ans-=mp[s[i]];
            else
                ans+=mp[s[i]];
        }
        return ans;
        
    }
	};
	
**Please upvote to motivate me in my quest of documenting all leetcode solutions(to help the community). 
HAPPY CODING:)**

*Any suggestions and improvements are always welcome*

	