# [C++] Simple O(N) with explanation

**Author:** cgsgak1
**Votes:** 121
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/944411/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/944411/)

---

The idea is simple:
1) Build the string of length k, which consists of letter 'a' (lexicographically smallest string).
2) Increment string from right to left until it's value won't reach the target.

Time complexity O(n), space complexity O(1) - no additional space used except for result string.
```
class Solution {
public:
    string getSmallestString(int n, int k) {
        string res(n, 'a');
        k -= n;
        
        int i = res.size() - 1;
        while (k > 0) {
            int tmp = min(k, 25);
            res[i] += tmp;
            k -= tmp;
            --i;
        }
        
        return res;
    }
};