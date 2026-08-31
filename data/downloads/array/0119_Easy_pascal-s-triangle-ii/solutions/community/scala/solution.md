# Computing half of one row in O(n). 0ms in Java and C++, top exec time in Scala and Kotlin. No DP.

**Author:** sergei99
**Votes:** 2
**Link:** [https://leetcode.com/problems/pascals-triangle-ii/solutions/4031682/](https://leetcode.com/problems/pascals-triangle-ii/solutions/4031682/)

---

# Intuition
As many of us know from the high school, members of Pascal triangle can be computed as combinations `C(n; i)` where `n` is the row number (zero-based), and `i` is the member's position within the row (also zero-based, so that `C(n; 0) = 1`). So we only have to compute one row.
We also know that `C(n; i) = C(n; n - i)`, which means that we don't have to compute the row past the middle element `i = n / 2`.
And obviously `C(n, i + 1) = C(n, i) * (n - i) / (i + 1)`, so we can compute the next member of the row from the previous one with one multiplication, one division and two additions.

# Approach
1. Check for the edge cases (`n <= 1`).
1. Initialize the first two members of the triangle with `1` and `n`, respectively, so as to avoid unnecessary multiplication and divison by `1`.
1. Calculate other row members up to and including the middle one (if any).
Note that we have to use a 64-bit type to accomodate the product before we can divide it. If the language allows, it's always worth using unsigned types for multiplication and division as these take less CPU cycles than signed types do.
1. Then fill the remainder of the row with the previously calculated elements in reverse order. We need to copy the middle element itself only for odd row numbers (e.g. `3 => 1 3 3 1`, so we copy both `3` and `1` from the first half, but `4 => 1 4 6 4 1`, so we only copy `4` and `1`, leaving `6` alone).

C++ offers a nice `reverse_copy` for copying, Scala also has a wide range of efficient sequence and collection manipulation methods, and as for Java - a plain loop would do.

Note the use of preallocation in C++, Java, Kotlin and Python code, so that all elements reach their final memory cells right away without additional memory moving, and in C++ this also allows us to copy data using a fast STL implementation (source iterators are not invalidated until vector reallocates its storage).

Scala sequence handling is based on a different principle: indexed seq is materialized as a last step before conversion to an immutable linked list returned as a result. So no need to preallocate anything. A few different approaches have been tried, and the most CPU-efficient seems to be:
* not using `toArray` as we only need `IndexedSeq` for reversing. Methods of `Array`, such as `reverse` and `init`, create a copy of data while `IndexedSeq` is a more like a readonly view of the underlying data.
* using `Seq[Int]` rather than `Seq[Long]`, so we promote one of the multiplication operands to `Long` and demote the quotient back to `Int` after the division.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Measurements

| Language | Execution Time | Beating | Memory Used | Beating |
|---|---|---|---|---|
| C++ |  0 ms| 100% |  6.4 Mb| 75.46% |
| Java |  0 ms| 100% | 40.3 Mb | 51.22% |
| Scala | 401 ms | 100% | 52.7 Mb | 54.55% |
| Kotlin | 112 ms | 100% | 32.9 Mb | 100% |
| Python3 | 28 ms | 97.66% | 15.93 Mb | 99.67% |

# Code

```C++ []
class Solution {
public:
    vector<int> getRow(const unsigned n) {
        vector<int> r;
        r.reserve(n + 1);
        r.push_back(1);
        if (n == 0) return r;
        r.push_back(n);
        if (n == 1) return r;
        const unsigned h = n / 2;
        unsigned long long c = n;
        for (unsigned i = 2; i <= h; i++) {
            c = c * (n - i + 1) / i;
            r.push_back(c);
        }
        reverse_copy(r.cbegin(), r.cbegin() + h + (n & 1), back_inserter(r));
        return r;
    }
};
```

```Java []
class Solution {
    public List<Integer> getRow(final int n) {
        List<Integer> r = new ArrayList<>(n + 1);
        r.add(1);
        if (n == 0) return r;
        r.add(n);
        if (n == 1) return r;
        final int h = n / 2;
        long c = n;
        for (int i = 2; i <= h; i++) {
            c = c * (n - i + 1) / i;
            r.add((int)c);
        }
        for (int i = h + (n & 1) - 1; i >= 0; i--) {
            r.add(r.get(i));
        }
        return r;
    }
}
```

``` Scala []
object Solution {
    def getRow(rowIndex: Int): List[Int] = {
        rowIndex match {
            case 0 => List(1)
            case 1 => List(1, 1)
            case n => {
                val a: IndexedSeq[Int] = 1 +: (2 to n / 2).scan(n)((c, i) => (c.toLong * (n - i + 1) / i).toInt)
                (a ++ (if ((n & 1) == 1) a else a.init).reverse).toList
            }
        }
    }
}
```

``` Kotlin []
class Solution {
    fun getRow(n: Int): List<Int> {
        val r = ArrayList<Int>(n + 1)
        r.add(1)
        if (n == 0) return r
        r.add(n)
        if (n == 1) return r
        val h = n / 2
        var c: Long = n.toLong()
        for (i in 2..h) {
            c = c * (n - i + 1) / i
            r.add(c.toInt())
        }
        for (i in (h + (n and 1) - 1) downTo 0) {
            r.add(r.get(i))
        }
        return r
    }
}
```

``` Python3 []
class Solution:
    def getRow(self, n: int) -> List[int]:
        if n == 0: return [1]
        r = [1] * (n + 1)
        if n == 1: return r
        h = n // 2
        r[1] = c = n
        for i in range(2, h + 1):
            c = c * (n - i + 1) // i
            r[i] = c
        for i in range(h + (n & 1) - 1, -1, -1):
            r[n-i] = r[i]
        return r
```