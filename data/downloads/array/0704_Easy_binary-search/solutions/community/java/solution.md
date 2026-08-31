# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 322
**Link:** [https://leetcode.com/problems/binary-search/solutions/3363885/](https://leetcode.com/problems/binary-search/solutions/3363885/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Binary search is an efficient algorithm for searching for a specific target value within a sorted array. The basic idea is to repeatedly divide the search interval in half until the target value is found or the interval is empty. By using this approach, we can quickly eliminate half of the remaining search space at each iteration, resulting in a time complexity of O(log n).

# Approach
<!-- Describe your approach to solving the problem. -->
The algorithm starts by comparing the target value to the middle element of the sorted array. If the target is equal to the middle element, we return the index of the middle element. If the target is less than the middle element, we repeat the search on the left half of the array. If the target is greater than the middle element, we repeat the search on the right half of the array. We continue this process until either the target is found or the search interval is empty.

- Initialize left and right pointers to the beginning and end of the array, respectively.
- While the left pointer is less than or equal to the right pointer:
 
    a. Calculate the middle index as the average of the left and right pointers.
    b. If the middle element is equal to the target, return the index of the middle element.
    c. If the middle element is less than the target, update the left pointer to mid + 1.
    d. If the middle element is greater than the target, update the right pointer to mid - 1.

- If the target is not found, return -1.

# Complexity
- Time complexity: $$O(log n)$$ - Since binary search reduces the search space by half at each step, the maximum number of iterations required to find the target is log base 2 of n, where n is the size of the array. Therefore, the time complexity of binary search is $$O(log n)$$.

- Space complexity: $$O(1)$$ - Binary search only uses a constant amount of additional space for the two pointers and the middle index variable, so the space complexity is $$O(1)$$.

`Note that the above complexity analysis assumes that the array is already sorted. If the array needs to be sorted first, then the time complexity would be dominated by the sorting algorithm, which is typically `$$O(n log n)$$` for comparison-based sorts.`

![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Code

```Java []
class Solution {
    public int search(int[] nums, int target) {
        int left = 0; // initialize left pointer to 0
        int right = nums.length - 1; // initialize right pointer to the last index of the array
        
        while (left <= right) { // continue the loop till left pointer is less than or equal to right pointer
            int mid = left + (right - left) / 2; // calculate the middle index of the array
            
            if (nums[mid] == target) { // check if the middle element is equal to target
                return mid; // return the middle index
            } else if (nums[mid] < target) { // check if the middle element is less than target
                left = mid + 1; // move the left pointer to the right of middle element
            } else { // if the middle element is greater than target
                right = mid - 1; // move the right pointer to the left of middle element
            }
        }
        
        return -1; // target not found in the array
    }
}
```
```C++ []
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
};
```
``` Python []
class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        left = 0
        right = len(nums) - 1
        
        while left <= right:
            mid = (left + right) // 2
            
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        
        return -1

```
```javascript []
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

```

# Several different ways to implement  
There are actually several different ways to implement the binary search algorithm, although they all follow the same basic idea of dividing the search space in half at each step. Here are a few variations:
``` Recursive_implementation []
<!-- Recursive implementation: Instead of using a while loop, you can implement binary search recursively by calling the search function on the left or right half of the array depending on whether the target is greater or less than the middle element. Here's an example implementation: -->

class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        def binary_search(left, right):
            if left > right:
                return -1
            
            mid = (left + right) // 2
            
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                return binary_search(mid + 1, right)
            else:
                return binary_search(left, mid - 1)
        
        return binary_search(0, len(nums) - 1)
```
``` Two_pointers []
<!-- Two pointers: Instead of calculating the middle index directly, you can use two pointers to keep track of the search space. The left pointer points to the beginning of the array, and the right pointer points to the end. At each step, you calculate the middle index as the average of the left and right pointers, and then update the pointers accordingly. Here's an example implementation: -->

class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        left, right = 0, len(nums) - 1
        
        while left <= right:
            mid = (left + right) // 2
            
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        
        return -1

```
``` ModifiedBinarySearch []

<!-- Modified binary search: If the array has some special properties, you can modify the binary search algorithm to take advantage of those properties and achieve better performance. For example, if the array is rotated, you can still use binary search if you check whether the left or right half is sorted before deciding which half to search next. Here's an example implementation: -->

class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        left, right = 0, len(nums) - 1
        
        while left <= right:
            mid = (left + right) // 2
            
            if nums[mid] == target:
                return mid
            
            if nums[left] <= nums[mid]:
                if nums[left] <= target and target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if nums[mid] < target and target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1
        
        return -1
```   
```Recursive_approach_Java []
class Solution {
    public int search(int[] nums, int target) {
        return binarySearch(nums, target, 0, nums.length - 1);
    }
    
    private int binarySearch(int[] nums, int target, int left, int right) {
        if (left > right) {
            return -1;
        }
        
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            return binarySearch(nums, target, mid + 1, right);
        } else {
            return binarySearch(nums, target, left, mid - 1);
        }
    }
}

```
``` Two_pointer_Approach []
class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
}

```
These are just a few examples of how you can implement binary search. Depending on the problem constraints and requirements, there may be other variations or optimizations that can be used as well.
code in java
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
``````