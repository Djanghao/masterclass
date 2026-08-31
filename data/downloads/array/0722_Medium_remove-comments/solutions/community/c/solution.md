# Simple C++ Solution One pass with explanation

**Author:** groawr
**Votes:** 79
**Link:** [https://leetcode.com/problems/remove-comments/solutions/109216/](https://leetcode.com/problems/remove-comments/solutions/109216/)

---

The idea is to just separate it into 4 cases.
1. If the current character and next one forms a "//" and we are not in a block comment.
It means we ignore the current line and just move on to the next line.
2. If the current character and next one forms a new block comment and we are not currently in a block comment.
It means we can ignore all the next characters until we find a closing block comment.
3. If the current character and next one forms a closing block comment and we are currently still in a block comment.
It means we close the block comment and continue appending characters to string as usual.
4. Else this is just a normal character, append it to our string.
Everytime we hit a new line and we are not in a block comment currently, we can push the string into a vector of answer.

```
class Solution {
public:
    vector<string> removeComments(vector<string>& source) {
        vector<string> ans;
        string s;
        bool comment = false;
        for(int i = 0; i < source.size(); i++) {
            for(int j = 0; j < source[i].size(); j++) {
                if(!comment && j + 1 < source[i].size() && source[i][j] == '/' && source[i][j+1]=='/') break;
                else if(!comment && j + 1 < source[i].size() && source[i][j] == '/' && source[i][j+1]=='*') comment = true, j++;
                else if(comment && j + 1 < source[i].size() && source[i][j] == '*' && source[i][j+1]=='/') comment = false, j++;
                else if(!comment) s.push_back(source[i][j]);
            }
            
            if(!comment && s.size()) ans.push_back(s), s.clear();
        }
        return ans;
    }
};
```