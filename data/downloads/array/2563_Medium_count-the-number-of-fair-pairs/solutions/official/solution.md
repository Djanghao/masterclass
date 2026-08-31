# Official Solution

**Link:** [https://leetcode.com/problems/count-the-number-of-fair-pairs/solution/](https://leetcode.com/problems/count-the-number-of-fair-pairs/solution/)

---

[TOC]

## Solution

--- 

### Overview

We have an array called `nums` with `n` elements, along with two integers, `lower` and `upper`. Our task is to find out how many pairs of indices `(i, j)` exist in the array such that the sum of the elements at these indices, `nums[i] + nums[j]`, falls between `lower` and `upper`. Plus, we need to make sure that `i` is less than `j`.

Given that the number of elements in the array can be as large as $10^5$, we need to think about an efficient solution—something that works in linear or log-linear time.

If you're feeling stuck, it might help to look at [this similar problem](https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/) before diving deeper.

Since we’re dealing with specific lower and upper bounds, it’s natural to think about using binary search. However, for binary search to be effective, we need to sort the array first. You might wonder if sorting will mess up our index requirements. The good news is that it won’t! Sorting the array allows us to find pairs easily because the order of addition doesn’t change the sum; that is, `nums[i] + nums[j]` is the same as `nums[j] + nums[i]`. 

So, our goal is to count unique pairs where `i` is not equal to `j` while ensuring their sums fall within the specified range.

---

### Approach 1: Binary Search 

#### Intuition   

> If you are not familiar with binary search, please refer to our explore cards [Binary Search Explore Card](https://leetcode.com/explore/learn/card/binary-search/). We will focus on the usage in this article and not the underlying principles or implementation details.

We can iterate through the sorted array while keeping one element of the pair fixed. For each fixed element, we'll find out how many valid choices we have for the second element. Because the array is sorted, the first valid choice will give us a sum that is just greater than or equal to `lower`, and the last valid choice will yield a sum that is just less than or equal to `upper`. Since the sums increase steadily, all valid second elements will cluster together in the array.

To count the number of pairs with sums that fall within the range `[lower, upper]`, we can use a clever technique. First, we calculate how many pairs have sums that are less than `lower`. Then, we count how many pairs have sums that are less than `upper + 1`. By taking the difference between these two counts, we can easily determine how many pairs have sums within the desired range.

Now, how do we find the number of pairs for the lower limit using binary search? After fixing the first element `nums[i]`, the second element must be less than `lower - nums[i]` to keep the sum below `lower`. We can efficiently find how many elements meet this condition by performing a binary search in the array for values less than or equal to `lower - nums[i]`. 

Similarly, we can find the number of elements that are less than or equal to `upper + 1 - nums[i]`. The difference between these two counts will give us the total number of valid pairs for that particular fixed element.

#### Algorithm

> Note: The typical way to calculate the midpoint is `(left + right) / 2`. However, a safer approach is to use `left + (right - left) / 2`. While both formulas yield the same result, the second method is safer because it prevents overflow by ensuring that no value larger than `right` is stored. In contrast, the first method can lead to overflow if `left` and `right` are very large.

Function - `lower_bound(nums, low, high, element)`:

1. Initialize a loop that continues as long as `low` is less than or equal to `high`:
    - Calculate the middle index `mid` using the formula `low + (high - low) / 2`.
    - If `nums[mid]` is greater than or equal to `element`, adjust the `high` index to `mid - 1`.
    - Otherwise, adjust the `low` index to `mid + 1`.
2. Return the `low` index after the loop ends, which represents the lower bound position.

Main Function - `countFairPairs(nums, lower, upper)`:

1. Sort the array `nums`.
2. Initialize a variable `ans` to 0, which will hold the count of valid pairs.
3. Iterate through each element in the sorted array using index `i`:
    - For each element `nums[i]`, determine the number of possible pairs with a sum less than `lower`:
        - Use `lower_bound` to find the index of the first element in the subarray `nums[i + 1]` to `nums[end]` that is greater than or equal to `lower - nums[i]`.
    - Similarly, determine the number of possible pairs with a sum less than or equal to `upper`:
        - Use `lower_bound` to find the index of the first element in the subarray that is greater than or equal to `upper - nums[i] + 1`.
    - The difference `high - low` gives the count of valid pairs with sums within the range `[lower, upper]` for the current element.
    - Update `ans` by adding the difference calculated.
4. After iterating through all elements, return the value of `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/PtF5DvjT/shared" frameBorder="0" width="100%" height="500" name="PtF5DvjT"></iframe>


#### Complexity Analysis

Let $n$ be the size of the given `nums` array.

- Time Complexity: $O(n \log n)$

    Sorting the `nums` array takes $O(n \log n)$ time. 

    The loop iterates through each element of the sorted array and calls the `lower_bound` function twice, which itself takes $O(logn)$ time. Therefore, the overall time complexity for processing all `n` elements is $O(n \log n)$.

    Combining these, the total time complexity is: $O(n \log n + n \log n)$ = $O(n \log n)$

- Space complexity: $O(n)$ or $O(\log n)$.

    The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and  Insertion Sort and has $O(n)$ additional space.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n )$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.

    Therefore, the space complexity is given by $O(n)$ or $O(\log n)$.

> In this problem, we’re assuming it’s okay to sort the input to solve it. But in real-world scenarios, that might not always be the best approach. Sorting can change the original order of the input, which might be important in some cases where we have to use it later.

---

### Approach 2: Two Pointers

#### Intuition   

In the previous solution, we noticed that when selecting the second element of our pair, it’s important to consider only those that are consecutive to the first element. This creates a “window” of valid choices. Specifically, this window starts from the index right after our chosen first element (which we can call `current index + 1`). We ignore elements before this index because they would lead to redundant pairs.

As we move to the next element in the array, we adjust this window. Since the new first element we’re considering is larger but we want the same target sum, the second element must now be smaller. This means we gradually shift the end of our window backward to focus on smaller values in the array.

To visualize this, we can use two pointers: `left` for the current element and `right` for the end of our window. The size of the window can be calculated with the formula `right - (left + 1) + 1`, which simplifies to `right - left`. As we progress through the array, we keep moving the `right` pointer back until we find that the sum of `nums[left] + nums[right]` is just below our target sum. For each index, we then add the size of this window to our result.

The difference between these two counts will give us the number of pairs that fall within our desired range.

#### Algorithm

Function - `lower_bound(nums, value)`:

1. Initialize two pointers, `left` to 0 and `right` to the last index of `nums`.
2. Initialize a variable `result` to 0.
3. While `left` is less than `right`:
    - Calculate the sum of `nums[left]` and `nums[right]`.
    - If the sum is less than `value`:
        - Add the number of valid pairs `(right - left)` to `result`.
        - Increment `left` to consider the next element.
    - Else:
        - Decrement `right` to reduce the sum.
4. Return the value of `result`.

Main Function - `countFairPairs(nums, lower, upper)`:

1. Sort the array `nums`.
2. Return the difference between the result of `lower_bound(nums, upper + 1)` and `lower_bound(nums, lower)`.

#### Implementation

<iframe src="https://leetcode.com/playground/iidN9v9x/shared" frameBorder="0" width="100%" height="500" name="iidN9v9x"></iframe>


#### Complexity Analysis

Let $n$ be the size of the given `nums` array.

- Time Complexity: $O(n \log n)$

    Sorting the `nums` array takes $O(n \log n)$ time. 

    The method lower_bound is called twice, but its complexity is $O(n)$ because it iterates through the entire array to count the valid pairs. 
    
    Thus, the overall time complexity is dominated by the sorting step, resulting in $O(n \log n)$.

- Space complexity: $O(n)$ or $O(\log n)$.

    The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and  Insertion Sort and has $O(n)$ additional space.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n )$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.

    Therefore, the space complexity is given by $O(n)$ or $O(\log n)$.

---