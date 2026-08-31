# 4-line Ruby solution with detailed explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-ix/solutions/3604761/](https://leetcode.com/problems/stone-game-ix/solutions/3604761/)

---

# Intuition
The actual numbers of stones don't matter, just the values mod 3 and the number for each category.

# Approach
Count the number of stones with remainders of 0, 1, and 2 when divided by 3.

The win conditions are a bit complicated, so here's how it goes:

If there are an even number of three stones, we can ignore them (when one player takes one, the other can take one also, so it doesn't change the poisition).
-In that case, Alice can win if there's at least 1 one stone and at least one three stone.  Her stategy is to take from whichever pile is smaller (or either if they're equal).  Bob will have to take from the same pile (pile 1), then Alice take from pile 2 and Bob will take from pile 1 until it runs out.  Eventually, Bob has to take from pile 2, making the total a multiple of 3.
-Conversely, if there are no one stones or no two stones, Alice takes from one pile, Bob takes from the same pile, and then Alice takes a third stone from that same pile, at which point it's a multiple of three and Bob wins.  (Or the pile has fewer then 3 stones, it which case it runs out and Bob wins.)

Now let's consider the case with an odd number of three stones.  For simplicity, consider this to be 1 three stone.  Also, we're going to pick ones as the bigger (or equal) pile; it's equivalent for twos.
-If the ones pile is much bigger (at least 3 more), Alice can force a win by picking from the ones pile.  Bob picks one or three, Alice picks the other, and then Bob keeps picking two and Alice keeps picking one until the twos run out and Bob has to pick one.

Bob can force a win in all other cases:
-If the piles are equal or ones are 1 bigger, Bob picks three for his first pick, then keeps picking the opposite of what Alice picks.  Eventually, Alice runs out of stones.
-If ones are 2 bigger, Alice picks one and then Bob picks one, and then we have the situation of equal piles again.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
def stone_game_ix(stones)
    count = Hash.new(0)
    stones.each { |stone| count[stone % 3] += 1 }

    return count[1] * count[2] > 0 if count[0] % 2 == 0
    (count[1] - count[2]).abs > 2
end
```