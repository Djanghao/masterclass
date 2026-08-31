# Official Solution

**Link:** [https://leetcode.com/problems/alternating-groups-ii/solution/](https://leetcode.com/problems/alternating-groups-ii/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a circular arrangement of tiles, represented by an array called `colors`. Each tile’s color is either `0` or `1`. We are also given an integer `k`.

Our task is to count how many sequences of `k` tiles in a row are *alternating*—this means that no two tiles next to each other have the same color. Since the tiles are arranged in a circle, sequences can wrap around from the end back to the beginning.

Let's break down an example with `colors = [0, 1, 1, 0, 1]` and `k = 3`:

-   Starting from the first tile, `[0, 1]` alternates, but adding the third tile (`1`) breaks the pattern. For the same reason, starting from the second tile won't give us any valid sequence, so we skip it.
-   Moving forward, starting from the third tile, the last three tiles `[1, 0, 1]` form a valid alternating sequence.
-   Since the tiles form a circle, we can wrap around the array. This gives us two more valid sequences: `[0, 1, 0]`, `[1, 0, 1]`. 

In total, we find `3` alternating sequences of length `k = 3` at indices: `[2, 3, 4]`, `[3, 4, 0]`, and `[4, 0, 1]`.

To better understand the problem, you can try an easier version first: [Alternating Groups I](https://leetcode.com/problems/alternating-groups-i/description/), where `k` is fixed.

---

### Approach 1: Expanding the Array & Sliding Window

#### Intuition

The main challenge in this problem is handling the circular arrangement of tiles. If we process the array as it is, we would constantly have to deal with wrapping around, which makes direct calculations tricky. Instead of struggling with this complexity, we can transform the problem into a linear one while keeping all relevant information intact.

To see how, let’s consider the last possible sequence that wraps around the circle. It starts at the end of the array and continues with the first `k - 1` elements at the beginning. Instead of explicitly handling this circular behavior, we can "unroll" the array by appending its first `k - 1` elements to the end. This effectively stretches the circular array into a linear one. Now, we no longer need to worry about wrapping around — the problem reduces to counting subarrays (or windows!) of length `k` that alternate in color.

A naive approach would be to check every possible subarray of length `k` in the extended array. However, this brute-force method uses nested loops, resulting in a time complexity of $O(n^2)$ or even $O(n^3)$—far too slow for large inputs.

A key insight is that once a sequence fails to maintain the alternating pattern at a certain index, any longer sequence containing that point is also invalid. This means we don’t need to check every possible starting position separately - we can slide over the array and discard invalid sequences as soon as we encounter a mismatch. 

This is where the Sliding Window technique comes in. Instead of restarting our search at every index, we maintain a moving window of size `k`, adjusting it as we go. The moment we detect a mismatch, we move the window forward without unnecessary checks, making the solution much more efficient. Since each tile is processed at most once, the time complexity is reduced to $O(n)$, making this approach suitable for larger inputs.

#### Algorithm

-   Append the first `k - 1` elements of `colors` to the end of the array.
-   Initialize:
    -   `length` to the size of the new extended array.
    -   `result` to `0`.
    -   `left` to `0` and `right` to `1` - these are the bounds of the sliding window.
-   While `right` is less than `length`, meaning that we have more subarrays to check:
    -   If the pattern breaks, i.e. `colors[right] == colors[right - 1]`:
        -   Reset window from the current position, by setting `left = right`.
        -   Increment `right` by `1`.
    -   Otherwise, the sequence can be extended. 
        -   Increment `right` by `1`.
        -   If we haven't reached the desired length, i.e., `right - left < k`, continue to the next element.
        -    Else:
            -   Record a valid sequence by incrementing `result` by `1`.
            -   Shrink the window from the left (`left++`), to continue searching for sequences of the same size.
-   Return `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/FNqVHuBY/shared" frameBorder="0" width="100%" height="500" name="FNqVHuBY"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `colors` array.

-   Time complexity: $O(n + k)$

    Making the circular array linear involves iterating over the first $k - 1$ elements and appending them to the end of the array, which takes $O(k)$ time. Next, we use the Sliding Window Technique to count the number of alternating sequences. We do this by looping through the extended array once with two pointers, `left` and `right`. Since we only go through the array once, the time complexity for this part is $O(n + k)$. As a result, the overall time complexity of the algorithm is $O(n + k)$.

-   Space complexity: $O(k)$

    We extend the input array by $k - 1$ elements, which contribute $O(k)$ to the algorithm's space complexity. Apart from that, we only use a fixed number of variables (`left`, `right`, `result`, etc.), which take up constant space. Therefore, the auxiliary space complexity is dominated by the extension of the `colors` array and is equal to $O(k)$.

    > In Java, we create a new array of size $n + k$, called `extendedColors`, since Java arrays have a fixed size. Therefore, the space complexity of this implementation is $O(n + k)$.
    
---

### Approach 2: Two Passes

#### Intuition

The main insight in this approach is that we don’t need to explicitly track the exact start and end of each valid window. Instead, we only need to maintain a simple count of how many consecutive elements follow the alternating pattern. If a mismatch occurs, we reset this count to `1`, since any sequence extending beyond this mismatch is automatically invalid. Every time this count reaches at least `k`, we know we have found a valid alternating sequence of length `k`, so we increment our result.

If the array were purely linear, we could just traverse it once and count valid sequences. However, because the array wraps around, we need to ensure that we don’t miss any sequences that start near the end and continue at the beginning. 

To deal with this, we break our solution into two separate passes. The first pass scans the array normally and counts valid alternating sequences as if the array were linear. Then, to account for sequences that might wrap around, we perform a second pass over just the first `k - 1` elements. The key detail here is that during this second pass, we **don’t reset the count** - we continue from where we left off in the first pass. This way, if a valid sequence spans the boundary, we still detect it correctly. 

One important optimization is that if we ever encounter a mismatch during the second pass, we can immediately stop checking further. Since we are only working with the first `k - 1` elements, any remaining portion will be too short to form a valid sequence, making additional checks unnecessary.
 
#### Algorithm

-   Initialize:
    -  `length` to the size of the `colors` array.
    -  `result` to `0`.
    -  `alternatingElementsCount` to `1`, accounting for the first element of the array.
    -   `lastColor` to `colors[0]`.
-   Loop with `index` from `1` to `length - 1`:
    -   If `colors[index] == lastColor`, a mismatch is found:
        -   Reset sequence length, i.e. set `alternatingElementsCount` to `1`.
        -   Update `lastColor` to `colors[index]` and continue to the next element.
    -   Otherwise, `colors[index] != lastColor`, so the sequence can be extended:
    -   Increment `alternatingElementsCount` by `1`.
    -   If `alternatingElementsCount` is greater than or equal to `k`, increment `result` by `1`.
    -   Update `lastColor` to `colors[index]`.
-   Loop with `index` from `0` to `k - 1`, wrapping around to the beginning of the array:
    -   If `colors[index] == lastColor`, a mismatch is found:
        -   Since there are fewer than `k` elements remaining, no additional alternating sequences can be found: break.
    -   Increment `alternatingElementsCount` by `1`.
    -   If `alternatingElementsCount` is greater than or equal to `k`, increment `result` by `1`.
    -   Update `lastColor` to `colors[index]`.
-   Return `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/7gb5iN6W/shared" frameBorder="0" width="100%" height="500" name="7gb5iN6W"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `colors` array.

-   Time complexity: $O(n + k)$
    The first loop runs for $n - 1$ iterations, and the second loop runs for $k - 1$ iterations. In both loops, we perform only constant-time operations on each iteration, such as variable increments and checks. Since the loops are sequential and independent, the total time complexity of the algorithm is $O(n + k)$.
-   Space complexity: $O(1)$
    We only a fixed number of variables (`alternatingElementsCount`, `lastColor`, `result`) that occupy constant space. Therefore, the total space complexity of the algorithm is $O(1)$.
    
---

### Approach 3: One Pass

#### Intuition

Instead of handling the circular nature of the array separately, we can integrate it directly into a single loop. The key idea is to iterate beyond the array’s length while using the modulo operator (`index % n`) to wrap around seamlessly. This means that when we reach the end of the array, we automatically restart from the beginning without needing an explicit second pass or an extended array.  

For example, when we reach the `n-th` iteration, we check `arr[0]` because `n % n = 0`. On the `(n + 1)-th` iteration, we check `arr[1]` since `(n + 1) % n = 1`, and so on. This trick allows us to scan the entire array in a way that naturally accounts for sequences that cross the boundary.  

The logic for counting valid alternating sequences remains the same as in previous approaches: we maintain a counter that tracks how many consecutive elements alternate in color. If we encounter a mismatch, we reset the count to `1`. Each time the count reaches `k`, we confirm a valid sequence and update our result.  

The only special consideration is that while wrapping around, we only need to check the first `k - 1` elements because any valid sequence that extends beyond this point must have already been counted.

#### Algorithm

-   Initialize:
    -  `length` to the size of the `colors` array.
    -  `result` to `0`.
    -  `alternatingElementsCount` to `1`, accounting for the first element of the array.
    -   `lastColor` to `colors[0]`.
-   Loop with `i` from `1` to `length + k - 1` to wrap around to the first `k - 1` elements:
    -   Set `index` to `i % length`.
    -   If `colors[index] == lastColor`, the pattern breaks:
        -   Reset the sequence length, i.e. set `alternatingElementsCount` to `1`.
        -   Update `lastColor` to `colors[index]` and continue to the next element.
    -   Otherwise, `colors[index] != lastColor`, so the sequence can be extended:
    -   Increment `alternatingElementsCount` by `1`.
    -   If `alternatingElementsCount` is greater than or equal to `k`, increment `result` by `1`.
    -   Update `lastColor` to `colors[index]`.
-   Return `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/VfetMWob/shared" frameBorder="0" width="100%" height="500" name="VfetMWob"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `colors` array.

-   Time complexity: $O(n + k)$

    We run a loop for $n + k - 1$ iterations, performing constant-time operations (such as modular division, variable increments, and array accesses) on each iteration. Thus, the time complexity of the algorithm is $O(n + k)$.

-   Space complexity: $O(1)$

    We only use a fixed number of variables (`result`, `lastColor`, `alternatingElementsCount`), which do not increase with the input size. As a result, the algorithm has a constant time complexity of $O(1)$.
    
---