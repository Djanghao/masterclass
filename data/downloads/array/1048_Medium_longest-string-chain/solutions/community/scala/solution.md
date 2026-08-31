# How to get 10 ms execution time (C++). No hashmaps. No sorting. No copying of strings.

**Author:** sergei99
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-string-chain/solutions/4080456/](https://leetcode.com/problems/longest-string-chain/solutions/4080456/)

---

# Intuition
We can see that the longest chain length leading to any arbitrary word `w` (`maxlen(w)`) depends only on the longest chain lengths for words 1 character shorter. Therefore the input array can be partitioned by length of the words.

# Approach
First, we create a partition array `bylen` containing 16 vectors of ... strings? Not at all. A C++ STL string is too heavy: it copies its entire contents when copied. A much better approach is to store pointers to strings (which saves around 20% of memory and 25% of execution time of such a small program). This would be the default way to go with languages operating references to objects - like Java, Scala, Kotlin, Python, etc. And even better approach is to store indexes into the input vector. Its size can be up to 1000, so 10 bits are enough to store index, and we can safely use a 16-bit short for that. This saves even more memory and execution time.

Frankly we could also get rid of vectors as well, replacing them with custom dynamically sized arrays. The immediate memory saving is not significant, just 384 bytes, but we also get rid of dynamic memory allocations and freeing, which is more important. This variant is attached as a separate piece of code.

Second, we create an array of lengths called `maxlen`. The index into this array is the index into the original array of words, so there would be no more than 1000 elements. And the type of element could be byte (or even 4 bit) since the length of the chain can never be less than 1 or greater than 16. This array's elements corresponding to 1-character strings are initially set to 1.

Then we populate max chain lengths starting from the words of length 2 and up to the words of length 16 if any. Each word is matched against words of previously iterated length, and its maximum chain length is calculated and written back to the `maxlen` array. We also keep track of the global maximum while iterating.

# Complexity
Let's assume we have $$n$$ words evenly distributed within the contiguous range of $$k$$ lengths ($$k <= 16$$).
In order to calculate their chain lengths, we are going to traverse $$n$$ words, comparing each word with its $$n/k$$ potential predecessors, and for each predecessor doing an $$m/2$$ comparisons on average, where $$m$$ is the length of the word ($$m <= 16$$). The comparison can only be skipped for the first level (words with a minimal length). So apparently in total we are going to have $$O(n/k + (n - n/k) * n / k * m / 2)$$ operations.

It can be shown that any deviation from the even distribution results in fewer string comparisons, so this estimation is actually worst case. And it is performing better than lots of declared $$O(n * log(n) * m)$$ or $$O(n * m)$$ hashmap-based implementations listed in this Solutions section (which actually have worse asymptotic, from $$O(n * log(n) * m^2)$$ to $$O(n^2 * m^2)$$, depending on the hash collision rate in the input data).

In order to understand how this is possible, we should remember that comparisons of non-equal strings terminate early without having to traverse the entire pair of strings, whereas the hash code computations always go through the entire string. Even though the worst-case number of operations in comparison of two strings is $$O(m)$$, in more or less even distribution the probability of continuing comparisons beyond the first character is 1/26, 1/676 beyond the second one, etc., giving an exponential distribution with the math expectation of $$m * (1 + (1/26)^1 + (1/26)^2 + ... + (1/26)^(m-1))) / m$$, or just $$26/25 * (1 - (1/26)^m)$$, which is bounded by $$O(26/25)$$ or $$O(1)$$. So the actual time complexity becomes $$O(n/k + (n - n/k) * n/k * 26/25)$$. And since we are not moving strings around, there is a really low constant factor to this.

- Time complexity: $$O(n^2 / k)$$

- Space complexity: $$O(n)$$

# Measurements

| Language | Execution Time | Beating | Memory Usage | Beating |
|---|---|---|---|---|
| C++ with indexes into `words` | 10 ms | 100%* | 13.5 Mb | 57.98% |
| C++ with string pointers | 15 ms | 100%* | 15.4 Mb | 54.16% |
| C++ purely array based | 9 ms | 100% | 13.3 Mb | 62.96% |
| Java purely array based | 13 ms | 100% | 42.86 Mb | 94.3% |
| Scala purely array based | 551 ms | 100% | 55.76 Mb | 100% |

