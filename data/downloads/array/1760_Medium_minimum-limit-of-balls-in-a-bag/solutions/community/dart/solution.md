# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solutions/6122982/](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solutions/6122982/)

---

![image.png](./images/0.png)

---



# Intuition
The goal is to minimize the largest bag size after performing a maximum of `maxOperations` operations. Each operation allows you to split a bag into two bags. To determine the smallest possible penalty (largest bag size after all operations), we can use **binary search on the penalty value**.

---

# Approach
1. **Binary Search Setup:**
   - The range for the binary search is between `1` (minimum possible penalty) and the largest element in `nums` (maximum possible penalty).
   - At each step, calculate the middle value (`mid`) and check if it is feasible to achieve this penalty using a helper function.

2. **Feasibility Check (`canDivide`):**
   - For each bag in `nums`, determine how many operations are needed to ensure no bag exceeds `mid`.
   - If the total operations required is less than or equal to `maxOperations`, the penalty is feasible; otherwise, it's not.

3. **Binary Search Logic:**
   - If `mid` is feasible, try smaller penalties (`end = mid - 1`).
   - If `mid` is not feasible, increase the penalty (`start = mid + 1`).

4. **Return the Result:**
   - The smallest feasible penalty is the answer.

---

# Complexity
- **Time Complexity:**  
  - Sorting: $$O(n \\log n)$$  
  - Binary Search: $$O(\\log(\	ext{max}(nums)) \	imes n)$$, where $$\\log(\	ext{max}(nums))$$ is the number of binary search iterations and $$n$$ is the time to check feasibility.  
  - Total: $$O(n \\log n + n \\log(\	ext{max}(nums)))$$.

- **Space Complexity:**  
  - $$O(1)$$ (constant space for variables).

---


```dart []
class Solution {
  int minimumSize(List<int> nums, int maxOperations) {
    nums.sort(); // Sort to efficiently determine bounds
    int start = 1; // Minimum possible penalty
    int end = nums.last; // Maximum possible penalty
    int ans = end; // Initialize result with the worst-case penalty

    // Binary search for the minimum penalty
    while (start <= end) {
      int mid = start + (end - start) ~/ 2;
      if (canDivide(nums, maxOperations, mid)) {
        ans = mid; // Update result as we found a smaller penalty
        end = mid - 1; // Search in the lower half
      } else {
        start = mid + 1; // Search in the upper half
      }
    }

    return ans;
  }

  // Helper function to check if we can achieve a penalty of `penalty` with `maxOperations`
  bool canDivide(List<int> nums, int maxOperations, int penalty) {
    int operations = 0;

    for (int balls in nums) {
      if (balls > penalty) {
        // Calculate the number of operations needed to reduce this bag to <= penalty
        operations += (balls - 1) ~/ penalty;
      }
      if (operations > maxOperations) return false; // Early exit if operations exceed maxOperations
    }

    return true;
  }
}
```


```python []
class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        def canDivide(penalty: int) -> bool:
            operations = 0
            for balls in nums:
                if balls > penalty:
                    operations += (balls - 1) // penalty
                if operations > maxOperations:
                    return False
            return True

        nums.sort()
        start, end = 1, max(nums)
        ans = end

        while start <= end:
            mid = start + (end - start) // 2
            if canDivide(mid):
                ans = mid
                end = mid - 1
            else:
                start = mid + 1

        return ans
```


```javascript []
var minimumSize = function(nums, maxOperations) {
    const canDivide = (penalty) => {
        let operations = 0;
        for (const balls of nums) {
            if (balls > penalty) {
                operations += Math.floor((balls - 1) / penalty);
            }
            if (operations > maxOperations) return false;
        }
        return true;
    };

    nums.sort((a, b) => a - b);
    let start = 1, end = Math.max(...nums);
    let ans = end;

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (canDivide(mid)) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return ans;
};
```


```java []
import java.util.Arrays;

class Solution {
    public int minimumSize(int[] nums, int maxOperations) {
        Arrays.sort(nums);
        int start = 1, end = nums[nums.length - 1];
        int ans = end;

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (canDivide(nums, maxOperations, mid)) {
                ans = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return ans;
    }

    private boolean canDivide(int[] nums, int maxOperations, int penalty) {
        int operations = 0;
        for (int balls : nums) {
            if (balls > penalty) {
                operations += (balls - 1) / penalty;
            }
            if (operations > maxOperations) return false;
        }
        return true;
    }
}
```


```cpp []
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minimumSize(vector<int>& nums, int maxOperations) {
        sort(nums.begin(), nums.end());
        int start = 1, end = nums.back();
        int ans = end;

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (canDivide(nums, maxOperations, mid)) {
                ans = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return ans;
    }

private:
    bool canDivide(vector<int>& nums, int maxOperations, int penalty) {
        int operations = 0;
        for (int balls : nums) {
            if (balls > penalty) {
                operations += (balls - 1) / penalty;
            }
            if (operations > maxOperations) return false;
        }
        return true;
    }
};
```


```go []
import "sort"

func minimumSize(nums []int, maxOperations int) int {
    sort.Ints(nums)
    start, end := 1, nums[len(nums)-1]
    ans := end

    for start <= end {
        mid := start + (end-start)/2
        if canDivide(nums, maxOperations, mid) {
            ans = mid
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return ans
}

func canDivide(nums []int, maxOperations, penalty int) bool {
    operations := 0
    for _, balls := range nums {
        if balls > penalty {
            operations += (balls - 1) / penalty
        }
        if operations > maxOperations {
            return false
        }
    }
    return true
}
```


---

![image.png](./images/1.png) {:style='width:250px'}