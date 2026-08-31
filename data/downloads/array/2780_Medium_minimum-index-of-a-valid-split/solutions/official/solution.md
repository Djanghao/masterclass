# Official Solution

**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solution/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solution/)

---

[TOC]

## Solution

---

### Overview

We’re given an array `nums` of length `n` that has a **dominant element** `x`, meaning `x` appears more than half the time in the array. Our task is to find the earliest index where we can split the array into two parts such that both parts have the same dominant element. If no such split exists, we return `-1`.

We can look at an example of splits being evaluated:

!?!../Documents/2780/slideshow.json:960,540!?!

From this example, we can see that there are specific characteristics we can evaluate in each split. To begin, we start forming splits at the beginning of `nums` to find the earliest occurrence of a valid split. Furthermore, in each split, we have to track the most frequent element, the number of occurrences of that element, and the current size of each split array. Our approaches will be focused on determining these values to find the minimum index of a valid split.

---

### Approach 1: Hash Map

#### Intuition

The main challenge in this problem is keeping track of how often each element appears in both split arrays, so we can determine whether a split is valid based on the dominant element in each half. To achieve this, we need a way to store and update element frequencies dynamically as we iterate through the array. A **hashmap** is a natural choice because it allows us to efficiently associate counts with specific elements and update them in constant time.

To implement this, we use two hashmaps: `firstMap` for tracking the frequency of elements in the first split array and `secondMap` for the second split array. Initially, we treat the entire `nums` array as belonging to the second split, so we populate `secondMap` with all elements of `nums`. This represents the scenario before any splits are made.

Now, we iterate through `nums`, progressively moving elements from `secondMap` to `firstMap` as we consider different split points. At each `index`, we move the current element `num` from `secondMap` to `firstMap` by decrementing its count in `secondMap` and incrementing its count in `firstMap`. This simulates shifting the boundary between the two split arrays.

At each step, we check whether `num` is the dominant element in both halves. The first split array spans indices `[0, index]` and has size `index + 1`, while the second split array spans `[index + 1, n - 1]` and has size `n - index - 1`. For `num` to be dominant in both parts, it must appear more than half the size of each array, meaning:

$\text{firstMap}[num] \times 2 > \text{size of first array} \quad \text{and} \quad \text{secondMap}[num] \times 2 > \text{size of second array}$

If both conditions are met, we have found a valid split and return `index`. If we finish iterating without finding a valid split, we return `-1`.

#### Algorithm

- Initialize:
    - `n` to the size of `nums`.
    - `firstMap` and `secondMap` as hashmaps to track the numbers in the first and second half of the split, respectively.
- Iterate through `nums`, adding each element to `secondMap`.
- Iterate through `nums` again. For each number, `num`, at `index`:
    - Decrement `secondMap[num]` by `1`.
    - Increment `firstMap[num]` by `1`.
    - If `firstMap[num] * 2 > index + 1` and `secondMap[num] * 2 > n - index - 1`, return `index`, since `num` is the dominant element in both halves of the current split.
- Return `-1`, indicating that no valid split was found.

#### Implementation

<iframe src="https://leetcode.com/playground/NSRkYXGY/shared" frameBorder="0" width="100%" height="500" name="NSRkYXGY"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time Complexity: $O(N)$

    The algorithm involves two main steps: populating the `secondMap` with the frequency of each element in the list and iterating through the list to check for a valid split. Both steps involve a single pass through the list, resulting in a total of $2n$ operations. Since constants are ignored in Big-O notation, the overall time complexity is $O(n)$.

    Note: The operations on `firstMap` and `secondMap` (such as `get`, `put`, and `remove`) are considered $O(1)$ on average due to the nature of hash maps.

* Space Complexity: $O(N)$

    The `firstMap` and `secondMap` grow as the algorithm processes the list, and their size depends on the number of unique elements in `nums`. Since the number of unique elements can be up to $n$, the space complexity is $O(n)$. No additional data structures are used, so the space complexity is dominated by the hash maps.

