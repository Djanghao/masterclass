# Kotlin simple solution explained

**Author:** awawa
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/1803410/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/1803410/)

---

Solution pops up really quickly, when you refrase the challenge description. Basically, we need `s` and `t` to have same frequencies of all letters. And that is it. How do we do that? We just count all characters that are in `s` but not int `t` (so we need to add them to `t`) and all characters that are int `t` but not in `s` (so we need to add them to `s`), summing these counts we have the solution. As simple as that.

```
import kotlin.math.abs

class Solution {
    fun minSteps(s: String, t: String): Int {
	
		// Counting letters frequencies
		// If after the loop freq[i] < 0, that means that this letter is in t but not in s, if freqs[i] > 0 that means that the letter is in s but not in t.
		// And the absolute value value of freqs[i] indicates how much letters we need to add to another string.
        val freqs = IntArray(26)
        for (i in 0 until maxOf(s.length, t.length)) {
            if (i < s.length) freqs[s[i] - 'a']++
            if (i < t.length) freqs[t[i] - 'a']--
        }
        
        var count = 0
        for (freq in freqs) count += abs(freq)
        return count
    }
}
```