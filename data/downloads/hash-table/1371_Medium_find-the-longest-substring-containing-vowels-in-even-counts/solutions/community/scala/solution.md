# Scala, 881ms / 100%, single scan linear solution

**Author:** VPuuska
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5789654/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5789654/)

---

# Intuition & Approach

Assume that we have two indices, $i$ and $k$ with $i < k$, such that the strings `s.slice(0, i)` and `s.slice(0, k)` have the same vovwels that appear an even number of times. Then, the string `s.slice(i+1, k)` has each vowel appear even number of times.

With this fact we see that we can solve this with a single scan of the string `s`:
- keep track of which vowels have appeared an even number of times (done with bitmasking in this implementation),
- keep track of what was the earliest index we saw any given collection of vowels appear an even number of times,
- if the current set of vowels that appear an even number of times has already been seen, update our result to be the max of the previous longest valid substring and the now found valid substring,
- if not, then add the current index to the map of earliest indexes for collections of vowels.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```scala []
object Solution {
  def findTheLongestSubstring(s: String): Int = {
    val stateMap =
      Map.from(('a', 1) +: ('e', 2) +: ('i', 4) +: ('o', 8) +: ('u', 16) +: Nil)
    // State: (vowel state (even/odd), map: vowel state -> earliest index, current index, result)
    s.foldLeft((0, Map.from((0, -1) +: Nil), 0, 0))((state, c) => {
      val newVowelState = state._1 ^ stateMap.getOrElse(c, 0)
      if state._2 contains newVowelState then
        (
          newVowelState,
          state._2,
          state._3 + 1,
          state._4 max (state._3 - state._2(newVowelState))
        )
      else
        (
          newVowelState,
          state._2 + (newVowelState -> state._3),
          state._3 + 1,
          state._4
        )
    })._4
  }
}

```