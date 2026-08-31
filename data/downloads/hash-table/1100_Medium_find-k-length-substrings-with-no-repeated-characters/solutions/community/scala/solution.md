# Scala time: O(n) space O(1). Sliding window + bit manipulation

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/4906652/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/4906652/)

---

# Intuition
We don't really need to keep track of substring character frequencies, since as soon as there's a repetition, we need to eliminate it be sliding the left end of the sliding window.
Hence, a single bit per char is going to be enough. So that's 26 bits: it fits in a 32bit integer.

# Approach
1. initialise left and right pointers to point at the first char from left in the string
2. iterate until the right pointer reaches the end of the string
3. check the bit corresponding to the character pointed by the right pointer
4. if it wasn't set, set it.
5. If it was already set, move the left pointer forward, until the duplicated character bit is set off
6. if the distance between left and right pointer is greater than or equal the k length, then we've just found another occurrence that satisfies the requirements: increase result by 1

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
object Solution {
  def numKLenSubstrNoRepeats(s: String, k: Int): Int = {
    val n = s.length
    var freqs = 0
    var left = 0
    var right = 0
    var result = 0
    while (right < n) {
      val ci = s(right) - 'a'
      while (((1 << ci) & freqs) != 0) {
        freqs ^= 1 << (s(left) - 'a')
        left += 1
      }
      freqs |= 1 << ci
      if (right - left + 1 >= k) result += 1
      right += 1
    }
    result
  }
}
```