# Heap Swift Short

**Author:** artemvor1997
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/3252545/](https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/3252545/)

---


- Time complexity: O(nlogn + qlogq)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(q+n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Main
```
class Solution {
    func minInterval(_ intervals: [[Int]], _ queries: [Int]) -> [Int] {
        let intervals = intervals.sorted{$0[0] < $1[0]}
        let queries = queries.enumerated().sorted{$0.1 < $1.1}
        var minHeap = Heap<Interval>(<)
        
        var ans = Array(repeating: 0, count: queries.count)
        var j = 0
        for (i, q) in queries {
            while j < intervals.count && intervals[j][0] <= q {
                minHeap.push(Interval(left: intervals[j][0], right: intervals[j][1] ))
                j += 1
            }
            while !minHeap.isEmpty && minHeap[0].right < q {
                minHeap.pop()
            }
            ans[i] = !minHeap.isEmpty ? (minHeap[0].right - minHeap[0].left + 1) : -1 
        }
        return ans
    }
}
```
# Interval & Heap
```
struct Interval: Comparable {
    let left, right: Int
    static func < (lhs: Interval, rhs: Interval) -> Bool {
        return lhs.right - lhs.left < rhs.right - rhs.left
    }
}

struct Heap<T: Comparable> {
    private var heap = [T]()
    private let comparator: (T, T)->Bool 
    
    init(_ comparator: @escaping (T, T)->Bool) {
        self.comparator = comparator
    }
    
    subscript(i: Int) -> T {heap[i]}
    var isEmpty: Bool {heap.isEmpty}
    var count: Int {heap.count}
    
    mutating func push(_ val: T) {
        heap.append(val)
        var pos = heap.count-1
        while pos > 0 && comparator(heap[pos], heap[(pos-1)/2]) {
            heap.swapAt(pos, (pos-1)/2)
            pos = (pos-1)/2
        }
    }
    
    mutating func pop() -> T? {
        guard let ans = heap.first else {return nil }
        heap[0] = heap.last!
        var pos = 0
        while pos*2 + 2 < heap.count {
            let swapSonInd = 
                comparator(heap[pos*2 + 1], heap[pos*2 + 2]) ?
                (pos*2 + 1) : (pos*2 + 2)
            if comparator(heap[swapSonInd], heap[pos]) {
                heap.swapAt(pos, swapSonInd)
                pos = swapSonInd
            } else {
                break
            }
        }
        heap.popLast()
        return ans
    }
}
```

