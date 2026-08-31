# Dart terse solution using gcd and FP

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5114134/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5114134/)

---

# Intuition
Count the frequency of each unique characters than divide their count by the minimum greatest common divisor (gcd).

# Approach
- use a map to store the occurences for each characters
- get the minimum value and use it as the base to calculate the gcd
- get minimum gcd possible
- sum all the frequencies divided by the gcd

# Complexity
- Time complexity: O(n)
- Space complexity: O(1) the frequency map is at most 26

# Code
```
class Solution {
  int minAnagramLength(String s) {
    Map<int, int> freq = {};
    s.codeUnits.forEach((char) => freq[char] = (freq[char] ?? 0) + 1);
    var counts = freq.values;
    var minVal = counts.reduce(min);
    var gcd = counts.fold(s.length, (gcd, n) => min(gcd, n.gcd(minVal)));
    return counts.fold(0, (prev, n) => prev + n ~/ gcd);
  }
}
```