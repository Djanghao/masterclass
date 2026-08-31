# C++ || Easy O(NxS) solution || String

**Author:** Yash2arma
**Votes:** 28
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/1994746/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/1994746/)

---

```
class Solution {
public:
    //iterate over each words[i] and take the sub-string str from s of size equals to words[i].
    //and compare str with words[i] if both are equal increase count by 1.
    int countPrefixes(vector<string>& words, string s) 
    {
        int count=0;
        for(auto it: words)
        {
            string str = s.substr(0, it.size());
            if(str == it) count++;            
        }
        return count;        
    }
};
```