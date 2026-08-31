# C++ No fancy O(NM) solution

**Author:** saiteja_balla0413
**Votes:** 38
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1404046/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1404046/)

---

```
class Solution {
public:
    int numOfStrings(vector<string>& patterns, string word) {
        int count=0;
        for(int i=0;i<patterns.size();i++)
        {
            if(word.find(patterns[i])!=string::npos)
                count++;
        }
        return count;
    }
};
```
**Upvote if this helps you :)**