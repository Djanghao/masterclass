# 3 Approaches: Binary Search + Dijk + Kruskals.

**Author:** 2pac_shakur
**Votes:** 4
**Link:** [https://leetcode.com/problems/path-with-minimum-effort/solutions/909555/](https://leetcode.com/problems/path-with-minimum-effort/solutions/909555/)

---

**[All credits to Alex](https://bit.ly/35vhvAa)**

```
    /**
        Approach 1: Binary Search for the answer.
        -----------------------------------------
        If we can finish the task on X effort, then I could possibly finish 
        with X + 1, X + 2 as well.
        
        So check with all possible range of effort values in Binary search fashion,
        If valid, to DFS and get the answer.
        
        DFS is from top left and move to neighbours if the effort is less.
    **/
	fun minimumEffortPathss(A: Array<IntArray>): Int {
        val R = A.size
        val C = A[0].size
        
        fun neighbours(r: Int, c: Int): List<Pair<Int, Int>> {
            val result = mutableListOf<Pair<Int, Int>>()
            for ((nr, nc) in listOf(r + 1 to c, r - 1 to c, r to c + 1, r to c - 1)) {
                if (nr >= 0 && nr < R && nc >= 0 && nc < C)
                    result.add(nr to nc)
            }
            return result
        }
        
        fun possible(effort: Int): Boolean {
            val stack: Stack<Pair<Int, Int>> = Stack()
            val seen: MutableSet<Pair<Int, Int>> = HashSet()
            val start = 0 to 0
            stack.push(start)
            seen.add(start)
            while (stack.isNotEmpty()) {
                val (r, c) = stack.pop()
                if (r == R - 1 && c == C - 1)
                    return true
                for ((nr, nc) in neighbours(r, c)) {
                    if (abs(A[nr][nc] - A[r][c]) <= effort &&
                            seen.contains(nr to nc).not()) {
                        seen.add(nr to nc)
                        stack.push(nr to nc)
                    }
                }
            }
            return false
        }
        
        var (low, high) = 0 to 1_00_00_000 // range of efforts: 0 to 10^6
        while (low < high) {
            val mid = (low + high) / 2
            if (possible(mid).not())
                low = mid + 1
            else
                high = mid
        }
        return low
   }
```
--------

```
/**
        Approach 2:  Disjikra's Algo
        -----------------------------
        Usaul Dij Algo, just update the heap with new (nr, nc) if the updated
        distance is better the previous.
    **/
    fun minimumEffortPaths(A: Array<IntArray>): Int {
        val R = A.size
        val C = A[0].size
        val INF = Int.MAX_VALUE
        val minDistComparator = Comparator { a: IntArray, b: IntArray -> a[0] - b[0] }
        val pq = PriorityQueue<IntArray>(minDistComparator) // { dist, r, c }
        val dist: MutableMap<Pair<Int, Int>, Int> = HashMap()
        
        fun neighbours(r: Int, c: Int): List<Pair<Int, Int>> {
            val result = mutableListOf<Pair<Int, Int>>()
            for ((nr, nc) in listOf(r + 1 to c, r - 1 to c, r to c + 1, r to c - 1)) {
                if (nr >= 0 && nr < R && nc >= 0 && nc < C)
                    result.add(nr to nc)
            }
            return result
        }
        
        pq.offer(intArrayOf(0, 0, 0))
        dist[0 to 0] = 0
        while (pq.isNotEmpty()) {
            val (d, r, c) = pq.poll()
            if (r == R - 1 && c == C - 1)
                return d
            for (nei in neighbours(r, c)) {
                val (nr, nc) = nei
                val nd = maxOf(d, abs(A[nr][nc] - A[r][c]))
                if (nd < dist.getOrDefault(nei, INF)) {
                    dist[nei] = nd
                    pq.offer(intArrayOf(nd, nr, nc))
                }
            }
        }
        return 0
    }
```
------------

```
/**
        Approach 3: Kruskal's Algo using Disjoint set union
        -----------------------------------------------------
        Pre Req: Encoding (r, c) of 2D matrix to a single number
                 encode(r, c) => r * C + c
                 decode(x)    => r = x / C and c = x % C
        Add all edges to list.
        Sort it based on the distance.
        In doing union, if source and target belong to the same component or SET, return the distance.
    **/
     fun minimumEffortPath(A: Array<IntArray>): Int {
        val R = A.size
        val C = A[0].size
        val dsu = DSU(R * C) 
        val minDistComparator = Comparator { a: IntArray, b: IntArray -> a[0] - b[0] }
        val edges: MutableList<IntArray> = ArrayList() // d, node1, node2
        
        fun encode(r: Int, c: Int) = r * C + c
         
        for (r in 0 until R) {
            for (c in 0 until C) {
                val v = A[r][c]
                if (r > 0)
                    edges.add(intArrayOf(abs(v - A[r - 1][c]), encode(r - 1, c), encode(r, c)))
                if (c > 0)
                    edges.add(intArrayOf(abs(v - A[r][c - 1]), encode(r, c - 1), encode(r, c)))
            }
        } 
        
        edges.sortWith(minDistComparator)
        val source = encode(0, 0)
        val target = encode(R - 1, C - 1)
        for ((d, u, v) in edges) {
            if (dsu.union(u, v)) {
                if (dsu.find(source) == dsu.find(target))
                    return d
            }
        }
        return 0
     }
	 
	 class DSU(val N: Int) {
		val parent = IntArray(N)
		val size = IntArray(N)

		init { makeSet() }

		private fun makeSet() {
			for (i in 0 until N) {
				parent[i] = i
				size[i] = 1
			}
		}

		fun find(x: Int): Int {
			if (x != parent[x]) {
				parent[x] = find(parent[x])
			}
			return parent[x]
		}

		fun union(x: Int, y: Int): Boolean {
			val (xP, yP) = find(x) to find(y)
			if (xP == yP) return false
			if (size[xP] > size[yP]) {
				size[xP] += size[yP]
				parent[yP] = xP
			} else {
				size[yP] += size[xP]
				parent[xP] = yP
			}
			return true
		}
}
	 
```
