# Easy C++ || using two map

**Author:** codernishchay
**Votes:** 35
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2085664/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2085664/)

---

```
Approach :
       => Take two map,  one to store frequency of target, and another for sentence. 
	   => Traverse over the mp(frequency of target ) and calculate the minimum frequency ratio 
	                            mn =  min(mn ,   frequency of a char in sentance / frequency of same char in target) ; 		  
										 
		Space : O(n) 
		Time : O(n)
class Solution {
public:
    int rearrangeCharacters(string s, string target) {
        unordered_map<char,int> targetFreq ; 
        for(auto a : target) {
             targetFreq[a] ++;
        }
        unordered_map<char , int> sentFreq ; 
        for(auto a : s) {
            sentFreq[a] ++ ; 
        }
        int mn = INT_MAX  ; 
        for(auto a : targetFreq ) {
             mn = min(mn , sentFreq[a.first]/a.second); 
        }
        return mn ; 
    }
};
```
