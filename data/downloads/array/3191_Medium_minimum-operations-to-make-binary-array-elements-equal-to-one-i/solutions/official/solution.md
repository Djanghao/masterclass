# Official Solution

**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solution/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solution/)

---

[TOC]

## Solution

---

### Overview  

We are given a binary array `nums`, and we need to transform all elements into `1` using a specific operation. The allowed operation lets us choose any three consecutive elements and flip all of them (changing `0` to `1` and `1` to `0`). Our task is to determine the minimum number of operations required to turn the entire array into all `1`s. If it is impossible to achieve this transformation, we return `-1`.  

Since we can only flip three consecutive elements at a time, isolated `0`s or certain patterns of `0`s may prevent us from turning everything into `1`. If the number of `0`s in certain positions makes it impossible to fully eliminate them using groups of three, the transformation cannot be achieved.

Before discussing the approaches, let's review a fundamental property of XOR:

##### Parity Invariance:

Parity invariance means that the number of times a position is flipped determines its final value. If a position is flipped an odd number of times, its value changes, but if it is flipped an even number of times, it stays the same.

Consider the array `[1, 0, 0, 1, 0, 1, 1]`. We start by flipping three consecutive elements to try and transform all `0`s into `1`s. First, flipping the subarray `[0, 0, 1]` at indices `1...3` changes the array to `[1, 1, 1, 0, 0, 1, 1]`. Then, flipping `[0, 0, 1]` at indices `3...5` gives `[1, 1, 1, 1, 1, 0, 1]`. Finally, flipping `[1, 0, 1]` at indices `4...6` results in `[1, 1, 1, 1, 0, 1, 0]`.  

At this point, we see that the `0`s at positions `4` and `6` remain, and there is no way to flip them without also flipping other elements. Since we can only flip three elements at a time, we cannot isolate these `0`s in a way that allows us to change them to `1`s. This happens because these positions were flipped an even number of times, so they retained their original value. Because of this **parity constraint**, the transformation is impossible, and we must return `-1`.

---

### Approach 1: Using Deque

#### Intuition

The first observation is that if a `0` appears near the end of the array (specifically within the last two positions), we cannot flip it using a full triplet. This means that if any `0` is left in the last two places after processing, it is impossible to make the entire array `1`, so we return `-1`.  

Since a single flip operation affects three elements, each flip we apply has a lasting effect on the next two indices. Instead of modifying the entire array and recomputing values every time, we need a way to keep track of the flips already applied. This is where we introduce a deque to store the indices of past flips. The deque allows us to efficiently determine how many times each index has been flipped by keeping only the flips that are still affecting the current index.  

We iterate through the array from left to right. At each index `i`, we first remove any outdated flips from the deque and those that were applied more than two positions earlier, as they no longer affect `i`.  

Next, we determine whether we need to flip at index `i`. The second key observation is that the effect of a flip is cumulative: if an index has been flipped an odd number of times, it has effectively changed its value, whereas if it has been flipped an even number of times, it remains the same as its original value. Using this property, we can check:  

$\text{(original value of nums[i])} + \text{(number of active flips affecting i)} \mod 2$

- If the result is `0`, it means that `nums[i]` is currently `0`, so we must flip it.  
- To flip, we check if `i + 2` is within bounds (since we need a full triplet). If not, we return `-1`. Otherwise, we record this flip by adding `i` to the deque and incrementing the operation count.

#### Algorithm

- Initialize `flipQueue` as a deque to store indices of flip operations.
- Initialize `count` to track the number of operations performed.

- Iterate through `nums`:
  - Remove expired flips from the beginning of `flipQueue` if they are older than 2 indices.
  - Check if `nums[i]` needs flipping using `(nums[i] + len(flipQueue)) % 2 == 0`.
  - If flipping is needed:
    - If flipping is impossible (i.e., `i + 2` exceeds array bounds), return `-1`.
    - Increment `count` since a flip operation is performed.
    - Append `i` to the end of `flipQueue` to mark the flip operation.

- Return `count`, the minimum number of operations needed.

#### Implementation

<iframe src="https://leetcode.com/playground/J3qDTLSY/shared" frameBorder="0" width="100%" height="446" name="J3qDTLSY"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input array `nums`.

- Time complexity: $O(n)$

    The algorithm iterates over the list once, performing a constant amount of work for each element. For each index `i`, it checks if the current element needs flipping by considering the number of active flips stored in the `flipQueue`. This check is done in constant time $O(1)$. Additionally, the algorithm removes expired flips (those older than 3 indices) from the `flipQueue` using a `while` loop. However, each element is added to and removed from the `flipQueue` at most once, so the total time spent on queue operations across all iterations is $O(n)$. Therefore, the overall time complexity is $O(n)$.

