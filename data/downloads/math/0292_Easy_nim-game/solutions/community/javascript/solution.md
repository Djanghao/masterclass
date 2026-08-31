# return n%4 != 0; || One Line Answer || Explanation || O(1)

**Author:** M_Pon_Dinesh_Kumar
**Votes:** 10
**Link:** [https://leetcode.com/problems/nim-game/solutions/4173613/](https://leetcode.com/problems/nim-game/solutions/4173613/)

---

# Intuition
The key to solving this problem lies in understanding the game rules and finding a simple pattern. The optimal strategy is to make sure you always leave your opponent with 4 stones to play with.


# Approach
We can observe that if there are 4 stones left, no matter how many stones your opponent takes (1, 2, or 3), you can always win on your next turn by taking the remaining stones. Therefore, if the initial number of stones n is a multiple of 4, you cannot guarantee a win because your opponent can always mirror your moves.

Conversely, if n is not a multiple of 4, you can always make a move to leave your opponent with a multiple of 4 stones, ensuring your victory.

So, the approach is straightforward: check if n % 4 is not equal to 0, return true, indicating you can win, and return false otherwise.

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public boolean canWinNim(int n) {
        return n%4 != 0;
    }
}
```