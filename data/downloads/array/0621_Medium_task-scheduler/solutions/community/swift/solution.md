# Simple, Concise Swift [Beats 100%]

**Author:** ucastillo
**Votes:** 2
**Link:** [https://leetcode.com/problems/task-scheduler/solutions/4683896/](https://leetcode.com/problems/task-scheduler/solutions/4683896/)

---

```
class Solution {
    func leastInterval(_ tasks: [Character], _ n: Int) -> Int {
        let counter = tasks.reduce(into: [:]) { $0[$1, default: 0] += 1 }
        var q = [(availableTime: Int, count: Int)]()
        var maxHeap = Heap<Int>(>), time = 0
        counter.values.forEach { maxHeap.push($0) }

        while !maxHeap.isEmpty || !q.isEmpty {
            time += 1
            if let count = maxHeap.pop(), count > 1  {
                q.append((time+n, count-1))
            }
            guard q.first?.availableTime == time else { continue }
            maxHeap.push(q.removeFirst().count)
        }

        return time 
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