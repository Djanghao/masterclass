# 8-lines C++, 7-lines Python

**Author:** jianchao-li
**Votes:** 18
**Link:** [https://leetcode.com/problems/flip-game/solutions/73933/](https://leetcode.com/problems/flip-game/solutions/73933/)

---

The idea is quite straightforward: just traverse `s` and each time when we see two consecutive `+`s, convert them to `-`s and add the resulting string to the final result `moves`. But remember to recover the string after that.

The C++ code is as follows.

    class Solution {
    public:
        vector<string> generatePossibleNextMoves(string s) {
            vector<string> moves;
            int n = s.length();
            for (int i = 0; i < n - 1; i++) {
                if (s[i] == '+' && s[i + 1] == '+') { 
                    s[i] = s[i + 1] = '-';
                    moves.push_back(s);
                    s[i] = s[i + 1] = '+';
                }
            }
            return moves;
        }
    };

Well I also try to write a Python solution since Python supports sequential comparisons, which is quite convenient. But Python does not support modifying a string and I can only use `list` and `join` to do the same thing.

    class Solution(object):
        def generatePossibleNextMoves(self, s):
            """
            :type s: str
            :rtype: List[str]
            """
            moves, n, s = [], len(s), list(s)
            for i in xrange(n - 1):
                if s[i] == s[i + 1] == '+': 
                    s[i] = s[i + 1] = '-'
                    moves += ''.join(s),
                    s[i] = s[i + 1] = '+' 
            return moves