# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4334516/](https://leetcode.com/problems/knight-dialer/solutions/4334516/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func knightDialer(_ n: Int) -> Int {
        var n = n - 1
        var states = Array(repeating: 1, count: 10)
        while n > .zero {
            var newStates = Array(repeating: 0, count: 10)
            newStates[0] = (states[4] + states[6]) % 1_000_000_007
            newStates[1] = (states[6] + states[8]) % 1_000_000_007
            newStates[2] = (states[7] + states[9]) % 1_000_000_007
            newStates[3] = (states[4] + states[8]) % 1_000_000_007
            newStates[4] = (states[3] + states[9] + states[0]) % 1_000_000_007
            newStates[6] = (states[1] + states[7] + states[0]) % 1_000_000_007
            newStates[7] = (states[2] + states[6]) % 1_000_000_007
            newStates[8] = (states[1] + states[3]) % 1_000_000_007
            newStates[9] = (states[2] + states[4]) % 1_000_000_007

            states = newStates
            n -= 1
        }
        return states.reduce(0) { partialResult, state in
            (partialResult + state) % 1_000_000_007
        }
    }
}

```