# Bisection, Quickselect and little intermediate storage

**Author:** sergei99
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/4059607/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/4059607/)

---

# Intuition
Obviously the problem comes down to calculation of a metric for each row and then finding `k` top elements based on that metric. The metric consists of two scalar fields.

# Approach
## Metric calculation
We have row elements coming in descending order, which allows us to use binary search and reduce the time for processing each individual row from $$O(n)$$ to $$O(log(n))$$, and there are `m` rows in total. In practice usage of a binary search in this task reduces the execution time of otherwise properly written code from 8-12 ms to 0-3 ms.

Also, considering `1 <= m, n <= 100`, we see that row indexes and row lengths occupy just 7 bits each, so we can use a 14-bit integer type to store the pair. The most determining value is the number of `1`'s, so it goes to high-order bits, and the row index goes to low-order bits, so we maintain the proper linear ordering. Not only do we get fast integer comparisons this way, but we also may get rid of a separate array for storing intermediate data: Leetcode generously requests `vector<int>` as the return value. We can bash the resultant `vector<int>` in place, saving some memory.

## Selection of k min elements
As for selection, we may utilize a quick select algorithm, which in case of C++ is avaliable in STL under the name `partial_sort`. It executes in $$O(m * log(k))$$ compared to $$O(m * log(m))$$ of a full sort. This optimization does not make a noticeable difference for a 100-element array (either way code could be executed in 0 ms), but may be quite useful in solving real life problems where the amount of data is orders of magnitude larger.

Some solutions mention heap-based priority queues, but heap is not very efficient at maintaining a constant size structure (e.g. stripping the largest element in a `k`-sized heap would require $$O(k)$$ operations to find it and then one or two $$O(log(k))$$ passes to get rid of it). So if we use a heap, then we are bound to $$O(m * log(m))$$ or $$O(m * k)$$ solution (depending on which one of `k` and `log\u2082(m)` is smaller) with no way out.

Once we are done with partial sorting, we have the first `k` elements of the array matching our condition. So we just replace the metric with the actual value in those elements and resize the vector. Note that STL's vector capacity is never reduced unless we explicity request that via `shrink_to_fit`, so we don't take overhead of moving elements from one memory cell to another (though we still have to retrieve them to strip the higher-order bits off and then write them back, but at least this is better in terms of data locality).

Both metric and post-sort conversion loops are generalized within the STL's `transform` function (analog to other languages' `map`), so we just use it as is.

Of course, the option of sorting data in the resultant vector is only available in a few languages. E.g. Java arrays can't be resized without moving the data, so a separate intermediate storage should be used there anyway.

# Complexity
- Time complexity: $$O(m * log(max(n, k)))$$

- Space complexity: $$O(m)$$

