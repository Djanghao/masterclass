# Swift CFBinaryHeap + BFS

**Author:** tzef
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2911845/](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2911845/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Please refer this
https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2899594/python-3-solution-with-explanation-heap-binary-search/?orderBy=most_votes

# Approach
It's not easy to pass by Swift
I tried union&find solution
https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2899354/simple-solution-with-intuition-c-o-n-m-time-and-space/?orderBy=most_votes

But always TLE
custom heap also can't pass

Guys use Swift in LeetCode must keep a CFBinaryHeap template in your local notebook...


# Code
```
/*
    BFS find best path in ascending order
    prefix count is the result
    122335517
         ^  
    [5, 6, 2]
 */
import CoreFoundation
typealias Node = (value: Int, coordinates: [Int])

class Heap {
    typealias Element = Node
    var pointer = UnsafeMutablePointer<Element>.allocate(capacity: 1)
    
    deinit {
        pointer.deinitialize(count: 1)
        pointer.deallocate()
    }

    lazy var binaryHeap: CFBinaryHeap = {
        var callbacks = CFBinaryHeapCallBacks()
        callbacks.compare = { (a, b, _) in
            let x: Element = a!.load(as: Element.self), y: Element = b!.load(as: Element.self)
            return x.value < y.value ? CFComparisonResult.compareLessThan : CFComparisonResult.compareGreaterThan
        }
        var heap = CFBinaryHeapCreate(nil, 0, &callbacks, nil)
        return heap!
    }()

    var count: Int {
        CFBinaryHeapGetCount(binaryHeap)
    }

    func append(_ element: Element) {
        pointer = UnsafeMutablePointer<Element>.allocate(capacity: 1)
        pointer.initialize(to: (element))
        CFBinaryHeapAddValue(binaryHeap, pointer)
    }

    func pop() -> Element {
        let popped: Element = CFBinaryHeapGetMinimum(binaryHeap).load(as: Element.self)
        CFBinaryHeapRemoveMinimumValue(binaryHeap)
        return popped
    }
}

class Solution {
    let minHeap = Heap()
    
    func maxPoints(_ grid: [[Int]], _ queries: [Int]) -> [Int] {
        let getNeighbors: (_ piont: [Int]) -> [[Int]] = { point -> [[Int]] in
            [
                [point[0], point[1]+1],
                [point[0], point[1]-1],
                [point[0]+1, point[1]],
                [point[0]-1, point[1]]
            ].filter { 0..<grid.count ~= $0[0] && 0..<grid[0].count ~= $0[1] }
        }
        minHeap.append((value: grid[0][0], coordinates: [0, 0]))
        var order = [Int]()
        var visitedSet = Set<[Int]>()
        while minHeap.count > 0 {
            let next = minHeap.pop()
            guard !visitedSet.contains(next.coordinates) else {
                continue
            }
            visitedSet.insert(next.coordinates)
            getNeighbors(next.coordinates)
                .map { (value: grid[$0[0]][$0[1]], coordinates: $0) }
                .forEach {
                    minHeap.append($0)
                }
            order.append(next.value)
        }
        
        var result = Array(repeating: 0, count: queries.count)
        
        let sortedQueries = queries.enumerated().sorted { $0.element < $1.element }
        var count = 0
        for i in 0..<sortedQueries.count {
            let query = sortedQueries[i].element
            let index = sortedQueries[i].offset
            while count < order.count, order[count] < query {
                count += 1
            }
            result[index] = count
        }
        
        return result
    }
}
```