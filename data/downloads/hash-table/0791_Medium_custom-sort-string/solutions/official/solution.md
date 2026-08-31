# Official Solution

**Link:** [https://leetcode.com/problems/custom-sort-string/solution/](https://leetcode.com/problems/custom-sort-string/solution/)

---

[TOC]

## Solution

---

### Approach 1: Custom Comparator

#### Intuition

A comparator is a tool used to define (or redefine) an order between two items of the same class or data type. Most languages allow for the use of a custom comparator. This means that we can define a rule that determines how an array is sorted, and leverage built-in sort functions for custom sort.

Recall that a comparator takes two values `c1` and `c2` as parameters and returns the following:

1. If `c1` comes before `c2`, return a negative integer.
2. If `c1` comes after `c2`, return a positive integer.
3. If `c1` and `c2` are equal, return $0$.

Letter `c1` should come before `c2` in the sorted order of `s` if and only if the index of `c1` in the `order` string is less than the index of `c2`. By evaluating `c1` and `c2` as integer indices, we can use subtraction to achieve a return value that abides by the three rules described above.

Let's consider the following example: let `s` = "bdadeec" and `order` = "edcba". Letter "e" is at index $0$ in `order`, whereas letter "b" is at index $3$. Because $0 < 3$, "e" should come before "b" in the result string. Therefore, the return result is $0 - 3 = -3$, a negative number that adheres to the first rule listed above.

Taking into account all possible relationships between pairs of letters, the result string is "eeddcba".

#### Algorithm

1. Create a character array of input string `s` to allow modification.
2. Use the built-in sort method and define the comparator function as the difference between the index of `c1` and the index of `c2` in `order`.
3. Concatenate the character array into a string.
4. Return this resulting string.

#### Implementation

<iframe src="https://leetcode.com/playground/WRQhQEuC/shared" frameBorder="0" width="100%" height="446" name="WRQhQEuC"></iframe>

#### Complexity Analysis

Here, we define $N$ as the length of string `s`, and $K$ as the length of string `order`.

* Time Complexity:  $O(N \log N)$

    Sorting an array of length $N$ requires $O(N \log N)$ time, and the indices of `order` have to be retrieved for each distinct letter, which results in an $O(N \log N + K)$ complexity. $K$ is at most $26$, the number of unique English letters, so we can simplify the time complexity to $O(N \log N)$.

* Space Complexity:  $O(N)$ or $O(\log ⁡N)$

    Note that some extra space is used when we sort arrays in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm, which has a space complexity of $O( \log N)$ for sorting two arrays. The Java solution also uses an auxiliary array of length $N$. This is the dominating term for the Java solution.
    - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O(\log ⁡N)$. This is the main space used by the C++ solution.

---

### Approach 2: Frequency Table and Counting

#### Intuition

Because the `order` string already gives us the explicit ordering to sort all the letters, we can generate a sorted version of `s` without calling upon an $O(N \log N)$ algorithm. Let's create a frequency table where the key equals a character `c`, and the value equals how many times `c` appears in the string `s`. Then, for each character in `order`, append the number of occurrences of that character in `s` to the resulting string. After iterating through `order`, any remaining characters in `s` can be appended to the end without disrupting the defined sorting order.

Let's look at an example: consider `s` = "leetcoded" and `order` = "ecolt", and `result` is initially an empty string.

Frequency Table:

|character | l | e | t | c | o | d |
|----------|---|---|---|---|---|---|
|frequency | 1 | 3 | 1 | 1 | 1 | 2 |

1. The first letter in `order` is "e", which appears $3$ times in `s`, so `result` = "eee".
2. The second letter in `order` is "c", which appears $1$ times in `s`, so `result` = "eeec".
3. The third letter in `order` is "o", which appears $1$ times in `s`, so `result` = "eeeco".
4. The fourth letter in `order` is "l", which appears $1$ times in `s`, so `result` = "eeecol".
5. The fifth letter in `order` is "t", which appears $1$ times in `s`, so `result` = "eeecolt".

Finally, note that some letters in `s` could be missing in `order`, so we need to append any remaining letters to `result`. In this case, two occurrences of "d" need to be appended, so `result` = "eeecoltdd" is the final result.

#### Algorithm

1. Initialize a frequency table (here we use a Hashmap, but a frequency array works too).
2. Populate the frequency table by incrementing `freq[letter]` for each letter in `s`.
3. For each character of `order`, append to `result` the same frequency it appears in `s`.
4. Iterate through the frequency table to find any remaining letters of `s` not in `order`, and append these letters to `result`.
5. Return the resulting string.

#### Implementation

<iframe src="https://leetcode.com/playground/4QjeBHtA/shared" frameBorder="0" width="100%" height="500" name="4QjeBHtA"></iframe>

#### Complexity Analysis

Here, we define $N$ as the length of string `s`, and $K$ as the length of string `order`.

* Time Complexity: $O(N)$

    It takes $O(N)$ time to populate the frequency table, and all other hashmap operations performed take $O(1)$ time in the average case. Building the result string also takes $O(N)$ time because each letter from `s` is appended to the result in the custom order, making the overall time complexity $O(N)$.

* Space Complexity: $O(N)$

    A hash map and a `result` string are created, which results in an additional space complexity of $O(N)$.