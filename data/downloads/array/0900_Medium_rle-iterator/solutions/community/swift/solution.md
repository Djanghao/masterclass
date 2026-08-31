# [swift] Sample way. 17ms

**Author:** poloJhuo
**Votes:** 0
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/3596391/](https://leetcode.com/problems/rle-iterator/solutions/3596391/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class RLEIterator {

    var encoding: [Int]

    init(_ encoding: [Int]) {
        self.encoding = encoding;  
    }
    
    func next(_ n: Int) -> Int {
        var currentEncoding = encoding

        for (index, element) in currentEncoding.enumerated() {
            if index % 2 == 0 {
                if element >= n {
                    encoding[index] = encoding[index] - n
                    return currentEncoding[index + 1]
                }else {
                    let newN = n - encoding[index]
                    encoding.removeFirst()
                    encoding.removeFirst()
                    return next(newN)
                }
            }
        }
        
        return -1
    }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * let obj = RLEIterator(encoding)
 * let ret_1: Int = obj.next(n)
 */
```