# Using queue

**Author:** xnwang
**Votes:** 0
**Link:** [https://leetcode.com/problems/zigzag-iterator/solutions/3573780/](https://leetcode.com/problems/zigzag-iterator/solutions/3573780/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class ZigzagIterator {
    private var queue : [Int] = []
    init(_ v1: [Int], _ v2: [Int]) {
        var v1 = v1, v2 = v2
        while !v1.isEmpty || !v2.isEmpty {
            if !v1.isEmpty {
                queue.append(v1.removeFirst())
            }
            if !v2.isEmpty {
                queue.append(v2.removeFirst())
            }
        }
    }
    
    func next() -> Int {
        return queue.removeFirst()
    }
    
    func hasNext() -> Bool {
        return !queue.isEmpty
    }
}

// Your ZigzagIterator object will be instantiated and called as such:
// var i = ZigzagIterator(v1, v2)
// var ret = [Int]()
// while i.hasNext() {
// 		ret.append(i.next())
// }
```