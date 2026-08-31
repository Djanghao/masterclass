# Swift DP O(n)

**Author:** wenjiema
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/6096002/](https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/6096002/)

---

# Intuition
Use DP array `a[i]` to track number of new people knows the secret on day `i`

```
a[i] = a[i-forget+1...i-delay]

peopleAwareOfSecret on day n = sum(a[i-forget+1...n])
```

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```swift []
class Solution {
    func peopleAwareOfSecret(_ n: Int, _ delay: Int, _ forget: Int) -> Int {
        var a = Array(repeating: 0, count: n + 1)
        a[1] = 1
        let mod = 1000000000+7
        for i in 2...n {
            // guard against negative indexes
            let m = max(i-forget + 1, 0)
            let n = max(i-delay, 0)
        
            for k in m...n {
                a[i] += a[k]
                a[i] %= mod
            }
        }
        return a[max(n-forget+1, 0)...n].reduce(0,+) % mod
    }
}
```