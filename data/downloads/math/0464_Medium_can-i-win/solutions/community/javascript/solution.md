# JavaScript, bitmask, DP memoization, minimax

**Author:** ZachJH
**Votes:** 1
**Link:** [https://leetcode.com/problems/can-i-win/solutions/2497827/](https://leetcode.com/problems/can-i-win/solutions/2497827/)

---

```
function canIWin(maxChoosableInteger, desiredTotal) {
    
    if (desiredTotal === 0) return true;
    if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) return false;

    const initialChoices = Math.pow(2, maxChoosableInteger) - 1;
    
    const dp = [];
    
    function DP(choices, total) {
        if (total <= 0) return false;
        
        if (dp[choices] !== undefined) {
            return dp[choices];
        }
        
        let pow = 0;
        let choicesCopy = choices;
        
        dp[choices] = false;
        
        while (choicesCopy > 0) {
            if (choicesCopy % 2 && !DP(choices - (1 << pow), total - pow - 1)) {
                dp[choices] = true;
                break;
            }
            choicesCopy >>= 1;
            pow++;
        }
        
        return dp[choices];
    }
    
    return DP(initialChoices, desiredTotal);
}
```