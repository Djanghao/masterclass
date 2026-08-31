# Swift BFS

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/6027932/](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/6027932/)

---

# Code
```swift []
class Solution {
    func findInteger(_ k: Int, _ digit1: Int, _ digit2: Int) -> Int {
        //we can do a simple BFS to identify next candidates and return the first possible candidate
        var (digit1, digit2) = digit1 > digit2 ? (digit2, digit1) : (digit1, digit2)
        var queue = [digit1, digit2]

        while queue.isEmpty == false {
            var next = [Int]()
            for num in queue {
                if num > k && num % k == 0 {
                    return num
                }

                for digit in [digit1, digit2] {
                    let nxt = num * 10 + digit

                    if nxt != num && nxt <= Int32.max {
                        next.append(nxt)
                    }
                }
            }

            queue = next
        }

        return -1
    }
}
```