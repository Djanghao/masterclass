# Swift solution using Heap with explanation

**Author:** codeAWhile
**Votes:** 3
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/1182317/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/1182317/)

---

```
class Solution {
    func furthestBuilding(_ heights: [Int], _ bricks: Int, _ ladders: Int) -> Int {
        var n = bricks
        var pq = Heap<Int>(priorityFunction: <)
        for i in 0..<heights.count - 1 {
            let diff = heights[i+1] - heights[i]
			// if the next build is higher than the previous one, we save the difference
            if diff > 0 { 
                pq.enqueue(diff) 
            }
            if pq.array.count > ladders {
			// we want to use bricks for smaller gaps and ladders for larger one so every time we get the smallest
                if let minGap = pq.dequeue() {
                    if n >= minGap {
                        n -= minGap
                    } else {
					// if we run out the bricks, we reach the furthest building
                        return i
                    }
                }
            }
        }
		// if we finish the loop which means we might have some bricks or ladders but it doesn't matter
        return heights.count-1
    }
}

class Heap<T> {
    var array = [T]()
    let priorityFunction: (T, T) -> Bool
    
    init(priorityFunction: @escaping (T, T) -> Bool) {
        self.priorityFunction = priorityFunction
    }
    
    func enqueue(_ ele: T) {
        array.append(ele)
		// every time we add a new element, we have to keep the heap invariant so we have to find the correct position for the new element
        heapifyUp(at: array.count-1)
    }
    
    func higherPriority(_ firstIndex: Int, than secondIndex: Int) -> Bool {
        return priorityFunction(array[firstIndex], array[secondIndex])
    }
    
    func higherPriorityIndex(between childIndex: Int, and parentIndex: Int) -> Int {
        guard childIndex < array.count && higherPriority(childIndex, than: parentIndex) else { return parentIndex}
        return childIndex
    }
    
	// use this function to determine which position should the parent element sit in
    func highestPriorityIndex(_ parent: Int, _ left: Int, _ right: Int) -> Int {
        return higherPriorityIndex(between: left, and: higherPriorityIndex(between: right, and: parent))
    }
    
    private func heapifyUp(at index: Int) {
        let parent = (index-1)/2
		// if the element in the current index position has lower priority than the parent element, it is in the right position and we do not need further operation
        guard index != 0, higherPriority(index, than: parent) else { return }
        array.swapAt(index, parent)
		// continue to bottom up if needed
        heapifyUp(at: parent)
    }
    
    func dequeue() -> T? {
        guard !array.isEmpty else { return nil }
        array.swapAt(0, array.count-1)
        let element = array.removeLast()
        if !array.isEmpty {
		// to find right position for newly sitted parent element
            heapifyDown(atIndex: 0)
        }
        return element
    }
    
    private func heapifyDown(atIndex index: Int) {
        let left = index*2+1
        let right = index*2+2
        
        let childIndex = highestPriorityIndex(index, left, right)
        if childIndex == index { return }
        array.swapAt(childIndex, index)
        heapifyDown(atIndex: childIndex)
    }
}
```


some sources that might help:
https://www.raywenderlich.com/586-swift-algorithm-club-heap-and-priority-queue-data-structure#toc-anchor-001