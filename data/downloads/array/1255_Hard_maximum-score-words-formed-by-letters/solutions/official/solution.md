# Official Solution

**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solution/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solution/)

---

[TOC]

## Solution

--- 

### Overview

Given a list of `words`, we need to find the maximum subset score using the given set of `letters`. Each letter has a score tied to it, which is provided in `score`. Each entry in `words` can only be used once, although the same word can occur as multiple entries. Each character in `letters` can be used at most once.

This problem tests your ability to implement an algorithm that efficiently maintains a maximum score over all subsets of a set of words. The two main ways to do this are using an iterative loop and a recursive search method.

---

### Approach 1: Iterative Loop for Every Subset


#### Intuition

Since the size of the input is very small, a brute-force solution is feasible. We can check all subsets of `words` and return the largest score among subsets that can be constructed with the given `letters`.

Let's create a frequency array `freq` that stores the frequency of each letter in `letters`, which is needed to track how many copies of each letter we can use. For every subset of words, let's also create a `subsetLetters` array that stores the frequency of each letter of every word in the subset. The `subsetLetters` array is used to track the current state of words and how many copies of each letter are needed to build the current subset. Specifically, this subset can be constructed if and only if `freq[c] <= subsetLetters[c]` for all letters `c`. If a subset is valid, its score is equal to the sum of `subsetLetters[c] * score[c]` for all `c`.

Now that we have a strategy to check the validity and score of a subset, we need to generate and check the subsets. For this approach, we'll use a for loop that iterates through every integer `mask` whose binary representation corresponds to a subset of `words`. The $i^{\texttt{th}}$ bit in `mask` equals `1` if this subset contains `words[i]`, and `0` otherwise.

Example binary representations of subsets:


![figA](../Figures/1255/1255_words_example_updated.png)

#### Algorithm

1. Generate a frequency array where `freq[c]` is the number of times letter `c` appears in `letters`.
2. Initialize `maxScore` to store the largest score among valid subsets.
3. Use a for loop that goes from $0$ (inclusive) to $2^W$ (exclusive) where $W$ is the length of `words` to iterate over every subset using masks. For each mask, word $i$ is in this subset if the $i^{\texttt{th}}$ bit is set in the current mask.
4. For each word in the current subset, increment `subsetLetters[c]` for each letter `c` in the word.
5. Declare a helper function, `subsetScore,` that checks if the subset can be built out of the given letters and calculates the score:
    - Initialize a variable `totalScore` to `0`.
    - For each character in the alphabet, compute the score of this subset by adding `score[c]` for every occurrence of `c` in this subset, and add it to `totalScore`.  If `freq[c] < subsetLetters[c]` holds true for any letter `c`, then return $0$, as this subset is impossible to construct with the given letters.
    - Return `totalScore`.
6. If `maxScore` is less than the result of `subsetScore`, update `maxScore`.
7. Return `maxScore` after all subsets are checked.

#### Implementation

<iframe src="https://leetcode.com/playground/Rkobsw98/shared" frameBorder="0" width="100%" height="500" name="Rkobsw98"></iframe>

#### Complexity Analysis

Let $W$ be the length of `words`, $L$ be the maximum length of any word in `words`, and $A$ be the size of the alphabet (in this case, $A = 26$).

* Time complexity: $O(2^W \cdot (WL + A))$.

For each subset, we need to iterate through every string in this subset, which takes $WL$ time. Additionally, $A$ operations are needed to populate the `subsetLetters` array for each subset. 

We have two choices for each word: it belongs in the subset, or it doesn't. This gives a total of $2^W$ possible subsets for $W$ words. Therefore, this yields a complexity of $O(2^W(WL + A))$.

* Space complexity: $O(A)$.

In this implementation, only two arrays of length $A$ are created: the `freq` array, which stores the frequencies of characters in `letters`, and the `subsetLetters` array, which stores letter frequencies for the current subset.

---

### Approach 2: Backtracking


#### Intuition

Suppose the set of usable letters in a given input does not contain the letter "d", and the set of words is `["abcd", "acc", "abb", "bc"]`. Note that any subset containing the word "abcd" is always invalid, because the word contains letter "d". The iterative approach will continue to check every subset that contains "abcd", which results in a considerable amount of unnecessary computation. What if we had a way to prune all subsets containing the word "abcd"? This is where a recursive solution comes into play.

