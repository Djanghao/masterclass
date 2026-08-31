# ...

**Author:** RIChernov2
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-rand10-using-rand7/solutions/5864642/](https://leetcode.com/problems/implement-rand10-using-rand7/solutions/5864642/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
/**
 * The Rand7() API is already defined in the parent class SolBase.
 * public int Rand7();
 * @return a random integer in the range 1 to 7
 */
public class Solution : SolBase {
    public int Rand10() {
        while (true)
        {
            var firstArg = Rand7();
            var secondArg = Rand7();
            int result = (firstArg - 1) * 7 + secondArg;

            if (result <= 40)
            {
                return (result % 10) + 1;
            }
        }
    }
}
```