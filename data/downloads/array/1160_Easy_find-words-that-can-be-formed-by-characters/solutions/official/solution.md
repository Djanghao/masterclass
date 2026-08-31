# Official Solution

**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solution/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solution/)

---

[TOC]

## Solution

---

### Approach 1: Count With Hash Map

**Intuition**

If you are not already familiar with hash maps, please check out our relevant [LeetCode explore card](https://leetcode.com/explore/learn/card/hash-table/).

In this problem, we need to determine which elements in `words` can be built using the letters from `chars`. A `word` can be built from `chars` if and only if the following condition is true:

For each unique character `c` in `word`, the frequency of `c` is not greater in `word` than it is in `chars`. That is, there are no characters that appear more in `word` than in `chars`.

If any character appears more in `word` than in `chars`, there won't be enough of that character in `chars` to build `word` with. To solve this problem, we will start by counting the frequency of every character in `chars` using a hash map `counts`.

Once we have calculated `counts`, we can check each `word` one by one. For a given `word`, we count the frequency of its characters using a hash map `wordCount`. Then, we can iterate over each unique character `c` in `wordCount`. For each character in `c`, we can find the frequency in `chars` by checking `counts[c]`. We can also find the frequency in `word` by checking `wordCount[c]`. We then compare these values.

If `counts[c] < wordCount[c]` for ANY character, the current word cannot be built. We will use a boolean flag `good` to indicate if a given `word` can be built or not. Initially, we set `good = true`. If we find `counts[c] < wordCount[c]` for any character, we set `good = false`. Once we have finished checking all the characters of a `word`, we check the flag `good`. If it is still `true`, we know we can build `word` and add the length of `word` to our answer.

**Algorithm**

1. Create a hash map `counts` that records the frequency of every character in `chars`.
2. Initialize the answer `ans = 0`.
3. Iterate over each `word` in `words`:
    - Create a hash map `wordCount` that records the frequency of every character in `words`.
    - Set `good = true`.
    - Iterate over each key `c` in `wordCount`. Let `freq = wordCount[c]`.
        - If `counts[c] < freq`, set `good = false` and break from the loop.
    - If `good = true`, add the length of `word` to `ans`.
4. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/3NSYWbDs/shared" frameBorder="0" width="100%" height="500" name="3NSYWbDs"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `chars`, $$m$$ as the length of `words` and $$k$$ as the average length of each word in `words`,

* Time complexity: $$O(n + m \cdot k)$$

    To calculate `counts`, we iterate over each character of `chars` once, costing $$O(n)$$.

    Next, we iterate over $$O(m)$$ elements in `words`. For each element, we calculate `wordCount` by iterating over the element, which costs $$O(k)$$. We then iterate over `wordCount`. As the input only contains lowercase English letters, this costs $$O(1)$$ since `wordCount` cannot have a length greater than `26`. Overall, the for loop costs $$O(m \cdot k)$$.

* Space complexity: $$O(1)$$

    We use extra space for `counts` and `wordCount`. However, the input only contains lowercase English letters. Thus, the size of these hash maps never exceed `26`, so we use $$O(1)$$ space.
    
<br/>

---

### Approach 2: Count With Array

**Intuition**

Because the input only contains lowercase English letters, we can use an array to implement `counts` and `wordCount` instead of a hash map. Each letter is assigned a unique integer in ASCII encodings and as these values are contiguous, we can subtract the ASCII value of `'a'` from the ASCII value of the letter to map it to a relative position in the alphabet. For example, `'a' - 'a'` results in 0, `'b' - 'a'` results in 1, `'c' - 'a'` results in 2, and so on. In this way, each letter can be mapped directly to an index in the array. 

Let's start by converting each letter to its position in the alphabet according to the rules above,

- We convert the letter `'a'` to the integer `0`.
- We convert the letter `'b'` to the integer `1`.
- We convert the letter `'c'` to the integer `2`.
- ...
- We convert the letter `'z'` to the integer `25`.

Now, we let `counts` and `wordCount` be an array of length `26`. We let `counts[x]` represent the frequency of `x` in `chars`, where `x` is the letter at position `x` in the alphabet. `wordCount` functions similarly.

Aside from this change, the algorithm is the same as in the previous approach.

**Algorithm**

1. Create an array `counts` of length `26`.
2. Iterate over each `c` in `chars`:
    - Increment `counts[c - 'a']`.
3. Initialize the answer `ans = 0`.
4. Iterate over each `word` in `words`:
    - Create an array `wordCount` of length `26` and calculate it for `word` in the same manner as `counts`.
    - Set `good = true`.
    - Iterate `i` from `0` until `26`:
        - If `counts[i] < wordCount[i]`, set `good = false` and break from the loop.
    - If `good = true`, add the length of `word` to `ans`.
5. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/YDWrAdsk/shared" frameBorder="0" width="100%" height="500" name="YDWrAdsk"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `chars`, $$m$$ as the length of `words`, and $$k$$ as the average length of each word in `words`,

* Time complexity: $$O(n + m \cdot k)$$

    To calculate `counts`, we iterate over each character of `chars` once, costing $$O(n)$$.

    Next, we iterate over $$O(m)$$ elements in `words`. For each element, we calculate `wordCount` by iterating over the element, which costs $$O(k)$$. We then perform a loop over `26` indices, costing $$O(1)$$. Overall, the for loop costs $$O(m \cdot k)$$.

* Space complexity: $$O(1)$$

    `counts` and `wordCount` both have a fixed length of `26`.
    
<br/>

---