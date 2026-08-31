# Simple, beginner Friendly & Dry Run || Two pointer & Loops || Time O(m + n) Space O(1) || Gits✅✅👈👈

**Author:** GiteshSK_12
**Votes:** 599
**Link:** [https://leetcode.com/problems/merge-sorted-array/solutions/4722196/](https://leetcode.com/problems/merge-sorted-array/solutions/4722196/)

---

![Screenshot 2024-02-13 212932.png](./images/0.png)

# Intuition \uD83D\uDC48
In the question, it is given that there are two arrays, `nums1` and `nums2`, along with two numbers, `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively. We have to merge both arrays.

# Approach \uD83D\uDC48

Note -> `nums1` and `nums2` are merged into a single array sorted in non-decreasing order. In the question, it's given that the arrays are sorted. To solve this question, we will first place the greater elements at the end of `nums1`, which is an efficient approach since it ensures the larger elements automatically occupy the last indices. However, we need to handle base cases; for example, if `m = 0` and `n = 3`, to manage such scenarios, we will simply copy the values of `nums2` into `nums1`.

# Code Explanation \uD83D\uDC48

*   **Early return if `nums2` is empty**: The condition `if(n == 0)return;` checks if `nums2` is empty (`n == 0`). If it is, there's nothing to merge, so the function returns immediately.
    
*   **Setup for merging**: It initializes `end_idx` to the last index of `nums1` (`len1 - 1`), which is where the highest element of the merged array will be placed.
    
*   **Merging from the end**: The code uses a `while` loop to compare elements from the end of `nums1` and `nums2`, placing the larger of the two in the current `end_idx` position of `nums1`. This process continues until either all elements from `nums1` (`m` elements) have been processed or all elements from `nums2` (`n` elements) have been placed into `nums1`. This ensures that if `nums1` has larger elements at the end, they are moved to their correct position in the merged array, making space for `nums2`'s elements.
    
    *   If `nums2[n-1] >= nums1[m-1]`, it places `nums2[n-1]` at `nums1[end_idx]`, and decrements `n` and `end_idx`.
    *   Otherwise, it moves `nums1[m-1]` to `nums1[end_idx]`, and decrements `m` and `end_idx`.
*   **Handling remaining elements in `nums2`**: After the first loop, if there are still elements left in `nums2` (`n > 0`), it means all elements in `nums1` that were part of the original array (`m` elements) have been merged, and the remaining elements in `nums2` should be copied over. This is handled by the second `while` loop, which continues placing elements from `nums2` into `nums1` until `nums2` is empty.
    
*   **Result**: At the end of the process, `nums1` contains the merged sorted elements of both `nums1` and `nums2`. The algorithm efficiently utilizes the empty space at the end of `nums1` and merges the arrays from the end, which allows it to work in-place without needing additional space for the result.

# Complexity \uD83D\uDC48
- Time complexity: O(m + n)

- Space complexity: O(1)

# Code \uD83D\uDC48
```C []
void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
    if(n == 0)return;
    int len1 = nums1Size;
    int end_idx = len1-1;
    while(n > 0 && m > 0){
        if(nums2[n-1] >= nums1[m-1]){
        nums1[end_idx] = nums2[n-1];
        n--;
        }else{
            nums1[end_idx] = nums1[m-1];
            m--;
        }
        end_idx--;
    }
    while (n > 0) {
        nums1[end_idx] = nums2[n-1];
        n--;
        end_idx--;
    }
}
```
```C++ []
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        if(n == 0)return;
        int len1 = nums1.size();
        int end_idx = len1-1;
        while(n > 0 && m > 0){
            if(nums2[n-1] >= nums1[m-1]){
                nums1[end_idx] = nums2[n-1];
                n--;
            }else{
                nums1[end_idx] = nums1[m-1];
                m--;
            }
            end_idx--;
        }
        while (n > 0) {
            nums1[end_idx] = nums2[n-1];
            n--;
            end_idx--;
        }
    }
};
```
```Java []
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        if(n == 0)return;
        int len1 = nums1.length;
        int end_idx = len1-1;
        while(n > 0 && m > 0){
            if(nums2[n-1] >= nums1[m-1]){
                nums1[end_idx] = nums2[n-1];
                n--;
            }else{
                nums1[end_idx] = nums1[m-1];
                m--;
            }
            end_idx--;
        }
        while (n > 0) {
            nums1[end_idx] = nums2[n-1];
            n--;
            end_idx--;
        }
    }
}
```
```javascript []
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n === 0)return;
        let len1 = nums1.length;
        let end_idx = len1-1;
        while(n > 0 && m > 0){
            if(nums2[n-1] >= nums1[m-1]){
                nums1[end_idx] = nums2[n-1];
                n--;
            }else{
                nums1[end_idx] = nums1[m-1];
                m--;
            }
            end_idx--;
        }
        while (n > 0) {
            nums1[end_idx] = nums2[n-1];
            n--;
            end_idx--;
        }
};
```
```C# []
public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        if(n == 0)return;
        int len1 = nums1.Length;
        int end_idx = len1-1;
        while(n > 0 && m > 0){
            if(nums2[n-1] >= nums1[m-1]){
                nums1[end_idx] = nums2[n-1];
                n--;
            }else{
                nums1[end_idx] = nums1[m-1];
                m--;
            }
            end_idx--;
        }
        while (n > 0) {
            nums1[end_idx] = nums2[n-1];
            n--;
            end_idx--;
        }
    }
}
```
```Python []
class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        if n == 0 :return
        len1 = len(nums1)
        end_idx = len1-1
        while n > 0 and m > 0 :
            if nums2[n-1] >= nums1[m-1]:
                nums1[end_idx] = nums2[n-1]
                n-=1
            else:
                nums1[end_idx] = nums1[m-1]
                m-=1
            end_idx-=1
        while n > 0:
            nums1[end_idx] = nums2[n-1]
            n-=1
            end_idx-=1
