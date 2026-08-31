# Swift-Min Heap

**Author:** sunitamnit
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4831273/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4831273/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minOperations(_ nums: [Int], _ k: Int) -> Int {
        var heap = Heap<Int>(<)
        for num in nums {
            heap.push(num)
        }
        var output = 0
        while(true) {
            if heap.count >= 2 {
            let first = heap.pop()!
            if first<k {
                    let sec = heap.pop()!
                    let val = first*2+sec
                    output += 1
                    heap.push(val)
                } else {
                    break
                }
            } else {
                break
            }
        }
        return output
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