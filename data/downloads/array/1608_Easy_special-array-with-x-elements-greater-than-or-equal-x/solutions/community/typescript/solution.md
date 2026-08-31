# Single pass check || beats 100% with C++ & 89% with java || python3 || typescript

**Author:** SanketSawant18
**Votes:** 5
**Link:** [https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5213890/](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5213890/)

---

# Approach
Single pass check

# Complexity
- Time complexity: O(nlogn)

- Space complexity: O(1)

# Explanation
1. **Sorting the Array:**

- Arrays.sort(nums);
- The array nums is sorted in ascending order. This step is crucial because it helps us efficiently check how many elements are greater than or equal to a given value.
2. **Iterating Over Possible Values of x:**

- for (int x = 1; x <= n; x++) {
- We iterate over all possible values of x from 1 to n (the length of the array). This loop is to check each possible value of x.
3. **Checking Conditions:**

- if (nums[n - x] >= x && (n - x == 0 || nums[n - x - 1] < x)) {
- For each x, we check if there are exactly x elements in the array that are greater than or equal to x.
- nums[n - x] >= x: This checks if the x-th largest element (since the array is sorted in ascending order, the n - x index gives us the x-th largest element) is at least x.
- (n - x == 0 || nums[n - x - 1] < x): This checks if the element before the x-th largest element is smaller than x or if we are at the start of the array. This ensures that exactly x elements are greater than or equal to x.
4. **Returning the Result:**

- return x;
- If both conditions are met, x is returned as the special number.
return -1;
- If no such x is found after iterating through all possible values, -1 is returned.

---

```java []
import java.util.Arrays;

public class Solution {
    public int specialArray(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;

        for (int x = 1; x <= n; x++) {
            if (nums[n - x] >= x && (n - x == 0 || nums[n - x - 1] < x)) {
                return x;
            }
        }
        return -1;
    }
}
```
```C++ []
#include <vector>
#include <algorithm>
#include <iostream>

class Solution {
public:
    int specialArray(std::vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        int n = nums.size();

        for (int x = 1; x <= n; ++x) {
            if (nums[n - x] >= x && (n - x == 0 || nums[n - x - 1] < x)) {
                return x;
            }
        }
        return -1;
    }
};
```
```python3 []
class Solution:
    def specialArray(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
    
        for x in range(1, n + 1):
            count = 0
            for num in nums:
                if num >= x:
                    count += 1
            if count == x:
                return x
        return -1
```
```Typescript []
function specialArray(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const n = nums.length;

    for (let x = 1; x <= n; x++) {
        if (nums[n - x] >= x && (n - x === 0 || nums[n - x - 1] < x)) {
            return x;
        }
    }
    return -1;
}
```
