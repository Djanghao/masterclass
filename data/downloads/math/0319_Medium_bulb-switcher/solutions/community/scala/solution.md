# Python, Ruby, Scala: 0 linear & C++, Go 1 linear | 100% | 100%

**Author:** AgentIvan
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulb-switcher/solutions/3460708/](https://leetcode.com/problems/bulb-switcher/solutions/3460708/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(logN)$$

- Space complexity:
$$O(1)$$

# Code
```Python []
class Solution:
  def bulbSwitch(self, n: int, i=1) -> int:
    while(i*i<=n): i -= -1
    return i-1
```

```Python []
class Solution:
  bulbSwitch = isqrt
```

```C++ []
  int bulbSwitch(int n, int i=1) {
    for(; i*i<=n; i++);
    return i-1;
  }
```

```Scala []
object Solution {
  def bulbSwitch(n: Int): Int = Math.sqrt(n).toInt
}
```

```Go []
func bulbSwitch(n int) int {
  return int(math.Sqrt(float64(n)))
}
```

```Ruby []
def bulb_switch(n) = Integer.sqrt(n)
```