- Space complexity: $O(1)$

    The algorithm uses a `deque` (`flipQueue`) to store the indices of flip operations. In the worst case, the `flipQueue` can store up to 3 elements (since each flip affects a triplet of elements). Therefore, the space complexity of the `flipQueue` is $O(1)$. 

---

### Approach 2: Sliding Window

#### Intuition

In the previous approach, we used a deque to track active flips and determine how many times each index had been flipped. Now, we take a different approach by modifying the array directly as we iterate. The core idea remains the same: flipping three consecutive elements at a time while ensuring that every `0` gets converted to `1` in the most efficient way possible. 

Instead of maintaining a separate structure to track flips, we will scan the array from left to right and only focus on the last element of each triplet to determine if a flip is needed. This means that for each index `i`, we check whether `nums[i - 2]` is still `0`. If it is, then we must flip the triplet ending at `i` (`nums[i - 2], nums[i - 1], nums[i]`).  

By flipping in this way, we ensure that every `0` gets handled at the earliest possible opportunity, preventing any unflippable `0`s from being left behind. This also ensures that we are using the minimum number of operations because each flip is only applied when absolutely necessary.

We iterate through the array, ensuring that at every position `i`, we can check the last element of a full triplet (`nums[i - 2]`). If `nums[i - 2]` is `0`, we immediately flip `nums[i - 2], nums[i - 1], and nums[i]`, and we increase the flip count.  

After processing all indices, we check if the entire array has been turned into `1`s. If the sum equals the length of the array, it means every element is `1`, so we return the total number of flips. Otherwise, we return `-1`, indicating that it was impossible to transform the entire array.

The algorithm is visualized below:

![slidingwindow](../Figures/3191/slidingwindow.png)

#### Algorithm

- Initialize `count` to track the number of flip operations.

- Iterate through `nums` starting from 2nd element:
  - Check if `nums[i - 2]` is `0` (i.e., the triplet starting at `i-2` needs flipping).
    - If so, increment `count` since a flip is performed.
    - Flip elements at indices `i - 2`, `i - 1`, and `i` using XOR.

- Compute the `sum` of `nums`. If all elements are `1`, return `count` as the minimum operations needed.
- Otherwise, return `-1` since it's impossible to make all elements `1`.

#### Implementation

> **Interview Tip: In-Place Algorithms**  
> In-place algorithms modify the input directly to save space, but that can sometimes cause issues. There are times when an in-place approach isn’t the best idea, like in these cases:
>
> 1. If your algorithm runs in a multi-threaded environment without exclusive access to the array, other threads might need to read it and won’t expect it to change.  
> 2. Even in a single-threaded setup, or if you have exclusive access while the algorithm runs, the array might still be needed later or by another thread once the lock is released.  
>
> In an interview, always check if it’s okay to overwrite the input. If you do, be ready to explain the trade-offs!

<iframe src="https://leetcode.com/playground/CEsvpqJH/shared" frameBorder="0" width="100%" height="378" name="CEsvpqJH"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input array `nums`.

- Time complexity: $O(n)$

    The algorithm iterates over the array once, performing a constant amount of work for each element. Specifically, for each element, it checks if the element at position `i - 2` is `0`, and if so, it flips the elements at positions `i - 2`, `i - 1`, and `i`. This flipping operation is done in constant time $O(1)$ per iteration. Since the loop runs for $n$ iterations, the overall time complexity is $O(n)$.

    Additionally, after the loop, the algorithm computes the sum of the array using a built-in summation operation, which runs in $O(n)$ time. Since this operation is performed once after the loop, it does not affect the asymptotic complexity, which remains $O(n)$.  

- Space complexity: $O(1)$

    The algorithm uses a constant amount of extra space regardless of the input size. The input array `nums` is modified in place, so no additional space is required for data structures. Therefore, the space complexity is $O(1)$.

    The summation operation also does not introduce additional space complexity, as it operates in a single pass without requiring extra storage beyond a single variable.

---

### Approach 3: Sliding Window Using Bit Manipulation

#### Intuition

Instead of checking the last element of a triplet (`nums[i-2]`), here we directly iterate through the array from left to right and flip any `0` we encounter at `nums[i]`. Additionally, flipping `nums[i]` also forces us to flip the next two elements, `nums[i + 1]` and `nums[i + 2]`. This ensures that the `0` at `nums[i]` is turned into `1` while maintaining correctness for future elements.  

To achieve this, whenever we find a `0` at `nums[i]`, we perform the following operation and increase the count of operations:  
- Flip `nums[i]` (turning it into `1`).  
- Flip `nums[i + 1]` and `nums[i+2]`.

Since we are scanning left to right, we only modify elements that are still `0` at the moment they are encountered.

Now let's prove the greedy approach via the method of induction.

#### Proof By Induction:  

**Base Cases**:

We consider the smallest possible cases explicitly, as these provide the foundation for our inductive proof:  

