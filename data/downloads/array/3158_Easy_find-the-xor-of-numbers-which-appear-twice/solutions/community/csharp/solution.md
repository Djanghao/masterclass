# Bit Manipulation

**Author:** ashotmuradian
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5208032/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5208032/)

---

Since the constraint is `1 <= nums[i] <= 50`, it's sufficient to use a 64-bit integer as a set to keep track of the numbers appeared.

```csharp
public class Solution {
    public int DuplicateNumbersXOR(int[] nums) {
        var set = 0L;
        var ans = 0;
        foreach (var x in nums) {
            if ((set & (1L << x)) != 0) {
                ans ^= x;
            }
            set |= 1L << x;
        }
        return ans;
    }
}
```

The original solution using `HashSet`.

```csharp
public class Solution {
    public int DuplicateNumbersXOR(int[] nums) {
        var set = new HashSet<int>();
        var ans = 0;
        foreach (var x in nums) {
            if (!set.Add(x)) {
                ans ^= x;
            }
        }
        return ans;
    }
}
```