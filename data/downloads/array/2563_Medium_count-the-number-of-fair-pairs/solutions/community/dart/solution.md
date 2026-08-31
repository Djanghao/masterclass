# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/6041568/](https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/6041568/)

---

![image.png](./images/0.png)



---

### Intuition
The goal is to find pairs \\((i, j)\\) in the list `nums` where the sum of \\( \	ext{nums}[i] + \	ext{nums}[j] \\) lies within a specified range \\([ \	ext{lower}, \	ext{upper} ]\\). This problem suggests a two-pointer technique due to its focus on finding pairs that satisfy a sum constraint, which is optimized by sorting the array.

### Approach
1. **Sort the Array**: First, sort `nums` in ascending order, making it easier to perform binary search to find the range of sums.
2. **Iterate with Two Pointers**: 
   - For each element \\( \	ext{nums}[i] \\), find how many values in the rest of the array (i.e., `nums[i+1:]`) can form a pair within the target sum range.
3. **Binary Search**:
   - Use binary search to efficiently find the range of indices \\((\	ext{lowerIndex}, \	ext{upperIndex})\\) where pairs with \\(\	ext{nums}[i]\\) have sums within \\([ \	ext{lower}, \	ext{upper} ]\\).
   - If such indices are found, add the count \\((\	ext{upperIndex} - \	ext{lowerIndex} + 1)\\) to `count`.

### Complexity
- **Time Complexity**: Sorting the array takes \\(O(n \\log n)\\), and for each element, the binary search operation for lower and upper bounds is \\(O(\\log n)\\), resulting in an overall complexity of \\(O(n \\log n)\\).
- **Space Complexity**: \\(O(1)\\) (excluding input/output), as the solution requires only a constant amount of space.

---

### Code
```dart []
class Solution {
  int countFairPairs(List<int> nums, int lower, int upper) {
    nums.sort(); // Sort the array for using two-pointer/binary search.
    int count = 0;

    for (int i = 0; i < nums.length - 1; i++) {
      int start = i + 1;
      int end = nums.length - 1;

      // Find the lower bound where nums[i] + nums[start] >= lower.
      int lowerIndex = binarySearch(nums, start, end, lower - nums[i], true);
      // Find the upper bound where nums[i] + nums[end] <= upper.
      int upperIndex = binarySearch(nums, start, end, upper - nums[i], false);

      // If valid indices are found, count the number of valid pairs.
      if (lowerIndex != -1 && upperIndex != -1 && lowerIndex <= upperIndex) {
        count += (upperIndex - lowerIndex + 1);
      }
    }
    return count;
  }

  // Binary search to find bounds:
  // `findLowerBound`: if true, search for the first element >= target.
  // If false, search for the last element <= target.
  int binarySearch(List<int> nums, int start, int end, int target, bool findLowerBound) {
    int result = -1;
    while (start <= end) {
      int mid = start + (end - start) ~/ 2;
      if ((findLowerBound && nums[mid] >= target) || (!findLowerBound && nums[mid] <= target)) {
        result = mid;
        if (findLowerBound) {
          end = mid - 1; // Move left for lower bound
        } else {
          start = mid + 1; // Move right for upper bound
        }
      } else {
        if (findLowerBound) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    return result;
  }
}
```


```java []
import java.util.Arrays;

class Solution {
    public int countFairPairs(int[] nums, int lower, int upper) {
        Arrays.sort(nums); // Sort the array
        int count = 0;
        
        for (int i = 0; i < nums.length - 1; i++) {
            int lowerIndex = binarySearch(nums, i + 1, nums.length - 1, lower - nums[i], true);
            int upperIndex = binarySearch(nums, i + 1, nums.length - 1, upper - nums[i], false);

            if (lowerIndex != -1 && upperIndex != -1 && lowerIndex <= upperIndex) {
                count += (upperIndex - lowerIndex + 1);
            }
        }
        
        return count;
    }
    
    private int binarySearch(int[] nums, int start, int end, int target, boolean findLowerBound) {
        int result = -1;
        
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if ((findLowerBound && nums[mid] >= target) || (!findLowerBound && nums[mid] <= target)) {
                result = mid;
                if (findLowerBound) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else {
                if (findLowerBound) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
        }
        
        return result;
    }
}
```


