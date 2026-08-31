# 【Video】Binary Search Solution

**Author:** niits
**Votes:** 272
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/5378191/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/5378191/)

---

# Intuition
Using Binary Search twice for left most value and right most value

---

# Solution Video

https://youtu.be/441pamgku74

\u25A0 Timeline of the video
`0:00` Read the question of Find First and Last Position of Element in Sorted Array
`1:16` Demonstrate solution with an example
`6:59` Coding
`9:56` Time Complexity and Space Complexity
`10:14` Step by step algorithm

I created the video in 2022. I write my thought process in the post to support the video. You can understand the question visually with the video and behind the scene with the post.

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,213
Thank you for your support!

---

# Approach

## How we think about a solution

We have a constraint of time complexity $$O(log n)$$ and a description says "Given an array of integers `nums` sorted in non-decreasing order", so we can feel this question is solved by `binary search`.

But a challenging point of this question is that we might multiple targes in the input array, becuase we have to find the starting and ending position of a given target value.


---

\u2B50\uFE0F Points

We might have multiple targets in the input array.

---

The start position and end position can be rephrased as the leftmost index and the rightmost index.

So, for the most part, we use typical binary search, but when we find a target, we need to do these.

---

\u2B50\uFE0F Points

Every time we find one of targets, `keep current index` and execute one of these

- If we try to find left most index, move `right pointer` to `middle pointer - 1`.
- If we try to find right most index, move `left pointer` to `middle pointer + 1`.


Because we need to find a target again between `left and middle pointer` or `right and middle pointer`. If we don't find the new target in the new range, don't worry. The current index you have right now is the most left index or right index.

---

- How we can find the most left index and right index at the same time?

I think it's hard to find the most left index and right index at the same time, so simply we execute binary search twice for the most left index and right index, so that we can focus on one of them.

Let's see a real algorithm!


### Algorithm Overview:

1. Define a class `Solution`.
2. Implement a method `searchRange` that takes a sorted list of integers `nums` and a target integer `target`. This method finds the range of the target value in the input list.

### Detailed Explanation:
1. Define a class named `Solution`.
2. Implement a method `searchRange` within the `Solution` class that takes three parameters: `nums` (a sorted list of integers), `target` (an integer to search for), and `is_searching_left` (a boolean indicating whether to search for the leftmost or rightmost occurrence of the target).

   a. Define a helper method `binary_search` that takes `nums`, `target`, and `is_searching_left` as arguments. This method performs binary search to find the target value and returns the index of either the leftmost or rightmost occurrence of the target value based on the `is_searching_left` parameter.

   b. Initialize `left` to 0, `right` to the length of `nums` minus 1, and `idx` to -1.

   c. Perform a binary search within the `nums` array using a while loop until `left` is less than or equal to `right`.

   d. Calculate the midpoint as `(left + right) // 2`.

   e. Compare the target value with the element at the midpoint of the array (`nums[mid]`):
      - If `nums[mid]` is greater than the target, update `right` to `mid - 1`.
      - If `nums[mid]` is less than the target, update `left` to `mid + 1`.
      - If `nums[mid]` is equal to the target, update `idx` to `mid` and adjust `left` or `right` accordingly based on `is_searching_left`.

   f. Return the index `idx`.

3. Call `binary_search` twice within the `searchRange` method: once to find the leftmost occurrence of the target (`left = binary_search(nums, target, True)`) and once to find the rightmost occurrence of the target (`right = binary_search(nums, target, False)`).

4. Return a list containing the leftmost and rightmost indices of the target: `[left, right]`.

This algorithm uses binary search to efficiently find the leftmost and rightmost occurrences of the target in the sorted array.

# Complexity
- Time complexity: $$O(log n)$$
The time complexity of the binary search algorithm is $$O(log n)$$ where n is the length of the input array nums. The searchRange method calls binary_search twice, so the overall time complexity remains $$O(log n)$$.

- Space complexity: $$O(1)$$
The space complexity is $$O(1)$$ because the algorithm uses a constant amount of extra space, regardless of the size of the input array. There are no data structures or recursive calls that consume additional space proportional to the input size.

```python []
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        
        def binary_search(nums, target, is_searching_left):
            left = 0
            right = len(nums) - 1
            idx = -1
            
            while left <= right:
                mid = (left + right) // 2
                
                if nums[mid] > target:
                    right = mid - 1
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    idx = mid
                    if is_searching_left:
                        right = mid - 1
                    else:
                        left = mid + 1
            
            return idx
        
        left = binary_search(nums, target, True)
        right = binary_search(nums, target, False)
        
        return [left, right]
            
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const binarySearch = (nums, target, isSearchingLeft) => {
        let left = 0;
        let right = nums.length - 1;
        let idx = -1;
      
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                idx = mid;
                if (isSearchingLeft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
      
        return idx;
    };
    
    const left = binarySearch(nums, target, true);
    const right = binarySearch(nums, target, false);
    
    return [left, right];    
};
```
```java []
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] result = {-1, -1};
        int left = binarySearch(nums, target, true);
        int right = binarySearch(nums, target, false);
        result[0] = left;
        result[1] = right;
        return result;        
    }

    private int binarySearch(int[] nums, int target, boolean isSearchingLeft) {
        int left = 0;
        int right = nums.length - 1;
        int idx = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                idx = mid;
                if (isSearchingLeft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }

        return idx;
    }

}
```
```C++ []
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        vector<int> result = {-1, -1};
        int left = binarySearch(nums, target, true);
        int right = binarySearch(nums, target, false);
        result[0] = left;
        result[1] = right;
        return result;        
    }

    int binarySearch(vector<int>& nums, int target, bool isSearchingLeft) {
        int left = 0;
        int right = nums.size() - 1;
        int idx = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                idx = mid;
                if (isSearchingLeft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        
        return idx;
    }    
};
```


---

Thank you for reading my post.
Please upvote it and don't forget to subscribe to my channel!

# \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

# \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

# \u2B50\uFE0F My previous post and video
#121 Best Time to Buy and Sell Stock

post
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/4944048/video-keep-minimum-price-solution/

video
https://youtu.be/NG4ZDYD4a2o