# Code
## In-place Bashing of the Result Vector
```C++ []
class Solution {
public:
    vector<int> kWeakestRows(const vector<vector<int>>& mat, unsigned k) {
        typedef unsigned char idx_t;
        const idx_t m = mat.size();
        vector<int> r;
        r.reserve(m);
        idx_t i = 0;
        transform(mat.cbegin(), mat.cend(), back_inserter(r),
            [&i](const auto &v) __attribute__((always_inline)) {
                return ((lower_bound(v.cbegin(), v.cend(), 0, greater()) - v.cbegin()) << 8) + i++;
            });
        partial_sort(r.begin(), r.begin() + k, r.end());
        transform(r.begin(), r.begin() + k, r.begin(),
            [](auto p) __attribute__((always_inline)) { return p & 0x7Fu; });
        r.resize(k);
        return r;
    }
};
```
## Using a Separate Intermediate Array
```C++ []
class Solution {
public:
    vector<int> kWeakestRows(const vector<vector<int>>& mat, unsigned k) {
        typedef unsigned char idx_t;
        typedef unsigned short didx_t;
        const idx_t m = mat.size();
        didx_t strengths[m];
        idx_t i = 0;
        transform(mat.cbegin(), mat.cend(), strengths,
            [&i](const auto &v) __attribute__((always_inline)) {
                return ((lower_bound(v.cbegin(), v.cend(), 0, greater()) - v.cbegin()) << 8) + i++;
            });
        partial_sort(strengths, strengths + k, strengths + m);
        vector<int> r;
        r.reserve(k);
        transform(strengths, strengths + k, back_inserter(r),
            [](auto p) __attribute__((always_inline)) { return p & 0x7Fu; });
        return r;
    }
};
```
```Java []
class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        final byte m = (byte)mat.length;
        final short[] strengths = new short[m];
        for (byte i = 0; i < m; i++) {
            byte lb = 0, hb = (byte)(mat[i].length - 1);
            while (lb <= hb) {
                final byte mid = (byte)((lb + hb) >>> 1);
                final int mv = mat[i][mid];
                if (mv > 0) lb = (byte)(mid + 1);
                else hb = (byte)(mid - 1);
            }
            strengths[i] = (short)((lb << 7) + i);
        }
        final int[] r = new int[k];
        final byte thr = (byte)((k - 1) >>> 1);
        if (thr < 7 && 1 << thr <= m) {
            for (byte j = 0; j < k; j++) {
                byte imin = 0;
                for (byte i = 1; i < m; i++) {
                    if (strengths[i] < strengths[imin]) {
                        imin = i;
                    }
                }
                r[j] = imin;
                strengths[imin] = 0x7FFF;
            }
        } else {
            Arrays.sort(strengths);
            for (byte j = 0; j < k; j++)
                r[j] = strengths[j] & 0x7F;
        }
        return r;
    }
}
```
```Scala []
object Solution {
    @annotation.tailrec
    private def lowerBound(row: IndexedSeq[Int], lb: Byte, hb: Byte): Byte = {
        if (lb <= hb) {
            val mid = ((lb + hb) >>> 1).toByte
            val mv = row(mid)
            if (mv > 0) lowerBound(row, (mid + 1).toByte, hb)
            else if (mv < 0) lowerBound(row, lb, (mid - 1).toByte)
            else if (lb < hb) lowerBound(row, lb, mid)
            else mid
        } else {
            lb
        }
    }

    def kWeakestRows(mat: Array[Array[Int]], k: Int): Array[Int] = {
        val m = mat.length.toByte
        val strengths = mat.zipWithIndex.map({
            case (row, i) => ((lowerBound(row, 0, (row.length - 1).toByte) << 7) + i).toShort
        })
        val thr = ((k - 1) >>> 1).toByte
        if (thr < 7 && 1 << thr <= m) {
            (0 until k).map(_ => {
                val imin = (0 until m).minBy(i => strengths(i))
                strengths(imin) = 0x7FFF
                imin
            }).toArray
        } else {
            strengths.sorted.take(k).map(_ & 0x7F)
        }
    }
}
```
Note that we perform a full sort of the array in Java and Scala due to lack of a ready to use implementation, but in case of really small `k` we opt for the linear search of the complexity $$O(m * k)$$. And we use our own binary search algorithm to find the lower bound in a descending-ordered array. Java implementation has this to avoid boxing, comparators and other heavy stuff. Scala implementation includes this because its standard binary search does not look for lower bound, but returns an arbitrary index when there is more than 1 match.

# Measurements
| Language | Execution Time | Beating | Memory Usage | Beating |
|---|---|---|---|---|
| C++ | 0 ms | 100% | 10.7 Mb | 20.16% |
| Java | 1 ms | 99.31% | 44.3 Mb | 86.29% |
| Java + static GC | 1 ms | 99.31% | 43.6 Mb | 99.93% |
| Java + GC on every test | 2 ms | 80.96% | 41.8 Mb | 100% |
| Scala | 535 ms | 100% | 56.87 Mb | 75.00% |

*Java + static GC* calls `System.gc()` once in a static block prior to test execution, so it doesn't count in execution time measurement.
*Java + GC on every test* calls `System.gc()` at the end of `kWeakestRows`, so it GC gets executed every time and is included in execution time measurement.
Particularly, this shows how GC-sensitive the memory measurements are, so there is no point in relying on them in such languages as Java, Scala, Python, etc.