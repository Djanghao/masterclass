# Keeping Top 3 Lengths in a Static Array. O(N). No Vectors. C++ 0 ms, Java 12 ms. Beating 100%.

**Author:** sergei99
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4483094/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4483094/)

---

# Intuition

The task is to find the longest substring consisting of a single character and present in the input string at least 3 times. The length of the string can reach $500'000$ characters, which leaves quadratic algorithms out of scope. The string consists of lowercase English letters only, which means we can gather any per character statistic information in a plain fixed size array.

# Approach

Like in the [first version](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice) of the problem, we can walk through the string and extract the required mono-substrings, recording their lengths in our array-based data structure. How many lengths do we need to store per character?

Each mono-substring of the length $k$ contains $2$ mono-substrings of the length $k-1$, $3$ mono-substrings of the length $k-2$, ..., and finally, $k$ mono-substrings of the length $1$. Therefore in the worst case we only need 3 top lengths. Consider we only dealing with the character `a` and have the following top substrings:
| Longest | Longest but 1 | Longest but 2 | Longest Present Thrice |
|-|-|-|-|
| $4$ | $4$ | $4$ | $4$ |
| $4$ | $4$ | $3$ | $3$ |
| $4$ | $4$ | $2$ | $3$ |
| $4$ | $4$ | $1$ | $3$ |
| $4$ | $4$ | $none$ | $3$ |

If we have 3 substrings of the same top length $k$, then obviously this is our top length for that character.

What if one of string is 1 character shorter ($k-1$)? Then our top length also becomes 1 character smaller, i.e. $k-1$.

What if that string is 2 characters shorter ($k-2$)? Then our result is still $k-1$ because we have 4 such substrings in top 2 substrings. The same logic holds for any length of the third substring; it can even be missing entirely.

Now consider the second top string is 1 character shorter than the ultimate one.
| Longest | Longest but 1 | Longest but 2 | Longest Present Thrice |
|-|-|-|-|
| $4$ | $3$ | $3$ | $3$ |
| $4$ | $3$ | $2$ | $3$ |
| $4$ | $3$ | $1$ | $3$ |
| $4$ | $3$ | $none$ | $3$ |

If it's just one character shorter ($k-1$), then our result is obviously $k-1$, regardless of the length of the third top substring, because we still have $2 \	imes (k-1)$ in the top substring.

What if the second top string is significantly shorter or missing entirely? We can always pick $3 \	imes (k-2)$ substrings from the top one, therefore the final outcome cannot be less than $k-2$. Can it be $k-1$? No way: we only have $2 \	imes (k-1)$ substrings in this case.
| Longest | Longest but 1 | Longest but 2 | Longest Present Thrice |
|-|-|-|-|
| $4$ | $2$ | $none$ | $2$ |
| $4$ | $1$ | $none$ | $2$ |
| $4$ | $none$ | $none$ | $2$ |

This allows us to build the algorithm:
* Collect lengths of mono-substrings per character into a linear list-type structure. Only keep the top 3 lengths because they define the result.
* Set the ultimate maximum to $0$. Walk through the per-character length lists and calculate the per-character max length of a thrice-present substring as follows:
  * If there are no substrings of that character.
  * If all three top lengths are equal ($k$), then this is the result.
  * Otherwise, if the second top length equals $k$ or $k-1$, then the result would be $k-1$.
  * Otherwise the result would be $k-2$.
  * If the ultimate maximum is smaller than the calculated value, then set it to that value.
* Return the maximum if it's greater than zero, otherwise return $-1$.

