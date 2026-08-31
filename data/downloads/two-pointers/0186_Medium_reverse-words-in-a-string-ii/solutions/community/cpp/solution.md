# 6-lines 8ms C++ Solution

**Author:** jianchao-li
**Votes:** 9
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/53845/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/53845/)

---

The idea is simple: reverse the full string `s` first and then reverse each word in it in place. For reversing each word, we just need to locate the left and right boundaries of the word. The code is as follows.

    class Solution { 
    public:
        void reverseWords(string &s) {
            reverse(s.begin(), s.end());
            int n = s.length(), l = 0, r = 0;
            while (r < n) {
                while (r < n && !isspace(s[r])) r++;
                reverse(s.begin() + l, s.begin() + r); 
                l = ++r;
            }
        } 
    };