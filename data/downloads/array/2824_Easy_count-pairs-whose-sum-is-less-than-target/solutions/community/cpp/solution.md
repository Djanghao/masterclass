# Two-Pointers-Approach || Easy-to-Understand ||  In 9 Languages🔥

**Author:** ADITYAGABA1322
**Votes:** 193
**Link:** [https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/3933451/](https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/3933451/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Problem: You're given an array of integers and a target value. The task is to count the number of pairs of elements in the array such that the sum of the pair is less than the target value.
The key insight for solving this problem is recognizing that if you have an array sorted in ascending order, you can efficiently find pairs that meet the given condition using a Two-Pointers Approach.
# Approach
<!-- Describe your approach to solving the problem. -->
The Two-Pointers Approach is a common technique to solve problems involving arrays or sequences. In this case, you can use two pointers, often referred to as the "left" and "right" pointers, to traverse the array and find pairs that satisfy the given condition.

Here's a high-level overview of the approach:

1.) Sort the array in ascending order. Sorting helps in efficiently exploring pairs with sums less than the target value.

2.) Initialize two pointers, left and right, pointing to the first and last elements of the sorted array, respectively.

3.) Initialize a variable count to keep track of the count of valid pairs.
While the left pointer is less than the right pointer:
If the sum of the elements at left and right is less than the target value, it means all pairs with the current left element will also satisfy the condition. So, increment the count by right - left and move the left pointer to the right.
If the sum is greater than or equal to the target, move the right pointer to the left.

4.) Continue this process until the left pointer crosses the right pointer.



# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Sorting the array takes O(n log n) time, where n is the number of elements in the array. The two-pointer traversal takes linear time, O(n), as each element is visited once.
Overall, the time complexity is dominated by the sorting step, making it O(n log n).

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity depends on the sorting algorithm used. If you're using an in-place sorting algorithm like Quicksort, the space complexity will be O(1) (negligible). If you're using an algorithm that requires additional space, the space complexity might be higher.

# ******Upvote******\uD83D\uDE80

# Code
```C++ []
class Solution {
public:
  int countPairs(vector<int>& nums , int target){ // function to count the pairs whose sum is less than target
      sort(nums.begin() , nums.end()); // sort the vector nums
      int count = 0; // variable to store the count
      int left = 0; // variable to store the left
      int right = nums.size()-1; // variable to store the right
      while(left < right){ // loop until left is less than right
          if(nums[left] + nums[right] < target){ // if nums[left] + nums[right] is less than target
              count += right-left; // update the count
              left++; // increment the left
          }
          else{ // else
              right--; // decrement the right
          }
      }
      return count; // return the count
  }
};
```
```java []
class Solution {
    public int countPairs(List<Integer> nums, int target) {
        Collections.sort(nums); // sort the vector nums
        int count = 0; // variable to store the count
        int left = 0; // variable to store the left
        int right = nums.size()-1; // variable to store the right
        while(left < right){ // loop until left is less than right
            if(nums.get(left) + nums.get(right) < target){ // if nums[left] + nums[right] is less than target
                count += right-left; // update the count
                left++; // increment the left
            }
            else{ // else
                right--; // decrement the right
            }
        }
        return count; // return the count
        
    }
}
```
```python []
class Solution(object):
    def countPairs(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        nums.sort() # sort the vector nums
        count = 0 # variable to store the count
        left = 0 # variable to store the left
        right = len(nums)-1 # variable to store the right
        while(left < right): # loop until left is less than right
            if(nums[left] + nums[right] < target): # if nums[left] + nums[right] is less than target
                count += right-left # update the count
                left += 1 # increment the left
            else: # else
                right -= 1 # decrement the right
        return count # return the count
```
```python3 []
class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        nums.sort() # sort the vector nums
        count = 0 # variable to store the count
        left = 0 # variable to store the left
        right = len(nums)-1 # variable to store the right
        while(left < right): # loop until left is less than right
            if(nums[left] + nums[right] < target): # if nums[left] + nums[right] is less than target
                count += right-left # update the count
                left += 1 # increment the left
            else: # else
                right -= 1 # decrement the right
        return count # return the count
```
```c []
int countPairs(int* nums, int numsSize, int target){
    qsort(nums, numsSize, sizeof(int), cmp); // sort the vector nums
    int count = 0; // variable to store the count
    int left = 0; // variable to store the left
    int right = numsSize-1; // variable to store the right
    while(left < right){ // loop until left is less than right
        if(nums[left] + nums[right] < target){ // if nums[left] + nums[right] is less than target
            count += right-left; // update the count
            left++; // increment the left
        }
        else{ // else
            right--; // decrement the right
        }
    }
    return count; // return the count
}
int cmp(const void* a, const void* b){ // function to compare the elements
    return *(int*)a - *(int*)b; // return the difference
}

```
```c# []
public class Solution {
    public int CountPairs(IList<int> nums, int target) {
        nums = nums.OrderBy(x => x).ToList(); // sort the vector nums
        int count = 0; // variable to store the count
        int left = 0; // variable to store the left
        int right = nums.Count-1; // variable to store the right
        while(left < right){ // loop until left is less than right
            if(nums[left] + nums[right] < target){ // if nums[left] + nums[right] is less than target
                count += right-left; // update the count
                left++; // increment the left
            }
            else{ // else
                right--; // decrement the right
            }
        }
        return count; // return the count
    }
}
```
```javascript []
var countPairs = function(nums, target) {
    nums.sort((a, b) => a-b); // sort the vector nums
    let count = 0; // variable to store the count
    let left = 0; // variable to store the left
    let right = nums.length-1; // variable to store the right
    while(left < right){ // loop until left is less than right
        if(nums[left] + nums[right] < target){ // if nums[left] + nums[right] is less than target
            count += right-left; // update the count
            left++; // increment the left
        }
        else{ // else
            right--; // decrement the right
        }
    }
    return count; // return the count
};
```
```swift []
class Solution {
    func countPairs(_ nums: [Int], _ target: Int) -> Int {
        var nums = nums.sorted() // sort the vector nums
        var count = 0 // variable to store the count
        var left = 0 // variable to store the left
        var right = nums.count-1 // variable to store the right
        while(left < right){ // loop until left is less than right
            if(nums[left] + nums[right] < target){ // if nums[left] + nums[right] is less than target
                count += right-left // update the count
                left += 1 // increment the left
            }
            else{ // else
                right -= 1 // decrement the right
            }
        }
        return count // return the count
    }
}
```
```Dart []
class Solution {
  int countPairs(List<int> nums, int target) {
    nums.sort(); // sort the vector nums
    int count = 0; // variable to store the count
    int left = 0; // variable to store the left
    int right = nums.length-1; // variable to store the right
    while(left < right){ // loop until left is less than right
        if(nums[left] + nums[right] < target){ // if nums[left] + nums[right] is less than target
            count += right-left; // update the count
            left++; // increment the left
        }
        else{ // else
            right--; // decrement the right
        }
    }
    return count; // return the count
  }
}
```
