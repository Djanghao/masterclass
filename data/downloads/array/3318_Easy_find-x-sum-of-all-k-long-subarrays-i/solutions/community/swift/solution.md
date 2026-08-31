# ✅ O(n log n) | Heap

**Author:** eleev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5942822/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5942822/)

---

# Code
```swift []
import Collections

struct Solution {
    func findXSum(_ nums: [Int], _ k: Int, _ x: Int) -> [Int] {
        struct Pair: Comparable {
            let key, value: Int
            init(_ key: Int, _ value: Int) { 
                self.key = key
                self.value = value
            } 
            static func <(lhs: Self, rhs: Self) -> Bool {
                lhs.value == rhs.value ? lhs.key < rhs.key : lhs.value < rhs.value
            }
        }
        let n = nums.count
        var freq = Dictionary(nums[0..<k].map { ($0, 1) }, uniquingKeysWith: +)

        func xSum() -> Int {
            var heap = freq.reduce(into: Heap<Pair>()) { h, e in 
                h.insert(Pair(e.key, e.value))
            }
            return (0..<min(x, n)).reduce(into: 0) { s, _ in
                heap.popMax().map { e in
                    s += e.key * e.value    
                }
            }
        }
        return (k..<n).reduce(into: CollectionOfOne(xSum()) + [Int]()) { r, i in
            let (new, old) = (nums[i], nums[i - k])
            freq[new, default: 0] += 1
            freq[old].map { c in freq[old] = c == 1 ? nil : c - 1 }
            r.append(xSum())
        }
    }
}

```