# 【Video】Give me 10 minutes - How we think about a solution - Python, JavaScript, Java, C++

**Author:** niits
**Votes:** 46
**Link:** [https://leetcode.com/problems/find-in-mountain-array/solutions/4159293/](https://leetcode.com/problems/find-in-mountain-array/solutions/4159293/)

---

Welcome to my post! This post starts with "How we think about a solution". In other words, that is my thought process to solve the question. This post explains how I get to my solution instead of just posting solution codes or out of blue algorithms. I hope it is helpful for someone.

# Intuition
Using binary search 3 times at most

---

# Solution Video

https://youtu.be/09RZINmppQI

\u25A0 Timeline of the video
`0:04` How we think about a solution
`2:45` An important point when you find peak index
`4:47` An important point when you find peak index
`6:13` Coding
`11:45` Time Complexity and Space Complexity

\u203B From around `11:30`, Sorry, there might be some background noise. My child was rubbing a table on my lap. lol

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 2,680
My initial goal is 10,000
Thank you for your support!

---

# Approach

### How we think about a solution

From the description, input array is partially sorted from `index 0 to peak` and from `peak to the last index`.

And we know that binary search is much faster than linear search, so seems like we can use binary search to find the target number.

That's how I decided to use binary search.

But problem is the input array is partially sorted. At some point, we reach the peak and values start decreasing.

\u2B50\uFE0F If you are not familiar with binary search, I have a 7 minute video for typical binary search question.

https://youtu.be/gVLvNe_SNc0


- **How can we use binary search?**

It's hard to execute binary search in whole length of the input array, because 

---


- We have to move one of two pointers according to middle value and target value. 
- Binary search assumes that all values in the array are sorted.

---


Let's change our strategy.

We know that binary search assumes that all values in the array are sorted.

So simply, we try to find the peak index first, then search target number in increasing part and decreasing part respectively, so that definitely we can execute binary search to find the target number.


---

\u2B50\uFE0F Points

Execute binary search 3 times at most.

- First, find the peak index
- Second, find the target in increasing part
- Third, find the target in decreasing part


Of course, if we find the target number in increasing part, we don't have to execute binary search in decreasing part.

We can find target number with minimum index by searching in increasing part first, because decreasing part follows increasing part in the array.

**A mininum index of decreasing part is bigger and a maximum index of increasing part.**

So, we can deal with the case where we have duplicate target numbers.

---

- **Visualization of what I say**

```
Input: [1,2,3,4,5,3,1]
```

By the first binary saearch, we will find `index 4`

Increasing part should be
```
[1,2,3,4,5]
```

Decreasing part should be
```
[3,1]
```

I hope you already understood binary search of increasing part. It's a typical version.

But there is two important things for finding peak and decreasing part.

- Finding peak

When we move `left` and `right`, we should do this.

---

\u2B50\uFE0F Points
```
if mountain_arr.get(mid) < mountain_arr.get(mid + 1):
    left = mid + 1
else:
    right = mid
```

- Why `left` is `mid + 1` and `right` is just `mid`?

If we meet the condition, `middle value` is definitely smaller than `mddile + 1 value`, so we are sure the `middle value` is not the peak. That's why we can search in other places except current middle position.

On the other hand, when we don't meet the condition, there is possibility that middle value is the peak value. From if statement, we are sure `middle value` is greater than `middle + 1 value`, but we are not sure whether `middle value` is the peak or not.

That's why we can't update `right` pointer with `mid - 1` like typical binary search. We need to include current middle position in the next search.

---

- Decreasing part

Later part is gradually small, so we need to care about moving `left` and `right` pointers.

---

\u2B50\uFE0F Points

This is how we move the pointers in typical version of binary search - increasing part
```
if target > mid_val:
    left = mid + 1
else:
    right = mid - 1
```

This is oppsite movement - decreasing part
```
if target > mid_val:
    right = mid - 1
else:
    left = mid + 1
```

---

- How many times do we execute binary search at most.

For just in case, let's calculate execution times of binary search. In a binary search, the number of times you need to execute the search can be determined by finding the base-2 logarithm (log base 2) of the number of elements.

Given that you have `10,000` data points`(10^4)`, we need to find log base `2` of `10,000` to determine the maximum number of times you have to execute binary search:

```
log\u2082(10,000) \u2248 13.2877
```
Since we can't execute a binary search a fraction of a time, we take the ceiling of this value to get the maximum number of times:

```
Ceiling(13.2877) = 14
```

So, in the worst case, you may need to execute a binary search up to 14 times to find an element in a dataset of 10,000 elements using binary search.

```
We execute binary search 3 times at most, so 28 + 14 + 14 <= 100.
```

`28` + `14` + `14` is number of calls for provided `get()`. In find_peak function, we call `get()` twice, so `14 * 2(= 28)`.

- `(10^4)` and `100` are coming from constraints.

Looks good.

Okay, now you understand important points and how you think about a solution.

Let's see a real algorithm.

### Algorithm Overview:

1. Get the length of the mountain array.
2. Define a function to search for the target in the mountain array using binary search.
3. Define a function to find the peak index where the mountain array changes from increasing to decreasing.
4. Find the peak index using the defined functions.
5. Search for the target in the increasing part of the array first, and then in the decreasing part if needed.

### Detailed Explanation:

1. Get the length of the mountain array:
   - Store the length of the mountain array by calling the `length()` method of the MountainArray.

2. Define a function to search for the target in the mountain array using binary search:
   - Define a function `find_target` that takes parameters `left`, `right`, `target`, and `is_upside`.
   - Within this function, perform a binary search to find the target in the mountain array based on whether it's in the increasing or decreasing portion of the array.

3. Define a function to find the peak index where the mountain array changes from increasing to decreasing:
   - Define a function `find_peak`.
   - Perform a binary search to find the peak index where the array changes from increasing to decreasing.

4. Find the peak index using the defined functions:
   - Call the `find_peak()` function to obtain the peak index where the array changes from increasing to decreasing.

5. Search for the target in the increasing part of the array first, and then in the decreasing part if needed:
   - Call `find_target` for the increasing portion (from 0 to peak index) with `is_upside` set to True.
   - If the target is found in the increasing portion, return the result.
   - If not found, call `find_target` for the decreasing portion (from peak index + 1 to length - 1) with `is_upside` set to False.
   - Return the result of the binary search.


---



# Complexity
- Time complexity: $$O(log n)$$
    - Finding the peak index (in the `find_peak` function) using binary search takes $$O(log n)$$ time, where n is the length of the mountain array.
    - Searching for the target in either the increasing or decreasing part of the array (in the `find_target` function) using binary search takes $$O(log n)$$ time in the worst case.

- Space complexity: $$O(1)$$

    - The space complexity is $$O(1)$$ because the algorithm uses a constant amount of additional space regardless of the input size. It does not use any data structures that grow with the size of the input, and the recursive calls do not result in additional space usage that depends on the input size.


```python []
class Solution:
    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        length = mountain_arr.length()

        def find_target(left, right, target, is_upside):
            while left <= right:
                mid = (left + right) // 2
                mid_val = mountain_arr.get(mid)

                if mid_val == target:
                    return mid
                
                if is_upside:
                    if target > mid_val:
                        left = mid + 1
                    else:
                        right = mid - 1
                else:
                    if target > mid_val:
                        right = mid - 1
                    else:
                        left = mid + 1

            return -1

        def find_peak():
            nonlocal length

            left, right = 0, length - 1

            while left < right:
                mid = (left + right) // 2
                if mountain_arr.get(mid) < mountain_arr.get(mid + 1):
                    left = mid + 1
                else:
                    right = mid
            
            return left

        peak_index = find_peak()


        result = find_target(0, peak_index, target, True)
        if result != -1:
            return result
        
        return find_target(peak_index + 1, length - 1, target, False)        
```
```javascript []

var findInMountainArray = function(target, mountainArr) {
    const length = mountainArr.length();

    function findTarget(left, right, target, isUpside) {
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const midVal = mountainArr.get(mid);

            if (midVal === target) {
                return mid;
            }

            if (isUpside) {
                if (target > midVal) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                if (target > midVal) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }

        return -1;
    }

    function findPeak() {
        let left = 0;
        let right = length - 1;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    const peakIndex = findPeak();

    let result = findTarget(0, peakIndex, target, true);
    if (result !== -1) {
        return result;
    }

    return findTarget(peakIndex + 1, length - 1, target, false);    
};
```
```java []
 
class Solution {
    public int findInMountainArray(int target, MountainArray mountainArr) {
        int length = mountainArr.length();
        int peakIndex = findPeak(mountainArr, length);

        int result = findTarget(mountainArr, 0, peakIndex, target, true);
        if (result != -1) {
            return result;
        }

        return findTarget(mountainArr, peakIndex + 1, length - 1, target, false);
    }

    private int findTarget(MountainArray mountainArr, int left, int right, int target, boolean isUpside) {
        while (left <= right) {
            int mid = (left + right) / 2;
            int midVal = mountainArr.get(mid);

            if (midVal == target) {
                return mid;
            }

            if (isUpside) {
                if (target > midVal) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                if (target > midVal) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }

        return -1;
    }

    private int findPeak(MountainArray mountainArr, int length) {
        int left = 0;
        int right = length - 1;

        while (left < right) {
            int mid = (left + right) / 2;
            if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }    
}
```
```C++ []

class Solution {
public:
    int findInMountainArray(int target, MountainArray &mountainArr) {
        int length = mountainArr.length();

        auto findTarget = [&](int left, int right, int target, bool isUpside) {
            while (left <= right) {
                int mid = (left + right) / 2;
                int midVal = mountainArr.get(mid);

                if (midVal == target) {
                    return mid;
                }

                if (isUpside) {
                    if (target > midVal) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                } else {
                    if (target > midVal) {
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                }
            }

            return -1;
        };

        auto findPeak = [&]() {
            int left = 0;
            int right = length - 1;

            while (left < right) {
                int mid = (left + right) / 2;
                if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            return left;
        };

        int peakIndex = findPeak();

        int result = findTarget(0, peakIndex, target, true);
        if (result != -1) {
            return result;
        }

        return findTarget(peakIndex + 1, length - 1, target, false);        
    }
};
```


---



Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u2B50\uFE0F My next post for daily coding challenge
https://leetcode.com/problems/min-cost-climbing-stairs/solutions/4162780/video-give-me-10-minutes-how-we-think-about-a-solution-python-javascript-java-c/

\u2B50\uFE0F next daily challenge video

https://youtu.be/LopoDDa4dLY

\u25A0 Timeline of the video
`0:00` Read the question of Number of Flowers in Full Bloom
`0:35` How we think about a solution
`2:50` Demonstrate solution with an example
`6:09` Find available flowers
`8:36` We don't have to reset the right pointer to 0 or something
`9:32` Coding
`13:31` Time Complexity and Space Complexity

\u2B50\uFE0F My previous post for daily coding challenge
https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4156243/video-give-me-15-minutes-how-we-can-think-about-a-solution-python-javascript-java-c/

\u2B50\uFE0F Yesterday's daily challenge video

https://youtu.be/kiIYG6drNZo

\u25A0 Timeline of the video
`0:00` Read the question of Number of Flowers in Full Bloom
`0:35` How we think about a solution
`2:50` Demonstrate solution with an example
`6:09` Find available flowers
`8:36` We don't have to reset the right pointer to 0 or something
`9:32` Coding
`13:31` Time Complexity and Space Complexity




