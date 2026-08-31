# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863668/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863668/)

---

![image.png](./images/0.png)


---

# Intuition
We want to remove the shortest subarray from the array such that the sum of the remaining elements is divisible by `p`. This can be translated to finding the smallest subarray whose sum has a remainder that, when removed, leaves the total sum divisible by `p`.

---

# Approach
1. Calculate the total sum of the array and determine the remainder when this sum is divided by `p`. We need to remove a subarray whose sum gives this remainder.
2. Use a prefix sum approach to track cumulative sums modulo `p`. This helps us to find a subarray that, when removed, results in a sum divisible by `p`.
3. Use a hashmap to store the prefix sums and their indices, allowing us to look up subarrays quickly.

---

# Complexity
- **Time Complexity**: \\(O(n)\\), where \\(n\\) is the number of elements in the array, as we process each element once.
- **Space Complexity**: \\(O(n)\\), for storing prefix sums in a hashmap.

---

```dart []
class Solution {
  int minSubarray(List<int> nums, int p) {
    int totalSum = nums.reduce((a, b) => a + b);
    int req = totalSum % p;

    if (req == 0) return 0;

    Map<int, int> prefixMap = {0: -1};
    int prefixSum = 0;
    int minLength = nums.length;

    for (int i = 0; i < nums.length; i++) {
      prefixSum = (prefixSum + nums[i]) % p;
      int target = (prefixSum - req) % p;
      if (target < 0) target += p;

      if (prefixMap.containsKey(target)) {
        minLength = min(minLength, i - prefixMap[target]!);
      }

      prefixMap[prefixSum] = i;
    }

    return minLength == nums.length ? -1 : minLength;
  }
}
```

```c []
#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int minSubarray(int* nums, int numsSize, int p) {
    int totalSum = 0;
    for (int i = 0; i < numsSize; i++) {
        totalSum += nums[i];
    }

    int req = totalSum % p;
    if (req == 0) return 0;

    int* prefixMap = (int*)calloc(p, sizeof(int));
    for (int i = 0; i < p; i++) prefixMap[i] = -1;

    prefixMap[0] = -1;
    int prefixSum = 0;
    int minLength = numsSize;

    for (int i = 0; i < numsSize; i++) {
        prefixSum = (prefixSum + nums[i]) % p;
        int target = (prefixSum - req + p) % p;

        if (prefixMap[target] != -1) {
            minLength = (i - prefixMap[target]) < minLength ? (i - prefixMap[target]) : minLength;
        }

        prefixMap[prefixSum] = i;
    }

    free(prefixMap);
    return minLength == numsSize ? -1 : minLength;
}
```

```cpp []
#include <vector>
#include <unordered_map>
#include <algorithm>

class Solution {
public:
    int minSubarray(std::vector<int>& nums, int p) {
        int totalSum = 0;
        for (int num : nums) totalSum += num;
        
        int req = totalSum % p;
        if (req == 0) return 0;

        std::unordered_map<int, int> prefixMap;
        prefixMap[0] = -1;

        int prefixSum = 0;
        int minLength = nums.size();

        for (int i = 0; i < nums.size(); i++) {
            prefixSum = (prefixSum + nums[i]) % p;
            int target = (prefixSum - req + p) % p;

            if (prefixMap.find(target) != prefixMap.end()) {
                minLength = std::min(minLength, i - prefixMap[target]);
            }

            prefixMap[prefixSum] = i;
        }

        return minLength == nums.size() ? -1 : minLength;
    }
};
```

```java []
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int minSubarray(int[] nums, int p) {
        int totalSum = 0;
        for (int num : nums) totalSum += num;

        int req = totalSum % p;
        if (req == 0) return 0;

        Map<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int minLength = nums.length;

        for (int i = 0; i < nums.length; i++) {
            prefixSum = (prefixSum + nums[i]) % p;
            int target = (prefixSum - req + p) % p;

            if (prefixMap.containsKey(target)) {
                minLength = Math.min(minLength, i - prefixMap.get(target));
            }

            prefixMap.put(prefixSum, i);
        }

        return minLength == nums.length ? -1 : minLength;
    }
}
```

```javascript []
var minSubarray = function(nums, p) {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    const req = totalSum % p;

    if (req === 0) return 0;

    const prefixMap = new Map();
    prefixMap.set(0, -1);

    let prefixSum = 0;
    let minLength = nums.length;

    for (let i = 0; i < nums.length; i++) {
        prefixSum = (prefixSum + nums[i]) % p;
        const target = (prefixSum - req + p) % p;

        if (prefixMap.has(target)) {
            minLength = Math.min(minLength, i - prefixMap.get(target));
        }

        prefixMap.set(prefixSum, i);
    }

    return minLength === nums.length ? -1 : minLength;
};
```

```python []
class Solution:
    def minSubarray(self, nums: List[int], p: int) -> int:
        totalSum = sum(nums)
        req = totalSum % p

        if req == 0:
            return 0

        prefixMap = {0: -1}
        prefixSum = 0
        minLength = len(nums)

        for i, num in enumerate(nums):
            prefixSum = (prefixSum + num) % p
            target = (prefixSum - req + p) % p

            if target in prefixMap:
                minLength = min(minLength, i - prefixMap[target])

            prefixMap[prefixSum] = i

        return minLength if minLength != len(nums) else -1
```

```go []
func minSubarray(nums []int, p int) int {
    totalSum := 0
    for _, num := range nums {
        totalSum += num
    }

    req := totalSum % p
    if req == 0 {
        return 0
    }

    prefixMap := map[int]int{0: -1}
    prefixSum := 0
    minLength := len(nums)

    for i, num := range nums {
        prefixSum = (prefixSum + num) % p
        target := (prefixSum - req + p) % p

        if val, exists := prefixMap[target]; exists {
            if i-val < minLength {
                minLength = i - val
            }
        }

        prefixMap[prefixSum] = i
    }

    if minLength == len(nums) {
        return -1
    }

    return minLength
}
```

![image.png](./images/1.png) {:style='width:250px'}*C**, **C++**, **Java**, **JavaScript**, **Python**, and **Go**.