Rather than iteratively checking every subset of words, we can use a recursive function to choose whether we include or exclude the current word in a candidate subset. If we pass the `subsetLetters` array as a parameter throughout every recursive call, after the addition of a word to a subset, we can check if there is a letter `c` where `subsetLetters[c]` exceeds `freq[c]` (see the `isValidWord` method). Once a recursive call terminates, we can roll back any changes made by the current recursive call to extensively search for all possibilities.

This approach is called backtracking, which is a search strategy that visits states and rolls back changes to return to a previous state. Doing so allows you to explore all branches from one state. For more details, see our [backtracking explore card](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/).

The base case is when all words have been considered for the subset, which is handled by comparing `maxScore` with `totalScore` and updating `maxScore` if `totalScore` is larger. The recursive case considers two choices: adding the $i^{\texttt{th}}$ word or not adding the $i^{\texttt{th}}$ word. This generates the subsets that will eventually either reach the base case or get pruned because that subset is not valid.


One notable merit of this backtracking solution lies in the pruning of bad subsets. If there is a set of subsets that share the same words that break the limits imposed by the given letters, the recursive algorithm can choose not to continue the search down this branch. For example, if the first word cannot be constructed, this recursive algorithm would immediately cut out any subset containing the first word, whereas an iterative solution would still check every subset that contains the first word.

#### Algorithm

1. Generate a frequency array where `freq[c]` is the number of times letter `c` appears in `letters`.
2. Initialize `maxScore` to store the largest score among valid subsets.
3. Call a recursive subroutine `check` that passes `w` (the index of the current word), `words`, `score`, `subsetLetters`, and `totalScore` (the sum of word scores in the subset) as parameters. Steps 4-10 describe the `check` method.
4. If `w` equals $-1$, all words have been considered, and we should update `maxScore` to `totalScore` if `maxScore` is less than `totalScore`.
5. Otherwise, we need to consider two possible recursive calls: one that adds `words[w]` to the subset, and one that doesn't.
6. To account for not adding a word, call `check(w - 1, words, score, subsetLetters, totalScore)`.
7. To add `words[w]` to the subset, update `subsetLetters` and `totalScore` to include the word.
8. If the addition of `words[w]` does not violate letter limits imposed by `freq`, make the recursive call `check(w - 1, words, score, subsetLetters, totalScore)`. To check for validity, we define the `isValidWord` method as follows:
    - For each character in the alphabet, check if `freq[c] < subsetLetters[c]`. If there exists such `c`, return `false`.
    - Return `true` if the subset can be built out of the given letters.
9. Roll back the changes to `subsetLetters` and `totalScore` immediately after making this recursive call.
10. Call `check(W - 1, words, score, subsetLetters, 0)`, where `subsetLetters` is initially all zeros.
11. Return `maxScore` as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/nZ2w8A7G/shared" frameBorder="0" width="100%" height="500" name="nZ2w8A7G"></iframe>

#### Complexity Analysis

Let $W$ be the length of `words`, $L$ be the maximum length of any word in `words`, and $A$ be the size of the alphabet (in this case, $A = 26$).

* Time complexity: $O(2^W \cdot (L + A))$.

There are a total of $2^W$ subsets that could be checked, and the `check` function could be called for each one, or up to $2^W$ times. Inside the `check` function, we iterate through the current word's letters to determine if the subset it currently belongs in is valid, which takes $L$ time. Additionally, the `isValidWord` function takes $A$ time because we compare the count of each letter in the alphabet with the frequency. This yields a complexity of $O(2^W(L + A)$.

While the worst-case runtime of backtracking matches the worst-case runtime of the iterative solution, in practice, the backtracking solution will prune many subset possibilities that break the limits imposed by the given letters and will run significantly faster than the iterative solution.

* Space complexity: $O(A + W)$.

In this implementation, only two arrays of length $A$ are created: the `freq` array that stores the frequencies of characters in `letters`, and the `subsetLetters` array that stores letter frequencies for the current subset. Additionally, the `check` method is called with and without each element in `words`, which incurs $O(W)$ space on the recursive call stack.