# Simple Approach if(num%3!= 0){count++} explained

**Author:** muhammadfarhankt
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5352966/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5352966/)

---

# Approach
1. Iterate through each element of the array.
2. Counting:
    - If an element's remainder is 0, it's already divisible by 3, so no operation is needed.
    - If the remainder is 1, subtracting 1 will make it divisible by 3, requiring one operation.
    - If the remainder is 2, adding 1 will make it divisible by 3, also requiring one operation.
    - So if an element is not divisible by 3 (i.e., num % 3 != 0), it will require exactly one operation to make it divisible by 3.

# Complexity
- Time complexity: O(n) because we iterate through the list once to compute the remainders and count the operations.

- Space complexity: O(1) because we only use a fixed amount of extra space (a counter variable).

# Code
```Java []
class Solution {
    public int minimumOperations(int[] nums) {
        int count = 0;
        for (int num : nums) {
            if (num % 3 != 0) {
                count++;
            }
        }
        return count;
    }
}
```
```C++ []
#include <vector>

class Solution {
public:
    int minimumOperations(std::vector<int>& nums) {
        int count = 0;
        for (int num : nums) {
            if (num % 3 != 0) {
                count++;
            }
        }
        return count;
    }
};
```
```Python []
from typing import List

class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        count = 0
        for num in nums:
            if num % 3 != 0:
                count += 1
        return count
```
```Javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0;
    for (let num of nums) {
        if (num % 3 != 0) {
            count++;
        }
    }
    return count;
};
```
```Golang []
func minimumOperations(nums []int) int {
    count := 0
    for _, num := range nums {
        if num % 3 != 0 {
            count++
        }
    }
    return count   
}
```
```C []
int minimumOperations(int* nums, int numsSize) {
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] % 3 != 0) {
            count++;
        }
    }
    return count;
}
```

