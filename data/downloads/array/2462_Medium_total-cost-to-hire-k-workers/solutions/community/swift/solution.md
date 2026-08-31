# Swift | 2 Heaps + k smallest Solution

**Author:** VladimirTheLeet
**Votes:** 2
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/3683378/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/3683378/)

---

# Approach

*Observation:* If sum of candidate ranges lengths on both sides plus (k-1) their advances is equal or bigger than total workers count, that means that total pick range during the hiring process wil cover all workers. And for that case, the ones to be hired are $k$ workers with smallest costs among all.

So, we split the problem in two, based on the condition `if candidatesRange * 2 + k > n`. If left-side value exceeds $n$, the problem is reduced to well-known task of selecting $k$ smallest values from array. If not, we'll employ the default 2 heaps approach for this problem.

## Two Heaps(Priority Queues) branch

Use one min-heap for the `candidatesRange` workers on the left side and one for the  `candidatesRange` workers on the right side of `costs` array. Pick the smallest cost worker from them one-by-one and advance corresponding heap's range to the opposite side, absorbing new potential workers to replace the hired one.
Pretty much the same as amply explained in [Editorial](https://leetcode.com/problems/total-cost-to-hire-k-workers/editorial). The one difference is that in our solution, the condition `candidatesRange * 2 + k <= n` holds for 2 heaps branch. And that conveniently guarantees that the heaps will not run out of elements and their ranges won't intersect, so there won't be any double counting possible. Saves from a lot of checking.

## k smallest branch

There are several ways to solve a ["selection of k-smallest"](https://en.wikipedia.org/wiki/Selection_algorithm) problem. We'll implement some of them and try to choose the most suitable one based on values of **n**, **k** and **candidatesRange**. (Inspired by a similar choice in [Introselect](https://en.wikipedia.org/wiki/Introselect), though, of course, we will have a much more primitive version).

- **[Heapselect](https://en.wikipedia.org/?title=Heapselect)**
Initialize max-heap of $k$ size with the first $k$ elements. For each next item in the array, check whether it's smaller than the max in the heap. If it is, remove the max and put that item into heap instead. If it's bigger, just go further. **At the end, heap will hold k smallest elements** from array.
Time complexity: $O(n\\cdot\\log k)$, space complexity: $O(k)$
- **[Quickselect](https://en.wikipedia.org/wiki/Quickselect)**
Quickselect uses the same overall approach as quicksort: choose one random element as a pivot and partition the array based on the pivot value, so the items less than it be on left and greater be on right. Unlike quicksort, quickselect then only continues to repeat this work with one side \u2013 the side which holds the *k*th index from end. Repeat until the partition dividing index will not be that *k*th from end index, which means that the value in it is the searched one, *k*th biggest or smallest in array. Quickselect is generally implemented as an in-place algorithm, and beyond selecting the *k*th element, it also partially sorts the data, which is *just* what we need - after it finishes, **on one side there will be *k* smallest items** in array, and on other - *n-k* largest.
The average time complexity is $O(n)$, with a worst case of $O(n^{2})$. Space complexity is $O(n)$, as we need to copy an array for modifying.
- Built-in sort. The main advantage is being built-in and highly optimized. Swift uses [Timsort](https://en.wikipedia.org/wiki/Timsort), which has an average time $O(n\\cdot\\log n)$ and worst-case space complexity of $O(n)$.


## Complexity

###### $n$ is workers count, $k$ is amount to hire, $m$ is candidates ranges length

- Time complexity: $O(n\\cdot\\log n)$
$O(m + k\\cdot\\log m)$ for the heaps route, $O(n\\cdot\\log n)$ for the case of k smallest route. As $m, k \\le n$, it can be brought to more rough $O(n\\cdot\\log n)$ for both cases.
- Space complexity: $O(n)$
$O(m)$ for the 2 heaps route, $O(n)$ for k smallest route.


## Code
```
class Solution {
    func totalCost(_ costs: [Int], _ k: Int, _ candidatesRange: Int) -> Int
    {
        let n = costs.count
        if k == n { return costs.reduce(0, +) } // edge case shortcut

        if candidatesRange * 2 + k > n // k smallest route
        {
            if k == 1 { return costs.min()! } // edge case shortcut

            if k < 32 // heapselect
            {
                let maxHeap = Heap(of: costs[..<k], sort: >)
                for cost in costs[k...] where cost < maxHeap.peek() {
                    maxHeap.popThenPush(cost)
                }
                return maxHeap.items.reduce(0, +)
            }
            else if n > 100 // quickselect
            {
                var costs = costs
                costs.quickselect(n-k)
                return costs[..<k].reduce(0, +)
            }
            else // built-in sort
            {             
                return costs.sorted()[..<k].reduce(0, +)
            }
        }
        else // 2 heaps route
        {
            var leftRangeBound = candidatesRange
            var rightRangeBound = n - 1 - candidatesRange

            let firstWorkers = Heap(of: costs[..<leftRangeBound])
            let lastWorkers = Heap(of: costs[(rightRangeBound+1)...])
            
            var totalCost = 0
            for _ in 1...k
            {
                if firstWorkers.peek() <= lastWorkers.peek() {
                    totalCost += firstWorkers.popThenPush(costs[leftRangeBound])
                    leftRangeBound += 1
                }
                else {
                    totalCost += lastWorkers.popThenPush(costs[rightRangeBound])
                    rightRangeBound -= 1
                }
            }
            return totalCost
        }
    }
}

class Heap<T>
{
    typealias Comparator = (T, T) -> Bool
    private(set) var items: [T]    
    var isEmpty: Bool { return items.isEmpty }    
    var count: Int { return items.count }
    func peek() -> T! { return items.first }

    // pass operator '>' for a max-heap, '<' for a min-heap, or custom comparing function
    // use "withoutOrdering" if array is already in proper form for binary tree, e.g. sorted
    init(_ array: [T], sort: @escaping Comparator, withoutOrdering: Bool = false)
    {
        self.items = array
        self.orderCriterion = sort
        if withoutOrdering { return }                         
        for i in stride(from: (items.count/2 - 1), through: 0, by: -1) {
            siftUp(i)   // inspired by Pyton's' heapify, O(n) time complexity for the whole array
        }
    }
    convenience init(sort: @escaping Comparator) {
        self.init([], sort: sort)
    }
    convenience init<S: Sequence>(of s: S, sort: @escaping Comparator) where S.Element == T {
        self.init(Array(s), sort: sort)
    }
    
    func push(_ value: T) {
        items.append(value)
        siftDown(items.count - 1)
    }    
    func push<S: Sequence>(_ s: S) where S.Element == T {
        for value in s { push(value) }
    }

    // takes the root node from heap (max value for a max-heap, min value for a min-heap)    
    @discardableResult func pop() -> T!
    {
        if items.isEmpty { return nil }        
        if items.count == 1 { return items.removeLast() }
        defer { items[0] = items.removeLast(); siftUp() }     
        return items[0]
    }

    // push + pop in one action, more efficient than simply calling push then pop
    @discardableResult func pushThenPop(_ value: T) -> T      // aka 'heappushpop'
    {
        if items.isEmpty || orderCriterion(value, items[0]) { return value }
        defer { items[0] = value; siftUp() }        
        return items[0]
    }
    // pop + push in one action, more efficient than simply calling pop then push
    @discardableResult func popThenPush(_ value: T) -> T!     // aka 'heapreplace'
    {
        if items.isEmpty || items.count == 1 {
            defer { items = [value] }; return items.first
        }
        defer { items[0] = value; siftUp() }
        return items[0]
    }
    
    func clear() { items = [] }

    private var orderCriterion: Comparator
    @inline(__always) private func parent(of index: Int) -> Int { (index - 1) / 2 }
    @inline(__always) private func leftChild(of index: Int) -> Int { 2 * index + 1 }
    @inline(__always) private func rightChild(of index: Int) -> Int { 2 * index + 2 }

    // moves the value from given index up to its respective position in binary tree
    private func siftDown(_ index: Int)
    {
        let value = items[index]
        var childInd = index, parentInd = parent(of: childInd)        
        while childInd > 0 && orderCriterion(value, items[parentInd]) {
            items[childInd] = items[parentInd]
            (childInd, parentInd) = (parentInd, parent(of: parentInd))
        }        
        items[childInd] = value
    }
    
    // restores the items heap order by moving the item from given index towards the end of array
    private func siftUp(_ index: Int = 0)
    {
        let end = items.count
        var parentInd = index, leftChildInd, rightChildInd: Int
        var firstInFamily = parentInd //min of these three for min-heap, max of them for max-heap
        while true
        {
            leftChildInd = leftChild(of: parentInd)
            rightChildInd = leftChildInd + 1

            if leftChildInd < end && orderCriterion(items[leftChildInd], items[firstInFamily]) {
                firstInFamily = leftChildInd
            }
            if rightChildInd < end && orderCriterion(items[rightChildInd], items[firstInFamily]) {
                firstInFamily = rightChildInd
            }
            if firstInFamily == parentInd { break }

            items.swapAt(firstInFamily, parentInd)
            parentInd = firstInFamily
        }
    }
}

extension Heap where T: Comparable {
    convenience init(_ array: [T], withoutOrdering: Bool = false) { // defaults for min-heap
        self.init(array, sort: <, withoutOrdering: withoutOrdering)
    } 
    convenience init() { self.init([]) }
    convenience init<S: Sequence>(of s: S) where S.Element == T { self.init(Array(s)) }
}

extension Array where Element: Comparable
{
    // partly sorts the array in a way that k biggest values will be at the end,
    // and the kth largest element will be exactly at its index k away from end
    @discardableResult mutating func quickselect(_ k: Int) -> Element
    {
        var range = startIndex..<endIndex
        let targetIndex = self.count - k
        var pivotValue: Element, valueRange: Range<Index>
        while true
        {
            if range.isEmpty { return self[targetIndex] }
            pivotValue = self[Int.random(in: range)]
            valueRange = threeWayPartition(pivotValue)
            if valueRange.contains(targetIndex) {
                return self[targetIndex]
            }
            else if targetIndex < valueRange.lowerBound { // go left
                range = (range.lowerBound)..<(valueRange.lowerBound)
            }
            else { // go right             
                range = (valueRange.upperBound)..<(range.upperBound)
            }
        }
        // returns range of values equal to pivotValue
        func threeWayPartition(_ pivotValue: Element) -> Range<Index>
        {
            var i = range.lowerBound, j = i
            var top = range.upperBound - 1
            while j <= top
            {
                if self[j] < pivotValue { self.swapAt(i, j); i += 1; j += 1 }
                else if self[j] > pivotValue { self.swapAt(j, top); top -= 1 }
                else { j += 1 }
            }
            return (i..<j)
        }
    }
}
```