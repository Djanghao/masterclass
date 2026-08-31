# C# Backtracking with memo

**Author:** panaeimi
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game-ii/solutions/3536062/](https://leetcode.com/problems/flip-game-ii/solutions/3536062/)

---

# Code
```
public class Solution {
    public bool CanWin(string currentState) {
        return CanWin(currentState, new Dictionary<string, bool>());
    }

     public bool CanWin(string currentState, Dictionary<string, bool> memo) {
        if(memo.ContainsKey(currentState)) return memo[currentState];

        char[] cs = currentState.ToCharArray();
        for(int i = 0; i < currentState.Length - 1; i++) {
            if(cs[i] == '+' && cs[i + 1] == '+'){
                cs[i] = '-';
                cs[i + 1] = '-';  
                if(!CanWin(new string(cs))) {
                    memo.Add(currentState, true);
                    return true;
                }
                cs[i] = '+';
                cs[i + 1] = '+';  
            }
            
        }
    
        memo.Add(currentState, false);
        return false;
    }
}
```