n = 3 (e.g., `[0, 0, 0]`), n = 4 (e.g., `[0, 0, 0, 0]`) and n = 5 (e.g., `[0, 0, 0, 0, 0]`).

We explicitly check all possible cases for `n = 3, 4, 5` and verify that our algorithm produces the minimum number of flips in all cases. These serve as our base cases.  

We require three base cases because our induction step will rely on the fact that when `n ≥ 6`, we must have `n - 3 ≥ 3`.

If we only had a base case for n = 3, the induction step would only allow us to conclude correctness for $n = 6, 9, 12, \dots (i.e., every third number)$, leaving gaps in between. By proving the cases for `n = 3, 4, 5`, we ensure the induction step works for all $k \geq 6$, since every number can now be reached via induction.

Thus, three base cases are necessary so that when we inductively build up, we can confidently say the theorem holds for all $n - 3 \geq 3$.  

**Inductive Hypothesis**:  
Assume that for some `nums` of size `k - 3`, our algorithm performs the minimum number of operations optimally. That is, we have already shown that for any valid `nums` of size `k - 3`, our approach leads to the fewest possible flips.  

Since we have proved this holds for `k - 3 ∈ {3,4,5}`, we assume it also holds for any general `k - 3`.

**Inductive Step**:  
We now extend our proof to an array of size `k`.  

Our algorithm flips elements greedily from left to right, ensuring that `nums[0:k - 3]` has been fully processed optimally. From our assumed correctness for `k - 3`, we know that all values in `nums[0:k - 3]` are `1`, except possibly `nums[k - 5]` and `nums[k - 4]`, since `k - 3 > 3` ensures these exist.  

Now, we consider the last three elements `nums[k - 5:k]`. We enumerate all possible cases for their values and verify that our greedy strategy of flipping when encountering `0` remains the most optimal approach.  

A key assumption is that if we perform any operation at an index `< k - 5`, it would change already correct elements in `nums[0:k - 5]`. Since we have already shown that our solution for `nums[0:k - 3]` is optimal, such an operation would be redundant or suboptimal.

Therefore, the only way to minimize operations is to follow the same strategy as before i.e., handling `nums[k - 5:k]` optimally using our greedy approach.  

Since the algorithm maintains optimality at every step and does not perform unnecessary operations, the hypothesis extends to size `k`.

**Conclusion**:  
Since our base cases hold for `n = 3, 4, 5`, and we have shown that assuming correctness for `k - 3` leads to correctness for `k`, we conclude by mathematical induction that our greedy approach is optimal for all `n ≥ 3`.

#### Algorithm

- Initialize `n` as the size of `nums`.
- Initialize `count` to track the number of flip operations.

- Iterate through `nums` up to `n - 3`:
  - If `nums[i]` is `0`, perform a triplet flip starting at `i`:
    - Flip `nums[i]` to `1`.
    - Flip `nums[i + 1]` (toggle `0` to `1` or `1` to `0`).
    - Flip `nums[i + 2]` (toggle `0` to `1` or `1` to `0`).
    - Increment `count` as a flip operation was performed.

- If `nums[n - 2]` or `nums[n - 1]` is still `0`, return `-1` since making all elements `1` is impossible.
- Otherwise, return `count` as the minimum number of operations needed.

#### Implementation

> **Interview Tip: In-Place Algorithms**  
> In-place algorithms modify the input directly to save space, but that can sometimes cause issues. There are times when an in-place approach isn’t the best idea, like in these cases:
>
> 1. If your algorithm runs in a multi-threaded environment without exclusive access to the array, other threads might need to read it and won’t expect it to change.  
> 2. Even in a single-threaded setup, or if you have exclusive access while the algorithm runs, the array might still be needed later or by another thread once the lock is released.  
>
> In an interview, always check if it’s okay to overwrite the input. If you do, be ready to explain the trade-offs!

<iframe src="https://leetcode.com/playground/8LREekKX/shared" frameBorder="0" width="100%" height="361" name="8LREekKX"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input array `nums`.

- Time complexity: $O(n)$

    The algorithm iterates over the array from the first element to the third last element, performing a constant amount of work for each element. Specifically, for each element, it checks if the element is 0, and if so, it flips the current element and the next two elements. This operation is done in constant time $O(1)$ per iteration. Since the loop runs for $n - 2$ iterations, the overall time complexity is $O(n)$. Therefore, the overall time complexity remains $O(n)$.

- Space complexity: $O(1)$

    The algorithm uses a constant amount of extra space regardless of the input size. The only variables used are `n`, `count`, and the loop index `i`, all of which occupy constant space. The input array `nums` is modified in place, so no additional space is required for data structures. Therefore, the space complexity is $O(1)$.

---

We suggest solving [995. Minimum Number of K Consecutive Bit Flips](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips), as it is a more challenging version of [3191. Minimum Operations to Make Binary Array Elements Equal to One I](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i). The key difference is replacing `k = 3` with a general `k`.

---