```javascript []
function countFairPairs(nums, lower, upper) {
    nums.sort((a, b) => a - b); // Sort the array
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        const lowerIndex = binarySearch(nums, i + 1, nums.length - 1, lower - nums[i], true);
        const upperIndex = binarySearch(nums, i + 1, nums.length - 1, upper - nums[i], false);

        if (lowerIndex !== -1 && upperIndex !== -1 && lowerIndex <= upperIndex) {
            count += (upperIndex - lowerIndex + 1);
        }
    }

    return count;
}

function binarySearch(nums, start, end, target, findLowerBound) {
    let result = -1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if ((findLowerBound && nums[mid] >= target) || (!findLowerBound && nums[mid] <= target)) {
            result = mid;
            if (findLowerBound) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (findLowerBound) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return result;
}
```


```python []
from typing import List

class Solution:
    def countFairPairs(self, nums: List[int], lower: int, upper: int) -> int:
        nums.sort()  # Sort the array
        count = 0
        
        for i in range(len(nums) - 1):
            lower_index = self.binary_search(nums, i + 1, len(nums) - 1, lower - nums[i], True)
            upper_index = self.binary_search(nums, i + 1, len(nums) - 1, upper - nums[i], False)
            
            if lower_index != -1 and upper_index != -1 and lower_index <= upper_index:
                count += (upper_index - lower_index + 1)
        
        return count

    def binary_search(self, nums, start, end, target, find_lower_bound):
        result = -1
        
        while start <= end:
            mid = start + (end - start) // 2
            if (find_lower_bound and nums[mid] >= target) or (not find_lower_bound and nums[mid] <= target):
                result = mid
                if find_lower_bound:
                    end = mid - 1
                else:
                    start = mid + 1
            else:
                if find_lower_bound:
                    start = mid + 1
                else:
                    end = mid - 1
        
        return result
```


```cpp []
#include <vector>
#include <algorithm>

class Solution {
public:
    int countFairPairs(std::vector<int>& nums, int lower, int upper) {
        std::sort(nums.begin(), nums.end());
        int count = 0;
        
        for (int i = 0; i < nums.size() - 1; i++) {
            int lowerIndex = binarySearch(nums, i + 1, nums.size() - 1, lower - nums[i], true);
            int upperIndex = binarySearch(nums, i + 1, nums.size() - 1, upper - nums[i], false);

            if (lowerIndex != -1 && upperIndex != -1 && lowerIndex <= upperIndex) {
                count += (upperIndex - lowerIndex + 1);
            }
        }
        
        return count;
    }

private:
    int binarySearch(const std::vector<int>& nums, int start, int end, int target, bool findLowerBound) {
        int result = -1;
        
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if ((findLowerBound && nums[mid] >= target) || (!findLowerBound && nums[mid] <= target)) {
                result = mid;
                if (findLowerBound) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else {
                if (findLowerBound) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
        }
        
        return result;
    }
};
```


```go []
import (
    "sort"
)

func countFairPairs(nums []int, lower int, upper int) int {
    sort.Ints(nums) // Sort the array
    count := 0
    
    for i := 0; i < len(nums)-1; i++ {
        lowerIndex := binarySearch(nums, i+1, len(nums)-1, lower-nums[i], true)
        upperIndex := binarySearch(nums, i+1, len(nums)-1, upper-nums[i], false)

        if lowerIndex != -1 && upperIndex != -1 && lowerIndex <= upperIndex {
            count += (upperIndex - lowerIndex + 1)
        }
    }
    
    return count
}

func binarySearch(nums []int, start, end, target int, findLowerBound bool) int {
    result := -1
    
    for start <= end {
        mid := start + (end-start)/2
        if (findLowerBound && nums[mid] >= target) || (!findLowerBound && nums[mid] <= target) {
            result = mid
            if findLowerBound {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if findLowerBound {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    
    return result
}
```

---

![image.png](./images/1.png) {:style='width:250px'}