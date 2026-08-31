# C++ Simple Intuitive Short Easy-to-Read Solution O(nm) time, O(1) space

**Author:** YehudisK
**Votes:** 52
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/1077716/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/1077716/)

---

```
class Solution {
public:
    bool canFormByDeleting(string word, string str) {
        int word_i = 0, str_i = 0;
        
        while (word_i < word.size() && str_i < str.size()) {
            
            if (word[word_i] == str[str_i])
                word_i++; 
            
            str_i++;
        }
        
        return word_i == word.size();
    }
    
    string findLongestWord(string s, vector<string>& d) {
        string res = "";
        
        for (auto str : d) {
            
            if (canFormByDeleting(str, s)) {
                
                if (str.size() > res.size() || (str.size() == res.size() && str < res))
                    res = str;
            }
        }
        
        return res;
    }
};
```
**Like it? please upvote...**