---

### Approach 2: Boyer-Moore Majority Voting Algorithm

#### Intuition

In the previous approach, we used hashmaps to keep track of element frequencies in each split, but this required extra space proportional to the size of `nums`. Since maintaining these frequency maps can be costly in terms of memory, we need a way to determine the dominant element without storing counts for every possible number.  

To optimize space usage, we first focus on identifying **which element** can be the dominant one in both split arrays of `nums`.

Here, we can deduce our options based on the information we are given. Let's say `a` and `b` are the sizes of the first and second split array, respectively. If we find a valid split where `x` is the dominant element in each split array, then its frequency, `freq(x)` is greater than `a/2` in the first array and `b/2` in the second. Combining these totals together, the total frequency of the array, `totalFreq(x)`, is greater than `(a+b)/2`, where `a+b` represents the total size of the array. In other words, the element `x` is guaranteed to comprise more than half the elements of the entire array. This leaves only one option for the value of `x`: **the dominant element of the entire array**.

As such, if a valid split exists, the dominant element in both halves must also be the dominant element of `nums`. This means that the first step is to determine the element `x` that appears the most in `nums`.  

This is where the **Boyer-Moore Majority Voting Algorithm** comes in. This algorithm efficiently finds a majority element (if it exists) in linear time without using extra space. The key observation behind it is that if an element appears more than `n/2` times, then it must remain after canceling out other elements. By iterating through `nums` while maintaining a candidate element and a counter, we can determine the element `x` that appears the most.  

Once we have `x`, we need to check if it can be the dominant element in a valid split. We count how often `x` appears in `nums` (`xCount`). Then, we iterate through `nums` again to check each possible split at `index`. We track how many times `x` appears in the first split (`count`) and deduce how many times it remains in the second split (`xCount - count`). Since the two split arrays have sizes `index + 1` and `n - index - 1`, we check if:  

$\text{count} \times 2 > \text{size of first array} \quad \text{and} \quad (\text{xCount} - \text{count}) \times 2 > \text{size of second array}$

If both conditions hold, we return `index` as the earliest valid split. Otherwise, we continue checking until we either find a valid split or determine that no such split exists (returning `-1`).  

#### Algorithm

- Initialize:
    - `x` to the first element of `nums` to represent the dominant element of `nums`.
    - `count` to `0` to track the count of a given element.
    - `xCount` to `0` to track the count of the dominant element.
    - `n` to the size of `nums`.
- Iterate through `nums` to find the dominant element. For each element, `num`:
    - If `num` equals `x`, increment `count` by `1`.
    - Else, decrement `count` by `1`.
    - If `count` equals `0`, meaning there are more occurrences of `num` than `x`:
        - Set `x` to `num`.
        - Set `count` to `1`.
- Iterate through `nums` to find the frequency of the majority element:
    - If the current element equals `x`, increment `xCount` by `1`.
- Set `count` back to `0`.
- Iterate through `nums` to find a valid split. For each `index`:
    - If the current number equals `x`, increment `count` by `1`.
    - Initialize `remainingCount` to `majorityCount - count`, the number of occurrences of the dominant element in the second split array.
    - If `count * 2 > index + 1` and `remainingCount > n - index - 1`, return `index`, since the `x` is the dominant element in both halves of the split.
- Return `-1`, indicating that no valid split was found.

#### Implementation

<iframe src="https://leetcode.com/playground/Tx93UA7r/shared" frameBorder="0" width="100%" height="500" name="Tx93UA7r"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time Complexity: $O(N)$

    The algorithm consists of three main steps: finding the majority element, counting its frequency, and checking for a valid split. Each step involves a single pass through the array, resulting in a total of $3n$ operations. Since constants are ignored in Big-O notation, the overall time complexity is $O(n)$.

* Space Complexity: $O(1)$

    The space required does not depend on the size of the input value or any data structures that require additional space, so only constant $O(1)$ space is used.

---