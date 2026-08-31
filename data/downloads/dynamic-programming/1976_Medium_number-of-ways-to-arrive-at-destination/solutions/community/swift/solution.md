# Easy Priority Queue With Explanation | Swift ✅

**Author:** rishixcode
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/5830896/](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/5830896/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class PriorityQueue<T> {
    typealias HeapComparator<T> = (_ l:T,_ r:T) -> Bool
    var heap = [T]()
    var count:Int {
        get {
            heap.count
        }
    }
    
    var comparator:HeapComparator<T>
    
    
    /// bubbleUp is called after appending the item to the end of the queue.  Depending on the comparator,
    /// it will bubbleUp to its approriate spot
    /// - Parameter idx: Index to bubble up.  This starts after insert with last index being passed in.
    private func bubbleUp(idx:Int) {
        let parent = (idx - 1) / 2
        
        if idx <= 0 {
            return
        }
        
        if comparator(heap[idx], heap[parent]) {
            heap.swapAt(parent, idx)
            bubbleUp(idx: parent)
        }
    }
    
    
    /// Heapify the current heap.  This method walks down the children and rearranges them in comparator order.
    /// - Parameter idx: index to heapify.
    private func heapify(_ idx:Int) {
        var left = idx * 2 + 1
        var right = idx * 2 + 2
        
        var comp = idx
        
        if count > left && comparator(heap[left], heap[comp]) {
            comp = left
        }
        if count > right && comparator(heap[right], heap[comp]) {
            comp = right
        }
        if comp != idx {
            heap.swapAt(comp, idx)
            heapify(comp)
        }
    }
    
    init(comparator:@escaping HeapComparator<T>) {
        self.comparator = comparator
    }
    
    
    /// Insert item into the heap.  This walks up the parents. This is a O(log n) operation
    /// - Parameter item: item that is comparable.
    func enqueue(_ item:T) {
        heap.append(item)
        bubbleUp(idx: count-1)
    }
    
    
    /// Get the top item in the heap based on comparator. This is a 0(1) operation
    /// - Returns: top item or nil if empty.
    func peek() -> T? {
        return heap.first
    }
    
    
    /// Remove the top item.  This is a O(log n) operation
    /// - Returns: returns top item based on comparator or nil if empty.
    func dequeue() -> T? {
        var item:T? = heap.first
        if count > 1 {
            // set the top to the last element and heapify
            // this means we can remove the last after "poping" the first.
            heap[0] = heap[count-1]
            heap.removeLast()
            heapify(0)
        }
        else if count == 1{
            heap.removeLast()
        }
        else {
            return nil
        }
        
        return item
    }
}

class Solution {
func countPaths(_ n: Int, _ roads: [[Int]]) -> Int {
    let MOD = 1000000000 + 7
    var adj: [[(Int, Int)]] = Array(repeating: [], count: n)
    let src = 0
    let end = n - 1
    var ways: [Int] = Array(repeating: 0, count: n)

    // Min-heap (priority queue) for Dijkstra-like traversal
    var queue = PriorityQueue<[Int]> { l,r in
        if l[0] == r[0] {
            return l[1] < r[1]
        } else {
            return l[0] < r[0]
        }
        
    }

    // Build adjacency list
    for road in roads {
        let u = road[0]
        let v = road[1]
        let wt = road[2]
        adj[u].append((v, wt))
        adj[v].append((u, wt))
    }

    // Distance array initialized to max values
    var distArr = Array(repeating: Int.max, count: n)
    distArr[src] = 0

    // Start with the source node (distance, node)
    queue.enqueue([0, src])
    ways[src] = 1

    while !queue.heap.isEmpty {
        let curr = queue.peek()!
        let node = curr[1]
        let dist = curr[0]
        queue.dequeue()

        // Process neighbors
        for neighbor in adj[node] {
            let adjNode = neighbor.0
            let adjDist = neighbor.1
            let newDist = adjDist + dist

            // If a shorter path to adjNode is found
            if newDist < distArr[adjNode] {
                distArr[adjNode] = newDist
                queue.enqueue([newDist, adjNode])
                ways[adjNode] = ways[node]
            }
            // If another shortest path to adjNode is found
            else if newDist == distArr[adjNode] {
                ways[adjNode] = (ways[adjNode] + ways[node]) % MOD
            }
        }
    }

    return ways[end] % MOD
}

}
```