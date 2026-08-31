# Fill with bitwise count ✅ O(LogN) 1ms, 33.93MB

**Author:** yunhao_liu
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-array-end/solutions/6026980/](https://leetcode.com/problems/minimum-array-end/solutions/6026980/)

---

# Intuition
The more bitwise AND operations we performed, the result will be smaller. Since `nums` is increasing, we can see the first element would be the target `x`.

What would be the next numbers? Fill up all the `0`s.

For example, if `x` is `10010`, the next numbers should be: 
1**00**1**1**
1**01**1**0**
1**01**1**1**
1**10**1**0**
1**10**1**1**
1**11**1**0**
1**11**1**1**
...
If `n = 3`, we need to count 2 numbers. 
Since `2` is bitwise `10`, we can find the `0` positions of `10010`, injdect this `10` into it, will get the answer 10**1**1**0**.


# Approach
Initialize the count to inject:
```kotlin []
        var toAdd = (n - 1).toLong()
```
A mask to check if current bit is 0 or not:
```kotlin []
        var mask = 1L
```
Initialize the result with x:
```kotlin []
        var current = x.toLong()
```
If not finished injection, keep looping:
```kotlin []
        while (toAdd != 0L) {
```
Find right-most 0 position:
```kotlin []
            while (current and mask != 0L) {
                mask = mask shl 1
            }
```
Add this bit to current:
```kotlin []
            if (toAdd and 1L == 1L) {
                current = current or mask
            }
```
move to next bit, shift mask to left too. 
```kotlin []
            toAdd = toAdd shr 1
            mask = mask shl 1
```
After injecting all count, we have the result:
```kotlin []
        return current
```

# Complexity
- Time complexity:
$$O(log*n)$$ we injdect the count bitwisely

- Space complexity:
$$O(1)$$

# Code
```kotlin []
class Solution {
    fun minEnd(n: Int, x: Int): Long {
        var toAdd = (n - 1).toLong()
        var mask = 1L
        var current = x.toLong()
        while (toAdd != 0L) {
            while (current and mask != 0L) {
                mask = mask shl 1
            }
            if (toAdd and 1L == 1L) {
                current = current or mask
            }
            toAdd = toAdd shr 1
            mask = mask shl 1
        }
        return current
    }
}
```