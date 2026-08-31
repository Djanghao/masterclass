# [C++] Easy solution, dynamic programming-bottom up

**Author:** harshuljain
**Votes:** 3
**Link:** [https://leetcode.com/problems/stone-game-iv/solutions/1709096/](https://leetcode.com/problems/stone-game-iv/solutions/1709096/)

---

```
class Solution {
public:
    bool winnerSquareGame(int n) {
        if(sqrt(n) == floor(sqrt(n))) return true;
    
        vector<bool> firstPlayerWin(n+1);
        firstPlayerWin[1] = true;
        
        for(int i = 2; i <= n; i++) {
            if(sqrt(i) == floor(sqrt(i))) {
                firstPlayerWin[i] = true;
                continue;
            }
            
            // check if first player can force the other player into a losing state
            int j = 1;
            while(i - j*j > 0) {
                if(!firstPlayerWin[i-j*j]) {
                    firstPlayerWin[i] = true;
                    break;
                }
                j++;
            }
        }
        return firstPlayerWin[n];
    }
};
```
