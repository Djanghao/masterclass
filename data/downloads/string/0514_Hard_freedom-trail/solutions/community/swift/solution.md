# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/freedom-trail/solutions/5079770/](https://leetcode.com/problems/freedom-trail/solutions/5079770/)

---

# Complexity
- Time complexity: $$O(ring.count * key.count)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(ring.count * key.count)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private func dp(
        _ ind: Int,
        _ ringPos: Int,
        _ ring: [Character],
        _ key: [Character],
        _ memo: inout [[Int: Int]]
    ) -> Int {
        guard ind < key.count else {
            return .zero
        }

        if let mem = memo[ind][ringPos] {
            return mem
        }

        var leftPos = ringPos
        var leftSteps = 0
        while key[ind] != ring[leftPos] {
            leftPos = (ring.count + leftPos - 1) % ring.count
            leftSteps += 1
        }

        var rightPos = ringPos
        var rightSteps = 0
        while key[ind] != ring[rightPos] {
            rightPos = (rightPos + 1) % ring.count
            rightSteps += 1
        }

        let result = min(
            leftSteps + dp(ind + 1, leftPos, ring, key, &memo),
            rightSteps + dp(ind + 1, rightPos, ring, key, &memo)
        )
        memo[ind][ringPos] = result
        return result
    }

    func findRotateSteps(_ ring: String, _ key: String) -> Int {
        var memo = Array(repeating: [Int: Int](), count: key.count)
        return key.count + dp(.zero, .zero, Array(ring), Array(key), &memo)
    }
}

```