```
```Python3 []
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        if n == 0 :return
        len1 = len(nums1)
        end_idx = len1-1
        while n > 0 and m > 0 :
            if nums2[n-1] >= nums1[m-1]:
                nums1[end_idx] = nums2[n-1]
                n-=1
            else:
                nums1[end_idx] = nums1[m-1]
                m-=1
            end_idx-=1
        while n > 0:
            nums1[end_idx] = nums2[n-1]
            n-=1
            end_idx-=1
```
```ruby []
# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
    return if n == 0
    len1 = nums1.length
    end_idx = len1-1
    while n > 0 && m > 0
        if nums2[n-1] >= nums1[m-1]
            nums1[end_idx] = nums2[n-1]
            n-=1
        else
            nums1[end_idx] = nums1[m-1]
            m-=1
        end
        end_idx-=1
    end
    while n > 0
        nums1[end_idx] = nums2[n-1]
        n-=1
        end_idx-=1
    end
end
```
# Dry Run \uD83D\uDC48

### Initial Setup:

*   `nums1` is `[1,2,3,0,0,0]`. It has `m = 3` elements `[1,2,3]` and 3 spaces `[0,0,0]` for merging.
*   `nums2` is `[2,5,6]` with `n = 3` elements.

### Start of the First `while` Loop:

*   `end_idx` is initially set to `5` (the last index of `nums1`).

#### Iteration 1:

*   Compare `nums2[n-1] = 6` with `nums1[m-1] = 3`.
*   `nums2[n-1]` is greater, so `nums1[end_idx] = 6`.
*   Update `nums1` to `[1,2,3,0,0,6]`.
*   Decrement `n` to `2` and `end_idx` to `4`.

#### Iteration 2:

*   Compare `nums2[n-1] = 5` with `nums1[m-1] = 3`.
*   `nums2[n-1]` is greater, so `nums1[end_idx] = 5`.
*   Update `nums1` to `[1,2,3,0,5,6]`.
*   Decrement `n` to `1` and `end_idx` to `3`.

#### Iteration 3:

*   Compare `nums2[n-1] = 2` with `nums1[m-1] = 3`.
*   `nums1[m-1]` is greater, so `nums1[end_idx] = 3`.
*   Update `nums1` to `[1,2,3,3,5,6]`.
*   Decrement `m` to `2` and `end_idx` to `2`.

#### Iteration 4:

*   Compare `nums2[n-1] = 2` with `nums1[m-1] = 2`.
*   Both are equal, but following the code logic, place `nums2[n-1]`.
*   Update `nums1` to `[1,2,2,3,5,6]`.
*   Decrement `n` to `0` and `end_idx` to `1`.

### Start of the Second `while` Loop:

*   At this point, `n` is `0`, so this loop doesn't execute.

### Final State:

*   The `nums1` array is fully merged and sorted: `[1,2,2,3,5,6]`.
*   The `m` and `n` counters indicate how many elements from the original `nums1` and `nums2` were merged. At the end of the process, `m` should be considered, but it's not relevant since we've completed the merge. `n` is `0` because we've inserted all elements from `nums2`.

This dry run shows step by step how the provided code merges the two arrays into one sorted array, ending with the final merged array of `[1,2,2,3,5,6]`.

# Hey Guys if the expalnation and the solution is helpfull then upvote me please.\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F
![Screenshot 2024-02-08 140339.png](./images/1.png)
