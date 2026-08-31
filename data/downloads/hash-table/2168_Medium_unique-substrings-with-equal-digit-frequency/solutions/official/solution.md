# Official Solution

**Link:** [https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solution/](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a string `s` consisting of digits (`'0'` to `'9'`). Our task is to calculate the number of unique substrings of `s` where each digit present in the substring occurs an equal number of times.

For example, in the string `s = "1212"`, the substrings `"1212"` and `"12"` satisfy the condition because the digits in each of these substrings occur with equal frequency. Notice that the substring `"12"` appears twice in the string, but it should be counted once to the result. On the other hand, `"121"` does not satisfy the condition because `'1'` occurs twice while `'2'` occurs once. 

---

### Approach 1: Optimized Brute Force

#### Intuition

In the brute-force approach, we would iterate over all substrings of `s`, calculate the frequency of all characters for each substring, and increment a counter if the substring has the desired property. To avoid counting duplicates, we would use a set to track unique substrings.

However, this process is inefficient. For example, if we already know the frequency of all characters in the substring `s[0:4]`, there is no need to recalculate these frequencies when considering the substring `s[0:5]`. Instead, we can maintain an array to store the character frequencies for substrings starting at the same position and simply update this array as we extend the substring by moving its endpoint to the right. 

#### Algorithm

-   Initialize `n` to the size of the string `s`.
-   Initialize an empty set, `validSubstrings`.
-   Iterate over `s` with `start` from `0` to `n - 1`:
    -   Initialize a frequency table `digitFrequency` of size `10` to store the frequency of each digit in the substring `s[start:end]`.
    -   Loop with `end` from `start` to `n - 1`:
        -   Add `s[end]` to the substring by incrementing `digitFrequency[s[end] - '0']` by `1`.
        -   Check whether all frequencies in substring `s[start: end]` are the same:
            -   Initialize `commonFrequency` to `0` and a boolean variable `isValid` to `true`.
            -   Iterate over `digitFrequency` with `i` from `0` to `9`:
                -   If the current digit does not appear in the substring (i.e. `digitFrequency[i] == 0`), skip it.
                -   If this is the first digit that appears in the substring (i.e. `commonFrequency == 0`), set `commonFrequency` to `digitFrequency[i]`.
                -   If the current element has a different frequency than `commonFrequency`, set `isValid` to `false`. 
        -   If the substring is valid, insert it into the `validSubstrings` set.
-   Return the size of `validSubstrings`.

#### Implementation

<iframe src="https://leetcode.com/playground/LEDtpVgw/shared" frameBorder="0" width="100%" height="500" name="LEDtpVgw"></iframe>

#### Complexity Analysis

Let $n$ be the size of the string `s`.

-   Time complexity: $O(n^3)$

    The algorithm uses two nested loops to iterate over all possible substrings of `s`. For each substring, we perform two operations:

    1. Extracting the substring, which takes $O(k)$ time, where $k$ is the length of the substring.
    2. Inserting the substring into a set, which also takes $O(k)$ time because it involves hashing the substring.

    In the worst case, $k$ can be as large as $n$. Therefore, the total time complexity is $O(n^3)$.

-   Space complexity: $O(n^3)$

    The algorithm creates a set to store all valid substrings of the input string `s`. There are roughly $O(n^2)$ substrings. Each substring could have a maximum length of up to $n$, so the set requires space proportional to $O(n^3)$. You could attempt to prove that the space complexity is actually more than just $O(n^2)$ as an extra challenge!

    Other parts of the algorithm use data structures like variables and a fixed-size frequency array (`digitFrequency`), which don’t grow with the size of the input. Therefore, these don’t contribute to increasing the space complexity.
    
---

### Approach 2: Rolling Hash

#### Intuition

In our previous approach, we manually extracted substrings from the string `s` and hashed each one to check for uniqueness. These two operations significantly increase the time complexity, adding an extra factor of $n$. To improve this, we need a better way to represent substrings and compare them for equality without explicitly extracting each one.

One efficient solution is to use a **rolling hash** technique. A rolling hash allows us to compute the hash of a substring in constant time, as we extend or shrink the substring by just one character. Instead of recalculating the entire hash from scratch, we reuse the previously computed hash and update it based on the added or removed character. 

First, an intuitive way to create unique hashes for substrings is by using their numeric representation. For example, if we know the hash of `"1212"` is `1212`, finding the hash of `"1212x"` is straightforward: it’s `10 * 1212 + x`. This approach works well because every unique string maps to a unique number.

However, as strings get longer, their numeric representation can exceed the limits of an integer variable, causing overflow issues. To solve this, we use the modulo operation to shrink the hash into a manageable range. For example, we can choose a large modulus like `10^9`.

Using a modulus introduces a new challenge: collisions. For instance, the strings `"1212"` and `"100001212"` (since $10^9 + 1212$) would hash to the same value: `1212`. To reduce collisions, we use a large prime number as the base of the hash instead of 10. A prime base ensures a more even distribution of hash values, lowering the chances of two different substrings producing the same hash.

#### Algorithm

-   Initialize `n` to the size of the string `s`.
-   Initialize an empty set `validSubstringHashes` to store unique hashes of valid substrings.
-   Initialize `prime` to a prime number greater than `10`, (e.g., `31`) and `mod` to a large value (e.g., `10e9`). 
-   Iterate over `s` with `start` from `0` to `n - 1`:
    -   Initialize a frequency table `digitFrequency` of size `10` to store the frequency of each digit in the substring `s[start: end]`.
    -   Initialize `substringHash`, `maxDigitFrequency`, and `uniqueDigitsCount` to `0`.
    -   Loop with `end` from `start` to `n - 1`:
        -   Set `currentDigit` to `s[end] - '0'`.
        -   If this is the first time `currentDigit` occurs in the substring (i.e., `digitFrequency[currentDigit] == 0`), increment `uniqueDigitsCount` by `1`.
        -   Increment `digitFrequency[currentDigit]` by `1`.
        -   Set `maxDigitFrequency` to the maximum of its current value and the frequency of `currentDigit`, `digitFrequency[currentDigit]`.
        -   Update `substringHash` to `(prime * substringHash + (currentDigit + 1)) % mod` (Adding `1` to `currentDigit` ensures unique hashes when `currentDigit` is `0`).
        -   If all characters in the substring have the same frequency (`maxDigitFrequency`): `maxDigitFrequency * uniqueDigitsCount == end - start + 1`.
            -   Insert `substringHash` to `validSubstringHashes` set.
-   Return the size of `validSubstringHashes`.

#### Implementation

<iframe src="https://leetcode.com/playground/nTCywmEq/shared" frameBorder="0" width="100%" height="500" name="nTCywmEq"></iframe>

#### Complexity Analysis

Let $n$ be the size of the string `s`.

-   Time complexity: $O(n^2)$

    Like in the previous approach, we use two nested loops to iterate over all possible substrings of `s`. However, in this approach on each iteration, the algorithm only performs constant-time operations to update the hash of the substring and store it in the set if it is valid. Therefore, the time complexity of the solution is $O(n^2)$.

-   Space complexity: $O(n^2)$

    The algorithm uses a set of integers to store the hashes of the valid substrings. Since the string `s` has $O(n^2)$ substrings, the set can grow up to $O(n^2)$ in size.
    
---

### Approach 3: Prefix Tree (Trie)

#### Intuition

The previous approach uses the modulo operation and relies on the randomness of rolling hashes to check the uniqueness of substrings. It assumes that the hashes are distributed evenly enough to avoid collisions.

However, to remove this randomness, we can take a different approach by using a Trie (Prefix Tree). A Trie is a data structure designed to efficiently store and retrieve substrings.

> If you are new to Tries, you might want to check out the [Trie Explore Card 🔗](https://leetcode.com/explore/learn/card/trie/). This resource provides an in-depth look at the trie data structure, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

In a Trie, each node (`TrieNode`) represents a substring. Each `TrieNode` has:

-   A boolean flag, `isVisited`, to indicate if the substring has already been seen.
-   A map to store its child nodes, representing the next characters of the substring.

Just like before, we will go through all the substrings of `s` and store them in the Trie. If a substring meets the required condition, we will mark it as visited in the Trie and increase our result counter.

!?!../Documents/2168/2168_trie.json:960,540!?!

The downside of using a Trie is that each time a new `TrieNode` is created, an array of size 10 is needed to store its possible children. This adds extra time and space complexity, increasing it by a factor of 10 compared to the rolling hash approach. On the other hand, this solution avoids issues like incorrect results caused by hash collisions.

#### Algorithm

-   Define a `TrieNode` class, where each node has:
    -   A flag to check if the substring ending at this node has been seen before (`isVisited`),
    -   An array of size 10 (for digits 0-9), pointing to child nodes (`children`).
-   In the `equalDigitFrequency` function:
    -   Initialize `n` to the size of the string `s` and `validSubstringsCount` to `0`.
    -   Initialize the `root` of the prefix tree to a `TrieNode` with no children.
    -   Iterate over `s` with `start` from `0` to `n - 1`:
        -   Initialize a frequency table `digitFrequency` of size `10` to track the frequency of each digit in the substring `s[start: end]`.
        -   Initialize `maxDigitFrequency` and `uniqueDigitsCount` to `0`.
        -   Initialize `currentNode` to `root`: the node that the search for the substrings starts at.
        -   Loop with `end` from `start` to `n - 1`:
            -   Set `currentDigit` to `s[end] - '0'`.
            -   If this is the first time `currentDigit` occurs in the substring (i.e., `digitFrequency[currentDigit] == 0`), increment `uniqueDigitsCount` by `1`.
            -   Increment `digitFrequency[currentDigit]` by `1`.
            -   Set `maxDigitFrequency` to the maximum of its current value and the frequency of `currentDigit`, `digitFrequency[currentDigit]`.
            -   Check if the current digit already exists as a child of the `currentNode` in the Trie.
                -   If not, create a new `TrieNode` for this digit.
            -   Move `currentNode` to the child corresponding to this digit.
            -   Check if the substring is valid: `maxFrequency * uniqueDigitCount == end - start + 1`.
                -   If this holds, increment `validSubstringsCount` by `1`.
                -   Mark `currentNode` as visited.
    -   Return `validSubstringsCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/L4KbJKPn/shared" frameBorder="0" width="100%" height="500" name="L4KbJKPn"></iframe>

#### Complexity Analysis

Let $n$ be the size of the string `s`.

-   Time complexity: $O(n^2)$

    We iterate over all substrings and on each iteration we perform constant-time operations like updating the frequency of the digits and tracking the number of unique digits. The search of the substring in the Trie costs $O(1)$ as well, as it will either be a direct child of the `currentNode` or not exist at all. Therefore, the time complexity of the algorithm is $O(n^2)$.

-   Space complexity: $O(n^2)$

    In the worst case (when all substrings of `s` are distinct), a new `TrieNode` is created for each substring. Therefore, the algorithm requires $O(n^2)$ extra space.
    
---