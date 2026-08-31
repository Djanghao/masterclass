# Kotlin's chunked() and groupingBy() operators makes for a tidy solution

**Author:** jpz
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5114650/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5114650/)

---

O(N^2 log(N))

```kotlin
class Solution {
    fun minAnagramLength(s: String): Int {
        val allChars = s.groupingBy { it }.eachCount()
        for (i in 1..s.length) {
            if (s.length % i == 0 && allChars.all { (_ ,count) -> count % (s.length / i) == 0 }) {
                val candidateChars = s.substring(0..<i).groupingBy { it }.eachCount()
                if (s.chunked(i).map { chunk -> chunk.groupingBy { it }.eachCount() == candidateChars }.all { it }) {
                    return i;
                }
            }
        }
        return s.length
    }
}
```

and with comments
```
    fun minAnagramLength(s: String): Int {
        // create map of characters to counts
        val allChars = s.groupingBy { it }.eachCount()
        for (i in 1..s.length) {
            // for every possible length of t, starting with smallest, check that
            // a) i divides length of string
            // b) i divides count of each character
            if (s.length % i == 0 && allChars.all { (_, count) -> count % (s.length / i) == 0 }) {
                // generate a map of the counts of the first i characters
                val candidateChars = s.substring(0..<i).groupingBy { it }.eachCount()
                // chunk the string into i partitions, test if every chunk has matching char count
                if (s.chunked(i).map { chunk -> chunk.groupingBy { it }.eachCount() == candidateChars }.all { it }) {
                    return i;
                }
            }
        }
        // if nothing matched, it is the length of s
        return s.length
    }
```