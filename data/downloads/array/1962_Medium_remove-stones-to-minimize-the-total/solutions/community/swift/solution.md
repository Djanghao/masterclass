# Swift | Array Heap Implementation

**Author:** efk
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1976074/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1976074/)

---

```swift
// purpose-built array heap (mostly typical implementaion with some tweaks specific to the problem)
struct PileHeap {
    private var values: [Int]
    
    init(_ piles: [Int]) {
        self.values = [Int]()
        self.values.reserveCapacity(piles.count)

        for (index, value) in piles.enumerated() {
            self.values.append(value)
            
            self.siftUp(index, value)
        }
    }
    
    mutating public func halveMaxPile() {
        if let value = self.values.first {
            let newValue = value - (value / 2)
            self.values[self.values.startIndex] = newValue
            
            self.siftDown(self.values.startIndex, newValue)
        }
    }
    
    @inline(__always) var stones: [Int] {
        get {
            self.values
        }
    }
    
    mutating private func siftUp(_ index: Int, _ value: Int) {
        let parentIndexOrNil = self.getParentIndex(index)
        guard let parentIndex = parentIndexOrNil else {
            return
        }
        
        let parentValue = self.values[parentIndex]
        
        if parentValue < value {
            self.values.swapAt(parentIndex, index)

            self.siftUp(parentIndex, value)
        }
    }

    mutating private func siftDown(_ index: Int, _ value: Int) {
        let leftChildIndex = self.getLeftChildIndex(index)
        let rightChildIndex = self.getRightChildIndex(index)
        
        if let leftChildIndex = leftChildIndex, let rightChildIndex = rightChildIndex {
            let leftChildValue = self.values[leftChildIndex]
            let rightChildValue = self.values[rightChildIndex]
            
            let maxChildValue = leftChildValue < rightChildValue ? rightChildValue : leftChildValue
            let maxChilldIndex = leftChildValue < rightChildValue ? rightChildIndex : leftChildIndex
            
            if value < maxChildValue {
                self.values.swapAt(index, maxChilldIndex)
                self.siftDown(maxChilldIndex, value)
            }
        } else if let leftChildIndex = leftChildIndex {
            let leftChildValue = self.values[leftChildIndex]
            if value < leftChildValue {
                self.values.swapAt(index, leftChildIndex)
                
                self.siftDown(leftChildIndex, value)
            }
        }
    }

    @inline(__always) private func getParentIndex(_ index: Int) -> Int? {
        let mightBeIndex = (index - 1) / 2
        
        return self.values.startIndex < index && self.isValidIndex(mightBeIndex) ? mightBeIndex : nil
    }
    
    @inline(__always) private func getLeftChildIndex(_ index: Int) -> Int? {
        let mightBeIndex = 2 * index + 1
        
        return self.isValidIndex(mightBeIndex) ? mightBeIndex : nil
    }
    
    @inline(__always) private func getRightChildIndex(_ index: Int) -> Int? {
        let mightBeIndex = 2 * index + 2
        
        return self.isValidIndex(mightBeIndex) ? mightBeIndex : nil
    }

    @inline(__always) func isValidIndex(_ index: Int) -> Bool {
        self.values.startIndex <= index && index < self.values.endIndex
    }
}

// EZ solution though

struct Solution {
    @inline(__always) func minStoneSum(_ piles: [Int], _ k: Int) -> Int {
        var piles = PileHeap(piles)
        
        for _ in 0 ..< k {
            piles.halveMaxPile()
        }
        
        return piles.stones.reduce(0, +)
    }
}
```