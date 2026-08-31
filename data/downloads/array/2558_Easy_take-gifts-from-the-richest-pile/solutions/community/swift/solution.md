# O(NlogN) Swift solution

**Author:** olegmetallic
**Votes:** 1
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6139175/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6139175/)

---

# Approach
Sort input `gifts`, so we can always pick the max element at a constant time.
Now run the loop while `k > 0` remove the last pile from gifts array, take the square root of it, and insert the result into sorted array at the corresponding place. In the end of the iteration decrement `k` by `1`.
Finally, return sum of all `gifts`.

# Complexity
- Time complexity:
O(nlogn) - sort input array of `gifts`, where `n` is gifts count.

- Space complexity:
O(n) - store sorted array of `gifts`.

# Code
```swift []
class Solution {
    func pickGifts(_ gifts: [Int], _ k: Int) -> Int {
        var k = k
        var gifts = gifts.sorted()
        while k > 0 {
            let last = Int(sqrt(Double(gifts.removeLast())))
            if let index = gifts.firstIndex(where: { $0 > last }) {
                gifts.insert(last, at: index)
            } else {
                gifts.append(last)
            }
            k -= 1
        }
        return gifts.reduce(0, +)
    }
}
```