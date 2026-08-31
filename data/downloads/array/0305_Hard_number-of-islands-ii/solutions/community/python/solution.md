# Java/Python clear solution with UnionFind Class (Weighting and Path compression)

**Author:** dietpepsi
**Votes:** 200
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/75459/](https://leetcode.com/problems/number-of-islands-ii/solutions/75459/)

---

**Union Find**
is an abstract data structure supporting `find` and `unite` on disjointed sets of objects, typically used to solve the network connectivity problem.

The two operations are defined like this: 

`find(a,b)` : are `a` and `b` belong to the same set?

`unite(a,b)` : if `a` and `b` are not in the same set, unite the sets they belong to.

With this data structure, it is very fast for solving our problem. Every position is an new land, if the new land connect two islands `a` and `b`, we combine them to form a whole. The answer is then the number of the disjointed sets.


The following algorithm is derived from [Princeton's lecture note on Union Find][1] in [Algorithms and Data Structures][2] It is a well organized note with clear illustration describing from the naive QuickFind to the one with Weighting and Path compression.
With Weighting and Path compression, The algorithm runs in `O((M+N) log* N)` where `M` is the number of operations ( unite and find ), `N` is the number of objects, `log*` is [iterated logarithm][3] while the naive runs in `O(MN)`.

For our problem, If there are `N` positions, then there are `O(N)` operations and `N` objects then total is `O(N log*N)`, when we don't consider the `O(mn)` for array initialization.

Note that `log*N` is almost constant (for `N` = 265536, `log*N` = 5) in this universe, so the algorithm is almost linear with `N`.

However, if the map is very big, then the initialization of the arrays can cost a lot of time when `mn` is much larger than `N`. In this case we should consider using a hashmap/dictionary for the underlying data structure to avoid this overhead.

Of course, we can put all the functionality into the Solution class which will make the code a lot shorter. But from a design point of view a separate class dedicated to the data sturcture is more readable and reusable.

I implemented the idea with 2D interface to better fit the problem.

**Java**

    public class Solution {
    
        private int[][] dir = {{0, 1}, {0, -1}, {-1, 0}, {1, 0}};
    
        public List<Integer> numIslands2(int m, int n, int[][] positions) {
            UnionFind2D islands = new UnionFind2D(m, n);
            List<Integer> ans = new ArrayList<>();
            for (int[] position : positions) {
                int x = position[0], y = position[1];
                int p = islands.add(x, y);
                for (int[] d : dir) {
                    int q = islands.getID(x + d[0], y + d[1]);
                    if (q > 0 && !islands.find(p, q))
                        islands.unite(p, q);
                }
                ans.add(islands.size());
            }
            return ans;
        }
    }

    class UnionFind2D {
        private int[] id;
        private int[] sz;
        private int m, n, count;

        public UnionFind2D(int m, int n) {
            this.count = 0;
            this.n = n;
            this.m = m;
            this.id = new int[m * n + 1];
            this.sz = new int[m * n + 1];
        }

        public int index(int x, int y) { return x * n + y + 1; }

        public int size() { return this.count; }

        public int getID(int x, int y) {
            if (0 <= x && x < m && 0<= y && y < n)
                return id[index(x, y)];
            return 0;
        }

        public int add(int x, int y) {
            int i = index(x, y);
            id[i] = i; sz[i] = 1;
            ++count;
            return i;
        }

        public boolean find(int p, int q) {
            return root(p) == root(q);
        }

        public void unite(int p, int q) {
            int i = root(p), j = root(q);
            if (sz[i] < sz[j]) { //weighted quick union
                id[i] = j; sz[j] += sz[i];
            } else {
                id[j] = i; sz[i] += sz[j];
            }
            --count;
        }

        private int root(int i) {
            for (;i != id[i]; i = id[i])
                id[i] = id[id[i]]; //path compression
            return i;
        }
    }
    //Runtime: 20 ms


**Python (using dict)**
    
    class Solution(object):
        def numIslands2(self, m, n, positions):
            ans = []
            islands = Union()
            for p in map(tuple, positions):
                islands.add(p)
                for dp in (0, 1), (0, -1), (1, 0), (-1, 0):
                    q = (p[0] + dp[0], p[1] + dp[1])
                    if q in islands.id:
                        islands.unite(p, q)
                ans += [islands.count]
            return ans
    
    class Union(object):
        def __init__(self):
            self.id = {}
            self.sz = {}
            self.count = 0
    
        def add(self, p):
            self.id[p] = p
            self.sz[p] = 1
            self.count += 1
    
        def root(self, i):
            while i != self.id[i]:
                self.id[i] = self.id[self.id[i]]
                i = self.id[i]
            return i
    
        def unite(self, p, q):
            i, j = self.root(p), self.root(q)
            if i == j:
                return
            if self.sz[i] > self.sz[j]:
                i, j = j, i
            self.id[i] = j
            self.sz[j] += self.sz[i]
            self.count -= 1

    #Runtime: 300 ms


  [1]: https://www.cs.princeton.edu/~rs/AlgsDS07/01UnionFind.pdf
  [2]: https://www.cs.princeton.edu/~rs/AlgsDS07/
  [3]: https://en.wikipedia.org/wiki/Iterated_logarithm