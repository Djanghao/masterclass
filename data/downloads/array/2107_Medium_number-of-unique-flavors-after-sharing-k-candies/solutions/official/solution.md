# Official Solution

**Link:** [https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solution/](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solution/)

---

## Solution

---

### Overview

We are given an array called `candies`, where each element represents the flavor of a candy, indexed from 0. The goal is to share exactly `k` consecutive candies with your sister, while maximizing the number of unique candy flavors you can retain for yourself. The task is to return the maximum number of unique flavors you can keep after removing a subarray of `k` consecutive candies.

---

### Approach: Sliding Window

#### Intuition

We need to share exactly `k` consecutive candies and maximize the number of unique flavors we retain, the first thought is to ask: What determines how many unique flavors we can keep?

We lose a flavor only if all of its instances are within the `k` candies that are removed. Therefore, the best way to maximize the unique flavors we retain is to remove a subarray of `k` candies that minimizes the number of "completely removed" flavors.

This observation simplifies our task into two parts:
1. Find the number of flavors completely removed for any given subarray of size `k`. 
2. Track the maximum number of unique flavors we can retain across all possible subarrays of size `k`.

Now, how do we efficiently check all possible subarrays of size `k`? This is where we notice a pattern. When moving from one subarray of size `k` to the next, the elements only change slightly. Specifically:
- The first element of the previous subarray leaves.
- The next element in the array is added to the current subarray.

Instead of recalculating everything from scratch for each subarray, we can leverage this overlapping nature using a sliding window. The sliding window allows us to maintain a running count of how many flavors are "completely removed" as the window slides, ensuring that our solution is efficient.

In the sliding window, we will start by counting the frequency of all flavors in the array. This helps us determine whether a flavor is "completely removed" when a subarray is chosen.

Now consider the first `k` candies as the initial window. Calculate the number of flavors that are fully contained within this window and hence lost if we remove it.

As the window slides, we encounter two conditions: one when a new candy is added to the window, and the other when a candy is removed from it.
- The leftmost candy exits the window, so we adjust its frequency in our frequency map. If the flavor is not completely contained in the window, it is not "lost."
- The next candy enters the window, so we adjust its frequency. If this flavor is now completely contained in the window, it becomes "lost."

At each step, we calculate the number of unique flavors we can keep:

$\text{remaining unique flavors} = \text{total unique flavors} - \text{flavors lost by the window}$

As we evaluate each window, we continuously update the maximum retained flavors observed. Once all windows have been processed, the final result will be the highest number of unique flavors retained among all possible windows.

![fig](../Figures/2107/2107A.png)

#### Algorithm

1. Initialize the variables and map:
    - Create a variable `uniqueFlav` to track the total number of unique candy flavors in the candies array.
    - Use a frequency map `flavFreq` to store the count of each flavor.
    - Traverse the candies array and update `flavFreq`:

        - If the flavor’s frequency becomes 1 (indicating it’s the first occurrence), increment uniqueFlav by `1`.

2. Initialize the window for the First $k$ Candies:
    - Initialize a variable `usedInWindow` to track the number of unique flavors used completely in the initial window of size $k$.

    - Traverse the first $k$ candies:

        - Decrease the frequency of each candy flavor in `flavFreq`.
            - If a flavor's frequency becomes `0`, increment `usedInWindow` by `1`.

3. Calculate the initial maximum unique flavors:
    -  Calculate `maxFlav` as `uniqueFlav - usedInWindow`, representing the number of unique flavors outside the initial window.

    - Slide the Window to the Right:

        - For each position `i`, from `k` to `candies.size() - 1`, slide the window by one candy:
            - Remove the leftmost candy:
                - Increase its frequency in `flavFreq`.
                - If its frequency becomes `1`, decrement `usedInWindow` (since it's no longer completely used in the window).
            - Add the rightmost candy (at the current index `i`):
                - Decrease its frequency in `flavFreq`.
                - If its frequency becomes `0`, increment usedInWindow (indicating it's now completely used within the window).
            - Update `maxFlav` to be the maximum of `maxFlav` and `uniqueFlav - usedInWindow`.

4. Return `maxFlav`.


#### Implementation

<iframe src="https://leetcode.com/playground/9CvtEL5w/shared" frameBorder="0" width="100%" height="500" name="9CvtEL5w"></iframe>

#### Complexity Analysis

Here, $N$ is the number of candies in the given array.

- Time complexity: $O(N)$

  We iterate through each candy only once, sliding the $k$-length window while counting the flavors fully contained within it. Since all operations on the map have amortized constant time complexity, the overall time complexity is $O(N)$.

- Space complexity: $O(N)$

  The only additional space required is for the frequency map `flavFreq`, which stores the count of each of the $N$ flavors. Therefore, the total space complexity is $O(N)$.
---