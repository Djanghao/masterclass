# Swift Binary Search and Heap Solutions

**Author:** punk9595
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/1349208/](https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/1349208/)

---

```
class Solution {
    
    // Binary Search
    
    func minmaxGasDist(_ stations: [Int], _ k: Int) -> Double {
        var low = 0.0
        var high = 100000000.0
        
        while high - low > pow(Double(10), Double(-6)) {
            let mid = low + (high-low)/2
            if isPossible(stations, k, mid) {
                high = mid
            } else {
                low = mid
            }
        }
        
        return low
    }
    
    func isPossible(_ stations: [Int], _ k: Int, _ dist: Double) -> Bool {
        var used = 0
        for i in 1..<stations.count {
            used += Int(Double((stations[i] - stations[i-1]))/Double(dist))
            
            if used > k {
                return false
            }
        }
        
        return true
    }
    
    // Using Heap
    
    func minmaxGasDist(_ stations: [Int], _ k: Int) -> Double {
        var heap = Heap<(dist: Double, splits: Int)>()
        heap.compare = { $0.dist/Double($0.splits) > $1.dist/Double($1.splits) }
        for i in 1..<stations.count {
            let diff = stations[i] - stations[i-1] 
            heap.add((Double(diff), 1))
        }
        
        var k = k
        
        while k > 0 {
            let poll = heap.poll()!
            let splits = poll.splits + 1
            heap.add((poll.dist, splits))
            k -= 1
        }
        
        return heap.isEmpty ? 0.0 : heap.peek()!.dist/Double(heap.peek()!.splits)
    }
}

class Heap<T> {
    var items: [T] = []
    
    var compare: ((_ l: T, _ r: T) -> Bool) = { _, _ in true }
    
    var isEmpty: Bool {
        items.isEmpty
    }
    
    func rightIndex(of index: Int) -> Int {
        (index * 2) + 2
    }
    
    func leftIndex(of index: Int) -> Int {
        (index * 2) + 1
    }
    
    func parentIndex(of index: Int) -> Int {
        (index - 1) / 2
    }
    
    func hasLeftChild(for index: Int) -> Bool {
        leftIndex(of: index) < items.count
    }
    
    func hasRightChild(for index: Int) -> Bool {
        rightIndex(of: index) < items.count
    }
    
    func hasParent(for index: Int) -> Bool {
        parentIndex(of: index) >= 0 && parentIndex(of: index) < items.count
    }
    
    func leftChild(of index: Int) -> T? {
        hasLeftChild(for: index) ? items[leftIndex(of: index)] : nil
    }
    
    func rightChild(of index: Int) -> T? {
        hasRightChild(for: index) ? items[rightIndex(of: index)] : nil
    }
    
    func parent(of index: Int) -> T? {
        hasParent(for: index) ? items[parentIndex(of: index)] : nil
    }
    
    func poll() -> T? {
        let item = isEmpty ? nil : items[0]
        let lastItem = items.count > 1 ? items.last : nil
        
        if let last = lastItem {
            items[0] = last
            items.removeLast()
            heapifyDown()
        } else {
            items.removeFirst()
        }
        return item
    }
    
    func peek() -> T? {
        items.first
    }
    
    func add(_ element: T) {
        items.append(element)
        heapifyUp()
    }
    
    func heapifyUp() {
        guard items.count > 1 else {
            return
        }
        var index = items.count - 1
        
        while let parent = parent(of: index), compare(items[index], parent) {
            items.swapAt(index, parentIndex(of: index))
            index = parentIndex(of: index)
        }
    }
    
    func heapifyDown() {
        guard items.count > 1 else {
            return
        }
        
        var index = 0
        
        while hasLeftChild(for: index) {
            var nextIndex = leftIndex(of: index)
            
            if hasRightChild(for: index) && compare(rightChild(of: index)!, leftChild(of: index)!) {
                nextIndex = rightIndex(of: index)
            }
            
            if compare(items[index], items[nextIndex]) {
                break
            } else {
                items.swapAt(index, nextIndex)
                index = nextIndex
            }
        }
    }
    
}
```