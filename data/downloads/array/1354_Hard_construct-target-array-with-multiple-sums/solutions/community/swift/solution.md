# [Swift] Solution with max heap + GCD approach

**Author:** GV1506
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189420/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189420/)

---

```
class Solution {
    
    struct Heap<T> where T: Comparable {
        var nodes: [T]
        var comparator: (T, T) -> Bool
        var size: Int {
            return nodes.count
        }

        init(_ nodes: [T] = [], sort: @escaping (T, T) -> Bool) {
            self.nodes = nodes
            self.comparator = sort
            buildHeap()
        }

        func isEmpty() -> Bool {
            return nodes.isEmpty
        }

        func parentIndex(_ index: Int) -> Int {
            return (index-1)/2
        }

        func leftChildIndex(_ index: Int) -> Int {
            return index * 2 + 1
        }

        func rightChildIndex(_ index: Int) -> Int {
            return index * 2 + 2
        }

        func peek() -> T? {
            return nodes.first
        }

        // append item to the tail of nodes.
        mutating func insert(_ value: T) {
          nodes.append(value)
          shiftUp(nodes.count - 1)
        }

        mutating func remove() -> T {
            if size == 1 {
              return nodes.removeLast()
            } else {
              let value = nodes[0]
              nodes[0] = nodes.removeLast()
              shiftDown(0)
              return value
            }
        }


        // MARK: private functions

        private func hasParent(_ index: Int) -> Bool {
            return parentIndex(index) >= 0
        }

        private func hasLeftChild(_ index: Int) -> Bool {
            return leftChildIndex(index) < size
        }

        private func hasRightChild(_ index: Int) -> Bool {
            return rightChildIndex(index) < size
        }

        private mutating func shiftUp(_ index: Int) {
            var index = index
            while index > 0, comparator(nodes[parentIndex(index)], nodes[index]) == false {
                nodes.swapAt(index, parentIndex(index))
                index = parentIndex(index)
            }
        }

        private mutating func shiftDown(_ index: Int) {
            var index = index
            while hasLeftChild(index) {
                var smallerChildIndex = self.leftChildIndex(index)
                if hasRightChild(index), comparator(nodes[rightChildIndex(index)], nodes[leftChildIndex(index)]) {
                    smallerChildIndex = rightChildIndex(index)
                }

                if comparator(nodes[index], nodes[smallerChildIndex]) == false {
                    nodes.swapAt(index, smallerChildIndex)
                }
                index = smallerChildIndex
            }

        }

        private mutating func buildHeap() {
            for i in stride(from: size/2, through: 0, by: -1) {
                shiftDown(i)
            }
        }
    }
    
    func isPossible(_ target: [Int]) -> Bool {
        guard target.count > 1 else { return target.count == 1 && target[0] == 1 }
        var heap = Heap<Int>(sort: >)
        var sum = 0
        for num in target {
            sum += num
            heap.insert(num)
        }
        
        // while largest element > 1
        while heap.peek()! > 1 {
            let largest = heap.remove()
            sum -= largest
            // now sum is the sum of other numbers except the largest one
            let previousValue = sum == 1 ? 1 : largest % sum
            if previousValue < 1 || previousValue == largest {
                return false
            } else {
                // insert the previousValue of the largest number
                heap.insert(previousValue)
                sum += previousValue
            }
        }
        return true
    }
}
```