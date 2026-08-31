# Official Solution

**Link:** [https://leetcode.com/problems/make-the-prefix-sum-non-negative/solution/](https://leetcode.com/problems/make-the-prefix-sum-non-negative/solution/)

---

## Solution

---

### Overview

To put this problem in plain terms: our task is to determine how many operations need to be applied so that the running total of the numbers in `nums` is never negative. To modify `nums`, we are allowed to repeatedly take any element from the array and move it to the end.  

Looking at the second example of the problem description, we can see that we get a negative number if we take the total of the first two numbers: `3 - 5`. After we have applied the allowed operation one time, the running total of the array is as follows: `3`, `1`, `7`, `2`, where each number represents the sum of all the numbers leading up to that point.  

We call this 'running total' of sums a prefix sum array. In other words, the prefix sum at index `i` is the sum of the first `i + 1` elements of the array:  

$\text{prefix\_sum}[i] = \sum_{j=0}^{i} \text{nums}[j]$ 

A solution is **guaranteed to exist**, meaning that it is always possible to rearrange the array in a way that satisfies the condition.

---

### Approach: Greedy

#### Intuition

We want to process the array `nums` while ensuring that a running sum (which we'll call `prefixSum`) never becomes negative. As we iterate through `nums` from left to right, we keep updating `prefixSum` by adding each element. If `prefixSum` remains non-negative throughout, we don’t need to perform any operations. However, if it becomes negative at some index `i`, we must take action to restore it to a non-negative state.

At this point, we know that some elements in the subarray `nums[0...i]` must be moved to the end of the array. But which elements should we move? A naive approach would be to simply move the current element `nums[i]`, since it is the one that directly caused `prefixSum` to go negative. However, this is not always optimal. There may be earlier elements that are smaller (more negative) than `nums[i]`, and moving one of those instead would result in a larger `prefixSum`, reducing the chances of needing further operations later.

This insight leads us to a more efficient strategy: as we traverse `nums`, we maintain a record of the most negative values encountered so far. When `prefixSum` turns negative, instead of blindly moving the latest element, we remove the most negative element seen so far, ensuring that we regain the maximum possible `prefixSum` with the fewest moves. 

To efficiently retrieve the most negative element when needed, we use a **min-heap (priority queue)**. Please visit our [Explore Card](https://leetcode.com/explore/featured/card/heap/) to learn more about it. This data structure allows us to insert elements as we iterate and efficiently extract the smallest (most negative) element whenever `prefixSum` needs to be restored. Whenever `prefixSum` turns negative, we pop the most negative value from the heap and subtract it from `prefixSum`, effectively "removing" it from the prefix sum calculation. Each such removal counts as an operation, which we track using a counter.

One crucial observation is that once we complete the iteration, we don’t need to revisit the moved elements. The problem guarantees that a solution always exists, meaning that the total sum of `nums` is non-negative. This ensures that once we have restored `prefixSum` to a non-negative state, adding the remaining elements (including the moved ones) will not cause it to become negative again. Therefore, the number of operations we performed is our final answer.

<details>
  <summary>Proof by Induction</summary>

  <h4>Base Case (n = 1):</h4>
  <p>
    For an array of size 1, the prefix sum is simply the single element. If the element is non-negative, no operations are needed. If the element is negative, it must be moved to the end of the array (which is itself), and the prefix sum becomes 0. This satisfies the condition, and the number of operations is 1. The base case holds.
  </p>

  <h4>Inductive Hypothesis:</h4>
  <p>
    Assume that for an array of size $k$, the algorithm correctly maintains a non-negative prefix sum by performing the minimal number of operations. That is, the algorithm ensures that the prefix sum is non-negative at every step, and the number of operations is minimized.
  </p>

  <h4>Inductive Step (n = k + 1):</h4>
  <p>
    Consider an array of size $k + 1$. Let the array be $nums = [a_1, a_2, \dots, a_{k+1}]$. We need to show that the algorithm works correctly for this array.
  </p>

  <ol>
    <li>
      <strong>Prefix Sum Calculation:</strong>
      <ul>
        <li>As we iterate through the array, we maintain a running prefix sum $S$. At each step $i$, we add $a_i$ to $S$.</li>
        <li>If $S$ remains non-negative, no operation is needed, and we proceed to the next element.</li>
      </ul>
    </li>
    <li>
      <strong>Handling Negative Prefix Sum:</strong>
      <ul>
        <li>If $S$ becomes negative at some step $i$, we need to move one or more elements from the subarray $nums[0..i]$ to the end of the array to make $S$ non-negative.</li>
        <li>By the inductive hypothesis, the algorithm has already handled the first $k$ elements correctly, ensuring that the prefix sum up to $k$ is non-negative with the minimal number of operations.</li>
      </ul>
    </li>
    <li>
      <strong>Optimality of Moving the Most Negative Element:</strong>
      <ul>
        <li>When $S$ becomes negative at step $i = k + 1$, the algorithm uses a min-heap to identify the most negative element encountered so far. Moving this element to the end maximizes the prefix sum $S$ and minimizes the number of operations.</li>
        <li>This is because moving a more negative element (rather than the current element $a_{k+1}$) results in a larger increase in $S$, reducing the likelihood of needing additional operations in the future.</li>
      </ul>
    </li>
    <li>
      <strong>Termination:</strong>
      <ul>
        <li>After processing all $k + 1$ elements, the algorithm ensures that the prefix sum is non-negative. Since the total sum of the array is non-negative (by the problem's guarantee), the elements moved to the end do not violate the non-negativity condition.</li>
      </ul>
    </li>
    <li>
      <strong>Minimal Operations:</strong>
      <ul>
        <li>By always moving the most negative element when necessary, we minimize the number of operations. This is because each operation contributes the maximum possible increase to the prefix sum, reducing the need for further operations.</li>
      </ul>
    </li>
  </ol>

  <h4>Conclusion:</h4>
  <p>
    By the principle of mathematical induction, the algorithm works correctly for arrays of any size $n$. It maintains a non-negative prefix sum at every step and performs the minimal number of operations to achieve this.
  </p>

</details>

!?!../Documents/2599/2599_make_the_prefix_sum_non_negative.json:960,720!?! <br>

#### Algorithm

1. Initialize Variables:

    - `operations = 0`: A Counter for the number of operations performed.
    - `prefixSum = 0`: A Variable to track the running sum of elements in `nums`.
    - `pq`: A priority queue (min-heap) to store negative numbers encountered in the array.

2. Iterate through the array `nums`:

    - For each element `num` in the array:
        - If `num` is negative, add it to the priority queue `pq`.
        - Add `num` to `prefixSum` to update the running sum.
        - If `prefixSum` becomes negative:
            -  Remove the smallest element (most negative) from the `pq`
            -  Subtract the popped value from `prefixSum`.
            - Increment `operations`

3. After iterating through all elements, return `operations`.

#### Implementation

<iframe src="https://leetcode.com/playground/RQZv9WfN/shared" frameBorder="0" width="100%" height="497" name="RQZv9WfN"></iframe>

#### Complexity Analysis

Here, $N$ is the number of elements in the array `nums`.

- Time complexity: $O(N \log N)$

  We traverse the array from left to right, adding negative integers to a priority queue. If at any point the `prefixSum` becomes negative, we remove an element from the queue to make it non-negative again. Each element can be pushed and popped only once from the queue and hence the total time complexity is equal to $O(N \log N)$.

- Space complexity: $O(N)$

  The only space required apart from the variables is the priority queue whose size can be $O(N)$. Thus, the space complexity is equal to $O(N)$.

---