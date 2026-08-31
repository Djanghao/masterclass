# Keeping Top 3 Lengths in a Static Array. O(N). No Vectors. C++ 0 ms, Java 1 ms. Beating 100%.

**Author:** sergei99
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/4483269/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/4483269/)

---

# Intuition

Actually this task has been first solved using a prefix tree-based square-complexity algorithm to count substrings. That solution was too generic and too slow (21 ms vs top 4 ms at the moment). So we have adapted the linear solution here.

All the background can be found in [the solution to the second version of this task](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4483094/keeping-top-3-lengths-in-a-static-array-o-n-no-vectors-c-71-ms-java-22-ms-beating-100/), except that the input string may not exceed 50 characters.

# Approach

Similarly to the version two algorithm, we count string lengths in a statically allocated array, only we are using byte-size counters instead of a 32-bit integer. The rest of code is exactly same except some type casts applied/removed and STL `max` type parameter is specified explicitly to counter the arithmetic expression type promotion.

# Complexity
- Time complexity: $O(N \	imes M^2 + A \	imes M)$
- Space complexity: $O(A \	imes M)$
  where $N$ is the string length, $A$ is the alphabet size ($26$ in our case), and $M$ is the number of substring occurrences to consider ($3$ in our case).

# Micro-optimizations

Exactly same as in [the solution to the second version of this task](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4483094/keeping-top-3-lengths-in-a-static-array-o-n-no-vectors-c-71-ms-java-22-ms-beating-100/).

# Measurements

Since the measurement system has changed recently, updating record and publishing new measurements.

## Dec 31, 2023

| Language | Algorithm | Time | Beating | Memory | Beating | Submission |
|-|-|-|-|-|-|-|
| C++ | Linear | 0 ms | 100% | 6.7 Mb | 100% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/submissions/1133009319/ |
| C++ | Trie-based Quadratic | 21 ms | 20% | 14.7 Mb | 20% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/submissions/1132690584/ |
| Java | Linear | 2 ms | 99.13% | 41.8 Mb | 100% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/submissions/1133015808/ |
| Scala | Linear | 818 ms | 100% | 55.18 Mb | 100% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/submissions/1133018417/ |

(Scala has not enough submissions, as usually, so everything is rated 100%)

## Dec 10, 2024

| Language | Algorithm | Time | Beating | Memory | Beating | Submission |
|-|-|-|-|-|-|-|
| Java | Linear | 1 ms | 100% | 42.07 Mb | 98.88% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/submissions/1474827611 |
| Scala | Linear | 34 ms | 100% | 57.47 Mb | 100% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/submissions/1474835143 |

# Code
``` C++ []
class Solution {
private:
    static uint8_t lens[26][3];

public:
    static int maximumLength(const string &s) {
        const char *const sc = s.c_str();
        const uint8_t n = s.length();
        uint8_t start = 0;
        char last = *sc;
        for (uint8_t i = 1; i < n; i++) {
            const char c = sc[i];
            if (c != last) {
                uint8_t len = i - start;
                auto entry = lens[last-'a'];
                if (len > entry[0]) swap(len, entry[0]);
                if (len > entry[1]) swap(len, entry[1]);
                if (len > entry[2]) swap(len, entry[2]);
                start = i;
                last = c;
            }
        }
        {
            uint8_t len = n - start;
            auto entry = lens[last-'a'];
            if (len > entry[0]) swap(len, entry[0]);
            if (len > entry[1]) swap(len, entry[1]);
            if (len > entry[2]) swap(len, entry[2]);
        }
        uint8_t maxlen = 0;
        for (auto entry : lens) {
            if (!entry[0]) continue;
            const uint8_t len = entry[1] == entry[0]
                              ? entry[0] - (entry[2] < entry[0])
                              : max<uint8_t>(entry[1] + 2u, entry[0]) - 2u;
            maxlen = max<uint8_t>(maxlen, len);
            entry[0] = entry[1] = entry[2] = 0;
        }
        return maxlen ? maxlen : -1;
    }
};

uint8_t Solution::lens[26][3];
```
``` Java []
class Solution {
    private static final byte[] lens = new byte[26 * 3];

    public static int maximumLength(final String s) {
        final byte n = (byte)s.length();
        byte start = 0;
        char last = s.charAt(0);
        for (byte i = 1; i < n; i++) {
            final char c = s.charAt(i);
            if (c != last) {
                byte len = (byte)(i - start);
                final byte b = (byte)((last - 'a') * 3);
                if (len > lens[b]) {
                    final byte t = lens[b];
                    lens[b] = len;
                    len = t;
                }
                if (len > lens[b + 1]) {
                    final byte t = lens[b + 1];
                    lens[b + 1] = len;
                    len = t;
                }
                if (len > lens[b + 2])
                    lens[b + 2] = len;
                start = i;
                last = c;
            }
        }
        {
            byte len = (byte)(n - start);
            final byte b = (byte)((last - 'a') * 3);
            if (len > lens[b]) {
                final byte t = lens[b];
                lens[b] = len;
                len = t;
            }
            if (len > lens[b + 1]) {
                final byte t = lens[b + 1];
                lens[b + 1] = len;
                len = t;
            }
            if (len > lens[b + 2])
                lens[b + 2] = len;
        }
        byte maxlen = 0;
        for (int j = 0; j < 78; j += 3) {
            if (lens[j] != 0) {
                final byte len = (byte)(lens[j+1] == lens[j]
                                ? lens[j] - (lens[j+2] < lens[j] ? 1 : 0)
                                : lens[j+1] > lens[j] - 2 ? lens[j+1] : lens[j] - 2);
                if (maxlen < len) maxlen = len;
                lens[j] = lens[j+1] = lens[j+2] = 0;
            }
        }
        return maxlen > 0 ? maxlen : -1;
    }
}
```
``` Scala []
object Solution {
    private[this] val lens = Array.fill[Byte](26 * 3)(0)

    def maximumLength(s: String): Int = {
        val n = s.length
        var start = 0
        var last = s(0)
        for (i <- (1 until n)) {
            val c = s(i)
            if (c != last) {
                var len = (i - start).toByte
                val b = (last - 'a') * 3
                if (len > lens(b)) {
                    val t = lens(b)
                    lens(b) = len
                    len = t
                }
                if (len > lens(b + 1)) {
                    val t = lens(b + 1)
                    lens(b + 1) = len
                    len = t
                }
                if (len > lens(b + 2))
                    lens(b + 2) = len
                start = i
                last = c
            }
        }
        {
            var len = (n - start).toByte
            val b = (last - 'a') * 3
            if (len > lens(b)) {
                val t = lens(b)
                lens(b) = len
                len = t
            }
            if (len > lens(b + 1)) {
                val t = lens(b + 1)
                lens(b + 1) = len
                len = t
            }
            if (len > lens(b + 2))
                lens(b + 2) = len
        }
        var maxlen: Byte = 0
        for (j <- (0 until 78 by 3)) {
            if (lens(j) != 0) {
                val len = (if (lens(j+1) == lens(j))
                              lens(j) - (if (lens(j+2) < lens(j)) 1 else 0)
                          else
                              if (lens(j+1) > lens(j) - 2) lens(j+1) else lens(j) - 2).toByte
                if (maxlen < len) maxlen = len
                lens(j) = 0
                lens(j+1) = 0
                lens(j+2) = 0
            }
        }
        if (maxlen > 0) maxlen else -1
    }
}
```