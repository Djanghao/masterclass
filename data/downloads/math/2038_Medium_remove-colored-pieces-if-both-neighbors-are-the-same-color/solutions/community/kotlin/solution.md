# Maintain 1 score Greedy

**Author:** glamour
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4116856/](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4116856/)

---

# Intuition
We do not need to maintain two scores. Only one `alice_over_bob` is enough.


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:  $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun winnerOfGame(colors: String): Boolean {
        var alice_over_bob = 0
        for(i in 1 until colors.length - 1)
            if (colors[i - 1] == colors[i] && colors[i + 1] == colors[i])
                alice_over_bob += if(colors[i] == 'A') 1 else -1
        return alice_over_bob > 0
    }
}
```