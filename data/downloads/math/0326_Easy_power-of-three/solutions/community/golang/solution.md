# 🔥🔥 One liner | O(1) space and O(1) time | Mathematics | Best solution 🔥🔥

**Author:** ajayjanapareddi
**Votes:** 7
**Link:** [https://leetcode.com/problems/power-of-three/solutions/4764477/](https://leetcode.com/problems/power-of-three/solutions/4764477/)

---

# Intuition
The factors of a number like $$x^n$$ where $$x, n$$ are Natural numbers will be $$1$$, $$x$$, $$x^2$$, $$x^3$$ ... $$x^n.$$

# Approach
<!-- Describe your approach to solving the problem. -->
All of these numbers are divide $$x^m$$ with remainder $$0$$; where $$m \\ge n$$. 

So, we need to find an $$m$$, for which all of the given inputs $$3^n$$ can divide $$ 3^m $$. As, from the given inputs we can find $$3^{19} =$$ $$1162261467$$ is the greater power of 3 less than $$2^{31} - 1 $$(input size.)

Hence, for a given given input n, it will be a power of 3 iff $$n>0$$ and $$1162261467\\%n = 0$$

It is easy to code in any language of choice, as it is pretty much same line of code

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        # 3^19 = 1162261467
        return n > 0 and 1162261467%n == 0
```