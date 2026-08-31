# 🌟 Simple and Elegant 🪟Sliding Window Solution 💎🌟

**Author:** mansimittal935
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6135411/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6135411/)

---

# Intuition \u2728
We need to maximize the size of a subarray \uD83C\uDF08 where the difference between the largest and smallest elements is at most 2 \xD7 k. By sorting the array \uD83D\uDDC2\uFE0F, we can use a two-pointer sliding window approach \uD83E\uDE9F to efficiently check valid subarrays.

---

# Approach \uD83D\uDEE0\uFE0F
## Sort the array: This helps in checking the range with adjacent elements easily. \uD83E\uDDF9
## Two Pointers: Use l (left) and r (right) to represent the current subarray bounds.
- If nums[r] - nums[l] \u2264 2 \xD7 k \u2705:
- Update the maximum length.
- Otherwise \uD83D\uDEAB:
- Move the left pointer (l) to shrink the window.
## Iterate through the array with the right pointer (r) to expand the window.
## Return the maximum length of the valid subarray. \uD83C\uDFC6

---

# Complexity \uD83D\uDCCA
## Time Complexity:
- Sorting:  O(nlogn) \uD83D\uDD52
- Sliding Window:  O(n) \uD83D\uDD51
- Total:  O(nlogn)
## Space Complexity: O(1) (in-place operations) \uD83E\uDE84

---

# Code
```cpp []
class Solution {
public:
    int maximumBeauty(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());

        int len = 0;
        int l = 0, r = 0;
        while(r < nums.size()) {
            if(nums[r]-nums[l] <= 2*k) {
                len = max(len, r-l+1);
            } else {
                l++;
            }
            r++;
        }
        return len;
    }
};
```
```java []
import java.util.*;

class Solution {
    public int maximumBeauty(int[] nums, int k) {
        Arrays.sort(nums);

        int len = 0;
        int l = 0, r = 0;
        while (r < nums.length) {
            if (nums[r] - nums[l] <= 2 * k) {
                len = Math.max(len, r - l + 1);
            } else {
                l++;
            }
            r++;
        }
        return len;
    }
}

```
```javascript []
class Solution {
    maximumBeauty(nums, k) {
        nums.sort((a, b) => a - b);
        let len = 0;
        let l = 0;
        
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] - nums[l] <= 2 * k) {
                len = Math.max(len, r - l + 1);
            } else {
                l++;
            }
        }
        return len;
    }
}

```
```python []
class Solution:
    def maximumBeauty(self, nums, k):
        nums.sort()
        length = 0
        l = 0
        
        for r in range(len(nums)):
            if nums[r] - nums[l] <= 2 * k:
                length = max(length, r - l + 1)
            else:
                l += 1
        return length

```
```ruby []
class Solution
    def maximum_beauty(nums, k)
        nums.sort!
        len = 0
        l = 0
        
        nums.each_with_index do |num, r|
            if num - nums[l] <= 2 * k
                len = [len, r - l + 1].max
            else
                l += 1
            end
        end
        len
    end
end

```
```rust []
impl Solution {
    pub fn maximum_beauty(nums: Vec<i32>, k: i32) -> i32 {
        let mut nums = nums;
        nums.sort();
        let mut len = 0;
        let mut l = 0;
        
        for r in 0..nums.len() {
            if nums[r] - nums[l] <= 2 * k {
                len = len.max(r - l + 1);
            } else {
                l += 1;
            }
        }
        len as i32
    }
}

```
```go []
import (
    "sort"
)

func maximumBeauty(nums []int, k int) int {
    sort.Ints(nums)
    length := 0
    l := 0

    for r := 0; r < len(nums); r++ {
        if nums[r]-nums[l] <= 2*k {
            if r-l+1 > length {
                length = r - l + 1
            }
        } else {
            l++
        }
    }
    return length
}

```
```typescript []
class Solution {
    maximumBeauty(nums: number[], k: number): number {
        nums.sort((a, b) => a - b);
        let len = 0;
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            if (nums[r] - nums[l] <= 2 * k) {
                len = Math.max(len, r - l + 1);
            } else {
                l++;
            }
        }
        return len;
    }
}

```
```c# []
using System;

public class Solution {
    public int MaximumBeauty(int[] nums, int k) {
        Array.Sort(nums);
        int len = 0, l = 0;
        
        for (int r = 0; r < nums.Length; r++) {
            if (nums[r] - nums[l] <= 2 * k) {
                len = Math.Max(len, r - l + 1);
            } else {
                l++;
            }
        }
        return len;
    }
}

```
