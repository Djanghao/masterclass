# Accepted : swift one liner solution O(1)

**Author:** teenuburi
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/3365242/](https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/3365242/)

---



# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
class Solution {
    func minOperations(_ n: Int) -> Int {
        return n%2 == 0 ?  n/2*n/2 : n/2*(n/2+1)
    }
}

```