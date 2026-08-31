# 【Video】Sliding Window Solution

**Author:** niits
**Votes:** 124
**Link:** [https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/5513173/](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/5513173/)

---

# Intuition
Sorting input array and use slinding window technique.

---

# Solution Video

https://youtu.be/MbCFzt4v1uE

\u203B Since I recorded that video last year, there might be parts that could be unclear. If you have any questions, feel free to leave a comment.

\u25A0 Timeline of the video

`0:00` Read the question of Frequency of the Most Frequent Element
`1:11` Explain a basic idea to solve Frequency of the Most Frequent Element
`11:48` Coding
`14:21` Summarize the algorithm of Frequency of the Most Frequent Element

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 6,683
Thank you for your support!

---

# Approach

## How we think about a solution

Let's think about this case.

```
Input = [1,3,3,5,5] k = 4
```

I already sorted input array. Sorting is good idea because sorting makes it easier to group similar magnitudes next to each other, facilitating the creation of identical numbers.

For example, we try to make 3 three times. Let's compare sorted array and unsorted array.
```
Sorted: [1,3,3,5,5]\u2192[3,3,3,5,5]
Unsroted: [1,5,3,5,3]\u2192[3,5,3,5,3]
```
Seems like sorted array is easier to find numbers we should increase. In addition to that, there is no order constraints for this question.

To check adjacent numbers after sorting the input array, we use sliding window technique.

**Basically, we are trying to make all the numbers same in the window.**

We are allowed to increase numbers `k` times. when we try to make all numbers same in the window, simply 

---

\u2B50\uFE0F Points

```
current number * range of window > current window total + k
```

If we meet the condition, we need to shorten window size, because we cannot change all numbers in window to the same number.

For example, 
```
input = [1,3,3,5,5], k = 1
```
Let's say we are now at `index 1` and try to make two `3` from `index 0` to `index 1`.

In that case, we need `6` to make all numbers `3`.(= `3`(current number) * `2`(range of window)), but current window total is `4`(= `1` + `3`). we perform `1` time, so we can deal with up to `5`.

One time short. That's why we need to shorten window size.

- What if `k = 2`?

With the formula, `6` > `6`. it's false. In that case, we can expand window size, because if we add `2` to `index 0`, we can create `[3,3,3,5,5]`.

In other words, we can consider window size as maximum possible frequency of an element.

---

Let's see one by one.

We use two pointers `left` and `right` starging from index `0`.
```
[1,3,3,5,5] k = 4
 L
 R

window total = 1 (= between left and right)
```
Now window total is `1`. Let's decide window size with the formula.

```
current number * range of window > current window total + k

current number: 1(= right number)
range of window: 0(= right) - 0(= left) + 1
current window total: 1
k: 4

1 * 1 > 1 + 4
1 > 5
\u2192 false

```
`1 * 1` means total number in the window if we make all numbers same.
`1 + 4` means maximum number after we perform increament.

It's false, just compare current window size with current maximum window size and take a large size. 

```
max(res, right - left + 1)
=  0 vs 1

res = 1
```
Let's move next.
```
[1,3,3,5,5] k = 4
 L R
 
window total = 4 (= between left and right)
res = 1 (= max window size = maximum possible frequency of an element)
```
Decide window size with the formula

```
current number * range of window > current window total + k
= 3 * 2 > 4 + 4
\u2192 false

6 is total number in window if we make all numbers 3 in window.
We can deal with up to 8.

We can expand the window size

res = 2 (1(= res) vs 1(= right) - 0(= left) + 1)
```
Let's move next.
```
[1,3,3,5,5] k = 4
 L   R
 
window total = 7
res = 2
```
Decide window size with the formula
```
current number * range of window > current window total + k
= 3 * 3 > 7 + 4
\u2192 false

We can expand the window size

res = 3 (= 2 vs 2 - 0 + 1)
```

Let's move next.
```
[1,3,3,5,5] k = 4
 L     R
 
window total = 12
res = 3
```
Decide window size with the formula
```
current number * range of window > current window total + k
= 5 * 4 > 12 + 4
\u2192 true

We cannot make all numbers 5 in the window.
We will shorten window size
```
Move `left` pointer to next and subtract current left number(= 1) from window total, because it will be out of bounds from the window.
```
[1,3,3,5,5] k = 4
   L   R
 
window total = 11
res = 3
```
Decide window size with the formula again.
```
current number * range of window > current window total + k
= 5 * 3 > 11 + 4
\u2192 false

We can make all numbers 5 in the window.

Calculate window size
res = 3 (= 3 vs 3 - 1 + 1)
```
Let's move next.
```
[1,3,3,5,5] k = 4
   L     R
 
window total = 16
res = 3
```
Decide window size with the formula
```
current number * range of window > current window total + k
= 5 * 4 > 16 + 4
\u2192 false

We can expand the window size

res = 4 (= 3 vs 4 - 1 + 1)
```
Then finish iteration.
```
Output: 4
```
Let's check.
```
[1,3,3,5,5] k = 4
   L     R

Add 2 to index 1.
[1,5,3,5,5] k = 2
   L     R

Add 2 to index 2.
[1,5,5,5,5] k = 0
   L     R
```
We can create four 5 in the window.

