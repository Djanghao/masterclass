# BEATS 100 % 🎯 | SUPER EASY AND SIMPLE🔥|

**Author:** CodeWithSparsh
**Votes:** 19
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/5544504/](https://leetcode.com/problems/search-insert-position/solutions/5544504/)

---

![image.png](./images/0.png)



# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Given that the array is sorted and we need to achieve O(log n) runtime complexity, a binary search algorithm is a natural choice. This allows us to efficiently narrow down the potential insertion point by repeatedly dividing the search interval in half.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize two pointers, `left` and `right`, to represent the bounds of the current search interval.
2. While the search interval is valid (i.e., `left` <= `right`):
   - Calculate the middle index (`mid`).
   - Compare the element at `mid` with the target:
     - If the middle element equals the target, return `mid`.
     - If the middle element is greater than the target, adjust the search interval to the left half.
     - If the middle element is less than the target, adjust the search interval to the right half.
3. If the target is not found, return the `left` pointer, which will be the correct insertion point.

# Complexity
- Time complexity: 
  $$O(\\log n)$$
  The binary search algorithm divides the search interval in half at each step.

- Space complexity: 
  $$O(1)$$
  Only a constant amount of extra space is used, regardless of the input size.

# Code


```java []
class Solution {
    public int searchInsert(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (right >= left) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) return mid;
            else if (nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        }

        return left;
    }
}
```

```dart []
int searchInsert(List<int> nums, int target) {
  int left = 0;
  int right = nums.length - 1;

  while (right >= left) {
    int mid = left + (right - left) ~/ 2;

    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}
```


```python []
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1

        while right >= left:
            mid = left + (right - left) // 2

            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1

        return left
```

```javascript []
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (right >= left) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }

    return left;
};
```

![image.png](./images/1.png) {:style='width:250px'}