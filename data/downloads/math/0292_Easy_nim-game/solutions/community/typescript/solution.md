# I got defeated by my sister in the same game, in the past, 100% of the times 😂

**Author:** vmss
**Votes:** 2
**Link:** [https://leetcode.com/problems/nim-game/solutions/5348502/](https://leetcode.com/problems/nim-game/solutions/5348502/)

---

# Intuition
Initially I thought any number can be expressed in the form of $$3k, 3k+1, 3k+2$$. Then if I remove remove stones in such a way that the remaining number is an even multiple of 3, I thought I would win.
Then the code is giving wrong answer for the test case 8.

So my initial thought was : 
- Somewhere in the vicinity of multiples of 3, the opponent can win no matter what, also, I can win no matter what.
- Then I observed the pattern that it is based on numbers being expressed as either a multiple of 4, or in the vicinity of 4, like $$4k, 4k+1, 4k+2, 4k+3$$.
- Ahh, now I can see why it was mentioned in the question that I can either pick 1 or 2 or 3 stones. 
- I have to pick in a way that a multiple of 4 remain for my opponent.
- No matter what my opponent removes, the number will not be multiple of 4, and I can make it a multiple of 4 again in my turn.
- If I keep playing this way, I can win.
Finally, After figuring out the answer in this manner, I can write a mathematical proof, but yeah, I will move on to the next problem :)

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: No extra space

# Code
```
function canWinNim(n: number): boolean {
    return n%4 !== 0;
};
```