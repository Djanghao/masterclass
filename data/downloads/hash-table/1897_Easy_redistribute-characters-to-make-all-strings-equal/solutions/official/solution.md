# Official Solution

**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solution/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solution/)

---

[TOC]

## Solution

---

### Approach 1: Count Character Frequencies

**Intuition**

The operation that we are allowed to perform is extremely powerful. We are allowed to move any character to any position in any string. As we are allowed to perform the operation an unlimited number of times, the only thing that matters is the letters we have available to use in `words`. Given these letters available to us, we can form any combination of words with their letters having any permutation we want.

So, what would it require to make every string equal? There are two requirements for a string to be equal:

1. The strings must have the same letters with the same frequencies. For example, `"aabccc"` has two `"a"`, one `"b"`, and three `"c"`.
2. The letters must be in the same positions.

We don't need to worry about requirement #2 because as we mentioned above, the operation is extremely powerful and we can create any order we want. So the important thing is that we make every string have the same letters with the same frequencies. If one string has five `"h"`, then every other string must also have five `"h"`, for example.

We will start by collecting all the letters available for us to use. We create a hash map `counts`, where `counts[letter]` tells us how many times `letter` appears in the input. We iterate over every `word` in `words`, and for each `word` we iterate over every character `c` and increment `counts[c]`.

Once we have calculated `counts`, we analyze each letter's frequency. Let's say that the length of `words` is `n`. If a given letter has a frequency of `val`, we need to allocate `val / n` copies to each string. This is only possible if `val / n` is an integer, i.e. `val` is divisible by `n`. We can check if `val` is divisible by `n` by taking the modulus. If `val % n = 0`, then `val` is divisible by `n`.

If a letter's frequency is divisible by `n`, we know we can allocate an equal number of copies of this letter to every string. Again, we don't need to worry about the positions mentioned in requirement #2, since we can create any order we want. If every letter's frequency can be evenly allocated, we are guaranteed to make equal strings and the overall task is possible. If ANY letter's frequency cannot be evenly allocated, the task is impossible.

**Algorithm**

1. Create a hash map `counts`.
2. Iterate over each string `word` in `words`:
    - Iterate over each character `c` in `word`:
        - Increment `counts[c]`.
3. Set `n = words.length`.
4. Iterate over each value `val` of `counts`:
    - If `val % n != 0`, return `false`.
5. Return `true`.

**Implementation**

<iframe src="https://leetcode.com/playground/AeqpT5qg/shared" frameBorder="0" width="100%" height="395" name="AeqpT5qg"></iframe>

Bonus Python 1-liner:

<iframe src="https://leetcode.com/playground/aKkqe7Vc/shared" frameBorder="0" width="100%" height="106" name="aKkqe7Vc"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `words` and $$k$$ as the average length of the elements in `words`,

* Time complexity: $$O(n \cdot k)$$

    To calculate `counts`, we iterate over every letter in the input. There are $$n \cdot k$$ letters, so this costs $$O(n \cdot k)$$ as hash map operations take constant time.

    Then, we iterate over the values of `counts`. Note that the input can only contain lowercase English letters. Thus, there will never be more than `26` values in `counts`, so this takes $$O(1)$$.

* Space complexity: $$O(1)$$

    The only extra space we are using is for `counts`. However, the input only contains lowercase English letters, so `counts` never grows larger than a size of `26`.
    
<br/>

---

### Approach 2: Count With Array

**Intuition**

Because the input only contains lowercase English letters, we can use an array to implement `counts` instead of a hash map. Each letter is assigned a unique integer in ASCII encodings and as these values are contiguous, we can subtract the ASCII value of `'a'` from the ASCII value of the letter to map it to a relative position in the alphabet. For example, `'a' - 'a'` results in `0`, `'b' - 'a'` results in `1`, `'c' - 'a'` results in `2`, and so on. In this way, each letter can be mapped directly to an index in the array.

In this approach, we will implement the same idea from the previous approach, except we will use an array of length `26` instead of a hash map for `counts`. We let `counts[i]` represent the frequency of the letter at position `i` in the alphabet. For example,

- `'a'` is at position `0` in the alphabet, so `counts[0]` represents the frequency of `'a'`.
- `'b'` is at position `1` in the alphabet, so `counts[1]` represents the frequency of `'b'`.
- ...
- `'z'` is at position `25` in the alphabet, so `counts[25]` represents the frequency of `'z'`.

**Algorithm**

1. Create an array `counts` of length `26`.
2. Iterate over each string `word` in `words`:
    - Iterate over each character `c` in `word`:
        - Increment `counts[c - 'a']`.
3. Set `n = words.length`.
4. Iterate over each value `val` of `counts`:
    - If `val % n != 0`, return `false`.
5. Return `true`.

**Implementation**

<iframe src="https://leetcode.com/playground/acxXCHNv/shared" frameBorder="0" width="100%" height="395" name="acxXCHNv"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `words` and $$k$$ as the average length of the elements in `words`,

* Time complexity: $$O(n \cdot k)$$

    To calculate `counts`, we iterate over every letter in the input. There are $$n \cdot k$$ letters, so this costs $$O(n \cdot k)$$.

    Then, we iterate over the values of `counts`, which has a length of `26`.

* Space complexity: $$O(1)$$

    The only extra space we use is for `counts`, which has a length of `26`.
    
<br/>

---