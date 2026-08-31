# explanation and interesting golang solution using disjoint set datastructure

**Author:** benjamin5
**Votes:** 1
**Link:** [https://leetcode.com/problems/couples-holding-hands/solutions/1639204/](https://leetcode.com/problems/couples-holding-hands/solutions/1639204/)

---

Let's first quickly recap the possible solutions.
* **Permutations** This solution is terrible, but worth metioning. We can generate all permutations of the input list using [heap's algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm). For each one keep track of the number of swaps done, check if its a valid ordering, and keep track of the minimum. This takes `O(n*n!)` time and `O(n)` stack space due to the recursion.
* **Backtracking** This solution is almost as terrible. Make all possible swaps but only if the swap results in making a valid couple pair. Each pair along the array will have two possible swaps, try both, and the recursively try on each result. This takes `O(n*2^n)` time and `O(n)` stack space due the recursion.
* **Cycle Finding** Rather the physically swap values, think of each pair as a vertex, and place an edge between each vertex where a valid swap can be made. Eventually the vertexes will form a cycle, or several cycles. Just count the number of cycles. This takes `O(n)` time to traverse the graph and `O(n)` space to store the graph.
* **Greedy** Similar to the backtracking solution, but notice that it doesn't matter which choice you make, everything is symmetrical, so just choose one and keep iterating. This can be done in a single pass in `O(n^2)` time and `O(1)` time or in two passes if we first reverse-index all the values with a hashmap in `O(n)` time and `O(n)` space.

We can't do any better than linear time, but what if we wanted to support streaming data, get live updates on the minimum swaps as the data streams, and support multiple machines adding data to the stream?

The idea is to use a [disjoint set](https://en.wikipedia.org/wiki/Disjoint-set_data_structure), where the skeleton code below details all the operations. We will assume the implementation supports `union by rank` and `path compression` which gives us `O(1)` time for all operations and `O(n)` space.

```
// DisjointSet stores and merges set with union by rank and find with path compression
type DisjointSet interface {
    // MakeSet adds data to the disjoint set as its own set
	MakeSet(data int)
	
	// FindSet finds the representative for data in its set or nil if the data is not present
	FindSet(data int) *int
	
	// Union merges two sets
	Union(data1 int, data2 int)
}
```

As pairs of numbers stream in they begin to fill up the disjoint set following these rules
* For pairs that are already a "couple" like `(0,1)` just ignore it, no swaps are needed.
* For pairs that do not have any swappable partners in the disjoint set, create a new set for them with `MakeSet`.  For example if the set contained `(0,3)` and a `(5,8)` came in
* For pairs where only the left item has a swappable partner (or only the right partner) call `MakeSet` on them followed by `Union` on the partner's existing set and increment the count. For example if the set contained `(0,3)` and either a `(1,8)`, `(8, 1)`, `(2, 8)`, or `(8, 2)` came in.
* For pairs where both the left and right items have swappable partners, and their partners are in the same set follow the same instructions as above. An example here would be a set containing `(0,3)` and a `(1,2)` came in.
* Finally for pairs where both the left and right items have swappable partners, and their partners are in different sets call `MakeSet` on them and call `Union` on each set, incrementing the count for each time `Union` is called.

Here is what the algorithm looks like to ingest a single pair, just abstract this up in an outer for loop to ingest all pairs and provide a method to return the final count when the stream ends.
```
func (m *Ingester) Ingest(data1 int, data2 int) {
    m.mu.Lock()
	defer m.mu.Unlock()

    // ignore pairs that are already couples
    if isPartner(data1, data2) {
        return
    }
    
    // add pair to their own set
    m.disjointSet.MakeSet(data1)
    m.disjointSet.MakeSet(data2)
    m.disjointSet.Union(data1, data2)

    // find if sets exists for each item's partner
	p1 := m.disjointSet.FindSet(getPartner(data1))
    p2 := m.disjointSet.FindSet(getPartner(data2))
    
    if p1 != nil && p2 != nil && p1 == p2 {
        // both items have partners in the same set
        m.disjointSet.Union(*p1, data1)
        m.disjointSet.Union(*p2, data1)
        m.count++
    } else {
        // partners are in different sets
        if p1 != nil {
            m.disjointSet.Union(*p1, data1)
            m.count++
        }
        if p2 != nil {
            m.disjointSet.Union(*p2, data1)
            m.count++
        }
    }
}
```

I've left some details out, see if you can figure out why this works and how to implement everything efficiently.