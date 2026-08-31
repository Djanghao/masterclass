# 464: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 9
**Link:** [https://leetcode.com/problems/can-i-win/solutions/3278787/](https://leetcode.com/problems/can-i-win/solutions/3278787/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Define the function canIWin which takes in two integers, maxChoosableInteger and desiredTotal, and returns a boolean indicating whether the first player can win the game or not.

2. Check if desiredTotal is less than or equal to zero. If it is, then the first player has already won and we return True.

3. Check if the sum of all integers from 1 to maxChoosableInteger is less than desiredTotal. If it is, then it is not possible for the first player to win and we return False.

4. Initialize a dictionary self.memo to store the sub-problems result.

5. Call the can_win function which will traverse through all possible moves of player 1 and check if they can win the game.

6. Define the can_win function which takes in choices - a tuple of integers representing the remaining integers that can be chosen, and target - the remaining total that needs to be reached, and returns a boolean indicating whether player 1 can win the game or not.

7. If there is only one choice left and it's value is greater than or equal to target, then player 1 wins and we return True.

8. If the sub-problem already exists in the self.memo dictionary, return its result.

9. Traverse through all possible moves of player 1 by looping through the indices of choices.

10. Remove the chosen integer from the choices tuple and subtract its value from the target.

11. Recursively call the can_win function with the updated choices tuple and target value.

12. If player 2 can't win with the current move of player 1, then player 1 can win and we return True.

13. If no move of player 1 results in player 1 winning, then player 1 can't win and we return False.

14. Finally, store the result in the self.memo dictionary for future reference.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
  def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:
    # If desiredTotal is less than or equal to zero, then player 1 wins
    if desiredTotal <= 0:
        return True
    # If the sum of all the integers is less than the desiredTotal, then player 1 can't win
    if (maxChoosableInteger * (maxChoosableInteger + 1)) // 2 < desiredTotal:
        return False
    
    # Store the sub-problems result
    self.memo = {}
    
    # Traverse through all possible moves of player 1
    return self.can_win(tuple(range(1, maxChoosableInteger+1)), desiredTotal)


  def can_win(self, choices, target):
    # If there is only one choice left and it's value is greater than or equal to target, then player 1 wins
    if choices[-1] >= target:
        return True
    
    # If the sub-problem already exists, return it's result
    if choices in self.memo:
        return self.memo[choices]
    
    # Traverse through all possible moves of player 1
    for i in range(len(choices)):
        # Player 1 chooses a number
        if not self.can_win(choices[:i]+choices[i+1:], target-choices[i]):
            # If player 2 can't win, then player 1 can win
            self.memo[choices] = True
            return True
    
    # If no move of player 1 results in player 1 winning, then player 1 can't win
    self.memo[choices] = False
    return False

```