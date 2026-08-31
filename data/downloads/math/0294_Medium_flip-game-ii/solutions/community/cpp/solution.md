# Neat C++ code with DFS

**Author:** uniquews
**Votes:** 15
**Link:** [https://leetcode.com/problems/flip-game-ii/solutions/73960/](https://leetcode.com/problems/flip-game-ii/solutions/73960/)

---

    bool canWin(string s) {
        if (s.size() == 0) {
            return false;
        }
        
        bool isMoved = false;
        for (size_t i = 0; i < s.size() - 1; ++i) {
            if (s[i] == '+' && s[i + 1] == '+') {
                isMoved = true;
                s[i] = '-';
                s[i + 1] = '-';
                if (!canWin(s)) {
                    return true;
                }
                s[i] = '+';
                s[i + 1] = '+';
            }
        }
        
        if (!isMoved) {
            return false;
        }
    }