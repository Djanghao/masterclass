# Simple Swift solution with explanation beats 100%.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/2342649/](https://leetcode.com/problems/bulb-switcher-ii/solutions/2342649/)

---

## Code 

```
class Solution {
    func flipLights(_ n: Int, _ presses: Int) -> Int {
        if n < 3 {
            return min(1 << n, [1, 3, 4][min(presses, 2)])
        }
        return [1, 4, 7, 8][min(presses, 3)]
    }
}
```

## Explanation

1. If n < 3, then the answer is the minimum of the two possible answers:
    a. 1 << n, which is the number of lights that are on if all are off
    b. [1, 3, 4][min(presses, 2)], which is the number of lights that are on if only the first and last are off
2. If n >= 3, then the answer is the minimum of the three possible answers:
    a. [1, 4, 7, 8][min(presses, 3)], which is the number of lights that are on if only the first, second, and last are off
    b. 1 << n, which is the number of lights that are on if all are off
    c. [1, 3, 4][min(presses, 2)], which is the number of lights that are on if only the first and last are off