\\* not counting the 10 ms and the 9 ms approaches from this article of course.

# Code

## Vector-based Solution
``` C++ []
class Solution {
private:
    typedef unsigned char len_t;
    typedef unsigned short idx_t;
    static constexpr idx_t MAXLEN = 16;

public:
    int longestStrChain(const vector<string>& words) {
        const idx_t n = words.size();
        vector<idx_t> bylen[MAXLEN] = {};
        for (idx_t i = 0; i < n; i++)
            bylen[words[i].length() - 1].push_back(i);
        len_t maxlens[n];
        for (const auto curridx : bylen[0])
            maxlens[curridx] = 1;
        len_t maxtotal = !bylen[0].empty();
        for (len_t l = 2; l <= MAXLEN; l++) {
            for (const auto curridx : bylen[l-1]) {
                const string &currw = words[curridx];
                len_t mx = 0;
                for (const auto idx : bylen[l-2]) {
                    const string &w = words[idx];
                    len_t p = 0;
                    while (p < w.length() && w[p] == currw[p]) p++;
                    len_t q = w.length();
                    while (q > 0 && w[q-1] == currw[q]) q--;
                    if (p >= q && mx < maxlens[idx])
                        mx = maxlens[idx];
                }
                maxlens[curridx] = mx + 1;
                maxtotal = max<len_t>(maxtotal, mx + 1);
            }
        }
        return maxtotal;
    }
};
```

