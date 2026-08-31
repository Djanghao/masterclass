# 【Video】Give me 15 minutes - How we think about a solution

**Author:** niits
**Votes:** 92
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4152964/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4152964/)

---

Welcome to my post! This post starts with "How we think about a solution". In other words, that is my thought process to solve the question. This post explains how I get to my solution instead of just posting solution codes or out of blue algorithms. I hope it is helpful for someone.

# Intuition
Sorting input array.

---

# Solution Video

https://youtu.be/9DLAvMurzbU

\u25A0 Timeline of the video
`0:00` Read the question of Minimum Number of Operations to Make Array Continuous
`0:42` How we think about a solution
`4:33` Demonstrate solution with an example
`8:10` Why the window has all valid numbers?
`8:36` We don't have to reset the right pointer to 0 or something
`10:36` Why we need to start window from each number?
`12:24` What if we have duplicate numbers in input array?
`14:50` Coding
`17:11` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 2,643
My initial goal is 10,000
Thank you for your support!

---


# Approach

### How we think about a solution
We have two constraints.


---
- All elements in nums are unique.
- The difference between the maximum element and the minimum element in nums equals nums.length - 1.
---

For example, `nums = [1,2,3,4,5]` need `0` opearation because 

```
minimum number is 1
maximum number is 5 \u2192 1 + len(nums) - 1(= 4) 
```
How about `nums = [4,1,3,2,5]`? we need `0` operation because The array `[4,1,3,2,5]` is simply a shuffled version of `[1,2,3,4,5]`. But shuffuled version makes us feel more diffucult and seems hard to solve the question.

That's why it's good idea to sort input array first then try to solve the question. Because we know that we create an array and value range should be `len(nums) - 1`. Seems sorting make the question easy.

---

\u2B50\uFE0F Points

Sort input array at first.

---


Let's think about this input
```
Input: [1,2,3,5]
```
In this case, it's easy.
```
[1,2,3] is good, becuase they are in range 1 to 4.
[5] should be changed to 4

Calculation is 4 - 3 = 1
4: length of nums
3: length of [1,2,3]

Output: 1 (operation)
```
How about this.
```
Input: [1,2,3,5,6]

Calculation is 5 - 3 = 2
5: length of nums
3: length of [1,2,3]

Output: 2 (operations)

```
##### This is a wrong answer.

That's because if we change `1` to `4` or `6` to `4`, we can create `[2,3,4,5,6]` or `[1,2,3,4,5]`, so just one operation instead of two operations.

From those examples, problem is we don't know which numbers we should keep and which number we should change.

---

\u2B50\uFE0F Points

So, we're determining the length of a subarray where all numbers are valid. The starting point of subarray should be each respective number.

Since we check length of valid subarray, seems like we can use `sliding window` technique.

---

### How it works

Let's see how it works. Initialize a left pointer and a right pointer with `0`.
```
Input: nums = [1,2,3,5,6]

left = 0
right = 0
operations = 5 (= len(nums))
```
Every time we check like this.
```
nums[right] < nums[left] + length
```
Becuase `left pointer` is current starting point of window and valid numbers for current staring point should be `nums[left] + length - 1`.

If the condition is `true`, increament `right pointer` by `1`.

```
Input: nums = [1,2,3,5,6]

valid number is from 1 to 5.
left = 0
right = 4 (until index 3, they are valid)
operations = 5 (= len(nums)), we don't calcuate yet.
```
Now `right pointer` is index `4` and we don't meet 
```
nums[right] < nums[left] + length
= 6 < 1 + 5
```
Then, it's time to compare mininum operations. Condition should be
```
 min_operations = min(min_operations, length - (right - left))
```
`right - left` is valid part, so if we subtract it from whole length of input array, we can get invalid part which is places where we should change. 


---

\u2B50\uFE0F Points

That's because we sorted input array at first, so when we find invalid number which means later numbers are also invalid. we are sure that they are out of valid range.

---


```
min(min_operations, length - (right - left))
= min(5, 5 - 4)
= 1 
```
We repeated this process from each index.

But one more important thing is 

---

\u2B50\uFE0F Points

We can continue to use current right pointer position when we change staring position. we don't have to reset right pointer to 0 or something. Because previous starting point number is definitely smaller than current number.

[1,2,3,5,6]

Let's say current starting point is at index 1(2). In this case, index 0(1) is smaller than index 1(2) because we sorted the input array.

When we start from index 0, we reach index 4(6) and index 4 is invalid. That means we are sure that at least until index 3, we know that all numbers are valid when we start from index 1 becuase

from value 1, valid max number is 5 (1 + len(nums) - 1)
from value 2, valid max number is 6 (2 + len(nums) - 1)

In this case, 6 includes range 2 to 5 from 1 to 5.

That's why we can use current right position when starting point is changed.

---

### Why do we need to start from each number?

As I told you, problem is we don't know which numbers we should keep and which number we should change. But there is another reason.

Let's think about this case.
```
Input: [1,10,11,12]
```
When start from index `0`
```
valid: [1]
invalid: [10,11,12]

4 - 1 = 3

4: total length of input
1: valid length

we need 3 operations.
```
When start from index `1`
```
valid: [10,11,12]
invalid: [1]

4 - 3 = 1

4: total length of input
3: valid length

we need 1 operation.
```

---

\u2B50\uFE0F Points

