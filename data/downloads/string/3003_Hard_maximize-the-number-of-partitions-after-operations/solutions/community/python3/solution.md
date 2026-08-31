# [C++, Java, Python] Clean Bitmask + DP

**Author:** tojuna
**Votes:** 63
**Link:** [https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/solutions/4520834/](https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/solutions/4520834/)

---

# Intuition
Considering the constraints a dynamic programming approach will work.

A bitset can represent the presence or absence of each english letter, simplifying the process of tracking distinct characters in a given substring. With the help of bit manipulation such as bitwise OR operations, we can update the bitset efficiently as the algorithm iterates through the string.

The DP function simulates the process of choosing prefixes and determining the resulting partitions. The function takes into account the current index in the string, the current set of distinct characters, and a flag indicating whether a character change is still allowed. The base case of the recursion is when the end of the string is reached.

The logic within the DP function involves updating the set of distinct characters with the current character and evaluating whether the current partition violates the constraint. If the constraint is violated, the function explores the possibility of starting a new partition or considering the option to change a character at the current index. This consideration of character change is important in optimizing the number of partitions. The function explores all possible character changes when the option is available.

# Approach

1. Define a helper function `dp(index, current_set, can_change)` for dynamic programming, where:
    - `index` represents the current index in the string `s`.
    - `current_set` is a bitmask to track the set of distinct characters encountered so far.
    - `can_change` is a boolean indicating whether one index can be changed or not.

2. If the `index` has reached the end of the string (`index == len(s)`), return 0 as no further partitions can be made.

3. Calculate the index of the character at the current position (`character_index = ord(s[index]) - ord('a')`).

4. Update the `current_set` by adding the current character to it (`current_set_updated = current_set | (1 << character_index)`).

5. Calculate the number of distinct characters in the updated set (`distinct_count = current_set_updated.bit_count()`).

6. Check if the distinct count exceeds the limit `k`:
   - If yes, set `result` to 1 plus the result of the recursive call with the next index and a new set containing only the current character.
   - If no, set `result` to the result of the recursive call with the updated set and the next index.

7. If `can_change` is True, explore the possibility of changing the current character:
   - Iterate over all possible characters (26 lowercase English letters).
   - Update the set with the new character (`new_set = current_set | (1 << new_character_index)`).
   - Calculate the distinct count for the new set.
   - If the distinct count exceeds `k`:
      - Update `result` to the maximum of its current value and 1 plus the recursive call with the next index and a new set containing only the new character.
      - If not, update `result` to the maximum of its current value and the recursive call with the updated set and the next index.

8. Return the final result, which is the result of the initial call to the `dp` function with initial parameters (starting from the first character, an empty set, and the ability to change one index).

# Code

<iframe src="https://leetcode.com/playground/3Uq7JbW9/shared" frameBorder="0" width="900" height="960"></iframe>
