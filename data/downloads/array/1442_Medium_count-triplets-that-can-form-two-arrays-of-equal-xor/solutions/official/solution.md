# Official Solution

**Link:** [https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solution/](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solution/)

---

[TOC]

## Solution

---

### Overview

We need to find triplets of indices $(i, j, k)$ in a given array of integers such that the bitwise **XOR** of elements between indices `i` and `j - 1` is equal to the bitwise **XOR** of elements between indices `j` and `k`.

Define $a$ and $b$ as follows:
- $a = \text{arr}[i] \oplus \text{arr}[i + 1] \oplus \ldots \oplus \text{arr}[j - 1]$
- $b = \text{arr}[j] \oplus \text{arr}[j + 1] \oplus \ldots \oplus \text{arr}[k]$

Where $\oplus$ denotes the bitwise **XOR** operation.

Return the number of triplets $(i, j, k)$ where $a == b$.

Before moving ahead let us discuss a few points about **XOR** operations:

1. **XOR Properties**:
   - **XOR** is both associative and commutative, meaning the order in which you **XOR** numbers doesn't matter.
   - $a \oplus a = 0$ and $a \oplus 0 = a$.

2. **Equal XOR Condition**:
    - For $a = b$, this implies:
    $$\text{arr}[i] \oplus \text{arr}[i + 1] \oplus \ldots \oplus \text{arr}[j - 1] = \text{arr}[j] \oplus \text{arr}[j + 1] \oplus \ldots \oplus \text{arr}[k]$$
    - Using the associative property of **XOR**, we can rewrite the combined **XOR** from $i$ to $k$ as:
    $$\text{arr}[i] \oplus \text{arr}[i + 1] \oplus \ldots \oplus \text{arr}[j - 1] \oplus \text{arr}[j] \oplus \text{arr}[j + 1] \oplus \ldots \oplus \text{arr}[k] = 0$$
    - If we let $X(i, k)$ be the **XOR** of elements from $i$ to $k$:
    $$X(i, k) = 0$$
    - This means if the total **XOR** from $i$ to $k$ is zero, then any $j$ between $i$ and $k$ (inclusive) create a triplet with $i$ and $k$ that satisfies $a = b$.

3. **Prefix XOR**:
   - Define $\text{prefix}[x]$ as the **XOR** of all elements from the start up to index $x$:
     $$
     \text{prefix}[x] = \text{arr}[0] \oplus \text{arr}[1] \oplus \ldots \oplus \text{arr}[x]
     $$
   - Using this, the problem can be reduced to finding indices where:
     $$
     \text{prefix}[i-1] == \text{prefix}[k]
     $$
   - The reason for this is because:
     $$
     \text{prefix}[k] = \text{prefix}[j-1] \oplus (\text{arr}[j] \oplus \text{arr}[j+1] \oplus \ldots \oplus \text{arr}[k])
     $$

