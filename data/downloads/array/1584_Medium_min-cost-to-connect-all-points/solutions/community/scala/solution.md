# No priority queues. No sorting. Just fair O(n²) and a top execution time.

**Author:** sergei99
**Votes:** 2
**Link:** [https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/4049336/](https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/4049336/)

---

# Intuition
A well known Prim algorithm requires repeated sorting within a loop, which seems to be inevitably leading to $$O(n^2 log(n))$$ time complexity. But in fact, the search can be implemented without ordered structures of any kind.

# Approach
Assume $$n$$ is the size of the input list called *points*.
Fill an array sized $$n$$ of *distances* with a value exceeding any possible distance (e.g. upper bound of a 32-bit integer type). These will be the minimal distances to nodes in the $$points$$ array.

Fill an array sized $$n$$ of *indexes* into the points and distances with increasing values from $$0$$ to $$n-1$$. Since indexes do not exceed $$10^4$$, a 16-bit short type would do. This array will be used for indirect addressing as we move nodes around.

Initialize the 3 aggregate scalars: *ultimate minimal distance* to the moment, *its index* and the *total cost*. All should have the initial values of zero.

Traverse nodes in any order. The algorithm described here uses the forward direction; there exist working solutions implementing the opposite traversal. Let's assume the loop index is *j*.

For each *j*-th node, add the previously discovered minimal distance to the total cost and exchange its node with the current node (via the *indexes* array). During the first iteration, this will be a noop, because we are at index $$0$$, and the minimal distance node is also at $$0$$.

Then, using a nested loop for the tail of the array (from the index following the current index to the end of the array), update the tail of minimal *distances* and find the new *ultimate minimal* distance value among those distances. The distance to node *i* is updated only if the distance between nodes *j* and *i* is below the previously discovered one. If the *ultimate minimum* is updated, then *its index* is also saved in the corresponding variable.

If a reverse iteration direction is chosen (from *n-1* to *0*), then the minimum lookup should be performed on the initial part of array (indexes below *j*) rather than its tail.

The *ultimate minimum* [possibly] produced by the last iteration is not added to the *total cost* as it has been already counted previously. The *total cost* is the value returned by the algorithm.

By exchanging the current element with the minimum we ensure the proper ordering of elements, so we always have minimums behind and the remaining elements yet to iterate over, without a separate sorting step. And the position of the current element actually separates visited nodes from non-visited ones, so we don't need a separate *visited* array of flags either.

We also employ a few usual optimization tricks to make the code run faster and use less memory:
- Allocating static arrays once at max size and reusing them afterwards.
- Using the smallest type possible in arrays (benefitting from data locality and saving on memory as well).
- Filling arrays with standard library utilities which usually translate to (or are directly implemented in) more efficient machine instructions.

The Scala implementation is not idiomatic functional Scala, but rather purely imperative code, replicating that of Java. Since the algorithm is based on moving data in arrays, and this is more efficiently done in place rather than via persistent immutable structures, we have to go imperative.

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Timings

  | Language | Execution Time | Beating | Memory Used | Beating |
  |---|---|---|---|---|
  | C++ | 21 ms | 100% | 10.2 Mb | 92.96% |
  | Java | 15 ms | 99.3% | 42.5 Mb | 99.88% |
  | Scala | 599 ms | 100% | 57.5 Mb | 100% |

# Code

```C++ []
class Solution {
private:
    typedef unsigned short idx_t;
    typedef int coord_t;

    static constexpr idx_t MAX_N = 1000;

    static array<coord_t, MAX_N> dists;
    static array<idx_t, MAX_N> idxs;

public:
    int minCostConnectPoints(vector<vector<int>>& points) {
        const idx_t n = points.size();
        iota(idxs.begin(), idxs.begin() + n, 0);
        fill(dists.begin(), dists.begin() + n, INT_MAX);
        coord_t total = 0, mincost = 0;
        for (idx_t pt = 0, j = 0; j < n; j++) {
            total += mincost;
            const coord_t x = points[idxs[pt]][0],
                          y = points[idxs[pt]][1];
            swap(idxs[pt], idxs[j]);
            mincost = INT_MAX;
            for (idx_t i = j + 1; i < n; i++) {
                const auto &p = points[idxs[i]];
                auto &c = dists[idxs[i]];
                const auto d = abs(p[0] - x) + abs(p[1] - y);
                if (c > d) c = d;
                if (mincost > c) {
                    pt = i;
                    mincost = c;
                }
            }
        }
        return total;
    }
};

array<Solution::coord_t, Solution::MAX_N> Solution::dists;
array<Solution::idx_t, Solution::MAX_N> Solution::idxs;

auto init = []()
{ ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  return 'c';
}();
```

```Java []
class Solution {
    private static final short MAX_N = 1000;
    private static final int[] dists = new int[MAX_N];
    private static final short[] idxs = new short[MAX_N];

    public int minCostConnectPoints(int[][] points) {
        final short n = (short)points.length;
        for (short j = 0; j < n; j++) {
            idxs[j] = j;
            dists[j] = Integer.MAX_VALUE;
        }
        int total = 0, mincost = 0;
        for (short pt = 0, j = 0; j < n; j++) {
            total += mincost;
            final int x = points[idxs[pt]][0],
                      y = points[idxs[pt]][1];
            short ti = idxs[pt]; idxs[pt] = idxs[j]; idxs[j] = ti;
            mincost = Integer.MAX_VALUE;
            for (short i = (short)(j + 1); i < n; i++) {
                final var p = points[idxs[i]];
                final var d = Math.abs(p[0] - x) + Math.abs(p[1] - y);
                var c = dists[idxs[i]];
                if (c > d) dists[idxs[i]] = c = d;
                if (mincost > c) {
                    pt = i;
                    mincost = c;
                }
            }
        }
        return total;
    }
}
```

```Scala []
object Solution {
    private[this] val MAX_N: Short = 1000
    private[this] val dists: Array[Int] = Array.fill(MAX_N)(Integer.MAX_VALUE)
    private[this] val idxs: Array[Short] = Array.fill[Short](MAX_N)(0)

    def minCostConnectPoints(points: Array[Array[Int]]): Int = {
        val n = points.length.toShort
        for (j: Short <- (0 until n).map(_.toShort)) {
            dists(j) = Integer.MAX_VALUE
            idxs(j) = j
        }
        var total = 0
        var mincost = 0
        var pt: Short = 0
        for (j <- (0 until n)) {
            total += mincost
            val x = points(idxs(pt))(0)
            val y = points(idxs(pt))(1)
            val ti = idxs(pt); idxs(pt) = idxs(j); idxs(j) = ti
            mincost = Integer.MAX_VALUE
            for (i <- (j + 1 until n)) {
                val p = points(idxs(i))
                val d = (p(0) - x).abs + (p(1) - y).abs
                val c = dists(idxs(i))
                val m = if (c > d) {
                    dists(idxs(i)) = d
                    d
                } else {
                    c
                }
                if (mincost > m) {
                    pt = i.toShort
                    mincost = m
                }
            }
        }
        total
    }
}
```
