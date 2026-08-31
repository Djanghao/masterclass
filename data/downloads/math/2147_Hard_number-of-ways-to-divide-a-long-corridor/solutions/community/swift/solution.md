# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4338334/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4338334/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func numberOfWays(_ corridor: String) -> Int {
        var result = 0
        var plants = 0
        var hasPair = true
        for ch in corridor {
            if ch == "S" {
                hasPair.toggle()
                if hasPair {
                    if result == 0 {
                        result = 1
                    } else {
                        result = (result * (plants + 1)) % 1_000_000_007
                    }
                    plants = 0
                }
            } else if hasPair {
                plants += 1
            }
        }
        return hasPair ? result : 0
    }
}
```