> If you are not familiar with Bitwise operators, we recommend you read our **[Bit Manipulation Explore Card](https://leetcode.com/explore/learn/card/bit-manipulation/)**.

---

### Approach 1: Brute Force With Prefix

#### Intuition

We can exhaustively iterate through every possible triplet $(i, j, k)$ and check if the **XOR** of the subarrays $(i, j-1)$ and $(j, k)$ is equal.

First, we iterate over each possible starting index `start` of the triplet. For each `start`, we initialize a variable `xorA` to store the **XOR** (bitwise exclusive OR) of elements from the `start` index to the index just before the `mid` index. We then iterate over each possible `mid` index, updating `xorA` by **XOR**ing it with the element at the index just before `mid`.

Next, for each `mid` index, we initialize another variable, `xorB`, to store the **XOR** of elements from the `mid` index to the end of the array. We iterate over each possible ending index `end`, starting from `mid`, updating `xorB` by **XOR**ing it with the element at the `end` index.

After computing `xorA` and `xorB`, we check if they are equal. If they are, it means that the **XOR** of elements in the first subarray (from `start` to `mid - 1`) is equal to the **XOR** of elements in the second subarray (from `mid` to `end`). In this case, we have found a valid triplet satisfying the condition, so we increment the result counter.

#### Algorithm

- Initialize a result variable `count` to 0 to store the count of valid triplets.
- Iterate over each possible starting index `start`.
    - Initialize `xorA` to 0 (**XOR** value for the subarray from `start` to `mid - 1`)
    - Iterate over each possible middle index `mid`.
        - Update `xorA` by **XOR**ing it with `arr[mid - 1]` (including the element at `mid - 1` in the **XOR** computation).
        - Initialize `xorB` to 0 (**XOR** value for the subarray from `mid` to `end`).
        - Iterate over each possible ending index `end`, starting from `mid`. 
            - Update `xorB` by **XOR**ing it with `arr[end]`. 
            - If we find a valid triplet where the **XOR** of the first subarray is equal to the **XOR** of the second subarray(`xorA == xorB`), increment the count of valid triplets `count`.
- Return the final count of valid triplets `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/HbbretW3/shared" frameBorder="0" width="100%" height="500" name="HbbretW3"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input array.  

- Time complexity: $O(n^3)$

    There are three nested loops, each iterating over the entire array, resulting in a time complexity of $O(n \cdot n \cdot n) = O(n^3)$.

- Space complexity: $O(1)$

    We only use a few variables (`count`, `xorA`, `xorB`) to store intermediate results, which take constant space.

---

### Approach 2: Nested Prefix **XOR**

#### Intuition

To improve the time complexity, we can precompute the prefix **XOR** of the array. The prefix **XOR** at an index `i` is the **XOR** of all elements from the beginning of the array up to (and including) index `i`. 

First, we create a modified copy of the input array and insert 0 at the beginning to facilitate **XOR** operations. We then perform **XOR** operations on consecutive elements in this modified array, effectively storing the prefix **XOR** at each index.

Next, we iterate through the modified array (`prefixXOR`), considering each possible pair of indices `start` and `end`, where `start` is less than `end`. We use the equal **XOR** condition mentioned in the overview. If the prefix **XOR** values at indices `start` and `end` are equal, it means the **XOR** of elements between `start` and `end` (excluding `start` and `end`) is 0. In this case, we increment the result counter by the count of valid triplets that can be formed with `start` as the start index and `end` as the end index, which is `end - start - 1`.

By precomputing the prefix **XOR**, we became a little more efficient in counting the triplets without explicitly iterating over all possible triplets.

#### Algorithm
 
- Create a modified copy `prefixXOR` of the input array `arr` to avoid modifying the original array.
- Insert 0 at the beginning of the modified array `prefixXOR` to handle the case when the **XOR** operation is performed on the first element.
- Calculate the prefix **XOR** at each position in `prefixXOR` so that we can reference the precomputed **XOR** of elements from the beginning up to each index.
    - Iterate over `prefixXOR` starting from index 1.
        - Update `prefixXOR[i]` by **XOR**ing it with `prefixXOR[i - 1]`.
- Initialize `count` with 0 to store the count of valid triplets.
- Iterate over `prefixXOR` starting from index 0:
    - Now, iterate over `prefixXOR` starting from `start + 1`:
        - If `prefixXOR[start] == prefixXOR[end]` (found a pair of indices `start` and `end` where the **XOR** of elements between them is 0)
            - Increment `count` by `end - start - 1` (count of valid triplets with `start` as start and `end` as end).
- Return the final count of valid triplets `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/bVmyuRBY/shared" frameBorder="0" width="100%" height="500" name="bVmyuRBY"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input array.  

* Time complexity: $O(n^2)$

    There are two nested loops, each iterating over the array, resulting in a time complexity of $O(n \cdot n) = O(n^2)$.

* Space complexity: $O(n)$

    We create a new array `prefixXOR` of the same size as the input array, taking $O(n)$ space. 
    
    > Note: This approach could be implemented with $O(1)$ space by modifying the original array.

---

### Approach 3: Two Pass Prefix **XOR** 

#### Intuition

Building upon the previous approach, we can further optimize the time complexity to $O(n)$ by using two helper data structures: a map `countMap` to store the count of each **XOR** value encountered, and a map `totalMap` to store the total sum of indices for each **XOR** value. 

The key observation is that for a given **XOR** value `x`, the contribution of `x` to the result is the count of occurrences of `x` multiplied by the number of valid triplets that can be formed with `x` as the middle **XOR** value. The number of valid triplets can be calculated as `(i - 1) - totalSum`, where `i` is the current index, and `totalSum` is the sum of indices where `x` occurred previously.

For example, let's say at index `i = 5`, the **XOR** value `x` is `6`. If `6` occurred previously at indices `1` and `2`, then `countMap[6] = 2` and `totalMap[6] = 3` (the sum of indices `1 + 2`). Now, the number of valid triplets at index `i = 5` is `2 X (5 - 1) - 3 = 2 X 4 - 3 = 5`. So, the contribution of `6` to the total count of valid triplets is `5`. This calculation is performed for each **XOR** value encountered in the array, and the contributions are added up to find the total count of valid triplets.

<details>
<summary>The 5 valid triplets that can be formed with the XOR value `6` at index `5`, considering the previous indices `1` and `2`, are:
</summary>
• (2, 3, 5) • (2, 4, 5) • (2, 5, 5) • (3, 4, 5) • (3, 5, 5)

</details>
&nbsp;

We maintain a map `countMap` with a key-value pair `{0: 1}` to handle the case when the **XOR** value is 0. Then, we iterate through the array and consider each index `i`. For the current index `i`, we calculate the contribution of the current **XOR** value (`prefixXOR[i]`) to the result by adding `countMap[prefixXOR[i]] * (i - 1) - totalMap[prefixXOR[i]]` to the result counter.

How did we develop this approach?

We want to find the count of triplets $(i, j, k)$ such that the **XOR** of elements from index $i$ to $j-1$ is equal to the **XOR** of elements from index $j$ to $k$. Let's call this common **XOR** value $x$.

Now, consider a specific **XOR** value $x$. We want to find the contribution of $x$ to the total count of triplets. To do this, we need to know two things:

1. The count of occurrences of $x$ in the `prefixXOR` array. Let's call this $countX$.
2. The number of valid triplets that can be formed with $x$ as the middle **XOR** value.

For the second part, let's think about what it means for $x$ to be the middle **XOR** value in a triplet $(i, j, k)$. It means that the **XOR** of elements from index $i$ to $j-1$ is $x$, and the **XOR** of elements from index $j$ to $k$ is also $x$.

Now, let's choose a specific starting index $i$. We want to find the number of valid triplets that can be formed with this starting index $i$ and $x$ as the middle **XOR** value. To do this, we need to find the number of possible ending indices $k$ such that the XOR of elements from index $j$ to $k$ is $x$, where $j$ is the index just after $i$.

Here's the key observation: if we know the indices where $x$ has occurred previously, we can calculate the number of valid triplets with $i$ as the starting index and $x$ as the middle **XOR** value.

Let's say $x$ has occurred at indices $idx_1$, $idx_2$, $idx_3$, ..., $idx_m$ before the current index $i$. Then, the number of valid triplets with $i$ as the starting index and $x$ as the middle **XOR** value is:

$(i - 1) - (idx_1 + idx_2 + ... + idx_m)$

Here's why:
- $(i - 1)$ represents the number of possible middle indices $j$ (since $j$ is just after $i$).
- $idx_1 + idx_2 + ... + idx_m$ represents the sum of indices where $x$ has occurred previously.
- Subtracting this sum from $(i - 1)$ gives us the number of valid triplets, because we need to exclude the cases where the middle **XOR** value is $x$, but the ending **XOR** value is not $x$.

So, the contribution of $x$ to the total count of triplets is:

$countX \times (i - 1) - (idx_1 + idx_2 + ... + idx_m)$

This is exactly what the key observation states. By maintaining the count of occurrences of each **XOR** value ($countX$) and the sum of indices where each **XOR** value has occurred ($totalSum = idx_1 + idx_2 + ... + idx_m$), we can efficiently calculate the contribution of each **XOR** value to the total count of triplets.

After calculating the contribution, we increment `countMap[prefixXOR[i]]` to count the occurrences of the current **XOR** value. We also update `totalMap[prefixXOR[i]]` by adding `i` to keep track of the total sum of indices for the current **XOR** value.

In summary, we preprocess the array by inserting a 0 at the beginning and computing the prefix **XOR**. Next, we initialize maps to store counts and totals of **XOR** values encountered during the iteration. While iterating through the array, we calculate the contribution of each element to the result count and update the count and total of each **XOR** value encountered. Finally, we return the total count of valid triplets found.

#### Algorithm

- Create a modified copy `prefixXOR` of the input array `arr` to avoid modifying the original array.
- Insert 0 at the beginning of the modified array `prefixXOR` to handle the case when the **XOR** operation is performed on the first element.
- Calculate the prefix **XOR** of `prefixXOR` to precompute the **XOR** of elements from the beginning up to each index.
    - Iterate over `prefixXOR` starting from index 1:
        - Update `prefixXOR[i]` by **XOR**ing it with `prefixXOR[i - 1]`.
- Initialize `count` with 0 to store the count of valid triplets.
- Initialize `countMap` with `{0: 1}` to store the count of occurrences of each **XOR** value, initialized with the count of 0 as 1.
- Initialize `totalMap` as an empty map to store the sum of indices where each **XOR** value has occurred.
- Iterate over `prefixXOR`:
    - Calculate the contribution of `prefixXOR[i]` to `count` using `countMap[prefixXOR[i]]` and `totalMap[prefixXOR[i]]` (based on the count and sum of indices for the current **XOR** value).
        - Update `count` with the contribution.
    - Increment `countMap[prefixXOR[i]]` by updating the count of the current **XOR** value.
    - Update `totalMap[prefixXOR[i]]` by adding `i` to update the sum of indices for the current **XOR** value.
- Return the final count of valid triplets `count`.

The algorithm is visualized below:

!?!../Documents/1442/approach3.json:975,587!?!

#### Implementation

<iframe src="https://leetcode.com/playground/ihEyhKAi/shared" frameBorder="0" width="100%" height="500" name="ihEyhKAi"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input array.  

- Time complexity: $O(n)$

    There are two different loops iterating over the array, resulting in a time complexity of $O(2 \cdot n)$, which can be simplified to $O(n)$.

- Space complexity: $O(n)$

    In the worst case, each element in the array can have a unique **XOR** value, requiring $O(n)$ space to store the counts and totals in the maps.

---

### Approach 4: One Pass Prefix **XOR** 

#### Intuition

This approach is a slight variation of the previous one. The main difference is that it combines the prefix **XOR** computation and result calculation in a single pass through the array, whereas the third approach performs these steps separately.

Here we eliminate the need for a separate prefix **XOR** precomputation step. Instead, we maintain a running prefix variable that stores the **XOR** of elements up to the current index. We update this prefix variable as we iterate through the array by **XOR**ing it with the current element: `prefix ^= arr[i]`

By maintaining this running prefix, we can calculate the contribution of the current **XOR** value (prefix) to the result on the fly, without the need for precomputed prefix **XOR** values.

The formula for calculating the contribution remains the same as in the third approach: `count += countMap[prefix] * i - totalSum[prefix]`
The difference is that we use the running prefix value instead of a precomputed prefix **XOR** array.

#### Algorithm
 
- Initialize `count` with 0 to store the count of valid triplets.
- Initialize `prefix` with 0 to store the running **XOR** value.
- Initialize `countMap` with `{0: 1}` to store the count of occurrences of each **XOR** value, initialized with 0 count as 1.
- Initialize `totalMap` as an empty map to store the sum of indices where each **XOR** value has occurred.
- Iterate over `arr`:
    - Update `prefix` by **XOR**ing it with `arr[i]` (the running **XOR** value).
    - Calculate the contribution of `prefix` to `count` using `countMap[prefix]` and `totalMap[prefix]` (based on the count and sum of indices for the current **XOR** value).
        - Update `count` with the contribution.
    - Increment `countMap[prefix]` by updating the count of the current **XOR** value.
    - Update `totalMap[prefix]` by adding `i + 1` to update the sum of indices for the current **XOR** value.
- Return the final count of valid triplets `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/gZcVdfhV/shared" frameBorder="0" width="100%" height="500" name="gZcVdfhV"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input array.  

* Time complexity: $O(n)$

    There is only a single loop iterating over the array, resulting in a time complexity of $O(n)$.

* Space complexity: $O(n)$

    In the worst case, each element in the array can have a unique **XOR** value, requiring $O(n)$ space to store the counts and totals in the maps.

---