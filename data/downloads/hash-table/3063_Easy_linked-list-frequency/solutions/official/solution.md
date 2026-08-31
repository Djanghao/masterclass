# Official Solution

**Link:** [https://leetcode.com/problems/linked-list-frequency/solution/](https://leetcode.com/problems/linked-list-frequency/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a linked list containing elements that are positive integers.

> The **frequency** of an element is the number of occurrences of that element in the array.

To solve the problem, we can break it down into two main steps:

1. Find the frequency of each element in the linked list.
2. Build a linked list with the frequencies.

---

### Approach 1: Count Frequencies

#### Intuition

**1. Find the frequency of each element in the linked list.**

We can find the frequency of each element in the linked list by counting the number of occurrences of each element, which we will store in a frequency table. We can create an array `frequencies` to store the frequency of each element. The frequency of an element is stored at `frequency[element - 1]`. 

Since the array is zero-indexed, the frequency of `1` is stored at `frequencies[0]`, the frequency of `2` is stored at `frequencies[1]`, and the frequency of `100` is stored at `frequencies[99]`. We will initialize `frequencies` to size $10^5$ because the maximum element in the linked list is guaranteed to be between $1$ and $10^5$ inclusive according to the constraints. To calculate the frequencies, we traverse the linked list, incrementing the frequency of each element by `1`.

**Note:** This approach uses an array for the frequency table. A hashmap could alternatively be used. Using an array for frequency counting has a constant time complexity for both insertion and retrieval operations, which can be faster than the average case time complexity of hashmap operations. However, this advantage comes with a trade-off: arrays are only suitable when the range of values is relatively small and can be mapped directly to array indices. In this solution, we leverage the fact that the range of input values and the number of input values are both between $1$ and $10^5$.

Using a hashmap might be a more flexible and efficient option if your input values can be negative or have a very large range. Hashmaps generally have constant average-case time complexity for insertion and retrieval operations, but they may have a higher constant factor compared to array operations.

**2. Build a linked list with the frequencies.**

The best practice is not to modify the input, so we will create a new linked list instead of modifying the given linked list. We iterate over `frequencies`, creating a new node for each element with the corresponding frequency and appending it to the end of the new linked list.

**Note:** The new linked list consists of nodes that store `frequency` values. We won't know which frequency corresponds to which element. This is okay because the result concerns the frequencies, not the values of the elements.

**Example:**

> **Input:** head = [1, 1, 2, 2, 2]
> 
> Frequency Array:
> | Index     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | ... |  $10^5 - 1$ |
> | --------- | - | - | - | - | - | - | - | --- | --- |
> | Element   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | ... | $10^5$ |
> | Frequency | 2 | 3 | 0 | 0 | 0 | 0 | 0 | ... |  0  |
>
> **Output:** 2 ⟶ 3

#### Algorithm

1. Set a variable `maxValue` to the maximum element value given in the constraints, $10^5$.
2. Initialize an array `frequencies` of size `maxValue` to store the frequency of each element. The frequency of an element is stored at `frequencies[element - 1]`
3. Initialize a ListNode `current` to `head` for iterating through the linked list.
4. Loop through the nodes in the linked list while `current != null`:
    - Increment the frequency of the element `current.val` by `1`.
    - Set `current` to `current.next` to progress to the next element in the linked list.
5. Initialize a dummy ListNode `freqHead` with the value `0` which will be the head of the linked list of frequencies. Set `current` to `freqHead`.
6. For each index of `frequencies`:
    - If `frequencies[index]` is greater than `0`:
        - Set `current.next` to a new ListNode with the value `frequencies[index]` to add a new frequency to the end of the new linked list.
        - Set `current` to `current.next` so `current` points to the new end of the linked list of frequencies.
7. Return `freqHead.next`, the first node that stores a frequency value. This skips the dummy node.
   


#### Implementation

<iframe src="https://leetcode.com/playground/HR4J6Yq9/shared" frameBorder="0" width="100%" height="497" name="HR4J6Yq9"></iframe>

#### Complexity Analysis

Let $n$ be the length of the linked list. Let $m$ be the maximum value in the linked list.

* Time complexity: $$O(n + m)$$

    Calculating the frequency of each element in the linked list takes $O(n)$.

    Building the linked list of frequencies takes $O(m)$.

    The total time complexity will be $O(n + m)$.


* Space complexity: $$O(m)$$

    We use a few variables and the array `frequencies`, which is size $O(m)$

---

### Approach 2: Hash Table

#### Intuition

The above approach iterates through the linked list once and through the array `frequencies` once. Let's develop a solution that makes only one pass.

Instead of storing an integer with the frequency of each element in an array, we can create a hashmap called `frequencies` to store the frequency of each element. The key is the element, and the value is a `ListNode` with its frequency. Each `ListNode` stores its next pointer, so as long as we have a reference to the first node in the sequence, we can maintain the linked list of frequencies.

We create an empty node, `freqHead`, to store the head of the new linked list of frequencies. We traverse the original linked list, processing the nodes. If the value of `current` is not yet in the `frequencies` table, we create a new `ListNode` with the frequency `1` and add it to the hashmap. If the `current`'s value is already in the hashmap, we increase the node's value by `1` at that key. When we create a new `ListNode`, we append it to the beginning of the new linked list.

The algorithm is visualized below:

!?!../Documents/3063/3063_slideshow.json:960,540!?!

#### Algorithm

1. Initialize a hashmap `frequencies` to store each element's frequency. The key is the element, and the value is a ListNode with its frequency.
2. Initialize a ListNode `current` to `head` for iterating through the original linked list.
3. Initialize a ListNode `freqHead` to `null` which will be the head of the linked list of frequencies.
4. Loop through the nodes in the linked list while `current != null`:
     - If `current.val` is in `frequencies`:
        - Set a node, `frequencyNode`, to the node storing the frequency of element `current.val`. 
        - Increment `frequencyNode.val` by `1`.
    - Otherwise, this is a new element:
        - Create a new ListNode `newFrequencyNode` with the value `1` and set its `next` field to `freqHead`.
        - Set `frequencies[current.val]` to `newFrequencyNode`.
        - Set `freqHead` to `newFrequencyNode`.
    - Set `current` to `current.next` to progress to the next node in the original linked list.
7. Return `freqHead`.  

#### Implementation

<iframe src="https://leetcode.com/playground/GWDXuKD6/shared" frameBorder="0" width="100%" height="480" name="GWDXuKD6"></iframe>

#### Complexity Analysis

Let $n$ be the length of the linked list.

* Time complexity: $O(n)$

    We iterate over the original linked list once to create the frequency hashmap and new linked list. On average, retrieving and adding values to a hashmap takes $O(1)$, so the time complexity is $O(n)$.

* Space complexity: $O(n)$

    We use a few variables and the hashmap `frequencies`, which is size $O(k)$ where $k$ is the number of distinct elements in the linked list. At worst, there can be $n$ distinct elements, so the space complexity is $O(n)$.

---