# Swift MinHeap

**Author:** user926
**Votes:** 4
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/699173/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/699173/)

---

```
class MinHeap<Point: Comparable> {
    var heap: [Point]

    init() {
        heap = [Point]()
    }

    func parent(_ i: Int) -> Int { return (i-1)/2 }
    func left(_ i: Int) -> Int { return ((2*i)+1) }
    func right(_ i: Int) -> Int { return ((2*i)+2) }

    func heapify(_ i: Int) {
        let n = heap.count
        let l = left(i)
        let r = right(i)
        var smallest = i

        // check if left index is within bounds
        // check if left child is smaller than the root
        if l < n && heap[l] < heap[i] {
            smallest = l
        }

        // check if right index is within bounds
        // check if right child is smaller than the root
        if r < n && heap[r] < heap[smallest] {
            smallest = r
        }

        // swap the child and the parent only
        // if any of the child is smaller
        if smallest != i {
            heap.swapAt(i, smallest)
            heapify(smallest)
        }
    }

    // insert at the end of the list
    // and shift up to the root
    func insert(item: Point) {
        heap.append(item)
        var lastIndex = heap.count - 1

        while heap[parent(lastIndex)] > item {
            heap.swapAt(lastIndex, parent(lastIndex))
            lastIndex = parent(lastIndex)
        }
    }

    // swap the first and last item in the list
    // and shift down
    func extractMin() -> Point? {
        if heap.count == 0 {
            return nil
        }
        let root = heap[0]
        heap.swapAt(0, heap.count - 1)
        heap.removeLast()
        heapify(0)
        return root
    }

    func removeItem(at index: Int) {
        if heap.isEmpty { return }
        heap.swapAt(index, heap.count - 1)
        heap.removeLast()
        heapify(index)
    }
    
    func peek() -> Point? {
        if heap.isEmpty { return nil }
        return heap[0]
    }
    
    func kThLargest(_ k: Int) -> Point? {
        while heap.count > k {
            removeItem(at: 0)
        }
        return peek()
    }
}

struct Point {
    let x: Int
    let y: Int
}

extension Point: Comparable {
    static func < (lhs: Point, rhs: Point) -> Bool {
        let x1 = lhs.x * lhs.x;
        let y1 = lhs.y * lhs.y;
        let x2 = rhs.x * rhs.x;
        let y2 = rhs.y * rhs.y;
        
        return (x1 + y1) < (x2 + y2);
    }
}

class Solution {
    func kClosest(_ points: [[Int]], _ K: Int) -> [[Int]] {

        if points.count < K {
            return []
        }

        let minHeap = MinHeap<Point>()

        for point in points {
            minHeap.insert(item: Point(x: point[0], y: point[1]))
        }
        var result = [[Int]]()

        var i = 0

        while i < K {
            let n = minHeap.extractMin()!
            result.append([n.x,n.y])
            i+=1
        }
    
        return result
    }
}
```