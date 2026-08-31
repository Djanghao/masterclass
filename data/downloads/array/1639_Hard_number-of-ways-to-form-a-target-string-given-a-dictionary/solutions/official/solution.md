# Official Solution

**Link:** [https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solution/](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a list of equal-length strings, `words`, and a `target` string. The task is to count the number of ways we can form the `target` by selecting characters from `words`.

To construct the `target`:

- Start with the first character of `target` and find a matching character in any of the strings in `words`.
- For each subsequent character in `target`, pick characters from higher indices in the strings of `words` without revisiting previous ones.

>Note: For this problem, we assume that you already know the fundamentals of dynamic programming and are figuring out how to apply it to a wide range of problems, such as this one. If you are not yet at this stage, we recommend checking out our relevant [Explore Card content on dynamic programming](https://leetcode.com/explore/featured/card/dynamic-programming/) before coming back to this article.

---

### Approach 1: Top-down Dynamic Programming

#### Intuition

Let's say we match the first character of `target` with the first character of a `word` in words. We then move to the next character in `target` and search for it in the remaining words. This creates a subproblem where the `target` becomes shorter by one character, and the search space in `words` is reduced. We also have the option to skip the current match and search for another match in subsequent words. This branching of choices makes the problem recursive.

The recursion tracks two indices: `wordsIndex` for the position in `words` and `targetIndex` for the position in `target`. 

The base cases are:
- If all characters in `target` are matched, return `1` (successful match).
- If `words` is exhausted or the remaining `target` characters exceed available `words`, return `0` (no match).

At each step, two options are explored:
1. Match the current character: If `target[targetIndex]` matches any character in `words[wordsIndex]`, recursively proceed with the next character of `target` and the next word. Contributions from multiple matches are summed. 
2. Skip the current word: Continue searching with the same `target` position but move to the next word. 

This generates a recursive tree with exponential complexity in the worst case ($(\text{number of words})^{\text{target.length}}$), making it inefficient for large inputs.

However, since we have `wordsIndex` and `targetIndex` as independent states in the recursion, we can optimize the solution using memoization. The total number of states would remain limited to `words.length * target.length`. By storing the results of each state in a `dp` matrix, we can avoid redundant calculations and significantly reduce the time complexity.

#### Algorithm

Main function - `numWays(words, target)`

1. Initialize the data structures:
    - Create a 2D `dp` array with dimensions `[words[0].size()][target.size()]` and initialize all values to `-1` (used for memoization).
    - Create a 2D `charFrequency` array with dimensions `[words[0].size()][26]` to store the frequency of characters at each index across all words.

2. Populate the `charFrequency` matrix:
    - Iterate over all the words in the `words` list.
    - For each character at index `j` in each word, increment the corresponding frequency count in `charFrequency[j][character]`.

3. Call the recursive function `getWords(words, target, 0, 0, dp, charFrequency)` to calculate the number of ways to match the target string with the words matrix.

Recursive Function - `getWords(words, target, wordsIndex, targetIndex, dp, charFrequency)`

1. Base case:
    - If `targetIndex == target.size()`, return `1`, indicating all characters of the target have been successfully matched.
    - If `wordsIndex == words[0].size()` or there are fewer remaining characters in words than needed by target, return `0`, indicating it's not possible to match the target.

2. Memoization check:
    - If `dp[wordsIndex][targetIndex] != -1`, return the stored result from the `dp` array.

3. Recursive calculation:
    - Initialize `countWays = 0`.
    - Calculate `curPos = target[targetIndex] - 'a'` to get the target character position.
    - Two choices:
        - Option 1: Do not match the current character of target with the current word at `wordsIndex`. Recursively call `getWords` with `wordsIndex + 1` and the same `targetIndex`.
        - Option 2: Match the current character of `target` with a character at `wordsIndex`. Multiply the number of valid choices at `charFrequency[wordsIndex][curPos]` with the result of recursively calling `getWords` with `wordsIndex + 1` and `targetIndex + 1`.

4. Store the calculated countWays in `dp[wordsIndex][targetIndex]`, modulo $1000000007$ to avoid overflow.

5. Return the value stored in `dp[wordsIndex][targetIndex]`.

#### Implementation

<iframe src="https://leetcode.com/playground/joe2QLyc/shared" frameBorder="0" width="100%" height="500" name="joe2QLyc"></iframe>

#### Complexity Analysis

Let $\text{totalWords}$ be the total number of words in the `words` matrix, and $\text{wordLength}$ and $\text{targetLength}$ represent the length of any word in `words` and the `target` string, respectively.

- Time Complexity: $O(wordLength \cdot targetLength + wordLength \cdot totalWords)$

    We first calculate the frequency of characters in the `words` matrix, which takes $O(wordLength \cdot totalWords)$ time. 
    
    The `getWords` function is called recursively for each combination of `word` index and `target` index, leading to $O(wordLength \cdot targetLength)$ recursive calls. Each call involves constant-time operations, and memoization ensures that each combination is computed once, making the recursion time complexity $O(wordLength \cdot targetLength)$. 
    
    Thus, the total time complexity is $O(wordLength \cdot targetLength + wordLength \cdot totalWords)$.

- Space Complexity: $O(wordLength \cdot targetLength)$

    The space complexity is dominated by two factors:

    - Memoization (`dp` table): The dp table stores the intermediate results for every combination of `wordIndex` and `targetIndex`. This table has dimensions of `wordLength x targetLength`, so its space complexity is $O(wordLength \cdot targetLength)$.

    - Character Frequency Matrix (`charFrequency`): The `charFrequency` matrix stores the frequency of each character at each column of the `words` matrix. This matrix has dimensions of `wordLength x 26`, where 26 corresponds to the number of possible characters (assuming lowercase English letters), resulting in a space complexity of $O(wordLength \cdot 26)$, which simplifies to $O(wordLength)$.
    
    Combining both, the overall space complexity is given by $O(wordLength \cdot targetLength + wordLength) \approx O(wordLength \cdot targetLength)$.

---

### Approach 2: Bottom-up Dynamic Programming

#### Intuition

Tabulation is a dynamic programming technique that iteratively computes solutions for all combinations of parameters. Unlike memoization, it avoids recursive stack overhead by using a iterative way, making it more efficient. We have two variables that change as we progress through the matrix: the current word index (`currWord`) and the current `target` string index (`currTarget`). To thoroughly explore the combinations, we use two nested loops to iterate through these variables.

First, we establish the base case: if `currTarget` is `0`, then `dp[currWord][0] = 1`, meaning there is exactly one way to form an empty `target` string, regardless of the number of columns in `words`.

Now to achieve the goal we will fill the DP table with two main steps:

1. Skip the current column of `words`:
   Carry over the value from the previous row: $dp[currWord][currTarget] = dp[currWord - 1][currTarget]$
2. Include the current character if it matches:
   If `target[currTarget - 1]` matches a character in the current column of `words`, add its contribution: $dp[currWord][currTarget] += \text{charFrequency}[currWord - 1][\text{target}[currTarget - 1] - 'a'] \cdot dp[currWord - 1][currTarget - 1]$

Finally, we take the result modulo $10^9 + 7$ at every step to prevent overflow.

At the end, the total number of ways to form the `target` string is stored in `dp[wordLength][targetLength]`.

#### Algorithm

1. Create a 2D array `charFrequency` of size `wordLength x 26` to store the frequency of each character at every index in `words`.
2. Fill `charFrequency` by iterating over each string in `words`:
   - For each string, increment the count of the respective character for the corresponding column.
3. Initialize a DP table `dp` of size `(wordLength + 1) x (targetLength + 1)` and set all values to `0`.
4. Set the base case:
   - For all `currWord` from `0` to `wordLength`, set `dp[currWord][0] = 1`.
5. Iterate `currWord` from `1` to `wordLength`:
   - Iterate `currTarget` from `1` to `targetLength`:
     - Set `dp[currWord][currTarget] = dp[currWord - 1][currTarget]`.
     - If the character at `target[currTarget - 1]` matches a character in `words` at `currWord - 1`, add the contribution:  
       $dp[currWord][currTarget] += charFrequency[currWord - 1][target[currTarget - 1] - 'a'] * dp[currWord - 1][currTarget - 1]$
     - Apply modulo `10^9 + 7` to prevent overflow.
6. Return the value in `dp[wordLength][targetLength]`.

#### Implementation

<iframe src="https://leetcode.com/playground/VVU6dKu9/shared" frameBorder="0" width="100%" height="500" name="VVU6dKu9"></iframe>

#### Complexity Analysis

Let $\text{totalWords}$ be the total number of words in the `words` matrix, and $\text{wordLength}$ and $\text{targetLength}$ represent the length of any word in `words` and the `target` string, respectively.

- Time Complexity: $O(wordLength \cdot targetLength + wordLength \cdot totalWords)$

    To find the frequency of all the characters in the `words` matrix, we iterate through all the characters in the matrix. This takes $O(wordLength \cdot totalWords)$ time.

    The dynamic programming table `dp` is filled by iterating over each combination of `word` index and `target` index, leading to a total of $O(wordLength \cdot targetLength)$ iterations. Each iteration performs constant-time operations such as looking up values in the `charFrequency` matrix and updating the `dp` table.

    Therefore, the total time complexity is given by $O(wordLength \cdot targetLength + wordLength \cdot totalWords)$.

- Space Complexity: $O(wordLength \cdot targetLength)$

    The space complexity is dominated by two factors:

    - `dp` table: The `dp` table stores the intermediate results for every combination of `wordIndex` and `targetIndex`. This table has dimensions of `wordLength x targetLength`, so its space complexity is $O(wordLength \cdot targetLength)$.

    - Character Frequency Matrix (`charFrequency`): The `charFrequency` matrix stores the frequency of each character at each column of the `words` matrix. This matrix has dimensions of `wordLength x 26`, where 26 corresponds to the number of possible characters (assuming lowercase English letters). The space complexity of this matrix is $O(wordLength \cdot 26)$, which simplifies to $O(wordLength)$.

    Combining both, the overall space complexity is $O(wordLength \cdot targetLength)$.

---

### Approach 3: Optimized Bottom-up Dynamic Programming

#### Intuition

From the previous approach, we see that calculating the number of ways to form the target string at position `(currWord, currTarget)` depends only on two values: `(currWord-1, currTarget)` and `(currWord-1, currTarget-1)`. This relationship is expressed as:

$currCount[currTarget] = currCount[currTarget] + (charFrequency[currWord-1][target[currTarget-1] - 'a'] \cdot prevCount[currTarget-1]) \mod MOD$

Here:
- `currCount[currTarget]` accumulates the count of ways to form the target string up to `currTarget`.
- `charFrequency[currWord-1][target[currTarget-1] - 'a']` gives the frequency of the current target character in the previous word.
- `prevCount[currTarget-1]` provides the count of ways to form the target string up to the previous position before the current update.

This relationship ensures that each character from the `target` is considered while accounting for its frequency in the available words.

Using this insight, we can optimize the 2D DP table to a 1D array `currCount`, where each element represents the ways to form the target string up to a specific index. To manage the dependency on values from the previous row, we maintain an additional variable, `prevCount`, which temporarily stores the value of `currCount` before it is updated in the current iteration. Once all iterations are complete, the result is stored in `currCount[target.length()]`.

#### Algorithm

1. Create a 2D array `charFrequency` of size `wordLength x 26` to store the frequency of each character at every index in `words`. Iterate over each string in `words`, and for each string, increment the count of the respective character for the corresponding column in `charFrequency`.
2. Initialize two DP arrays: `prevCount` and `currCount`. Both arrays are of size `targetLength + 1`, and are initially set to `0`. Set `prevCount[0] = 1` because there is one way to form an empty target string.
3. Iterate `currWord` from `1` to `wordLength`:
    - Copy the values from `prevCount` to `currCount` to carry over the previous row.
    - Iterate `currTarget` from `1` to `targetLength`:
        - First, carry over the previous value without using the current column of words by setting `currCount[currTarget] = prevCount[currTarget]`.
        - Then, if the character at `target[currTarget - 1]` matches a character in words at `currWord - 1`, add the contribution from `charFrequency[currWord - 1][target[currTarget - 1] - 'a'] * prevCount[currTarget - 1]` to `currCount[currTarget]`.
        - Apply modulo `10^9 + 7` to the `result` to prevent overflow.
        - After processing each `currWord`, copy the values of `currCount` to `prevCount` for the next iteration.
4. Finally, return the value in `currCount[targetLength]`, which stores the number of ways to form the target string using the entire words matrix.

#### Implementation

<iframe src="https://leetcode.com/playground/8UukZEqX/shared" frameBorder="0" width="100%" height="500" name="8UukZEqX"></iframe>

#### Complexity Analysis

Let $\text{totalWords}$ be the total number of words in the `words` matrix, and $\text{wordLength}$ and $\text{targetLength}$ represent the length of any word in `words` and the `target` string, respectively.

- Time Complexity: $O(wordLength \cdot targetLength + wordLength \cdot totalWords)$

    To find the frequency of all the characters in the `words` matrix, we iterate through all the characters in the matrix. This takes $O(wordLength \cdot totalWords)$ time.

    The dynamic programming arrays `prevCount` and `currCount` are filled by iterating over each combination of `word` index and `target` index, leading to a total of $O(wordLength \cdot targetLength)$ iterations. Each iteration performs constant-time operations such as looking up values in the `charFrequency` matrix and updating the dp table.

    Therefore, the total time complexity is given by $O(wordLength \cdot targetLength + wordLength \cdot totalWords)$.

- Space Complexity: $O(wordLength)$

    The space complexity is dominated by two factors:

    1. The dp arrays `prevCount` and `currCount`: These arrays store the results for every combination of `wordIndex` and `targetIndex`. Each array has a size of $(targetLength + 1)$, but since `targetLength` can't be larger than `wordLength`, the space complexity is effectively $O(wordLength)$.
    
    2. Character Frequency Matrix (`charFrequency`): The `charFrequency` matrix stores the frequency of each character at each column of the `words` matrix. This matrix has dimensions of `wordLength x 26`, where 26 corresponds to the number of possible characters (assuming lowercase English letters). The space complexity of this matrix is $O(wordLength \cdot 26)$, which simplifies to $O(wordLength)$.

    Combining both, the overall space complexity is $O(wordLength)$.

---