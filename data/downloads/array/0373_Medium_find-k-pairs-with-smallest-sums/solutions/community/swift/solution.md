# 💡Swift - Optimal Solution - Heap (Priority Queue)

**Author:** bernikovich
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/4885825/](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/4885825/)

---

# Solution
```swift
class Solution {
    func kSmallestPairs(_ nums1: [Int], _ nums2: [Int], _ k: Int) -> [[Int]] {
        var indices = Array(repeating: 0, count: nums1.count)
        var heap = Heap<Int>() {
            nums1[$0] + nums2[indices[$0]] < nums1[$1] + nums2[indices[$1]]
        }
        nums1.indices.forEach { heap.insert($0) }

        var answer: [[Int]] = []
        for _ in 0..<k {
            let index1 = heap.remove()!
            let index2 = indices[index1]
            indices[index1] += 1
            if indices[index1] < nums2.count {
                heap.insert(index1)
            }
            answer.append([nums1[index1], nums2[index2]])
        }
        return answer
    }
}

// Standard Heap (Priority Queue) implementation.
public struct Heap<T> {
    
    var nodes = [T]()
    private var orderCriteria: (T, T) -> Bool
    
    public init(sort: @escaping (T, T) -> Bool) {
        self.orderCriteria = sort
    }
    
    public var isEmpty: Bool { nodes.isEmpty }
    public var count: Int { nodes.count }
    
    @inline(__always) internal func parentIndex(ofIndex i: Int) -> Int {
        (i - 1) / 2
    }
    
    @inline(__always) internal func leftChildIndex(ofIndex i: Int) -> Int {
        2 * i + 1
    }
    
    @inline(__always) internal func rightChildIndex(ofIndex i: Int) -> Int {
        2 * i + 2
    }
    
    public func peek() -> T? {
        nodes.first
    }
    
    public mutating func insert(_ value: T) {
        nodes.append(value)
        shiftUp(nodes.count - 1)
    }
    
    @discardableResult public mutating func remove() -> T? {
        guard !nodes.isEmpty else { return nil }
        
        if nodes.count == 1 {
            return nodes.removeLast()
        } else {
            let value = nodes[0]
            nodes[0] = nodes.removeLast()
            shiftDown(0)
            return value
        }
    }
    
    internal mutating func shiftUp(_ index: Int) {
        var childIndex = index
        let child = nodes[childIndex]
        var parentIndex = self.parentIndex(ofIndex: childIndex)
        
        while childIndex > 0 && orderCriteria(child, nodes[parentIndex]) {
            nodes[childIndex] = nodes[parentIndex]
            childIndex = parentIndex
            parentIndex = self.parentIndex(ofIndex: childIndex)
        }
        
        nodes[childIndex] = child
    }
    
    internal mutating func shiftDown(from index: Int, until endIndex: Int) {
        let leftChildIndex = self.leftChildIndex(ofIndex: index)
        let rightChildIndex = leftChildIndex + 1
        
        var first = index
        if leftChildIndex < endIndex && orderCriteria(nodes[leftChildIndex], nodes[first]) {
            first = leftChildIndex
        }
        if rightChildIndex < endIndex && orderCriteria(nodes[rightChildIndex], nodes[first]) {
            first = rightChildIndex
        }
        if first == index { return }
        
        nodes.swapAt(index, first)
        shiftDown(from: first, until: endIndex)
    }
    
    internal mutating func shiftDown(_ index: Int) {
        shiftDown(from: index, until: nodes.count)
    }
    
}
```
# Complexity
- Time: $$O((n+k) \\cdot \\log n)$$
- Space: $$O(n)$$