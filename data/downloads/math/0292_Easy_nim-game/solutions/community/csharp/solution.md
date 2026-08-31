# Nim game best optimal solution

**Author:** Ritzkhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/nim-game/solutions/6107846/](https://leetcode.com/problems/nim-game/solutions/6107846/)

---

# Intuition
think about multiple of 4

# Approach
<!-- Describe your approach to solving the problem. -->
if n is multiple of 4 you always loses if n is not multiple of 4 than you can win 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(1)
because its only one line of code 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public bool CanWinNim(int n) {
     return n % 4 != 0;
}
}
```