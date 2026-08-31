# Greedy approach.

**Author:** heiseshandian
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/4814938/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/4814938/)

---

# Minimum Additions to Make Valid String

## Intuition

The task involves making a given string valid by ensuring it only contains subsequences of "abc". The intuition behind the solution is to traverse the string, identify invalid sequences, and calculate the minimum number of characters that need to be added to transform the string into a valid one. The solution employs a greedy approach, preferring to advance through valid "abc" sequences directly and adding characters as needed when encountering invalid sequences.

## Approach

1. **Initialization**: Create a mapping `next` that defines valid next characters for 'a' and 'b', facilitating the check for subsequences leading to 'c'.
2. **Traversal**: Iterate through the string with a pointer `i`.
   - If the current sequence is "abc", it's already valid. Move the pointer by 3 to skip these characters.
   - If the current and next character form a valid progression (either "ab" or "bc"), only one additional character is needed to complete the subsequence. Move the pointer by 2 and increment `min` by 1.
   - If neither condition is met, the current character is part of an invalid sequence. Increment `min` by 2 to account for the two characters needed to form a valid subsequence and advance the pointer by 1.
3. **Result**: The variable `min` tracks the minimum number of additions required to make the string valid.

## Complexity

- **Time Complexity**: O(n), where n is the length of the input string. The solution iterates through the string once, making constant-time checks and updates at each step.
- **Space Complexity**: O(1). The space used by the `next` mapping and variables is constant, not depending on the size of the input string.


# Code
```
function addMinimum(word: string): number {
    const next = {
        a: new Set(['b', 'c']),
        b: new Set(['c']),
    };

    let min = 0;
    let i = 0;
    while (i < word.length) {
        if (word[i] === 'a' && word[i + 1] === 'b' && word[i + 2] === 'c') {
            i += 3;
        } else if (next[word[i]]?.has(word[i + 1])) {
            min += 1;
            i += 2;
        } else {
            min += 2;
            i++;
        }
    }

    return min;
}

```