## Custom Array-based Solution
``` C++ []
class Solution {
private:
    typedef unsigned char len_t;
    typedef unsigned short idx_t;
    static constexpr len_t MAXLEN = 16;
    static constexpr idx_t MAXN = 1000;

    static idx_t bylen[MAXLEN][MAXN + 1];

public:
    int longestStrChain(const vector<string>& words) {
        const idx_t n = words.size();
        for (len_t l = 0; l < MAXLEN; l++)
            bylen[l][0] = 0;
        for (idx_t i = 0; i < n; i++) {
            idx_t *const part = bylen[words[i].length() - 1];
            part[++part[0]] = i;
        }
        len_t maxtotal = bylen[0][0] != 0;
        len_t maxlens[n];
        const idx_t *const first = bylen[0];
        for (idx_t i = 1; i <= first[0]; i++)
            maxlens[first[i]] = 1;
        for (len_t l = 2; l <= MAXLEN; l++) {
            const idx_t *const part = bylen[l-1];
            for (idx_t i = 1; i <= part[0]; i++) {
                const auto curridx = part[i];
                const string &currw = words[curridx];
                len_t mx = 0;
                const idx_t *const prev = bylen[l-2];
                for (idx_t j = 1; j <= prev[0]; j++) {
                    const auto idx = prev[j];
                    const string &w = words[idx];
                    len_t p = 0;
                    while (p < w.length() && w[p] == currw[p]) p++;
                    len_t q = w.length();
                    while (q > 0 && w[q-1] == currw[q]) q--;
                    if (p >= q && mx < maxlens[idx])
                        mx = maxlens[idx];
                }
                maxlens[curridx] = mx + 1;
                maxtotal = max<len_t>(maxtotal, mx + 1);
            }
        }
        return maxtotal;
    }
};

Solution::idx_t Solution::bylen[Solution::MAXLEN][Solution::MAXN + 1];
```
```Java []
class Solution {
    private static final byte MAXLEN = 16;
    private static final short MAXN = 1000;
    private static final byte MAXNSH = 10;

    private static final short[] bylen = new short[MAXLEN << MAXNSH];

    public int longestStrChain(String[] words) {
        final short n = (short)words.length;
        for (short l = 0; l < MAXLEN << MAXNSH; l += (1 << MAXNSH))
            bylen[l] = 0;
        for (short i = 0; i < n; i++) {
            final short lenofs = (short)((words[i].length() - 1) << MAXNSH);
            bylen[lenofs + ++bylen[lenofs]] = i;
        }
        byte maxtotal = (byte)(bylen[0] != 0 ? 1 : 0);
        byte[] maxlens = new byte[n];
        for (short i = 1; i <= bylen[0]; i++)
            maxlens[bylen[i]] = 1;
        for (short l = 1 << MAXNSH; l < MAXLEN << MAXNSH; l += (1 << MAXNSH)) {
            for (short i = 1; i <= bylen[l]; i++) {
                final short curridx = bylen[l + i];
                final String currw = words[curridx];
                byte mx = 0;
                for (short j = 1; j <= bylen[l - (1 << MAXNSH)]; j++) {
                    final short idx = bylen[l - (1 << MAXNSH) + j];
                    final String w = words[idx];
                    byte p = 0;
                    while (p < w.length() && w.charAt(p) == currw.charAt(p)) p++;
                    byte q = (byte)w.length();
                    while (q > 0 && w.charAt(q-1) == currw.charAt(q)) q--;
                    if (p >= q && mx < maxlens[idx])
                        mx = maxlens[idx];
                }
                maxtotal = (byte)Math.max(maxtotal, maxlens[curridx] = (byte)(mx + 1));
            }
        }
        return maxtotal;
    }
}
```
```Scala []
object Solution {
    private[this] val MAXLEN = 16.toByte
    private[this] val MAXNSH = 10.toByte
    private[this] val MAXN = 1000.toShort
    private[this] val NRANGE = 1024.toShort

    private[this] val bylen = Array.fill[Short](MAXLEN << MAXNSH)(0)

    def longestStrChain(words: Array[String]): Int = {
        val n = words.length.toShort
        for (l <- (0 until MAXLEN << MAXNSH by NRANGE))
            bylen(l) = 0;
        for (i <- (0 until n)) {
            val lenofs = ((words(i).length() - 1) << MAXNSH).toShort
            bylen(lenofs) = (bylen(lenofs) + 1).toShort
            bylen(lenofs + bylen(lenofs)) = i.toShort
        }
        var maxtotal = if (bylen(0) != 0) 1.toByte else 0.toByte
        val maxlens = Array.fill[Byte](n)(1)
        for (l <- (1 << MAXNSH until MAXLEN << MAXNSH by NRANGE)) {
            for (i <- (1 to bylen(l))) {
                val curridx = bylen(l + i)
                val currw = words(curridx)
                var mx = 0.toByte
                for (j <- (1 to bylen(l - NRANGE))) {
                    val idx = bylen(l - NRANGE + j)
                    val w = words(idx)
                    var p = 0.toByte
                    while (p < w.length() && w(p) == currw(p)) p = (p + 1).toByte
                    var q = w.length.toByte
                    while (q > 0 && w(q-1) == currw(q)) q = (q - 1).toByte
                    if (p >= q && mx < maxlens(idx))
                        mx = maxlens(idx)
                }
                maxlens(curridx) = (mx + 1).toByte
                maxtotal = maxtotal max (mx + 1).toByte
            }
        }
        maxtotal
    }
}
```

The latter differs in that we allocate the maximum size partitioning array only once (it's static), so we don't have to free the memory on every test case, and we don't take the vector overhead for our small elements. The zero-th element of the array is its actually used size, and elements from 1 to 1000 are indexes of strings into the input vector. In the beginning of each test, we set the 'length' elements of the entire array to zero.

Since Java doesn't support contiguous 2D arrays, we flatten it manually in Java code: 16 of 1024-element subarrays span contiguous range of indexes: lowest 10 bits are string index, and 4 bits above are length index. The index with 10 lowest bits refers to the used size of the subarray, indexes 1 to 1000 refer to elements, and indexes from 1001 and 1023 are not used in each subarray; we pay this 46 * 16 byte overhead for faster index computation.

Scala code is not idiomatic Scala, but rather imperative Java-style code. This way has been chosen intentionally, since the solution's performance heavily relies on arrays modified in place.