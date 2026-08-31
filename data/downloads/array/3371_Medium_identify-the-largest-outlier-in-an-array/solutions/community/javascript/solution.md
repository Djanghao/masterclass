# Binary Search Solution to find out special number on every possible outlier

**Author:** ikmishra2002
**Votes:** 2
**Link:** [https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6099667/](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6099667/)

---

### Approach

#### Key Insights:
1. **Sorting the Array**:
   - Sorting simplifies the process of checking for conditions on the numbers.
   - By sorting, we can iterate from the largest to the smallest, reducing unnecessary computations.

2. **Two-Pointer Search**:
   - For each candidate number (potential outlier), perform a binary search on the remaining numbers.
   - Exclude the candidate number from the search to avoid false positives.

3. **Mathematical Validation**:
   - Calculate the total sum of the array (`sum`).
   - If removing a number (`nums[i]`) makes `sum - nums[i]` equal to one of the other numbers in the array, this is the valid outlier.

---

### Implementation

Here\u2019s the code for the solution:

```cpp []
class Solution {
    int check(long long sum, vector<int>& nums, int i) {
        int n = nums.size();
        int l = 0, r = n - 1;

        while (l <= r) {
            int mid = (l + r) / 2;
            if (mid == i) {
                if (mid < r) mid++; 
                else if (mid > l) mid--; 
                else return false;
            }

            if (sum - nums[mid] == nums[mid])
                return true;
            if (sum - nums[mid] < nums[mid]) r = mid - 1;
            else l = mid + 1;
        }
        return false;
    }

public:
    int getLargestOutlier(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        long long sum = accumulate(nums.begin(), nums.end(), 0);
        int n = nums.size();

        for (int i = n - 1; i >= 0; i--) {
            if (check(sum - nums[i], nums, i)) return nums[i];
        }
        return -1;
    }
};
```

```python []
class Solution:
    def check(self, total_sum, nums, index):
        n = len(nums)
        left, right = 0, n - 1

        while left <= right:
            mid = (left + right) // 2
            if mid == index:
                if mid < right:
                    mid += 1
                elif mid > left:
                    mid -= 1
                else:
                    return False
            
            if total_sum - nums[mid] == nums[mid]:
                return True
            elif total_sum - nums[mid] < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1

        return False

    def getLargestOutlier(self, nums):
        nums.sort()
        total_sum = sum(nums)
        n = len(nums)

        for i in range(n - 1, -1, -1):
            if self.check(total_sum - nums[i], nums, i):
                return nums[i]

        return -1
```

```java []
import java.util.*;

class Solution {
    private boolean check(long sum, int[] nums, int index) {
        int n = nums.length;
        int left = 0, right = n - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (mid == index) {
                if (mid < right) mid++;
                else if (mid > left) mid--;
                else return false;
            }

            if (sum - nums[mid] == nums[mid]) return true;
            if (sum - nums[mid] < nums[mid]) right = mid - 1;
            else left = mid + 1;
        }
        return false;
    }

    public int getLargestOutlier(int[] nums) {
        Arrays.sort(nums);
        long sum = Arrays.stream(nums).asLongStream().sum();

        for (int i = nums.length - 1; i >= 0; i--) {
            if (check(sum - nums[i], nums, i)) return nums[i];
        }
        return -1;
    }
}
```

```javascript []
function check(totalSum, nums, index) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid === index) {
            if (mid < right) mid++;
            else if (mid > left) mid--;
            else return false;
        }

        if (totalSum - nums[mid] === nums[mid]) return true;
        if (totalSum - nums[mid] < nums[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return false;
}

function getLargestOutlier(nums) {
    nums.sort((a, b) => a - b);
    let totalSum = nums.reduce((a, b) => a + b, 0);

    for (let i = nums.length - 1; i >= 0; i--) {
        if (check(totalSum - nums[i], nums, i)) return nums[i];
    }
    return -1;
}
```
---


### Complexity Analysis
1. **Time Complexity**:
   - Sorting the array: \\(O(nlog n)\\)
   - Binary search for each element: \\(O(nlog n)\\)
   - Total: \\(O(nlog n)\\)

2. **Space Complexity**:
   - Sorting uses \\(O(1)\\) extra space (in-place sorting with a mutable array).

---

### Example Walkthrough

#### Input:
```plaintext
nums = [6, 1, 3, 10, 2]
```

#### Execution:
1. **Sort the array**: `[1, 2, 3, 6, 10]`
2. Calculate `sum = 22`.
3. Iterate from the largest number (`10`):
   - Check if removing `10` satisfies the condition. 
   - Result: `10` is the largest outlier.

#### Output:
```plaintext
10
```