Now how do we store our per-character lengths? Considering that C++ STL vector size is that of 3 pointers, and we only need 3 elements, the dynamic allocation here would impose too much overhead. Instead of those 3 pointers, we can store 3 32-bit values (up to $500'000$, remember?). It is cheap to maintain a 3-element list always sorted in descending order (up to $3$ element comparisons and up to $3\	imes(3-2)+1=7$ element movements, no memory allocation/freeing, no vector resize). But the number of operations to maintain an array sorted grows as a square of its length, so this wouldn't be a good idea if we had to store more lengths simultaneously. And a zero length would naturally indicate a missing value.

# Complexity

- Time complexity: $O(N \	imes M^2 + A \	imes M)$
- Space complexity: $O(A \	imes M)$
  where $N$ is the string length, $A$ is the alphabet size ($26$ in our case), and $M$ is the number of substring occurrences to consider ($3$ in our case).

The time complexity is linear with regard to $N$, and the space complexity is constant.

# Micro-optimizations

C++ string argument should never be passed by value. We convert the deficient LC's interface to a constant reference as usually.

Static method calls are slightly faster because `this` doesn't have to be passed.

3 comparisons (effectively linear search) and 3 swaps are much faster than a loop of 3 iterations or a binary search for an insertion point. The binary search generally starts outperforming the linear search at 8 or more elements ($log_28 = 3$, $\\frac82=4$, and a constant factor to the binary search is usually larger).

The third `swap` in each sequence can be replaced with an assignment because we don't need the value of `entry[2]` afterwards. But we rely on the C++ compiler to figure this out and eliminate the dead assignments (provided that `swap` call is inlined).

Stdin sync (C++) is disabled, as usually (not included in the code).

For Java, we use a flat $26 \	imes 3$ element array where each consecutive triad of elements hold the lengths (i.e. simulating a 2D array). By not creating an `int[][]` we reduce the number of objects on the heap and the amount of work for GC. Moreover, the array is allocated only once and assigned to a static variable. Same applies to Scala.

Also we don't trust the Java compiler to inline the function calls, so we don't use functions for swapping and min/max calculation, but instead inline those in the code manually.

# Measurements

Since the measurement system has changed recently, updating record and publishing new measurements.

## Dec 31, 2023

| Language | Time | Beating | Memory | Beating | Submussion |
|-|-|-|-|-|-|
| C++ | 71 ms | 73.44% | 25.33 Mb | 100% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/submissions/1132773312/ |
| Java | 22 ms | 87.50% | 45.57 Mb | 99.36% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/submissions/1132995193/ |
| Scala | 1319 ms | 100% | 64.13 Mb | 100% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/submissions/1133004057/ |

(Scala has not enough submissions, as usually, so everything is rated 100%)

## Dec 10, 2024

| Language | Time | Beating | Memory | Beating | Submussion |
|-|-|-|-|-|-|
| C++ | 0 ms | 100% | 28.21 Mb | 99.16% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/submissions/1474837714/ |
| Java | 12 ms | 100% | 45.94 Mb | 91.03% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/submissions/1474840144 |
| Scala | 61 ms | 100% | 63.96 Mb | 100% | https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/submissions/1474841307/ |

# Code
``` C++ []
class Solution {
private:
    static uint32_t lens[26][3];

public:
    static int maximumLength(const string &s) {
        const char *const sc = s.c_str();
        const uint32_t n = s.length();
        uint32_t start = 0;
        char last = *sc;
        for (uint32_t i = 1; i < n; i++) {
            const char c = sc[i];
            if (c != last) {
                uint32_t len = i - start;
                auto entry = lens[last-'a'];
                if (len > entry[0]) swap(len, entry[0]);
                if (len > entry[1]) swap(len, entry[1]);
                if (len > entry[2]) swap(len, entry[2]);
                start = i;
                last = c;
            }
        }
        {
            uint32_t len = n - start;
            auto entry = lens[last-'a'];
            if (len > entry[0]) swap(len, entry[0]);
            if (len > entry[1]) swap(len, entry[1]);
            if (len > entry[2]) swap(len, entry[2]);
        }
        uint32_t maxlen = 0;
        for (auto entry : lens) {
            if (!entry[0]) continue;
            const uint32_t len = entry[1] == entry[0]
                               ? entry[0] - (entry[2] < entry[0])
                               : max(entry[1] + 2u, entry[0]) - 2u;
            maxlen = max(maxlen, len);
            entry[0] = entry[1] = entry[2] = 0;
        }
        return maxlen ? (int)maxlen : -1;
    }
};

uint32_t Solution::lens[26][3];
```
``` Java []
class Solution {
    private static final int[] lens = new int[26 * 3];

    public static int maximumLength(final String s) {
        final int n = s.length();
        int start = 0;
        char last = s.charAt(0);
        for (int i = 1; i < n; i++) {
            final char c = s.charAt(i);
            if (c != last) {
                int len = i - start;
                final int b = (last - 'a') * 3;
                if (len > lens[b]) {
                    final int t = lens[b];
                    lens[b] = len;
                    len = t;
                }
                if (len > lens[b + 1]) {
                    final int t = lens[b + 1];
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
            int len = n - start;
            final int b = (last - 'a') * 3;
            if (len > lens[b]) {
                final int t = lens[b];
                lens[b] = len;
                len = t;
            }
            if (len > lens[b + 1]) {
                final int t = lens[b + 1];
                lens[b + 1] = len;
                len = t;
            }
            if (len > lens[b + 2])
                lens[b + 2] = len;
        }
        int maxlen = 0;
        for (int j = 0; j < 78; j += 3) {
            if (lens[j] != 0) {
                final int len = lens[j+1] == lens[j]
                              ? lens[j] - (lens[j+2] < lens[j] ? 1 : 0)
                              : lens[j+1] > lens[j] - 2 ? lens[j+1] : lens[j] - 2;
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
    private[this] val lens = Array.fill(26 * 3)(0)

    def maximumLength(s: String): Int = {
        val n = s.length
        var start = 0
        var last = s(0)
        for (i <- (1 until n)) {
            val c = s(i)
            if (c != last) {
                var len = i - start
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
            var len = n - start
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
        var maxlen = 0
        for (j <- (0 until 78 by 3)) {
            if (lens(j) != 0) {
                val len = if (lens(j+1) == lens(j))
                              lens(j) - (if (lens(j+2) < lens(j)) 1 else 0)
                          else
                              if (lens(j+1) > lens(j) - 2) lens(j+1) else lens(j) - 2
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
(The Scala solution is in a "better Java" style, not an idiomatic Scala)

# See Also
The [solution to the first version of this task](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/4483269/keeping-top-3-lengths-in-a-static-array-o-n-no-vectors-c-0-ms-java-2-ms-beating-100/).