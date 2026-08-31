# ✅ Beats 100% | Breadth-First Search

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694726/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694726/)

---

# Approach
***TODO***

# Time Complexity
***TODO***

# Space complexity
***TODO***

# Solution
```swift
class Solution {
    func shortestPathAllKeys(_ grid: [String]) -> Int {
        let m = grid.count, n = grid[0].count
        let moves = [[0, 1], [1, 0], [-1, 0], [0, -1]]
        
        var seen = [Int: Set<Pair<Int, Int>>]()
        
        var keySet = Set<Character>()
        var lockSet = Set<Character>()
        var allKeys = 0
        var startR = -1, startC = -1
        var sgrid: [Array<Character>] = grid.map(Array.init)
        
        for i in 0..<m {
            for j in 0..<n {
                let cell = sgrid[i][j]
                if cell >= "a" && cell <= "f" {
                    allKeys += (1 << (cell.asciiValue! - Character("a").asciiValue!))
                    keySet.insert(cell)
                }
                if cell >= "A" && cell <= "F" {
                    lockSet.insert(cell)
                }
                if cell == "@" {
                    startR = i
                    startC = j
                }
            }
        }        
        var queue = Queue<[Int]>()
        queue.enqueue([startR, startC, 0, 0])
        seen[0] = Set<Pair<Int, Int>>()
        seen[0]?.insert(Pair(startR, startC))    
        
        while !queue.isEmpty {
            guard let cur = queue.dequeue() else { break }
            let curR = cur[0], curC = cur[1], keys = cur[2], dist = cur[3]

            for move in moves {
                let newR = curR + move[0], newC = curC + move[1]
                
                if newR >= 0 && newR < m && newC >= 0 && newC < n && sgrid[newR][newC] != "#" {
                    let cell = sgrid[newR][newC]
                    
                    if keySet.contains(cell) {
                        if ((1 << (cell.asciiValue! - Character("a").asciiValue!)) & keys) != 0 {
                            continue
                        }
                        
                        let newKeys = (keys | (1 << (cell.asciiValue! - Character("a").asciiValue!)))
                        
                        if newKeys == allKeys {
                            return dist + 1
                        }
                        if seen[newKeys] == nil {
                            seen[newKeys] = Set<Pair<Int, Int>>()
                        }
                        seen[newKeys]?.insert(Pair(newR, newC))
                        queue.enqueue([newR, newC, newKeys, dist + 1])                        
                    }
                    
                    if lockSet.contains(cell) && ((keys & (1 << (cell.asciiValue! - Character("A").asciiValue!))) == 0) {
                        continue
                    } else if !(seen[keys]?.contains(Pair(newR, newC)) ?? false) {
                        seen[keys]?.insert(Pair(newR, newC))
                        queue.enqueue([newR, newC, keys, dist + 1])
                    }
                }
            }
        }
        
        return -1
    }
}

struct Pair<A: Hashable, B: Hashable>: Hashable {
    let first: A
    let second: B
    init(_ first: A, _ second: B) {
        self.first = first
        self.second = second
    }
}

public class Node<T> {
    var value: T
    var next: Node<T>?
    weak var previous: Node<T>?

    public init(value: T) {
        self.value = value
    }
}

public class LinkedList<T> {
    fileprivate var head: Node<T>?
    private var tail: Node<T>?

    public var isEmpty: Bool {
        return head == nil
    }

    public var first: Node<T>? {
        return head
    }

    public var last: Node<T>? {
        return tail
    }

    public func append(value: T) {
        let newNode = Node(value: value)
        if let tailNode = tail {
            newNode.previous = tailNode
            tailNode.next = newNode
        } else {
            head = newNode
        }
        tail = newNode
    }

    public func remove(node: Node<T>) -> T {
        let prev = node.previous
        let next = node.next

        if let prev = prev {
            prev.next = next
        } else {
            head = next
        }

        next?.previous = prev

        if next == nil {
            tail = prev
        }

        node.previous = nil
        node.next = nil

        return node.value
    }
}

public struct Queue<T> {
    fileprivate var list = LinkedList<T>()

    public var isEmpty: Bool {
        return list.isEmpty
    }

    public func enqueue(_ element: T) {
        list.append(value: element)
    }

    public func dequeue() -> T? {
        guard !list.isEmpty, let element = list.first else { return nil }
        return list.remove(node: element)
    }

    public func peek() -> T? {
        return list.first?.value
    }
}
```