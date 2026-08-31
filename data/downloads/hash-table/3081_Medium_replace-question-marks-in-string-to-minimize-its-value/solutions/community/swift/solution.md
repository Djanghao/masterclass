# Easy to understand | Custom PriorityQueue | Swift | Functional approach

**Author:** barabash
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4890294/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4890294/)

---

# Intuition
Create a Priority Queue to fetch always by the smallest frequency and form the array that will replace all of the question marks.

# Approach
1. Create a PriorityQueue struct that is a wrapper over array that represent a binary tree there root is always the smallest by frequence OR if frequence are the same then the smallest character.
2. Calculate the frequency of each character.
3. Form the PriorityQueue based on the frequency and character index.
4. Form the array of N elements where N is the number of "?" in the initial string AND sort this array.
5. Update each "?" in the initial array with with first (smallest) element from the `queue`

# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    func minimizeStringValue(_ s: String) -> String {
        var pq = PriorityQueue<Int>.init {
            $0.frequency == $1.frequency ? $0.value < $1.value : $0.frequency < $1.frequency
        }
        let a = "a".first!.asciiValue!
        var freq = [Int](repeating: 0, count: 26)
        s.forEach { 
            guard $0 != "?" else { return }
            freq[Int($0.asciiValue! - a)] += 1
        }
        freq.enumerated().forEach { pq.add((frequency: $0.element, value: $0.offset)) }
        var queue = s.compactMap { ch -> Character? in
            guard ch == "?", let minItem = pq.remove() else { return nil }
            pq.add((frequency: minItem.frequency+1, value: minItem.value))
            return Character(.init(a + UInt8(minItem.value)))
        }.sorted()
        return String(s.map {
            $0 == "?" ? queue.removeFirst() : $0
        })
    }
}

struct PriorityQueue<T> {
    typealias Item = (frequency: Int, value: T)
    fileprivate var arr = [Item]()
    private let ordered: (Item, Item) -> Bool

    init(_ order: @escaping (Item, Item) -> Bool) {
        self.ordered = order
    }

    private func getMidIndex(_ i: Int) -> Int {
        (i - 1) / 2
    }

    private func getRevertMidIndex(_ i: Int) -> Int {
        i * 2 + 1
    }

    mutating private func bubbleUp(_ i: Int) {
        var i = i, mid = getMidIndex(i)
        while i > 0, ordered(arr[i], arr[mid]) {
            arr.swapAt(i, mid)
            i = mid
            mid = getMidIndex(i)
        }
    }

    mutating private func bubbleDown(_ i: Int = 0) {
        var i = 0
        while getRevertMidIndex(i) < arr.count {
            var childI = getRevertMidIndex(i)
            if let nextChild = arr[safe: childI+1], ordered(nextChild, arr[childI]) {
                childI += 1
            }
            if ordered(arr[i], arr[childI]) {
                break
            }
            arr.swapAt(i, childI)
            i = childI
        }
    }

    mutating func add(_ item: Item) {
        arr.append(item)
        bubbleUp(arr.count - 1)
    }

    mutating func remove() -> Item? {
        guard !arr.isEmpty else { return nil }
        guard arr.count > 1 else { return arr.removeLast() }
        let res = arr[0]
        arr[0] = arr.removeLast()
        bubbleDown()
        return res
    }
}

extension Array {
    subscript(safe i: Int) -> Element? {
        i < count ? self[i] : nil
    } 
}
```