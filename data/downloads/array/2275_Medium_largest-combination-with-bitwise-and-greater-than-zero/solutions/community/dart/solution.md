# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/6018010/](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/6018010/)

---

![image.png](./images/0.png)

---



### Intuition
The goal is to find the largest combination of numbers where a specific bit position is set to `1` across multiple numbers. By counting the number of times each bit position is set among all numbers, we can determine which bit position has the maximum number of `1`s. This bit position will give us the size of the largest combination where the numbers have that bit set.

---

### Approach
1. **Loop through Bit Positions:** We consider each bit position up to 24 bits, as that should cover the size of numbers in the input.
2. **Count Set Bits:** For each bit position, count how many numbers have this bit set to `1`.
3. **Track Maximum Count:** Keep track of the maximum count across all bit positions to determine the largest combination.

---

### Complexity
- **Time Complexity:** \\(O(n \\cdot b)\\), where \\(n\\) is the number of elements in `candidates` and \\(b\\) is the number of bits (up to 24). This is because for each bit position, we iterate over all elements.
- **Space Complexity:** \\(O(1)\\) since only a constant amount of extra space is used.

---

### Code Implementations

```dart []
import 'dart:math';

class Solution {
  int largestCombination(List<int> candidates) {
    int maxCombination = 0;

    for (int bit = 0; bit < 24; bit++) {
      int count = 0;
      for (int num in candidates) {
        if ((num & (1 << bit)) != 0) {
          count++;
        }
      }
      maxCombination = max(maxCombination, count);
    }
    return maxCombination;
  }
}
```

```java []
import java.util.List;

class Solution {
    public int largestCombination(List<Integer> candidates) {
        int maxCombination = 0;

        for (int bit = 0; bit < 24; bit++) {
            int count = 0;
            for (int num : candidates) {
                if ((num & (1 << bit)) != 0) {
                    count++;
                }
            }
            maxCombination = Math.max(maxCombination, count);
        }
        return maxCombination;
    }
}
```

```python []
from typing import List

class Solution:
    def largestCombination(self, candidates: List[int]) -> int:
        max_combination = 0

        for bit in range(24):
            count = sum(1 for num in candidates if num & (1 << bit))
            max_combination = max(max_combination, count)

        return max_combination
```

```javascript []
var largestCombination = function(candidates) {
    let maxCombination = 0;

    for (let bit = 0; bit < 24; bit++) {
        let count = 0;
        for (let num of candidates) {
            if ((num & (1 << bit)) !== 0) {
                count++;
            }
        }
        maxCombination = Math.max(maxCombination, count);
    }
    return maxCombination;
};
```

```cpp []
#include <vector>
#include <algorithm>

class Solution {
public:
    int largestCombination(std::vector<int>& candidates) {
        int maxCombination = 0;

        for (int bit = 0; bit < 24; bit++) {
            int count = 0;
            for (int num : candidates) {
                if ((num & (1 << bit)) != 0) {
                    count++;
                }
            }
            maxCombination = std::max(maxCombination, count);
        }
        return maxCombination;
    }
};
```

```go []
func largestCombination(candidates []int) int {
    maxCombination := 0

    for bit := 0; bit < 24; bit++ {
        count := 0
        for _, num := range candidates {
            if (num & (1 << bit)) != 0 {
                count++
            }
        }
        if count > maxCombination {
            maxCombination = count
        }
    }
    return maxCombination
}
```

---


![image.png](./images/1.png) {:style='width:250px'}