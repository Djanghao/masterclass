# C++ Beats 100% on Time and Memory with Explanation

**Author:** ElvisTheKing
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/410507/](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/410507/)

---

See detailed comments for explanation
```
class Solution {
public:
    int countLetters(string S) {
        // if S has only one distinct letter than so do all of S's substrings. Assuming S is length n then there are n substrings of length 1, n - 1 substrings of length 2, ..., 1 substring of length n. The total number of substrings is 1 + 2 + ... + n
        // if S has more than one distinct character than we can scan S from left to right to find the first differing character and recursively call countLetters on the two split strings
        
        if (S.length() == 1) // handle base case separately so the string splitting is cleaner
            return 1;
        
        set<char> chars;
        for (const char& c: S)
            chars.insert(c);
        
        const bool hasOneDistinct = chars.size() == 1;
        
        if (hasOneDistinct)
            return S.length() * (S.length() + 1) / 2; // formula for sum of first n natural numbers
        
        // find the first character that differes from S[0]
        int i = 1;
        while (S[i] == S[0]) {
            ++i;
        }
        
        // split the strings and recurse
        string left = S.substr(0, i);
        string right = S.substr(i, S.length() - i);
        return countLetters(left) + countLetters(right);
    }
};
```