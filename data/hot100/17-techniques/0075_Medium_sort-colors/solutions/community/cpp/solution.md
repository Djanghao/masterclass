# ✅ Beats 100 % || C++/Java/Python/JavaScript || Two Pointer || Dutch National Flag algorithm

**Author:** amanrathore48
**Votes:** 1083
**Link:** [https://leetcode.com/problems/sort-colors/solutions/3464652/](https://leetcode.com/problems/sort-colors/solutions/3464652/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
*The problem requires us to sort an array of integers representing colors in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We are given that the colors red, white, and blue are represented by the integers 0, 1, and 2 respectively.*

# Approach : ***Dutch National Flag algorithm***
<!-- Describe your approach to solving the problem. -->

- The Dutch National Flag algorithm, also known as 3-way partitioning, is an algorithm for sorting an array containing three distinct values. The algorithm was designed to solve the problem of sorting an array containing only 0s, 1s, and 2s, which is similar to the problem in the given question.

- The algorithm works by maintaining three pointers: low, mid, and high. The low pointer points to the beginning of the array, the high pointer points to the end of the array, and the mid pointer starts at the beginning of the array and moves through it.

- The idea behind the algorithm is to keep all the 0s before the low pointer, all the 2s after the high pointer, and all the 1s between the low and high pointers. The algorithm moves the mid pointer through the array, comparing the value at each position with 1. If the value is 0, the element is swapped with the element at the low pointer, and the low and mid pointers are incremented. If the value is 2, the element is swapped with the element at the high pointer, and the high pointer is decremented. If the value is 1, the mid pointer is simply incremented.

- The algorithm terminates when the mid pointer crosses the high pointer, indicating that all the elements have been processed and the array is sorted.

> The Dutch National Flag algorithm is called one-pass because it sorts the array in a single pass through the elements. The time complexity of the algorithm is O(n), where n is the size of the array.


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int low = 0, mid = 0, high = nums.size()-1;
        while(mid <= high){
            if(nums[mid] == 0){
                swap(nums[low], nums[mid]);
                low++;
                mid++;
            }
            else if(nums[mid] == 1){
                mid++;
            }
            else{
                swap(nums[mid], nums[high]);
                high--;
            }
        }
    }
};

```
```Java []
class Solution {
    public void sortColors(int[] nums) {
        int low = 0, mid = 0, high = nums.length - 1;
        while (mid <= high) {
            if (nums[mid] == 0) {
                swap(nums, low, mid);
                low++;
                mid++;
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                swap(nums, mid, high);
                high--;
            }
        }
    }
    
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}

```
```python []
class Solution(object):
    def sortColors(self, nums):
        low, mid, high = 0, 0, len(nums)-1
        while mid <= high:
            if nums[mid] == 0:
                nums[low], nums[mid] = nums[mid], nums[low]
                low += 1
                mid += 1
            elif nums[mid] == 1:
                mid += 1
            else:
                nums[mid], nums[high] = nums[high], nums[mid]
                high -= 1
```
```JavaScript []
var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

```


---

![upvote.jpeg](./images/0.jpeg)


