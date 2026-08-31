# Swift | Day path search using Dijkstra

**Author:** VladimirTheLeet
**Votes:** 2
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3699721/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3699721/)

---

# Approach

We create a `days` grid of $row \	imes col$ size where each position holds a value representing the last day the corresponding cell is walkable (that is, the day before it become flooded).

Starting a search from all day nodes in a top row, we are looking for the most efficient path down to bottom. The path's efficiency is determined by the minimum day value it contains, the bigger the better.

That's where Dijkstra's algorithm comes in. It is designed to find not just the "shortest" path (that's a very narrow understanding of it), but the best path in a general sense, no matter how this "bestness" is measured. If it can be compared whether it's better to go this or that way, than it can be put in the priority queue.

# Complexity
- Time complexity: $O(row\u22C5col\u22C5\\log (row\u22C5col))$
- Space complexity: $O(row\u22C5col)$

# Code
```
struct Position: Hashable
{
    var i: Int, j: Int
    init(_ i: Int, _ j: Int) { self.i = i; self.j = j }
}
extension Array {
subscript<T>(_ pos: Position) -> T where Element == [T]
{ 
    get { return self[pos.i][pos.j] }
    set { self[pos.i][pos.j] = newValue }
}}
let dir: [(di: Int, dj: Int)] = [(-1, 0), (0, -1), (0, 1), (1, 0)]

class Solution
{
    func latestDayToCross(_ row: Int, _ col: Int, _ floods: [[Int]]) -> Int
    {
        var days: [[Int]] = Array(repeating: Array(repeating: 0, count: col), count: row)

        for (i, flood) in floods.enumerated() {
            days[flood[0]-1][flood[1]-1] = i
        }

        var maxHeap = Heap<(pos: Position, minPathDay: Int)>(
        order: { 
            if $0.minPathDay != $1.minPathDay { return $0.minPathDay > $1.minPathDay }
            else { return ($0.pos.i > $1.pos.i) } // In case of equal minDay with other path, choose the one
            // leading down first. Not strictly necessary condition, just a small potential improvement.
        })

        for j in 0..<col {
            maxHeap.push((pos: Position(0, j), minPathDay: days[0][j]))
        }        
        var visited = Set<Position>()
        
        var neighbor = Position(-1, -1)
        while let (pos, minPathDay) = maxHeap.pop()
        {
            if pos.i == row - 1 { return minPathDay }
            for (di, dj) in dir
            {
                neighbor.i = pos.i + di; neighbor.j = pos.j + dj
                if neighbor.i < 0 || neighbor.i >= row ||
                    neighbor.j < 0 || neighbor.j >= col { continue }
                if !visited.insert(neighbor).inserted { continue } //already visited

                maxHeap.push((neighbor, min(minPathDay, days[neighbor])))
            }
        }
        return -1
    }
}


class Heap<T>
{
    typealias Comparator = (T, T) -> Bool
    private var compare: Comparator
    private(set) var items: [T]    
    var isEmpty: Bool { return items.isEmpty }    
    var count: Int { return items.count }
    func peek() -> T! { return items.first }

    // pass operator '>' for a max-heap, '<' for a min-heap, or custom comparing function
    // use "withoutOrdering" if array is already in proper form for binary tree, e.g. sorted
    init(_ array: [T], order: @escaping Comparator, withoutOrdering: Bool = false)
    {
        self.items = array
        self.compare = order
        if withoutOrdering { return }                         
        for i in stride(from: (items.count/2 - 1), through: 0, by: -1) {
            siftUp(i)   // like a Python heapify, O(n) time complexity for the whole array
        }
    }
    convenience init(order: @escaping Comparator) {
        self.init([], order: order)
    }
    convenience init<S: Sequence>(of s: S, order: @escaping Comparator) where S.Element == T {
        self.init(Array(s), order: order)
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
        if items.isEmpty || compare(value, items[0]) { return value }
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

    @inline(__always) private func parent(of index: Int) -> Int { (index - 1) / 2 }
    @inline(__always) private func leftChild(of index: Int) -> Int { 2 * index + 1 }
    @inline(__always) private func rightChild(of index: Int) -> Int { 2 * index + 2 }

    // moves the value from given index up to its respective position in binary tree
    private func siftDown(_ index: Int)
    {
        let value = items[index]
        var childInd = index, parentInd = parent(of: childInd)        
        while childInd > 0 && compare(value, items[parentInd]) {
            items[childInd] = items[parentInd]
            (childInd, parentInd) = (parentInd, parent(of: parentInd))
        }        
        items[childInd] = value
    }
    
    // restores the items heap order by moving the item from given index towards the end of array
    private func siftUp(_ index: Int = 0)
    {
        let end = items.count
        var parentInd = index, lChildInd, rChildInd: Int
        var firstInFamily = parentInd //min of these three for min-heap, max for max-heap
        while true
        {
            lChildInd = leftChild(of: parentInd)
            rChildInd = lChildInd + 1

            if lChildInd < end && compare(items[lChildInd], items[firstInFamily]) {
                firstInFamily = lChildInd
            }
            if rChildInd < end && compare(items[rChildInd], items[firstInFamily]) {
                firstInFamily = rChildInd
            }
            if firstInFamily == parentInd { break }

            items.swapAt(firstInFamily, parentInd)
            parentInd = firstInFamily
        }
    }
}

extension Heap where T: Comparable {
    convenience init(_ array: [T], withoutOrdering: Bool = false) {//defaults for min-heap
        self.init(array, order: <, withoutOrdering: withoutOrdering)
    } 
    convenience init() { self.init([]) }
    convenience init<S: Sequence>(of s: S) where S.Element == T { self.init(Array(s)) }
}
```