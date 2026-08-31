# two pointers comparing ✅ 14ms, 41.16MB

**Author:** yunhao_liu
**Votes:** 4
**Link:** [https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/6115918/](https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/6115918/)

---

![image.png](./images/0.png)

# Intuition
I came up with two approaches, one is to count prefixSum and suffixSum of `L` and `R`. For example `L` we need suffixSum at each index that target has less `L` than original. (So original has enough L to move to left.) When encountering `R` the suffixSum needs to reset to 0. It seems doable but after several testing, I can't pass all tests so I gave up.

Another solution is to use two pointers to compare strings directly, which is much easier to implement and more effecient.

# Approach
Initialize two pointers for the two strings, iterate within their range:
```
        val n = start.length
        var i = 0
        var j = 0
        while (i < n && j < n) {
```
When encountering `_` we just skip it, for both strings. Because we only care about `L` and `R` and their positions.
```
            if (start[i] == '_') {
                i++
                continue
            }
            if (target[j] == '_') {
                j++
                continue 
            }
```
After skipping spaces, there are 3 invalid cases, we can directly return false:
- pointers meet different letters: it's impossible to make their current letters same
- pointers meet `L`, but `i < j`: `L` can only move to left, but i is already at left of j, it's impossible to move
- pointers meet `R`, but `i > j`: `R` can only move to right, but i is already at right of j, it's impossible to move
```
            if (start[i] != target[j] || 
                start[i] == 'L' && i < j || 
                start[i] == 'R' && i > j) return false
```
otherwise increase both pointers:
```
            i++
            j++
```
When at least one pointer reaches the end, if the other string still has spaces, skip spaces.
```
        while (i < n && start[i] == '_') i++
        while (j < n && target[j] == '_') j++
```
Only if two pointers stop at the same position (`n`) it's a valid case.
```
        return i == j
```

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```kotlin []
class Solution {
    fun canChange(start: String, target: String): Boolean {
        val n = start.length
        var i = 0
        var j = 0
        while (i < n && j < n) {
            if (start[i] == '_') {
                i++
                continue
            }
            if (target[j] == '_') {
                j++
                continue 
            }
            if (start[i] != target[j] || start[i] == 'L' && i < j || start[i] == 'R' && i > j) return false
            i++
            j++
        }
        while (i < n && start[i] == '_') i++
        while (j < n && target[j] == '_') j++
        return i == j
    }
}
```