# Thoroughly commented with clear variable names Top-down + Bitmask approach (Java)

**Author:** totorstan
**Votes:** 7
**Link:** [https://leetcode.com/problems/can-i-win/solutions/3780152/](https://leetcode.com/problems/can-i-win/solutions/3780152/)

---


# Code
```
class Solution {
    public boolean canIWin(int maxChoosableInteger, int desiredTotal) {
        // First of all, we check if it's even possible for our players to reach the disiredTotal
        int totalPossibleSum = maxChoosableInteger * (maxChoosableInteger + 1) / 2;
        if (totalPossibleSum < desiredTotal) return false;

        // Declare a map for memoization, where the key is the bitmask of our current state (0 - number is available for use, 1 - number was taken)
        Map<Integer, Boolean> memo = new HashMap<>();
        return dp(desiredTotal, 0, maxChoosableInteger, memo);
    }

    private boolean dp(int goal, int state, int maxChoosable, Map<Integer, Boolean> memo) {
        // If we have already calculated a result for this state, then return it
        if (memo.containsKey(state)) {
            return memo.get(state);
        }
        
        // Declare the result variable
        boolean result = false;
        
        // Iterate over all possible integers from 1 to maxChoosable
        for (int i = 1; i <= maxChoosable; i++) {
            
            // Then we have to check our state (bitmask) to see if our current integer (i) was used or not
            boolean isAvailable = (state >> i) % 2 == 0;
            
            // If it was used, then we keep looking for an unused integer            
            if (!isAvailable) {
                continue;
            }
            
            // We check our win conditions. If we reach the goal, our result is true, and we can jump to our last lines.
            if (goal - i <= 0) {
                result = true;
                break;
            }

            // We need to create a new state (bitmask) to mark our current integer as used
            int currMask = 1 << i;
            int newState = state | currMask;

            // And we pass the turn to our rival
            boolean rivalResult = dp(goal - i, newState, maxChoosable, memo);
            
            // In case our rival doesn't win, it means that it's possible for us to beat the rival
            if (!rivalResult) {
                result = true;
                break;
            }
        }

        // We save our result for the current state and return it
        memo.put(state, result);
        return result;
    }
}
```