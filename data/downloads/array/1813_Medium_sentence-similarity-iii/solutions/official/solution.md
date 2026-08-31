# Official Solution

**Link:** [https://leetcode.com/problems/sentence-similarity-iii/solution/](https://leetcode.com/problems/sentence-similarity-iii/solution/)

---

[TOC]

## Solution

---

### Approach 1: Deque

#### Intuition

Given two string sentences `sentence1` and `sentence2`, we need to find if both the sentences are similar. Two sentences are similar if it is possible to insert an arbitrary sentence in one of the sentences to make them equal. All the words in the given sentences are separated by spaces.

Let's assume that `sentence2` is the bigger sentence and contains more words than `sentence1`. Now, to check if both sentences can be made identical, we need to check for two conditions:
- Matching the beginning (prefix): We compare words from the start of both sentences.
- Matching the end (suffix): We compare words from the end of both sentences.
If all the words of the smaller sentence match either the prefix or the suffix of the bigger sentence, then both sentences can be made equal by inserting an arbitrary sentence.

This can be explained with an example:
- Let's say `sentence1 = "hello jane"` and `sentence2 = "hello my name is jane"`.
- Comparing the prefixes of `sentence1` and `sentence2`, `hello` is the longest matching prefix.
- Similarly, `jane` is the longest common suffix.
- Observe that no word is left in the `sentence1`. Therefore, it can be converted to `sentence2` by adding the string `my name is`.

Deque allows for efficient insertion and popping operations from the front and the back in constant time. This is ideal because to check if a sentence can be matched as a prefix or suffix, we need to compare from both ends. So, we can use two deques and populate them with words from `sentence1` and `sentence2`.

We can pop the deques until the prefix words are equal for both. Similarly, we can pop them until the suffixes of both deques are equal. If one deque is emptied completely after this process, one sentence can be transformed into the other by removing the unmatched middle portion.

#### Algorithm

1. Split both sentences `s1` and `s2` into arrays of words and store them in two deques `deque1` and `deque2`.
2. Compare the prefixes (beginning of the strings):
   - While both deques are not empty and the front elements are equal, remove the front elements from both deques.
3. Compare the suffixes (ending of the strings):
   - While both deques are not empty and the last elements are equal, remove the last elements from both deques.
4. After comparing both the prefixes and suffixes, return `true` if either `deque1` or `deque2` is empty.

!?!../Documents/1813/Slideshow1.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/ev8EE8PT/shared" frameBorder="0" width="100%" height="497" name="ev8EE8PT"></iframe>

#### Complexity Analysis

Let $m$ be the size of the given `sentence1` string and $n$ be the size of `sentence2`.

- Time complexity: $O(m+n)$

    We iterate through the words of the `sentence1` and `sentence2` exactly once. The total sum of the length of the words is given by $m$ and $n$ for both sentences. Therefore, the total time complexity is given by $O(m+n)$.

- Space complexity: $O(m+n)$

    We store the words of both sentences in the deque. The total sum of the length of the words is given by $m$ and $n$ for both sentences. Therefore, the total space complexity is given by $O(m+n)$.

---

### Approach 2: Two Pointers

#### Intuition

In the deque-based approach, we compare and remove elements from both the front and back of two deques. Instead of popping from the front and back of a deque, we can simulate this process using two pointers, where the `start` pointer starts at the beginning (front) and the `end` pointer (j) starts at the end (back) of both sentences.

The goal is still the same: check if the sentences are similar by matching words from the beginning (prefix) and the end (suffix). If all words at the start and end match, the remaining words in the middle can be ignored, making the sentences similar. 

Initialize `start` and `end` at the beginning and end of each sentence, respectively. Move the pointers inward while the words at both ends match. Once the words stop matching, the middle words are ignored. If the pointers cross, meaning all necessary prefix and suffix words match, the sentences are considered similar.

#### Algorithm

1. Split both sentences `s1` and `s2` into arrays of words: `s1Words` and `s2Words`.
2. Initialize four variables:
   - `start` to 0, which will track matching words from the beginning.
   - `ends1` to the last index of `s1Words` and `ends2` to the last index of `s2Words`, which will track matching words from the end.
   - `s1WordsLength` and `s2WordsLength` to store the lengths of `s1Words` and `s2Words`.
3. If `s1WordsLength` is greater than `s2WordsLength`, swap the sentences by calling the function recursively with `s2` and `s1`.
4. Find the maximum number of matching words from the beginning of both arrays by incrementing `start` while the words at the current index are the same.
5. Find the maximum number of matching words from the end by decrementing `ends1` and `ends2` while the words at the current indices are the same.
6. If `ends1` is less than `start`, meaning all remaining words can be removed to make the sentences similar, return `true`. Otherwise, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/RvwrK7CS/shared" frameBorder="0" width="100%" height="500" name="RvwrK7CS"></iframe>

#### Complexity Analysis

Let $m$ be the size of the given `sentence1` string and $n$ be the size of `sentence2`.

- Time complexity: $O(m+n)$

    We iterate through the words of the `sentence1` and `sentence2` exactly once. The total sum of the length of the words is given by $m$ and $n$ for both sentences. Therefore, the total time complexity is given by $O(m+n)$.

- Space complexity: $O(m+n)$

    We store the words of both sentences in an array. The total sum of the length of the words is given by $m$ and $n$ for both sentences. Therefore, the total space complexity is given by $O(m+n)$.

---