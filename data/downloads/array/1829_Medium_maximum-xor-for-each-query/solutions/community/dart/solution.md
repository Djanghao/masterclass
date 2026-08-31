# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-xor-for-each-query/solutions/6021911/](https://leetcode.com/problems/maximum-xor-for-each-query/solutions/6021911/)

---

![image.png](./images/0.png)



---

### Intuition
The goal is to return the maximum XOR value for a given array `nums` in a sequence based on `maximumBit`. Each time, we calculate the maximum XOR value by finding the XOR result that gives the highest bits, limited by `maximumBit`. 

Given that XOR is reversible, we can leverage the cumulative XOR of all elements to avoid recalculating it for each new configuration.

---

### Approach
1. **Calculate Cumulative XOR:** First, compute the XOR of the entire array (`totalXor`). This represents the cumulative XOR when all elements are present.
2. **Determine Maximum XOR for Each State:** Using `totalXor` at each step, compute the highest `k` that can be achieved. For a given `maximumBit`, this maximum `k` is determined as `maxBit = (1 << maximumBit) - 1`, which sets all bits within the `maximumBit` constraint.
3. **Iterate in Reverse Order:** For each state, remove the last element of `nums` (by updating `totalXor`) and compute the new XOR with `maxBit`.
4. **Return Results in Reverse Order:** We calculate in reverse, as the problem demands results in decreasing length order.

---

### Complexity
- **Time Complexity:** \\(O(n)\\), where \\(n\\) is the length of `nums`, as we only need one pass to calculate the XOR and one pass for the results.
- **Space Complexity:** \\(O(n)\\), for storing the result array.

---

### Code Implementations

```dart []
import 'dart:math';

class Solution {
  List<int> getMaximumXor(List<int> nums, int maximumBit) {
    int totalXor = nums.reduce((a, b) => a ^ b);
    int maxBit = pow(2, maximumBit).toInt() - 1;
    List<int> answer = List.filled(nums.length, 0);

    for (int i = nums.length - 1; i >= 0; i--) {
      answer[nums.length - 1 - i] = totalXor ^ maxBit;
      totalXor ^= nums[i];
    }

    return answer;
  }
}
```

```java []
import java.util.*;

class Solution {
    public int[] getMaximumXor(int[] nums, int maximumBit) {
        int totalXor = 0;
        for (int num : nums) {
            totalXor ^= num;
        }
        
        int maxBit = (1 << maximumBit) - 1;
        int[] answer = new int[nums.length];

        for (int i = nums.length - 1; i >= 0; i--) {
            answer[nums.length - 1 - i] = totalXor ^ maxBit;
            totalXor ^= nums[i];
        }

        return answer;
    }
}
```

```python []
from typing import List

class Solution:
    def getMaximumXor(self, nums: List[int], maximumBit: int) -> List[int]:
        totalXor = 0
        for num in nums:
            totalXor ^= num
            
        maxBit = (1 << maximumBit) - 1
        answer = [0] * len(nums)
        
        for i in range(len(nums) - 1, -1, -1):
            answer[len(nums) - 1 - i] = totalXor ^ maxBit
            totalXor ^= nums[i]
        
        return answer
```

```javascript []
var getMaximumXor = function(nums, maximumBit) {
    let totalXor = nums.reduce((acc, num) => acc ^ num, 0);
    const maxBit = (1 << maximumBit) - 1;
    const answer = Array(nums.length);

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[nums.length - 1 - i] = totalXor ^ maxBit;
        totalXor ^= nums[i];
    }

    return answer;
};
```

```cpp []
#include <vector>
#include <cmath>

class Solution {
public:
    std::vector<int> getMaximumXor(std::vector<int>& nums, int maximumBit) {
        int totalXor = 0;
        for (int num : nums) {
            totalXor ^= num;
        }
        
        int maxBit = (1 << maximumBit) - 1;
        std::vector<int> answer(nums.size());

        for (int i = nums.size() - 1; i >= 0; i--) {
            answer[nums.size() - 1 - i] = totalXor ^ maxBit;
            totalXor ^= nums[i];
        }

        return answer;
    }
};
```

```go []
func getMaximumXor(nums []int, maximumBit int) []int {
    totalXor := 0
    for _, num := range nums {
        totalXor ^= num
    }
    
    maxBit := (1 << maximumBit) - 1
    answer := make([]int, len(nums))

    for i := len(nums) - 1; i >= 0; i-- {
        answer[len(nums) - 1 - i] = totalXor ^ maxBit
        totalXor ^= nums[i]
    }

    return answer
}
```

This consistent approach across different languages will help produce correct results for the maximum XOR values given a dynamic array configuration. 

---
![image.png](./images/1.png) {:style='width:250px'}