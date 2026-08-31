# 【Video】Return middle or left pointer

**Author:** niits
**Votes:** 284
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/5361984/](https://leetcode.com/problems/search-insert-position/solutions/5361984/)

---

# Intuition
Return middle or left pointer.

---

# Solution Video

https://youtu.be/NermHA7VkEc

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,247
Thank you for your support!

---

# Approach

The description says "Given a sorted array of distinct integers and ..." and "You must write an algorithm with $$O(log n)$$ runtime complexity".

So we should solve this question with `binary search`.


There are two cases that we should focus on. One is we have the target in the array and the other is we don't have the target in the array.

```
Input: nums = [1,3,5,6], target = 5
```
First of all, let's see we have the target in the array. Actually this is just typical binary search.


---


\u2B50\uFE0F Points
```
middle pointer = (left index + right index) // 2
```

---

```
[1,3,5,6]
 L M   R  
```
Now middle number(= `M`) is less than the `target`(= 5), so move left pointer(= `L`) to `M + 1`.

```
[1,3,5,6]
     L R
     M
```
Now middle pointer is at index `2`. middle number is equal to the target.

```
return 2 (= middle index)
```

That is typical case.

---


Let's look at the case where the target number is not present.

```
Input: nums = [1,3,5,6], target = 2
```

```
[1,3,5,6]
 L M   R
```
Now middle number is greater than the target, so move `R` to `M - 1`.
```
[1,3,5,6]
 L
 R
 M
```
Now middle number is less than the target, so move `L` to `M + 1`.
```
[1,3,5,6]
 R L
```
Now `L` is greater than `R`. We stop binary search. As a result, we don't find the target.

The description says "return the index where it would be if it were inserted in order."

In this case, we should insert the target into index `1`. As you see, `L` is now at index `1`, so

```
return 1 (= left index)
```

---

\u2B50\uFE0F Points

Return left index if you don't find the target.

---

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm!


---

https://youtu.be/bU_dXCOWHls


---


# Complexity
- Time complexity: $$O(log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

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

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;    
};
```
```java []
class Solution {
    public int searchInsert(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;        
    }
}
```
```C++ []
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size() - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;        
    }
};
```

# Step by Step Algorithm

#### Initialize Left and Right Pointers
```python
left = 0
right = len(nums) - 1
```
- **Explanation**: We initialize two pointers, `left` and `right`. `left` starts at the beginning of the list (`0`), and `right` starts at the end of the list (`len(nums) - 1`). These pointers help in performing the binary search.

#### Binary Search Loop
```python
while left <= right:
```
- **Explanation**: This `while` loop continues as long as `left` is less than or equal to `right`. The condition ensures that we are still considering a valid portion of the list to search.

#### Calculate Midpoint
```python
mid = (left + right) // 2
```
- **Explanation**: Calculate the middle index `mid` of the current range defined by `left` and `right`. The `//` operator performs integer division.

#### Check if Midpoint is Target
```python
if nums[mid] == target:
    return mid
```
- **Explanation**: If the element at the midpoint (`nums[mid]`) is equal to the `target`, we have found the target, and we return the index `mid`.

#### Adjust Right Pointer
```python
elif nums[mid] > target:
    right = mid - 1
```
- **Explanation**: If the element at the midpoint (`nums[mid]`) is greater than the `target`, it means the target must be in the left half of the current range. We adjust the `right` pointer to `mid - 1` to narrow the search to the left half.

#### Adjust Left Pointer
```python
else:
    left = mid + 1
```
- **Explanation**: If the element at the midpoint (`nums[mid]`) is less than the `target`, it means the target must be in the right half of the current range. We adjust the `left` pointer to `mid + 1` to narrow the search to the right half.

#### Return Insertion Point
```python
return left
```
- **Explanation**: If the `target` is not found in the list, the `while` loop will terminate when `left` is greater than `right`. At this point, `left` will be the index where the `target` should be inserted to maintain the sorted order. We return `left` as the insertion point.

---

Thank you for reading my post.

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### \u2B50\uFE0F My previous video
#33 Search in Rotated Sorted Array

https://youtu.be/dO9OZJP_Hm8
