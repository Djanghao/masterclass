# Official Solution

**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solution/](https://leetcode.com/problems/letter-tile-possibilities/solution/)

---

[TOC]

## Solution

---

### Approach 1: Recursion

#### Intuition

Let's think about how we naturally form different sequences from a set of letters. Imagine we have Scrabble tiles with the letters "A", "A", and "B". How would we manually find all possible sequences? We would likely start with single letters ("A", "B"), then try two-letter combinations ("AA", "AB"), and finally three-letter combinations ("AAB").

A point to note in this manual process is that at each step, we make a choice about whether to use each available letter. For example, when starting with "AAB", we first decide: "Should I use the first "A"?" If we use it, we then face the same type of decision with our remaining letters. If we don't use it, we still have all our letters available for future choices.

This decision-making pattern, where each choice reduces the problem to a smaller version of itself and follows a repetitive structure, naturally suggests a recursive approach. At each level of the recursion (or decision point), we have two options: either use an available letter and continue exploring, or skip it and move to the next letter.

The diagram below illustrates the structure of a recursion tree for this problem:

![](../Figures/1079/recursion_tree.png)

However, there's a subtle complexity we need to address. Consider the input `"AAB"` again. If we're not careful, we might count the same sequence multiple times because we have duplicate letters. For instance, we could form `"AB"` by using either the first or second `"A"`.

To solve this, we’ll store all the sequences we generate in a hash set. Hash sets allow for quick lookups and keep the characters unique due to the set property, so we can check whether a particular sequence has already been found.

Let's create a recursive function `generateSequences` which creates all possible letter sequences. We'll also maintain a boolean array `used` of size equal to that of `tiles`. Each index in `used` tells us whether the character at that index in `tiles` has been used in the current sequence or not.

The first step in the recursive function is to add the current sequence to the hash set. This is because all intermediate sequences are also valid combinations and not just the ones where we use all the tiles. Next, we’ll iterate over each character in `tiles`. If a character hasn’t been used yet, we’ll add it to the current sequence and recurse. After exploring that path, we’ll backtrack and mark the letter as unused to allow us to try different combinations.

We start the recursion by calling the function with an empty string. When the recursion completes, the hash set will contain all possible letter combinations. Finally, we return the size of the hash set minus one, since the problem asks for non-empty sequences only.

> For a more comprehensive understanding of hash tables, check out the [Hash Table Explore Card](https://leetcode.com/explore/learn/card/hash-table/). This resource provides an in-depth look at hash tables, explaining their key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize: 
  - a hash set called `sequences` to store the unique sequences.
  - a variable `len` to store the length of the input string `tiles`.
- Create a boolean array `used` of size `len` to track the used characters
- Call the recursive helper function `generateSequences` with the initial parameters: `tiles`, an empty string, `used` array, and the `sequences` set.
- Return the size of the `sequences` set minus 1 (to exclude the empty string).

Helper method `generateSequences(tiles, current, used, sequences)`:

- Add the `current` sequence to the `sequences` set.
- Initialize a loop that runs from position `0` to the length of `tiles`. For each position:
  - Check if the character at the current position is not used. If not used:
    - Mark the current position as used in the `used` array.
    - Make a recursive call with: `tiles`, `current` string + character at the current position, `used` array, and `sequences` set.
    - After the recursive call returns, mark the current position as unused (backtrack).
- When the loop ends, return to the previous recursive call.

#### Implementation

<iframe src="https://leetcode.com/playground/DGSVqd6c/shared" frameBorder="0" width="100%" height="500" name="DGSVqd6c"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `tiles`.

- Time complexity: $O(n \cdot n!)$

    The time complexity is determined by two main factors. First, for each position, we have at most $n$ choices (in the first level of recursion). At each subsequent level, we have one less choice as characters get used. This creates a pattern similar to $n \cdot (n-1) \cdot (n-2) \cdot ... \cdot 1$, which is $n!$. Additionally, at each step, we perform string concatenation which takes $O(n)$ time. Therefore, the total time complexity is $O(n \cdot n!)$.

- Space complexity: $O(n \cdot n!)$

    The space complexity has multiple components. First, the recursion stack can go up to depth $n$, using $O(n)$ space. The set `sequences` will store all possible unique sequences. For a string of length $n$, we can have sequences of length $1$ to $n$, and each sequence can be made from $n$ possible characters (with repetition allowed). This means the hash set can store up to $O(n!)$ sequences, and each sequence can be of length $O(n)$. Therefore, the total space complexity is $O(n \cdot n!)$.

---

### Approach 2: Optimized Recursion

#### Intuition

Imagine we're playing with Scrabble tiles again, but this time we have the string "AAABBC". We can make an important observation here: what really matters isn't the position of each letter, but rather how many of each letter we have available. Whether we use the first "A" or the second "A" doesn't change the sequences we can create - we just need to know we have three "A"s to work with.

This insight leads us to our first key decision: instead of tracking individual letters, we can track the frequency of each letter. Think of it like having separate piles for each letter - three tiles in the "A" pile, two in the "B" pile, and one in the "C" pile. To implement this, we can maintain an array `charCount` where each index represents a letter (0 for "A", 1 for "B", etc.), and the value represents how many of that letter we have.

Now, let's think about how we build sequences using these frequency counts. At each step, we're asking ourselves: "Which letter should I add to my current sequence?" We can loop over all 26 letters and use any letter that still has a positive count. This is fundamentally different from our previous approach where we were making yes/no decisions about each position in `tiles`.

This incremental building of the sequence using the remaining letters suggests a recursive approach. We'll pass `charCount` to the recursive function and start building the sequence by eliminating each available character one by one. Remember that we also need to count all intermediate sequences (where `charCount` is not empty yet), because these are also valid letter tile possibilities.

Notice that nowhere in our algorithm do we work with the actual sequence itself. Each unique sequence is determined by the number of letters available in `charCount`, not the sequence. This means we no longer need to maintain a hash set to store visited sequences, saving significant space.

Our main function calls the recursive method with the full `charCount` array. The result returned by it is our required answer.

#### Algorithm

- Initialize an integer array `charCount` of size `26` to store the frequency of each uppercase letter.
- Iterate through each character of `tiles`:
  - Increment the count at the index (character - 'A') in the `charCount` array.
- Call the recursive helper function `findSequences` with the `charCount` array.
- Return the result from `findSequences`.

Helper method `findSequences(charCount)`:

- Initialize a variable `totalCount` to `0` to track the number of possible sequences.
- Start a loop that runs from position `0` to `25` (for 26 letters):
  - Check if the count of the current character is `0`. If true:
    - Skip to the next iteration.
  - If not `0`: 
    - Increment `totalCount` by `1` (counting the current character as a sequence).
    - Decrement the count of the current character in the `charCount` array.
    - Make a recursive call with the updated `charCount` array.
    - Add the result of the recursive call to `totalCount`.
    - Increment the count of the current character back (backtrack).
- Return `totalCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/TujH9fTX/shared" frameBorder="0" width="100%" height="500" name="TujH9fTX"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `tiles`.

- Time complexity: $O(n!)$

    The time complexity comes from the fact that for each position in our sequence, we can choose any of the remaining available characters. At each recursive call, we try all remaining characters, and the number of choices decreases by $1$ each time since we're using frequency counting to handle duplicates. For an input string of length $n$, at the first level we have $n$ choices, then $(n-1)$ choices, and so on, leading to $n \cdot (n-1) \cdot (n-2) ... 1$ possibilities. This recursive pattern of decreasing choices at each level results in a time complexity of $O(n!)$.

    > [!NOTE]
    > A common misconception is that the time complexity of this problem is $O(2^n)$, stemming from the idea that each character has a binary decision, either to include or exclude. This may seem valid in problems involving combinations or subsets, but here, the goal is to generate all possible permutations of the tiles. Since we're considering character frequencies, the complexity grows factorially, not exponentially, leading to $O(n!)$. Each recursive call handles one tile from a decreasing pool of remaining tiles, generating distinct sequences.
    > 
    > Another misconception is that the time complexity is $O(26^n)$, based on the assumption that there are 26 possible characters at each recursive step. However, the actual complexity depends on the tile frequencies. The recursion operates within the constraints of the available tiles, not an arbitrary 26 choices per call.

- Space complexity: $O(n)$

    The space complexity has two parts. First, the fixed-size array `charCount` takes $O(1)$ space as it always has $26$ elements regardless of input size. Second, the recursion stack can go up to depth $n$ as each recursive call uses one character.
    
    Therefore, the total space complexity is $O(n)$.

---

### Approach 3: Permutations and Combinations

#### Intuition

Consider a sequence "ABC". Generating it actually has two steps:
1. Choosing the three tiles "A", "B", and "C".
2. Arranging them in order to form "ABC".

Notice that after step 1, we can create 5 more sequences: "BAC", "CBA", "BCA", "ACB", and "CAB." These are all the permutations of "ABC".

The total number of permutations that can be generated from $n$ unique characters is $n!$. For the characters "A", "B", and "C", the number of unique characters is 3, so 6 sequences can be generated from them.

However, we need to account for cases where there are multiple occurrences of the same character. For example, consider the tiles "A", "A", and "B". This will generate only 3 unique sequences of length 3: "AAB", "ABA", and "BAA". This is because swapping the first and second "A" doesn’t create a new sequence, so they can’t be counted separately.

To account for this, we modify our formula to the following: if we have 3 characters with frequencies $n_1$, $n_2$, and $n_3$, the number of $3$ length sequences are:

$$
\begin{aligned}
    \frac{(n_1 + n_2 + n_3)!}{(n_1)! \cdot (n_2)! \cdot (n_3)!}
\end{aligned}
$$

The above formula can be extended to $m$ characters of different frequencies.

So now, our task is to generate all combinations of characters from the given tiles. We can use a recursive method to do this. The function iterates over the tiles string and makes two choices at each step: whether to pick the current character or not. This generates all possible combinations of characters, which we then pass to a helper method called `countPermutations`.

The `countPermutations` method counts the frequency of each character in the generated combination using an array called `charCount` (similar to the previous approach). It then applies the formula above to calculate all possible permutations of the current combination.

The total permutations for each combination are returned by the recursive function. The cumulative sum of all such combinations is our final answer, which we return at the end.

#### Algorithm

- Initialize a hash set `seen` to store unique sequences.
- Convert `seen` to a sorted string `sortedTiles`.
- Call the recursive helper function `generateSequences` with initial parameters. Subtract 1 from the result and return it.

Helper method `factorial(n)`:

- Check if `n` is less than or equal to `1`:
  - If `true`, return `1`.
- Initialize a variable `result` to `1`.
- Loop `num` from `2` to `n`:
  - Multiply the result by `num`.
- Return the final `result`.

Helper method `countPermutations(seq)`:

- Initialize an integer array `charCount` of size `26` for character frequencies.
- Iterate through each character in the input `seq`:
  - Increment the count at index (character - 'A') in `charCount`.
- Set a variable `total` as the `factorial` of the length of `seq`. 
- Divide the `total` by the factorial of each character's frequency in `charCount`.
- Return the final `total`.

Helper method `generateSequences(tiles, current, pos, seen)`:

- Check if the current `pos` has reached the length of `tiles`. If true and the `current` sequence is new (added to `seen` set):
  - Return the number of permutations for the current sequence.
- If true but the sequence is already seen:
  - Return `0`.
- Make two recursive calls and sum their results:
  - One excluding the current character (same sequence, next position).
  - One including the current character (sequence + current character, next position).
- Return the sum of both recursive calls.

#### Implementation

<iframe src="https://leetcode.com/playground/oW4cyKrY/shared" frameBorder="0" width="100%" height="500" name="oW4cyKrY"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `tiles`.

- Time complexity: $O(2^n \cdot n)$

    The time complexity is determined by several components: 
    1. The initial sorting takes $O(n \log n)$ time. 
    2. In the `generateSequences` function, we create a binary recursion tree where at each position we have two choices (include or exclude), leading to $2^n$ possible sequences. For each unique sequence, we calculate permutations which involves iterating over the sequence ($O(n)$) and performing factorial calculations ($O(n)$). 
    3. The factorial calculations themselves are $O(n)$ as they iterate from $1$ to at most $n$. 
   
    Therefore, the dominant factor is generating and processing all possible sequences, giving us a time complexity of $O(2^n \cdot n)$.

- Space complexity: $O(2^n \cdot n)$

    The space complexity also has multiple components. 
    1. The recursion stack can go up to depth $n$, using $O(n)$ space. 
    2. The hash set `seen` stores unique combinations of characters. In the worst case, with all distinct characters, we could have $2^n$ different combinations as each character can either be included or excluded. Each sequence in the set can be up to length $n$. So, the set uses $O(2^n \cdot n)$ space.
    3. The `charCount` array in `countPermutations` is constant space $O(1)$ as it's always size $26$. 
    
    Thus, the dominant factor is the space needed for storing unique sequences in the `seen` set, making the total space complexity $O(2^n \cdot n)$.

---