# C++| EASY TO UNDERSTAND | FAST AND efficient using Divide and conquer approach

**Author:** aarindey
**Votes:** 74
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/1344517/](https://leetcode.com/problems/longest-nice-substring/solutions/1344517/)

---

**Please upvote to motivate me in my quest of documenting all leetcode solutions(to help the community). HAPPY CODING:)
Any suggestions and improvements are always welcome**
```
class Solution 
{
public:
string longestNiceSubstring(string s) {
        if (s.size() < 2) return "";
        unordered_set<char> st(begin(s), end(s));
        for (int i = 0; i < s.size(); i++) {
             if (st.find((char) toupper(s[i])) == end(st) || st.find((char) tolower(s[i])) == end(st)) {
                string s1 = longestNiceSubstring(s.substr(0, i));
                string s2 = longestNiceSubstring(s.substr(i + 1));
                return s1.size() >= s2.size() ? s1 : s2;
            }
        }
        return s;
    }
};