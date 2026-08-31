# Official Solution

**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solution/](https://leetcode.com/problems/add-bold-tag-in-string/solution/)

---

[TOC]

## Solution

---

### Approach: Mark Bold Characters

**Intuition**

First, let's understand the two rules given in the problem description.

1. If two such substrings overlap, you should wrap them together with only one pair of closed bold-tag.
2. If two substrings wrapped by bold tags are consecutive, you should combine them.

Example of the first rule: given `words = ["aa"]` and `s = "aaa"`, the substring `"aa"` appears twice. However, the two occurrences overlap - they both use `s[1]`. Therefore, they should be wrapped together as `<b>aaa</b>`.

Example of the second rule: given `words = ["aa", "bb"]` and `s = "aabb"`, both words have a match. However, the matches are adjacent. Therefore, they should be wrapped together as `<b>aabb</b>`.

Now that we understand the rules, let's solve the problem.

If we can figure out which characters in the string need to be bold, then it's relatively easy to add the tags. So how do we figure out which characters should be bold? We can use a boolean array `bold` with the same length as `s`. If `bold[i] = true`, it means that the $$i^{th}$$ character of `s` should be bold.

To calculate this array, we can iterate over each `word` and then iterate over each substring in `s` with the same length of `word`. If the substring matches, then we can set all the indices of the substring to `true` in `bool`.

<iframe src="https://leetcode.com/playground/asZYtaSQ/shared" frameBorder="0" width="100%" height="327" name="asZYtaSQ"></iframe>

For each `word`, we are iterating over all the substrings in `s` with the same length as `word`. If we find a substring matches, we iterate over the indices of the substring using `j` to mark the characters as bold.

This method works, but can we optimize it a little bit? The major programming languages provide built-in functions for finding substrings in a string.

- In Java, we will use `s.indexOf()`
- In C++, we will use `s.find()`
- In Python, we will use `s.find()`.

All three of these functions take two arguments (the second one is optional). The first argument is a string. The function will find the first occurrence of this string in `s` and return the index of the first character. For example, given `s = "abcdefg"`, if we call `s.find("cde")`, it will return `2`, since the string `"cde"` occurs in `s` starting at index `2`. If the string does not occur in `s` at all, it will return `-1`.

The optional second argument is an integer. It will only consider `s` starting at this integer. For example, given `s = "aabbaa"`, if we call `s.find("aa")`, we will get `0`. However, if we call `s.find("aa", 1)`, we will instead get `4`, because we only consider `s` starting with index `1` (ignore the first character).

As these are built-in methods, they are quite efficient. We can use these methods to find which characters should be bold in a more efficient manner than simply checking all possible substrings.

This is the process we will use for each `word`:

1. Find the `start` index of the first occurrence of `word` in `s` using `s.find(word)` (or `s.indexOf(word)` in Java).
2. While `start != -1`:
    - Iterate over the indices of the substring `[start, start + word.length)` and mark them as `true` in `bold`.
    - After marking all the indices, set `start = s.find(word, start + 1)`. We will look for another occurrence of `word` in `s` that comes after the previous occurrence we found.
    - If at any point we don't find `word`, then `start` will be set to `-1` and the while loop will exit, and we can move on to the next word.

To summarize, we are using a built-in method to efficiently find the first occurrence of `word` in `s`. We mark all the indices of that occurrence as bold, and then we try to find more occurrences of `word` that come later.

Now that we have calculated `bold`, how do we add the bold tags?

We can iterate over the indices of `s` and at each index `i`, if `bold[i]`:
- and `bold[i - 1] = false`, then `i` is starting a new bold section. We should add `<b>`.
- and `bold[i + 1] = false`, then `i` is the end of a bold section. We should add `</b>`.

In between these two checks, we can add `s[i]` to the answer (in case `s[i]` is a single isolated bold character, it needs to be in between the tags). Also, don't forget to be careful about going out of bounds.

**Algorithm**

1. Initialize `n = s.length` and a boolean array `bold` of length `n`, with values initially set to `false`.
2. Iterate over `words`. For each `word`, use the process described above to mark characters in `bold`:
    - Set `start = s.find(word)`.
    - While `start != -1`, iterate `i` from `start` until `start + word.length` and set `bold[i] = true`. Then, set `start = s.find(word, start + 1)`.
3. Build the answer `ans`. Iterate over the indices of `s` using `i`.
    - If `bold[i]` and either `i == 0` or `bold[i - 1] == false`, add `<b>` to the answer.
    - Add `s[i]` to the answer.
    - If `bold[i]` and either `i == n - 1` or `bold[i + 1] == false`, add `</b>` to the answer.
4. Return the answer as a string.

> Note: for `ans`, we will use `StringBuilder` in Java and a list in Python to join at the end. This is because strings are immutable in these languages, so simple string concatenation will be inefficient. In C++, strings are mutable, so we can just use `+=`.

**Implementation**

<iframe src="https://leetcode.com/playground/KmQrmXiz/shared" frameBorder="0" width="100%" height="500" name="KmQrmXiz"></iframe>

**Complexity Analysis**

Let $$n$$ be `s.length`, $$m$$ be `words.length`, and $$k$$ be the average length of the words.

The time complexity may differ between languages. It is dependent on how the built-in method is implemented.
    
For example, Java's `indexOf()` costs $$O(n \cdot k)$$. The C++ standard doesn't specify implementation details, but some implementations of `find()` may use the [KMP algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) which can achieve $$O(n + k)$$ or even $$O(n)$$ in certain cases.

For this analysis, we will assume that we are using Java.

* Time complexity: $$O(m \cdot (n^2 \cdot k - n \cdot k ^2))$$

    To calculate `bold`, we iterate over `words`. For each word, we use the built-in string finding method, which costs $$O(n \cdot k)$$. However, we may call it multiple times per word. In the worst case scenario, such as `s = "aaaaa...aaaaa"` and `word = "aaaaaa"`, it may be called $$O(n - k)$$ times. Note that this scenario is very rare. In such a case, each `word` could cost us $$O((n - k) \cdot n \cdot k) = O(n^2 \cdot k - n \cdot k^2)$$.

    There are $$m$$ words, which means calculating `bold` could cost $$O(m \cdot (n^2 \cdot k - n \cdot k ^2))$$.

    After calculating `bold`, we create the answer in $$O(n)$$. This work is dominated by the other terms.

* Space complexity: $$O(n)$$

    We use the boolean array `bold` which has a length of `n`.
    
<br/>

---