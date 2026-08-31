# Perfectly readable ONE LINER

**Author:** janek123
**Votes:** 1
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/4861802/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/4861802/)

---

I mean Lambda is there for a reason, right?

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(1)$$

# Code
```
public class Solution {
    public string CategorizeBox(in int l, in int w, in int h, in int m) => (l >= 10_000 || w >= 10_000 || h >= 10_000 || (long)l * w * h >= 1_000_000_000, m >= 100) switch { (true, true) => "Both", (false, false) => "Neither", (true, false) => "Bulky", (false, true) => "Heavy"};
}
```

```
public class Solution {
    public string CategorizeBox(in int l, in int w, in int h, in int m) 
        => (l >= 10_000 || w >= 10_000 || h >= 10_000 || (long)l * w * h >= 1_000_000_000, m >= 100) switch 
            { 
                (true, true) => "Both",
                (false, false) => "Neither",
                (true, false) => "Bulky", 
                (false, true) => "Heavy"
            };
}
```