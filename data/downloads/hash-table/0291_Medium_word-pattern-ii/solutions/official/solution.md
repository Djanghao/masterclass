# Official Solution

**Link:** [https://leetcode.com/problems/word-pattern-ii/solution/](https://leetcode.com/problems/word-pattern-ii/solution/)

---

[TOC]

## Solution

---

### Overview

Our objective is to return `true` if `s` matches the `pattern`.

We can think of the pattern as a code, where each character in the `pattern` is a symbol that corresponds to a substring of `s`.

> **Input:** pattern = "abab", s = "redblueredblue"

| Symbol | Value |
|:------:|:-----:|
|  `'a'` | "red" |
|  `'b'` | "blue"|

If we can build `s` using the code, then `s` matches the `pattern`.

Understanding test cases that fail can help us better understand the problem.

> **Input:** pattern = "ab", s = "aa"
> **Output:** false

| Symbol | Value 1 | Value 2 |
|:------:|:-------:|:-------:|
|  `'a'` |   "a"   |   "aa"  |
|  `'b'` |   "a"   |   ""    |

Neither of the value columns in the above table are valid mappings because each symbol must be mapped to a **unique non-empty** substring of `s`.

One challenge of this problem is that we are unsure of the number of characters in `s` that correspond to each symbol in the `pattern`. We may need to explore many possibilities before finding a valid mapping or determining that none exists.

---

### Approach 1: Hash Table and Backtracking

#### Intuition

The code table in the overview looks like a hash table. We can utilize a hash map to store `(symbol, word)` mappings, where a character from `pattern` is the key and a substring of `s` is the value.

Each symbol must be mapped to a unique `word`, so we will also use a hash set to track the `word` values we have stored already.

The brute force method of solving the problem is to generate all of the possible mappings and then test each one to see if it is valid. This approach would be inefficient, leading to an exponential time complexity.

How can we reduce the search space?

Let's say we have created the following mapping for the below example:

> **Input:** pattern = "abab", s = "redblueredblue"

|  Key  | Value |
|:-----:|:-----:|
| `'a'` | "re"  |
| `'b'` | "db"  |

When we reach the next character, `"l"`, in `s`, the current symbol is `'a'`. Since `'a'` maps to `"re"` according to our mapping, we expect to see `"re"` in `s` at that position. However, we find `"l"` instead. This mismatch indicates that our current mapping isn't valid for the entire string `s`, and thus, we do not need to check the rest of the string. 

Now, we could abandon the current mapping and start over, or we could backtrack to the last point where the mapping was valid to explore other possibilities.

> If you are not familiar with backtracking, we recommend you read our **[Backtracking Explore Card](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2654/)**.

We will create a recursive function, `isMatch`, that uses backtracking to determine whether `s` matches the `pattern`. The function uses a pointer, `pIndex` to traverse the `pattern` and a pointer `sIndex` to track the current index of `s`.

The base case is when we have processed the whole pattern. If we have also processed the entirety of `s`, the `pattern` matches `s`, so we return `true`. Otherwise, there are extra characters of `s`, so we return `false`.

For the recursive case, we start by saving the current character in the pattern as `symbol`.

If we have encountered the `symbol` before, we check whether the corresponding `word` matches with the next characters in `s`. If so, we move on to the next character in the `pattern` with a recursive call to `isMatch`.

If the `symbol` is the first occurrence in `pattern`, we need to generate the possible mappings from `symbol` to different substrings of `s`.

> **Input:** pattern = "abac", s = "aabbaac"

State: `pIndex = 1` and `sIndex = 2`

The current `symbol` is `b`, which is its first occurrence. The possible mappings are:

```
s[2] = "b"
s[2:3] = "bb"
s[2:4] = "bba"
s[2:5] = "bbaa"
s[2:6] = "bbacc"
```

The possible `word` mappings for the `symbol` are the set of substrings that start at `sIndex` and end anywhere between `sIndex` and the last index of `s`. Let such a substring be termed `newWord`. If we find that we have encountered `newWord` before, we continue with the next iteration because each `symbol` to `word` mapping must be unique. Otherwise, we add `newWord` to the hash map and hash set. Then, we call `isMatch` with the next character in the `pattern`. Finally, we backtrack by removing `newWord` from the hash map and hash set to explore other possible mappings.

#### Algorithm

1. Create a hash map `symbolMap` that maps the key, a character from `pattern`, to the value, a substring of `s`.
2. Create a hash set `wordSet` that stores the unique substrings of `s` that have been mapped to a `symbol`.
3. Define a recursive function `isMatch` that takes an index in `s`, `sIndex`, and an index in `pattern`, `pIndex` as parameters. The function determines whether `s` matches a given `pattern`. Pass `s` and `pattern` as parameters to the function if needed because of scoping.
    - Base case: `pIndex` equals the length of `pattern`. Return `true` if `sIndex` equals the length of `s`; `s` matches the pattern. Otherwise, return `false`.
    - Set `symbol` to `pattern[pIndex]`, the next character in the pattern.
    - If `symbol` is associated with a substring of `s`, save the substring as `word`, and check if the next characters in `s` match `word`.
        - If the characters don't match, return `false`.
        - If they do match, call `isMatch` for the next character in `pattern`.
    - Otherwise, `symbol` is a new `pattern` character. Try mapping `symbol` to new substrings of `s`, starting with the substring consisting of `s[sIndex]` and extending until the substring reaches the end of `s`.
        - Save the current substring as `newWord`.
        - If `newWord` already exists in `wordSet`, continue.
        - Otherwise, add `newWord` to `wordSet` and to `symbolMap` with the `symbol`.
        - Call `isMatch` for the next character in `pattern`. If the result is `true`, return `true`.
        - Remove `newWord` from the `wordSet` and the `symbolMap`.
4. Call `isMatch` with `sIndex` and `pIndex` as `0` and return the result. 

#### Implementation

<iframe src="https://leetcode.com/playground/3cwrhJfB/shared" frameBorder="0" width="100%" height="500" name="3cwrhJfB"></iframe>

#### Complexity Analysis

Let $n$ be the length of `s` and $p$ be the length of `pattern`.

* Time complexity: $O(p \cdot n^3)$

    The `isMatch` function is called for each character in `pattern` for each `word` that can be formed from substrings of `s`.

    Looking up a `symbol` in the hash map or `word` in the hash set takes $O(1)$ in the average case.

    We generate $n$ substrings of length $1$, $n - 1$ substrings of length $2$, $n - 2$ substrings of length $3$, and so on. We can represent the number of substrings mathematically as $n + (n - 1) + (n - 2) + \dots + (n - (n - 1))$. This sum can be calculated by the formula $\frac{n(n + 1)}{2}$, which is a quadratic complexity, $O(n^2)$.

    The function will be called $p \cdot \frac{n(n + 1)}{2}$ times. Splicing each substring takes $O(n)$ time, so the overall time complexity is $O(p \cdot n^3)$.


* Space complexity: $O(p + n)$

    `symbolMap` can store a `(symbol, word)` mapping for each unique `symbol` in `pattern`. The set of symbols is the English alphabet, which contains $26$ letters. The length of the substrings of `s` combined is $n$, so it can use up to $O(26 + n)$ space, which can be simplified to $O(n)$.

    `wordSet` stores a `word` for each unique `symbol` in the `symbolMap`. It will use the same amount of space as `symbolMap`, $O(n)$.

    > Note: The number of letters in the alphabet is considered constant, but for this problem, it is not trivial because $p$ and $n$ are constrained to $20$. For inputs where $p < 26$, when every character of `pattern` is unique, we can represent the space required by the hash map and hash set as $O(p + n)$.

    We recursively check each character in `pattern`, so the depth of the recursive call stack can grow up to $p$, requiring $O(p)$ space.

    Therefore, the overall space complexity is $O(p + 2n)$, which we can simplify to $O(p + n)$

---

### Approach 2: Optimized Backtracking

#### Intuition

An alternative to using a map is an array, which provides constant time complexity for both insertion and retrieval operations. This is faster than the worst-case time complexity of hashmap operations. However, this advantage comes with a trade-off: arrays are only suitable when the range of values is relatively small and can be mapped directly to array indices. Since the set of symbols are the letters in the English alphabet, we can utilize an array.

Assuming that `s` matches the `pattern`, then there are the same number of substrings in `s` as there are characters in `pattern`. We can leverage this observation to further narrow the search space.

The above approach assumes that for any character `symbol` of the `pattern`, the possible set of corresponding substrings includes all substrings that start with `sIndex` and stop at any point until the end of `s`. We can reason that if the `symbol` is not the last character in the `pattern`, then the corresponding substring must end before the last index of `s` because the remaining characters in the `pattern` also need to be mapped to substrings of `s`.

The basic idea of this optimization is to peek ahead and check if the `pattern` has additional characters. If so, we count how many characters at the end of `s` the remaining characters in `pattern` must use, and we only explore the new possible substrings for the `symbol` that leave room in `s` for the remaining characters in `pattern`.

The following example demonstrates this idea.

> **Input:** pattern = "abac", s = "aabbaac"

State: `pIndex = 1` and `sIndex = 2`

`symbols`:
| Index  |   0  | 1 | 2 | ... | 25|
|:------:|:----:|:-:|:-:|:---:|:-:|
| Letter |  'a' |'b'|'c'| ... |'z'|
|  Word  | "aa" |"" |"" | ... |"" |

The second character of the `pattern`, `'b'`, is a new `symbol`. How many indices at the end of `s` will be used by the remaining characters in the `pattern`?

- `'a'` is the next symbol in the `pattern`. It maps to `"aa"`, so it will take `2` spots.
- `'c'` is the last symbol in the `pattern`. We don't know what `word` it maps to, but it will require at least `1` spot.

There are `5` more indices left in `s` total and the remaining characters in `pattern` will fill at least `1 + 2 = 3` spots. `5 - 3 = 2` is the maximum length of the new word.

So, the `word` substrings we test for symbol `'b'` are:

```
s[2] = "b"
s[2:3] = "bb"
```

We can visualize `s` as `"aa_aax"`, where `"aa"` represents the known mapping of `'a'`, `x` represents a spot for the unknown mapping of `'c'`, and the empty space represents the `word` that corresponds to symbol `'b'`.

When we encounter a new `symbol`, before generating the new words, we count how many indices of `s` must be filled by the remaining characters in the `pattern`, which we store in `filledSpots`.

We compute `filledSpots` by iterating through the symbols from the next to the last index of `pattern` and adding the length of the corresponding `word` for each of the characters remaining in `pattern`. If the symbol is new, we add `1`, because the `word` will consist of at least one index of `s`.

Then, we can identify the last possible ending index in `s` of a new word that could correspond to a given `symbol` as `s.length() - filledSpots`, which we use to narrow the search space when we generate new words.

#### Algorithm

1. Create an array `symbols` of size `26` that maps a character from `pattern` to a substring of `s`. Each index corresponds to a letter of the alphabet.
2. Create a hash set `wordSet` that stores the unique substrings of `s` that have been mapped to a symbol.
3. Define a recursive function `isMatch` that takes an index in `s`, `sIndex`, and an index in `pattern`, `pIndex` as parameters. The function determines whether `s` matches a given `pattern`.
    - Base case: `pIndex` equals the length of `pattern`. Return `true` if `sIndex` equals the length of `s`; `s` matches the pattern. Otherwise, return `false`.
    - Set `symbol` to `pattern[pIndex]`, the next character in `pattern`.
    - If `symbol` is associated with a substring of `s`, save the substring as `word`, and check if the next characters in `s` match `word`.
        - If the characters don't match, return `false`.
        - If they do match, call `isMatch` for the next character in `pattern`.
    - Otherwise, `symbol` is a new `pattern` character. Find the last possible end index in `s` of a new word that could correspond to `sybmol`.
      - Set a variable `filledSpots` to `0`.
      - Iterate from `pIndex + 1` to the last character of `pattern`. If the symbol `p` is associated with a `word`, add the length of the `word` to `filledSpots`. Otherwise, add `1` to `filledSpots`.
    - Try mapping `symbol` to new substrings of `s`, starting with the substring consisting of `s[sIndex]` and extending until the substring reaches the last possible end index of the new word, which is `s.length() - filledSpots`.
        - Save the current substring as `newWord`.
        - If `newWord` already exists in `wordSet`, continue.
        - Otherwise, add `newWord` to `wordSet` and `symbols` with `symbol`.
        - Call `isMatch` for the next character in `pattern`. If the result is `true`, return `true`.
        - Remove `newWord` from the `wordSet` and the `symbols` array.
4. Call `isMatch` with the starting indices in `s` and the `pattern` as `0` and return the result.

#### Implementation

<iframe src="https://leetcode.com/playground/m6EfZMET/shared" frameBorder="0" width="100%" height="500" name="m6EfZMET"></iframe>

#### Complexity Analysis

Let $n$ be the length of `s` and $p$ be the length of `pattern`.

* Time complexity: $O(p \cdot n \cdot (n - p)^2)$

    The `isMatch` function is called for each character in `pattern` for each `word` that can be formed from substrings of `s`.
    
    We only generate substrings that leave space for the rest of the characters in `pattern`. We generate $(n - p + 1) + 1$ substrings of length $1$, $(n - p + 1)$ substrings of length $2$, $(n - p + 1) - 1$ substrings of length $3$, and so on. We can calculate the number of substrings we generate as $\frac{(n - p + 1)((n - p + 1) + 1)}{2} + (n - p + 1)$, which has a quadratic complexity of $O((n - p)^2)$.

    The `isMatch` function will be called $p \cdot (n - p)^2$ times. Splicing each substring takes $O(n)$, so the overall time complexity is $O(p \cdot n \cdot (n - p)^2)$.


* Space complexity: $O(p + n)$

    The `symbols` array can store a substring for each letter in the English alphabet. It stores up to $26$ substrings with a combined length of $n$, so it requires $O(26 + n)$ space, which can be simplified to $O(n)$.

    The `wordSet` can store a `word` for each unique symbol in `pattern`. The combined length of the substrings is $n$, so it can use up to $O(26 + n)$ space, which is simplified to $O(n)$.

    > Note: The number of letters in the alphabet is considered constant, but for this problem, it is not trivial because $p$ and $n$ are constrained to $20$. For inputs where $p < 26$, when every character of `pattern` is unique, we can represent the space required by the hash set as $O(p + n)$.

    We recursively check each character in the `pattern` so the depth of the recursive call stack can grow up to $p$, requiring $O(p)$ space.

    Therefore, the overall space complexity is $O(p + 2n)$, which we can simplify to $O(p + n)$.

---