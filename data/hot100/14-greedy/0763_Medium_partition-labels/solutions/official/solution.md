# Official Solution

**Link:** [https://leetcode.com/problems/partition-labels/solution/](https://leetcode.com/problems/partition-labels/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a string `s` consisting of lowercase letters, and our task is to partition it into the maximum number of contiguous groups while ensuring that each letter appears in only one group. This means that if a letter appears more than once in the string, all of its occurrences must be contained within the same partition. Our goal is to return a list of integers representing the sizes of these partitions rather than the partitions themselves.  

For example, in the string `"abcd"`, since no letter repeats, we can split it into the maximum number of groups: `["a", "b", "c", "d"]`, resulting in `[1,1,1,1]`. However, if we take `"aabbacc"`, the letter `'a'` appears multiple times, so we need to form a partition that includes all its occurrences, leading to `["aabba", "cc"]` with a response of `[5,2]`. Similarly, in `"abab"`, we might be tempted to split at `"aba"` and `"b"`, but since `'b'` appears in both parts, we must instead merge them into a single group, resulting in `["abab"]` with `[4]` as the output.  

A more natural example like `"bobhaspepper"` helps visualize this rule. Here, we get partitions like `["bob", "h", "a", "s", "peppe", "r"]` because each repeated letter is contained within its respective segment. The key challenge in solving this problem is correctly identifying the last occurrence of each letter to determine partition boundaries. If we attempt to split too early, we might create an invalid partition where a character appears in multiple groups, which is not allowed.  

---

### Approach 1: Two Pointers

#### Intuition

At first glance, the problem seems tricky because we need to break the string into contiguous partitions while ensuring that each character appears in at most one partition. The key challenge is figuring out where to split the string.  

To get a better sense of the problem, let's take an example: `s = "abacbc"`

If we try to make a partition at the first occurrence of a character, it might not work. For example, if we cut right after `'a'`, we'd get `"a"` and `"bacbc"`, but that wouldn't be valid because `'a'` appears again later in the string. This tells us that a partition must extend until the last occurrence of all characters within it.  

So, the first thing we should do is find out where each character appears for the last time. This helps us determine the boundaries of a partition dynamically while iterating through the string.

We start by scanning the string to record the last occurrence of each character in an index array. This helps us determine how far we must extend a partition to fully include any character we encounter.  

Now, we use two pointers:
- One pointer (`partitionEnd`) keeps track of the farthest point we need to reach for the current partition.  
- The other pointer (`partitionStart`) marks where the current partition begins.  

As we iterate through the string, we keep extending `partitionEnd` to the maximum last occurrence of any character encountered. Once we reach `partitionEnd`, we finalize the partition and store its size. Then, we update `partitionStart` for the next partition.  

Once we reach the end of this boundary, we record the partition size and move on to the next segment. By the end, we obtain the possible valid partitions, ensuring that no character appears in more than one.

![Two_Pointers](../Figures/763/greedy_approach_1.png)

#### Algorithm

- Create an array `lastOccurrence` of size `26` to store the last index of each character in `s`.
- Iterate through `s` and update `lastOccurrence` to record the last position of each character.
  
- Initialize `partitionStart` and `partitionEnd` to `0` to track the start and end of the current partition, respectively.
- Create a list `partitionSizes` to store the sizes of partitions.

- Iterate through `s`:
  - Update `partitionEnd` to the maximum of its current value and the last occurrence of the current character.
  - If the current index `i` reaches `partitionEnd`, it means the partition is complete:
    - Compute the partition size `(i - partitionStart + 1)` and add it to `partitionSizes`.
    - Update `partitionStart` to `i + 1` for the next partition.

- Return `partitionSizes` containing the sizes of all partitions.

#### Implementation

> Note: We are using an array of size 26 instead of a hash map to track the last occurrence of each character, since there can be at most 26 distinct letters in the string `s`. 

<iframe src="https://leetcode.com/playground/MN685Ka5/shared" frameBorder="0" width="100%" height="480" name="MN685Ka5"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input string `s` and $k$ be the number of unique characters in `s`.

- Time complexity: $O(n)$

    The algorithm iterates through the string twice. The first loop takes $O(n)$ time to store the index of the last occurrence of each character in the `lastOccurrence` array. The second loop, also running in $O(n)$ time, determines the partitions by tracking the end of each partition using the `lastOccurrence` array. Since both loops are linear and independent, the overall time complexity is $O(n)$.

- Space complexity: $O(k)$

    The algorithm uses a fixed-size array, `lastOccurrence`, of size 26 to store the last occurrence of each lowercase English letter. In the general case, the space required is proportional to the number of distinct letters in `s`. Thus, for an arbitrary alphabet (a set of distinct values) of size $k$, the space complexity of the algorithm is $O(k)$.
    
    The `partitionSizes` array, which stores the lengths of the partitions, is part of the output and is not included in the space complexity analysis, since it is required by the problem statement.

---

### Approach 2: Merge Intervals

#### Intuition

Instead of directly deciding partitions while scanning the string, another intuitive approach is to think in terms of character intervals. Each character appears within a specific range in the string, and our goal is to merge overlapping intervals to determine the correct partitions. This question becomes closely related to [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/description/)

To begin, we first identify where the occurrences of each character in the string start and end. The first occurrence of a character marks the beginning of its interval, and the last occurrence marks its end. If we can determine these intervals for all characters, we essentially get a set of segments that show where each letter is confined within the string.  

Once we have these intervals, we need to merge overlapping ones. If two intervals overlap, it means that the characters in those intervals must be part of the same partition since they share a dependency. The merging process ensures that we are not splitting a character across multiple partitions.  

As we iterate through the string, we keep track of the current partition’s boundaries. If we reach an index that extends beyond the current partition’s range, we update the boundary. When we reach the end of the partition, we record its size and start a new partition.  

This method allows us to process the string in two sweeps: the first one to determine character intervals and the second to merge them while forming partitions. In terms of complexity, there is not much difference from the above approach. Although it does have a little overhead in terms of space complexity, it can be more intuitive for those who already know the concept of merging intervals.

#### Algorithm

- Initialize an empty array, `partitionSizes` to store partition lengths.
- Create two arrays, `lastOccurrence` and `firstOccurrence` to track character positions.
- Initialize `partitionStart` and `partitionEnd` to `0` to track partition boundaries.

- Iterate through `s` to record the last occurrence of each character.

- Iterate through `s` again:
  - Store the first occurrence of the current character `s[i]` if not already set.
    - If a new partition starts at current index, i.e. `i > partitionEnd`, store the last partition size and update partition boundaries.
  - Update `partitionEnd` to the maximum of its current value and and the last occurrence of `s[i]` to ensure that all occurrences of `s[i]` are in the same (current) partition.

- Add the final partition size if it exists.

- Return `partitionSizes` containing partition lengths.

#### Implementation

> Note: We are using an array of size 26 instead of a hash map to track the last occurrence of each character, since there can be at most 26 distinct letters in the string `s`. 

<iframe src="https://leetcode.com/playground/XDkcMY5o/shared" frameBorder="0" width="100%" height="500" name="XDkcMY5o"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input string `s` and $k$ be the number of unique characters in `s`.

- Time complexity: $O(n)$

    The algorithm iterates through the string twice. The first loop runs in $O(n)$ time to store the last occurrence index of each character. The second loop also runs in $O(n)$ time to determine the partitions by checking the first and last occurrences of each character. Since both loops are linear and independent of each other, the overall time complexity is $O(n)$.

    The built-in functions used, such as `min` and `max`, operate in constant time $O(1)$, and the operations on the array are amortized $O(1)$. Thus, they do not significantly impact the overall time complexity.

- Space complexity: $O(k)$

    The algorithm uses two fixed-size arrays, `firstOccurrence` and `lastOccurrence`, of size 26 to store each character's interval boundaries. In the general case, the space required is proportional to the number of distinct letters in `s`. Thus, for an arbitrary alphabet (a set of distinct values) of size $k$, the space complexity of the algorithm is $O(k)$.
    
    The `partitionSizes` array, which stores the lengths of the partitions, is part of the output and is not included in the space complexity analysis since it is required by the problem statement.
    
---