# Swift

**Author:** sunitamnit
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5256256/](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5256256/)

---

# Intuition
Heap
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Heap and set
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func clearStars(_ s: String) -> String {
        var heap = Heap<Character>(<)
        var val = Array(repeating: [Int](), count: 26)
        let arr = Array(s)
        var set = Set<Int>()
        for (i,el) in arr.enumerated() {
            if el == "*" {
                if let ele = heap.pop() {
                    let index = Int(ele.asciiValue! - Character("a").asciiValue!)
                    let lastindex =  val[index].removeLast()
                set.insert(lastindex)
                }
            } else {
                heap.push(el)
                let index = Int(el.asciiValue! - Character("a").asciiValue!)
                val[index].append(i)
            }
        }
        var output = ""
        for (i,el) in arr.enumerated() {
            if el != "*" , !set.contains(i){
                output += String(el)
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