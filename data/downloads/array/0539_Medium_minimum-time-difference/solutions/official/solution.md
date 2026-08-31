# Official Solution

**Link:** [https://leetcode.com/problems/minimum-time-difference/solution/](https://leetcode.com/problems/minimum-time-difference/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array of times, where each time is given in `"HH:MM"` string format. We must return the minimum difference in minutes between any pair of times in the array.

### Approach 1: Sort

### Intuition

Since the times are given in `"HH:MM"` string format instead of the number of minutes, we can start by parsing the string format of each time and converting it into the total number of minutes passed since `"00:00"`.

![Input array converted to minutes](../Figures/539/Input_array_converted_to_minutes.png)

If this converted array is sorted in ascending order, then the minimum difference must be the difference in an adjacent pair of times. This is because adjacent elements in a sorted array have smaller differences than non-adjacent elements. Thus, we can sort our array and calculate the difference between each adjacent pair of elements, keeping track of the smallest difference. 

An edge case we have to consider is if the smallest difference is between the last and first element, in which case the time loops back to `"00:00"`. For example, if the last and first time is `"22:00"` and `"02:00"`, then the time difference is 4 hours or 240 minutes.

Thus, checking the difference between each adjacent pair in the sorted array as well as the difference between the first and last element will give us the minimum time difference.

### Algorithm

1. Initialize an array `minutes` to store the given time points in units of minutes.
2. For each time `time` in the given `timePoints` array:
    * Parse the first two characters in `time` to get the hour `h` 
    * Parse the last two characters to get the minutes `m`
    * Calculate the total number of minutes `h * 60 + m` and store the value in `minutes`
3. Sort `minutes` in ascending order
4. Initialize our answer variable `ans = Integer.MAX_VALUE`
5. Iterate through each adjacent pair of elements `(i, i+1)` in `minutes` to find the minimum time difference:
    * `ans = min(ans, minutes[i+1] - minutes[i])`
6. Return the minimum of `ans` and `24 * 60 - minutes[minutes.length - 1] + minutes[0]`, the amount of time between the last and first elements. 


### Implementation

<iframe src="https://leetcode.com/playground/VwArgcjG/shared" frameBorder="0" width="100%" height="500" name="VwArgcjG"></iframe>

### Complexity Analysis 

Let $N$ be the size of the given array `timePoints`. 

* Time Complexity: $O(N \cdot \log N)$

    Converting the input into minutes and traversing the sorted array to calculate the minimum difference both take $O(N)$ time. However, sorting the array takes $O(N \cdot \log N)$ time. Thus, the total time complexity is $O(N \cdot \log N)$

* Space Complexity: $O(N)$

    Our array `minutes` to store the converted input takes $O(N)$ space.

### Approach 2: Bucket Sort 

### Intuition

In approach 1, our time complexity was dominated by the time needed for sorting, which was $O(N \cdot \log N)$. However, we notice that the values in our array `minutes` can only fall into the range $[0, 24*60 - 1]$. Because we know the range of values for the array we'd like to sort, we can instead use bucket sort, which is a sorting algorithm that can be done in linear time. 

Bucket sort is typically completed in three steps:

1. We initialize an array `buckets` whose size is equal to the total number of possible values. 
2. We process the input array so that each element `buckets[i]` contains the frequency count of the value `i` in the input array.
3. We can finally produce the sorted array by iterating through each element/bucket `buckets[i]` in `buckets` and append the value `i` `buckets[i]` times to a new array. 

For our purposes, we can use a modified bucket sort for `minutes` where `minutes[i]` will contain a boolean value for whether or not the input array has value `i`. After, we can iterate through `minutes` in a similar fashion as Approach 1, where we keep track of the difference between adjacent elements, as well as the difference between the last and first elements. 

### Algorithm 

1. Initialize array `minutes` with a size of $24 * 60$
2. For each `time` in `timePoints`:
    * Parse `time` and convert to the total number of minutes `min`
    * If `minutes[min] == true`, then that means `time` appears more than once in our array, which means the minimum time difference is just $0$ so return $0$
    * Otherwise, set `minutes[min] == true`
3. Initialize variable `prevIndex = Integer.MAX_VALUE` to keep track of the previous time to calculate the time difference for adjacent pairs
4. Initialize variables `firstIndex = Integer.MAX_VALUE` and `lastIndex = Integer.MAX-VALUE` to keep track of the first and last elements in our array
5. Initialize answer variable `ans = Integer.MAX_VALUE` to maintain the minimum time difference between adjacent pairs
6. Iterate through values `i` between $[0, 24 * 60 - 1]$:
    * If `minutes[i]` is true, then the time `i` is present in our array:
        * If `prevIndex` does not contain the default value `Integer.MAX_VALUE`, then we can find the difference between time `i` and the previous time `prevIndex`: `ans = min(ans, i - prevIndex)`
        * Update `prevIndex` to `i`
        * If `firstIndex` contains the default value, then `i` is the first element in our sorted array, so we can set `firstIndex = i`
        * Update `lastIndex` to `i`
7. Return the minimum between `ans` and `24 * 60 - lastIndex + firstIndex`

### Implementation

<iframe src="https://leetcode.com/playground/oLQPH4eP/shared" frameBorder="0" width="100%" height="500" name="oLQPH4eP"></iframe>

### Complexity Analysis

Let $N$ be the size of the given array `timePoints`. 

* Time Complexity: $O(N)$

 In contrast to Approach 1, our sorting only takes $O(N)$ time.

* Space Complexity: $O(1)$

 Our array `minutes` will always have a size of $24 * 60$, so the space complexity is constant.