Starting index 0 is not always minimum operation.

---

### What if we have duplicate numbers in input array?

One more important point is when we have duplicate numbers in the input array.
```
Input: [1,2,3,5,5]
```
Let's start from index 0, in this case, valid max value is 
```
1 + (5 - 1) = 5
```
We go through entire array and reach out of bounds from index 0. So output is `0`?

It's not. Do you rememeber we have two constraints and one of them says "All elements in nums are unique", so it's a wrong answer.

How can we avoid this? My idea is to remove duplicate by `Set` before interation.

```
[1,2,3,5,5]
\u2193
[1,2,3,5]
```
After removing duplicate number, valid range from index 0 should be from `1` to `4`

```
valid: [1,2,3]
invalid: [5]

operation = 4 - 3 = 1
```

If we change one of 5s to 4, we can create `[1,2,3,4,5]` from `[1,2,3,5,5]`.

---

\u2B50\uFE0F Points

Remove duplicate numbers from input array.

---

That is long thought process. I spent 2 hours to write this.
I felt like crying halfway through LOL.

Okay, now I hope you have knowledge of important points. Let's see a real algorithm!

### Algorithm Overview:

1. Calculate the length of the input array.
2. Initialize `min_operations` with the length of the array.
3. Create a sorted set of unique elements from the input array.
4. Initialize a variable `right` to 0.
5. Iterate through the sorted unique elements:
   - For each element, find the rightmost index within the range `[element, element + length]`.
   - Calculate the minimum operations needed for the current element.
6. Return the minimum operations.

### Detailed Explanation:

1. Calculate the length of the input array:
   - `length = len(nums)`

2. Initialize `min_operations` with the length of the array:
   - `min_operations = length`

3. Create a sorted set of unique elements from the input array:
   - `unique_nums = sorted(set(nums))`
   - This ensures that we have a sorted list of unique elements to work with.

4. Initialize a variable `right` to 0:
   - `right = 0`
   - This will be used to keep track of the right pointer in our traversal.

5. Iterate through the sorted unique elements:
   - `for left in range(len(unique_nums)):`

   - For each element, find the rightmost index within the range `[element, element + length]`:
     - While `right` is within bounds and the element at `right` is less than `element + length`, increment `right`.

   - Calculate the minimum operations needed for the current element:
     - Update `min_operations` as the minimum of its current value and `length - (right - left)`.

6. Return the minimum operations:
   - `return min_operations`


---



# Complexity
- Time complexity: $$O(n log n)$$

For just in case, somebody might think this is $$O(n^2)$$ because of nested loop.

Actually the left pointer and the right pointer touch each number once because the left pointer is obvious and we don't reset the right pointer with 0 or something. we continue to use the right pointer from previous loop.

So, this nested loop works like $$O(2n)$$ instead of $$O(n^2)$$. That's why time complexity of this nested loop is $$O(n)$$.

- Space complexity: $$O(n)$$


```python []
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        length = len(nums)
        min_operations = length
        unique_nums = sorted(set(nums))
        right = 0
        
        for left in range(len(unique_nums)):
            while right < len(unique_nums) and unique_nums[right] < unique_nums[left] + length:
                right += 1
            
            min_operations = min(min_operations, length - (right - left))

        return min_operations
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const length = nums.length;
    let minOperations = length;
    const uniqueNums = new Set(nums);
    const sortedUniqueNums = Array.from(uniqueNums).sort((a, b) => a - b);
    let right = 0;

    for (let left = 0; left < sortedUniqueNums.length; left++) {
        while (right < sortedUniqueNums.length && sortedUniqueNums[right] < sortedUniqueNums[left] + length) {
            right++;
        }

        minOperations = Math.min(minOperations, length - (right - left));
    }

    return minOperations;    
};
```
```java []
class Solution {
    public int minOperations(int[] nums) {
        int length = nums.length;
        int minOperations = length;
        Set<Integer> uniqueNums = new HashSet<>();
        for (int num : nums) {
            uniqueNums.add(num);
        }
        Integer[] sortedUniqueNums = uniqueNums.toArray(new Integer[uniqueNums.size()]);
        Arrays.sort(sortedUniqueNums);
        int right = 0;

        for (int left = 0; left < sortedUniqueNums.length; left++) {
            while (right < sortedUniqueNums.length && sortedUniqueNums[right] < sortedUniqueNums[left] + length) {
                right++;
            }

            minOperations = Math.min(minOperations, length - (right - left));
        }

        return minOperations;        
    }
}
```
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums) {
        int length = nums.size();
        int minOperations = length;
        sort(nums.begin(), nums.end());
        nums.erase(unique(nums.begin(), nums.end()), nums.end());
        int right = 0;

        for (int left = 0; left < nums.size(); left++) {
            while (right < nums.size() && nums[right] < nums[left] + length) {
                right++;
            }

            minOperations = min(minOperations, length - (right - left));
        }

        return minOperations;        
    }
};
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u2B50\uFE0F Next daily coding challenge post and video

Post

https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4156243/video-give-me-15-minutes-how-we-can-think-about-a-solution-python-javascript-java-c/


https://youtu.be/kiIYG6drNZo

My previous post for daily coding challenge

Post
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/4147878/video-give-me-10-minutes-how-we-think-about-a-solution-binary-search/

\u2B50\uFE0F Yesterday's daily challenge video

https://youtu.be/441pamgku74
