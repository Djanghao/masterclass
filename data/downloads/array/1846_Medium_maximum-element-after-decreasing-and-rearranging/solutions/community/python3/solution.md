# 【Video】Give me 5 minutes - How we think about a solution

**Author:** niits
**Votes:** 46
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4290299/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4290299/)

---

# Intuition
Sort input array at first.

---

# Solution Video

https://youtu.be/1XhaQo-cDVg

\u25A0 Timeline of the video

`0:04` Explain a key point of the question
`0:19` Important condition
`0:56` Demonstrate how it works
`3:08` What if we have a lot of the same numbers in input array?
`4:10` Coding
`4:55` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,110
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

**My channel reached 3,000 subscribers these days. Thank you so much for your support!**

---

# Approach

## How we think about a solution

We have 2 types of operations.

**Decrease**
the value of any element of arr to a smaller positive integer.

**Rearrange**
the elements of arr to be in any order.

Since we cannot increase input numbers, it's good idea to sort with ascending order to handle numbers from small to large.

---

\u2B50\uFE0F Points

Sort input array to handle numbers from small to large

---

The description says "The absolute difference between any 2 adjacent elements must be less than or equal to 1. In other words, `abs(arr[i] - arr[i - 1]) <= 1`".

But we don't have to care about relation betweeen 2 adjacenet numbers too much because we can decrease any input numbers to smaller positive integer. 

All we have to do is just to find larger number than current number we need.

Let's see a concrete example.

```
Input: arr = [100,3,5,5,1000]
```
First of all, we sort input array.
```
[3,5,5,100,1000]
```

We consider the first number(= 3) as 1, because we can decrease the numbers to smaller positive numbers and 1 is minimum possible number, so we can expand possibility to get large max value as a result. Let's say `max_val`.

Iterate through input numbers one by one.
```
index: 0

real: [3,5,5,100,1000]
virtual: [1,5,5,100,1000]

max_val = 1

\u203B We don't need to create virtual array in the solution code.
This is just for visualization.
```
At index 1, what number do we need? it's `2`, because we consider index 0(= 3) as `1`, so
```
abs(arr[i] - arr[i - 1]) <= 1
if case 2, abs(2 - 1) <= 1 \u2192 true
if case 3, abs(3 - 1) <= 1 \u2192 false
``` 
At index 1, since we can decrease any large number to smaller positive number. we consider `5` as `2`. 

If current number(= 5) is larger than current `max_val`(= 1), we can decrease `5` to `2`.

So formula is very simple.
```
if arr[i] > max_val:
    max_val += 1
```
So
```
if arr[i] > max_val:
if 5 > 1 \u2192 true
```
```
index: 1

real: [3,5,5,100,1000]
virtual: [1,2,5,100,1000]

max_val = 2
```

I'll speed up. At index 2, we need `3`, because current `max_val` is `2`. so
```
if arr[i] > max_val:
if 5 > 2 \u2192 true
```
```
index: 2

real: [3,5,5,100,1000]
virtual: [1,2,3,100,1000]

max_val = 3
```
At index 3, we need `4`, so
```
if arr[i] > max_val:
if 100 > 3 \u2192 true
```
```
index: 3

real: [3,5,5,100,1000]
virtual: [1,2,3,4,1000]

max_val = 4
```
At index 4, we need `5`, so
```
if arr[i] > max_val:
if 1000 > 4 \u2192 true
```
```
index: 4

real: [3,5,5,100,1000]
virtual: [1,2,3,4,5]

max_val = 5
```
This `max_val` should be the maximum possible value of an element in input array after performing operations.
```
Output: 5
```

### What if we have a lot of the same number in input array?

Let's think about this quickly

```
Input: arr = [1,2,2,2,2]
```
```
index 0

real: [1,2,2,2,2]
virtual: [1,2,2,2,2]

max_val = 1
```
At index 1, we need 2
```
index 1

real: [1,2,2,2,2]
virtual: [1,2,2,2,2]

max_val = 2
```
At index 2 we need 3, but the number at index 2 is smaller than the number we need, so skip.
```
index 2

real: [1,2,2,2,2]
virtual: [1,2,2,2,2]

max_val = 2
```
At index 3 and 4, it's the same as index 2.
```
index 3, index 4

real: [1,2,2,2,2]
virtual: [1,2,2,2,2]

max_val = 2
```
```
Output: 2
```

Easy!\uD83D\uDE04
Let's see a real algorithm!

---


### Algorithm Overview:

1. Sort the Array
2. Iterate Through the Sorted Array
3. Update Maximum Value

### Detailed Explanation

1. **Sort the Array**:
   ```python
   arr.sort()
   ```
   - The array `arr` is sorted in ascending order using the `sort()` method.

2. **Iterate Through the Sorted Array**:
   ```python
   for i in range(1, len(arr)):
   ```
   - A `for` loop is used to iterate through the array, starting from index 1.

3. **Update Maximum Value**:
   ```python
   if arr[i] > max_val:
       max_val += 1
   ```
   - For each element in the sorted array, if it is greater than the current `max_val`, then `max_val` is incremented by 1.

4. **Return Maximum Value**:
   ```python
   return max_val
   ```
   - The final maximum value is returned as the result.

In summary, this algorithm ensures that after sorting the array, each element is compared with the current maximum value, and if it is greater, the maximum value is updated. The final maximum value is then returned.

# Complexity
- Time complexity: $$O(n log n)$$

- Space complexity: $$O(log n)$$ or $$O(n)$$, depends on language you use.


```python []
class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        arr.sort()
        max_val = 1

        for i in range(1, len(arr)):
            if arr[i] > max_val:
                max_val += 1

        return max_val
```
```javascript []
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a, b) => a - b);
    let maxVal = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal += 1;
        }
    }

    return maxVal;    
};
```
```java []
class Solution {
    public int maximumElementAfterDecrementingAndRearranging(int[] arr) {
        Arrays.sort(arr);
        int maxVal = 1;

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > maxVal) {
                maxVal += 1;
            }
        }

        return maxVal;        
    }
}
```
```C++ []
class Solution {
public:
    int maximumElementAfterDecrementingAndRearranging(vector<int>& arr) {
        sort(arr.begin(), arr.end());
        int maxVal = 1;

        for (int i = 1; i < arr.size(); i++) {
            if (arr[i] > maxVal) {
                maxVal += 1;
            }
        }

        return maxVal;        
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
https://leetcode.com/problems/find-unique-binary-string/solutions/4293749/video-give-me-7-minutes-how-we-think-about-a-solution/

video
https://youtu.be/tJ_Eu2S4334

\u25A0 Timeline of the video

`0:04` Explain a key point of the question
`1:39` Why you need to iterate through input array with len(nums) + 1?
`2:25` Coding
`3:56` Explain part of my solution code.
`3:08` What if we have a lot of the same numbers in input array?
`6:11` Time Complexity and Space Complexity

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285239/video-give-me-8-minutes-how-we-think-about-a-solution/

video
https://youtu.be/Tencj59MHAc

\u25A0 Timeline of the video

`0:00` Read the question of Unique Length-3 Palindromic Subsequences
`1:03` Explain a basic idea to solve Unique Length-3 Palindromic Subsequences
`4:48` Coding
`8:01` Summarize the algorithm of Unique Length-3 Palindromic Subsequences

