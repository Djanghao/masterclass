# Swift bruteforce + two heaps (pass)

**Author:** abjurato
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-mk-average/solutions/5474866/](https://leetcode.com/problems/finding-mk-average/solutions/5474866/)

---

# Intuition
Since we are only interested in M latest elements we can not get away without some kind of a queue that maintains order of additions. Now, we need additional solution for calculating average of M-2*K inner elements window within M last elements of the queue.

# Approach A - Bruteforce (Time Out)
Naive solution: implement queue as an array of Int.

- add, complexity of *O(m)*
    - append num to the end of queue
    - if queue grew larger then M, drop first element

- calculate, complexity *O(mlogm)*
    - make a sorted array of elements from the queue
    - go though each element in *(k..<m-k)* range and calculate average

### Complexity
Oveall, the heavylifting is put on `calculateMKAverage()` which needs to sort the queue on every call thus rising time compexity to O(mlogm). Space complexity is O(m) since we only work with latest m elements.

# Code A

```

class MKAverageBruteForce {
    private var m, k: Int
    private var queue = [Int]()

    init(_ m: Int, _ k: Int) {
        self.m = m
        self.k = k
    }
    
    func addElement(_ num: Int) {
        queue.append(num)
        if queue.count > m {
            queue.removeFirst()
        }
    }
    
    func calculateMKAverage() -> Int {
        guard queue.count == m else { return -1 }
        let sorted = queue.sorted()

        var average = 0
        for i in k..<(sorted.count-k) {
            average += sorted[i]
        }

        return average/(m-2*k)
    }
}
``` 

# Approach B - Two Heaps
We need some solution to store nums in a sorted manner. In better world where Swift has a Heap data structure, we could use two heaps: one to store lower half of relevant elements, and second to store higher half. Incoming num is inserted into relevant heap (depending on the value that is currently "in the middle"), and then heaps are rebalanced if one of them grows too large - meaning moving "middle" element from one to another.

Now, in order to remove "old" elements from the heaps, we need to track order of their additions. We can add a rolling index of additions and work (Index, Value) pairs in queue and heaps. Whenever we remove an element from the queue, we'll use this index to find it in a heap and remove from there.

### Complexity 
Addition of new element would have *O(logm)* complexity because of adding an element to the heap. Calculation though would be linear *O(m)* because elemens are in correct order. Space complexity rises up to *O(2m)* because elements are stored both in the queue and in the heaps.

### Real life implications
Swift does not have built-in heap data structure, and I can't imagine myself implementing it during interview by hand. So instead of using two heaps, in the following solution I use two arrays which brings complexity of addition operation up to *O(m)*, but still qualifies on the test cases.

# Code B
```
class MKAverage {
    typealias Entry = (Int, Int)

    private var m, k: Int
    private var index = 0

    private var queue = [Entry]()

    private var minHeap = [Entry]() // largest in the end
    private var maxHeap = [Entry]() // smallest in the end

    init(_ m: Int, _ k: Int) {
        self.m = m
        self.k = k
    }

    func addElement(_ num: Int) {
        defer { self.index += 1 }

        let entry = (index, num)
        queue.append(entry) // O(1)

        // remove outdated entry
        if queue.count > m {
            let (index, num) = queue.removeFirst()
            if !maxHeap.isEmpty, num >= maxHeap[0].1 {
                maxHeap.removeAll { $0.0 == index } // O(n)
            } else {
                minHeap.removeAll { $0.0 == index } // O(n)
            }
        }

        // put entry into its sorted place in minHeap
        if maxHeap.count > 0, maxHeap[0].1 < entry.1 {
            var i = 0
            while i < maxHeap.count, maxHeap[i].1 < entry.1 { // O(n)
                i += 1
            }
            maxHeap.insert(entry, at: i) 
        } else {
            var i = 0
            while i < minHeap.count, minHeap[i].1 < entry.1 { // O(n)
                i += 1
            }
            minHeap.insert(entry, at: i) 
        }
        
        // rebalance heaps 
        if minHeap.count+1 > maxHeap.count {
            let maximum = minHeap.removeLast()
            maxHeap.insert(maximum, at: 0)
        } else if maxHeap.count+1 > minHeap.count {
            let minimum = maxHeap.removeFirst()
            minHeap.append(minimum)
        }
    }

    func calculateMKAverage() -> Int {
        guard queue.count == m else { return -1 }

        var average = 0
        for i in k..<minHeap.count { 
            average += minHeap[i].1
        }
        for i in 0..<maxHeap.count-k { 
            average += maxHeap[i].1
        }

        return average/(m-2*k)
    }
}