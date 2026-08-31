# ✅✅Python🔥Simple Solution🔥Easy to Understand🔥

**Author:** cohesk
**Votes:** 48
**Link:** [https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3360798/](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3360798/)

---

# Please UPVOTE \uD83D\uDC4D

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers this week. I planned to give for next 10,000 Subscribers as well. So **DON'T FORGET** to Subscribe

**Search \uD83D\uDC49`Tech Wired leetcode` on YouTube to Subscribe**
# OR 
**Click the Link in my Leetcode Profile to Subscribe**

Happy Learning, Cheers Guys \uD83D\uDE0A

# Approach:

We use dynamic programming to solve the problem. The dp function is the main function that recursively calculates the number of ways to cut the pizza into k pieces starting from a given starting point (start_row, start_col) and with a given number of remaining slices num_slices_left.

The function has_apple is a helper function that checks if there is any apple in the given rectangle of the pizza.

To avoid recomputing the same values repeatedly, the cache decorator is used to cache the results of the has_apple and dp functions.

# Intuition:

The intuition behind this code is that we want to cut the pizza into k slices such that each slice contains at least one apple. To solve this problem, we can use dynamic programming.

The dp function tries all possible horizontal and vertical cuts starting from the current position (start_row, start_col), and recursively computes the number of ways to cut the remaining pizza into num_slices_left - 1 slices, where the next slice must contain at least one apple.

To check if a given rectangle contains at least one apple, we use the helper function has_apple. We can use dynamic programming to cache the results of has_apple and dp functions to avoid recomputing the same values repeatedly.

Finally, we return the total number of ways to cut the pizza into k slices starting from the top-left corner of the pizza.
```
class Solution:
    def ways(self, pizza: List[str], k: int) -> int:

        
        @cache
        def has_apple(start_row, start_col, end_row, end_col):
            for r in range(start_row, end_row+1):
                for c in range(start_col, end_col+1):
                    if pizza[r][c] == 'A':
                        return True 
            return False 
        
        @cache
        def dp(start_row, start_col, num_slices_left):

            if num_slices_left == 1:
                if has_apple(start_row, start_col, len(pizza)-1, len(pizza[0])-1):
                    return 1
            
            num_ways = 0 
            for i in range(start_col+1, len(pizza[0])):
                if has_apple(start_row, start_col, len(pizza)-1, i-1):
                    num_ways += dp(start_row, i, num_slices_left-1)
            for j in range(start_row+1, len(pizza)):
                if has_apple(start_row, start_col, j-1, len(pizza[0])-1):
                    num_ways += dp(j, start_col, num_slices_left-1)
            return num_ways 

        return dp(0, 0, k) % (10 ** 9 + 7)

```

![image.png](./images/0.png)

# Please UPVOTE \uD83D\uDC4D