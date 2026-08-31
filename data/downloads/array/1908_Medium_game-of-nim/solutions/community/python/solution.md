# 100% faster, python one-liner

**Author:** trpaslik
**Votes:** 1
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/3113582/](https://leetcode.com/problems/game-of-nim/solutions/3113582/)

---

# Approach
black magic

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
from typing import Tuple
class Solution:
    def nimGame(self, piles: List[int]) -> bool:
        return reduce(operator.xor, piles)
```