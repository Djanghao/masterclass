# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solution/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solution/)

---

[TOC]

## Solution

---

### Overview

The challenge is inspired by traditional telephone keypads where each number key (2-9) corresponds to a group of letters. For instance, pressing the key `'2'` once corresponds to the letter `'a'`, pressing it twice corresponds to the letter `'b'`, and pressing it three times corresponds to the letter `'c'`. 

This problem offers a twist: we can remap the letters to the keys as we see fit. Each letter must be assigned to exactly one key, but a key can have any number of letters (including no letters), and the sets of letters on each key must be distinct. The objective is to remap these letters so that typing the given string `word` requires the fewest key presses.

Example: For the word "abc":
- If mapped traditionally (letters `a`, `b`, and `c` are mapped to key `2`), typing would require 1 + 2 + 3 = 6 presses.
- However, an optimal remapping might assign each letter to a different key, resulting in just 1 press per letter, for a total of 3 presses.

---

### Approach 1: Greedy Sorting

#### Intuition

To solve this problem, we use a greedy algorithm approach combined with sorting. Keeping in mind that we have 8 keys available (2-9), the primary intuition is to remap the keys so the 8 most frequently occurring characters in the given string are assigned as first key presses, the next most common 8 characters as second key presses, and so on. 

We begin by counting the occurrences of each letter using a counter, which provides the frequency of each distinct letter. Next, we sort these frequencies in descending order. 

Since there are 8 possible key assignments, we'll divide the frequency rank by 8 to group it as a first, second, or third key press. Note that dividing the frequencies by 8 will result in 0, 1, and 2. We must add 1 to this group number to get the actual number of presses required for letters in that group. Multiplying this by the number of times the character appears in the given string yields the total number of presses for that letter.

Finally, we will sum the total presses required to type the word. 

This greedy way, combined with sorting by frequency, ensures that each decision (assignment of letters to keys) is optimal for minimizing key presses.

#### Algorithm

- Initialize a frequency vector `frequency` of size 26 to store the count of each letter in the word.
  - Iterate through each character `c` in `word` and increment the count in `frequency` at the index corresponding to `c - 'a'`.
- Sort the `frequency` vector in descending order to prioritize letters with higher counts.
- Initialize a variable `totalPushes` to store the total number of key presses required.
- Iterate through the sorted `frequency` vector:
  - If the frequency of a letter is zero, break the loop as there are no more letters to process.
  - Calculate the number of pushes for each letter based on its position in the sorted list: `(i / 8 + 1) * frequency[i]`.
  - Accumulate this value in `totalPushes`.
- Return `totalPushes` as the minimum number of key presses required to type the word.

#### Implementation

<iframe src="https://leetcode.com/playground/btjgtrfB/shared" frameBorder="0" width="100%" height="500" name="btjgtrfB"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string.

- Time complexity: $O(n)$

    Iterating through the word string to count the frequency of each letter takes $O(n)$.

    Sorting the frequency array, which has a fixed size of 26 (for each letter in the alphabet), takes $O(1)$ because the size of the array is constant.

    Iterating through the frequency array to compute the total number of presses is $O(1)$ because the array size is constant.

    Overall, the dominant term is $O(n)$ due to the frequency counting step.

- Space complexity: $O(1)$

    Frequency array and sorting takes $O(1)$ space, as it always requires space for 26 integers.  

    Overall, the space complexity is $O(1)$ because the space used does not depend on the input size.

---

### Approach 2: Using Heap

#### Intuition

Following the initial approach that used sorting and a greedy strategy, we now explore a similar yet refined method.

First, we count the frequency of each character in the word using an unordered map (or dictionary), where each key represents a character, and its value indicates how many times it appears in the word.

Next, we use a priority queue (or max-heap) to efficiently manage these frequencies. The priority queue enables quick retrieval of the character with the highest frequency by giving the most frequent characters the highest priority.

As we process characters from the priority queue, we dynamically assign them to keys based on their frequencies. Specifically, at each iteration, we extract the character with the highest frequency and assign it to the key with the least number of characters assigned.

To facilitate this, we maintain a record of the number of letters assigned to each key press count. This helps us determine the next available key press count for assigning characters. For instance, once a key press count of 1 is fully utilized, we proceed to a key press count of 2, and so on.

We assign the character with the highest frequency to the least costly available key press count, updating our record to reflect this assignment and marking the key press count as occupied. This process continues until all characters are assigned.

Finally, we calculate the total number of key presses required by summing the product of each character’s frequency and its assigned key press count. This gives us the optimal total number of key presses needed to type the word.

#### Algorithm
 
- Create a frequency map `frequencyMap` to store the count of each letter in the input string `word`.
  - Iterate through `word` and for each character, increment its count in `frequencyMap`.

- Create a priority queue `frequencyQueue` to store the frequencies of letters in descending order.
  - Iterate through `frequencyMap` and push each frequency into `frequencyQueue`.

- Initialize a variable `totalPushes` to 0 to keep track of the total number of presses.
- Initialize an index variable `index` to 0.

- Calculate the total number of presses by processing the frequencies in the priority queue.
  - While `frequencyQueue` is not empty:
    - Add the product of `(1 + (index / 8))` and the top frequency from `frequencyQueue` to `totalPushes`.
    - Remove the top element from `frequencyQueue`.
    - Increment `index` by 1.

- Return `totalPushes` as the minimum number of presses needed.

The algorithm is visualized below:

> Note: As shown in Slide 4, when calculating `totalPushes`, we multiply by 1. This value represents `frequencyQueue.top()`, which is 1 in the visual example.

!?!../Documents/3016/approach2.json:920,440!?!

#### Implementation

<iframe src="https://leetcode.com/playground/6XujJS6T/shared" frameBorder="0" width="100%" height="500" name="6XujJS6T"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string.

- Time complexity: $O(n)$

    Iterating through the word string to count the frequency of each letter takes $O(n)$.

    Inserting each frequency into the priority queue and extracting the maximum frequency both operate with a time complexity of $O(k \log k)$, where `k` represents the number of distinct letters. Each of these operations—insertions, and extractions—is logarithmic due to the heap structure of the priority queue. However, since the number of distinct letters is limited to a maximum of 26 (one for each letter in the alphabet), the size of the priority queue remains constant and thus the time complexity effectively becomes $O(1)$ in practice.

    Overall, the dominant term is $O(n)$ due to the frequency counting step.

- Space complexity: $O(1)$

    The frequency map and priority queue take $O(26) = O(1)$ space, as it always requires a fixed space for 26 integers.  

    Overall, the space complexity is $O(1)$ because the space used does not depend on the input size.

---