Let's see a real algorithm!


---



### Algorithm Overview

The algorithm aims to find the maximum frequency of an element that can be obtained by performing at most `k` operations on the array.

### Detailed Explanation

1. **Sort the input array:**
    - **Code:**
        ```python
        nums.sort()
        ```
    - **Explanation:**
        Sorts the input array in ascending order. Sorting is essential for grouping similar magnitudes together, facilitating subsequent operations.

2. **Initialize variables:**
    - **Code:**
        ```python
        left = right = res = total = 0
        ```
    - **Explanation:**
        Initializes variables to keep track of the current window (`left` and `right` pointers), the maximum frequency (`res`), and the total sum (`total`) within the window.

3. **Sliding Window Approach:**
    - **Code:**
        ```python
        while right < len(nums):
            total += nums[right]

            while nums[right] * (right - left + 1) > total + k:
                total -= nums[left]
                left += 1
            
            res = max(res, right - left + 1)
            right += 1
        ```
    - **Explanation:**
        - The outer loop (`while right < len(nums)`) iterates through the array, expanding the window to the right.
        - The inner loop (`while nums[right] * (right - left + 1) > total + k`) contracts the window from the left if the current window violates the condition specified by `k`.
        - Updates the maximum frequency (`res`) with the size of the current window.
        - Moves the right pointer to expand the window.

4. **Return the result:**
    - **Code:**
        ```python
        return res
        ```
    - **Explanation:**
        Returns the maximum frequency obtained after performing at most `k` operations.

# Complexity
- Time complexity: $$O(n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(log n)$$ or $$O(n)$$
Depends on language you use. Sorting need some extra space.

```python []
class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        
        nums.sort()
        left = right = res = total = 0

        while right < len(nums):
            total += nums[right]

            while nums[right] * (right - left + 1) > total + k:
                total -= nums[left]
                left += 1
            
            res = max(res, right - left + 1)
            right += 1
        
        return res
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0, right = 0, res = 0, total = 0;

    while (right < nums.length) {
        total += nums[right];

        while (nums[right] * (right - left + 1) > total + k) {
            total -= nums[left];
            left += 1;
        }

        res = Math.max(res, right - left + 1);
        right += 1;
    }

    return res;    
};
```
```java []
class Solution {
    public int maxFrequency(int[] nums, int k) {
        Arrays.sort(nums);
        int left = 0, right = 0;
        long res = 0, total = 0;

        while (right < nums.length) {
            total += nums[right];

            while (nums[right] * (right - left + 1L) > total + k) {
                total -= nums[left];
                left += 1;
            }

            res = Math.max(res, right - left + 1L);
            right += 1;
        }

        return (int) res;        
    }
}
```
```C++ []
class Solution {
public:
    int maxFrequency(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        int left = 0, right = 0;
        long res = 0, total = 0;

        while (right < nums.size()) {
            total += nums[right];

            while (nums[right] * static_cast<long>(right - left + 1) > total + k) {
                total -= nums[left];
                left += 1;
            }

            res = max(res, static_cast<long>(right - left + 1));
            right += 1;
        }

        return static_cast<int>(res);        
    }
};
```
---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4306758/video-give-me-9-minutes-how-we-think-about-a-solution/

video
https://youtu.be/Tf69tOpE4GE

\u25A0 Timeline of the video

`0:05` Try to find a solution pattern
`1:44` What if we have the same numbers in input array?
`5:37` Why it works when we skip reduction
`7:22` Coding
`8:52` Time Complexity and Space Complexity

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4297828/video-give-me-u-minutes-how-we-think-about-a-solution/

video
https://youtu.be/DzzjWJdhNhI

\u25A0 Timeline of the video

`0:04` Explain how we can solve Minimize Maximum Pair Sum in Array
`2:21` Check with other pair combinations
`4:12` Let's see another example!
`5:37` Find Common process of the two examples
`6:45` Coding
`7:55` Time Complexity and Space Complexity