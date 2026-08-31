# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/1136281/](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/1136281/)

---

Swift solution
```
class Solution {
    func eatenApples(_ apples: [Int], _ days: [Int]) -> Int {
        let n = min(apples.count, days.count)
        var result = 0, heap = Heap<(Int, Int)>(sort: { $0.1 < $1.1 }), day = 0
        repeat {
            // grow
            if day < n && apples[day] > 0 { heap.insert((apples[day], day + days[day])) }
            // eat
            while let (applesCount, rotDay) = heap.remove() {
                if rotDay > day {
                    result += 1
                    if applesCount > 1 { heap.insert((applesCount - 1, rotDay)) }
                    break
                }
            }
            day += 1
        } while day < n || !heap.isEmpty
        return result
    }
}

// https://github.com/raywenderlich/swift-algorithm-club/blob/master/Heap/Heap.swift
// Written for the Swift Algorithm Club by Kevin Randrup and Matthijs Hollemans

public struct Heap<T> {
  
  var nodes = [T]()  
  private var orderCriteria: (T, T) -> Bool
  
  public init(sort: @escaping (T, T) -> Bool) { self.orderCriteria = sort }
  
  public var isEmpty: Bool { return nodes.isEmpty }
  public var count: Int { return nodes.count }

  @inline(__always) internal func parentIndex(ofIndex i: Int) -> Int { return (i - 1) / 2 }
  @inline(__always) internal func leftChildIndex(ofIndex i: Int) -> Int { return 2*i + 1 }
  @inline(__always) internal func rightChildIndex(ofIndex i: Int) -> Int { return 2*i + 2 }
  
  public func peek() -> T? { return nodes.first }
  
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
  
  internal mutating func shiftDown(_ index: Int) { shiftDown(from: index, until: nodes.count) }
  
}
```