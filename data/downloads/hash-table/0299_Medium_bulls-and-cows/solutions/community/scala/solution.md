# Scala straight forward

**Author:** mohamedabden21
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/5260457/](https://leetcode.com/problems/bulls-and-cows/solutions/5260457/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def getHint(secret: String, guess: String): String = {
        val bulls = secret.indices.filter(i => secret(i) == guess(i))

        val List(s_freq, g_freq) =
            List(secret, guess)
                // remove bulls (I dislike zipWithIndex, looks ugly)
                .map(seq => seq.indices.filterNot(bulls.contains).map(seq))
                // turn into frequency maps
                .map(_.groupBy(identity).view.mapValues(_.length))

        val cows_count = s_freq.map((k, v) => g_freq.getOrElse(k, 0) min v).sum

        s"${bulls.length}A${cows_count}B"
    }
}
```