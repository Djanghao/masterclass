# Rust Solution | Detailed Explanation | BITMASK

**Author:** vibhushit
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5788651/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5788651/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Let's break down the intuition behind this algorithm:

1. Even/Odd Parity:
   The key insight is that we're looking for substrings where all vowels appear an even number of times. We don't care about the exact count, just whether it's even or odd.

2. Bitmask Representation:
   We use a bitmask to represent the parity of each vowel. Each bit corresponds to a vowel:
   - 0 means even count
   - 1 means odd count

3. XOR Properties:
   XOR (^) has a useful property: a ^ a = 0. This means:
   - XORing an even number of 1s results in 0
   - XORing an odd number of 1s results in 1
   This perfectly matches our even/odd parity requirement.

4. State Transitions:
   Every time we encounter a vowel, we flip its bit in the state. This effectively toggles between even and odd counts for that vowel.

5. Valid Substrings:
   A substring is valid if its end state is the same as its start state. Why? Because this means all vowels have returned to their original parity (even count).

6. Finding the Longest:
   - We keep track of the first occurrence of each state.
   - When we see a state again, the substring between its first occurrence and now is valid.
   - We continuously update the longest valid substring found.

7. Initial State:
   We start with a state of 0 (all even) at index -1. This clever trick allows us to find valid substrings that start from the beginning of the string.

Visualization:
Imagine the string "aabaa":
   a   a   b   a   a
   1   0   0   1   0   (state for 'a', other bits omitted for simplicity)
 ^   ^           ^
 |   |           |
 |   |           Longest valid substring (4 characters)
 |   |
 |   Valid substring (2 characters)
 |
Start

The state flips at each 'a', and when we return to a previously seen state, we've found a valid substring.

This approach is elegant because:
1. It handles all vowels simultaneously.
2. It avoids counting, using parity instead.
3. It finds all valid substrings in a single pass through the string.
---

# Approach
<!-- Describe your approach to solving the problem. -->
Let's break down the code and explain its functionality in detail:

```rust
use std::collections::HashMap;

impl Solution {
    pub fn find_the_longest_substring(s: String) -> i32 {
        let mut longest_substring = 0;
        let mut vowel_state = 0u8;
        let mut state_first_seen: HashMap<u8, i32> = HashMap::new();
        state_first_seen.insert(0, -1);
```

1. We initialize `longest_substring` to keep track of the longest valid substring found.
2. `vowel_state` is a bitmask representing the parity (odd/even count) of each vowel.
3. `state_first_seen` is a HashMap that stores the earliest index for each unique vowel state.
4. We insert an initial state of 0 at index -1 to handle the case where the entire string is valid.

```rust
        for (index, ch) in s.chars().enumerate() {
            vowel_state ^= match ch {
                'a' => 1 << 0,
                'e' => 1 << 1,
                'i' => 1 << 2,
                'o' => 1 << 3,
                'u' => 1 << 4,
                _ => 0,
            };
```

5. We iterate through each character in the string.
6. For each vowel, we toggle its corresponding bit in `vowel_state` using XOR (^=).
   - This effectively tracks whether we've seen an odd or even number of each vowel.

```rust
            let current_index = index as i32;
            longest_substring = longest_substring.max(
                current_index - state_first_seen.get(&vowel_state).copied().unwrap_or(current_index)
            );
```

7. We calculate the length of the current substring by subtracting the earliest occurrence of the current state from the current index.
8. If this state hasn't been seen before, `unwrap_or(current_index)` ensures we don't get a negative length.
9. We update `longest_substring` if this substring is longer than the previous longest.

```rust
            state_first_seen.entry(vowel_state).or_insert(current_index);
        }

        longest_substring
    }
}
```

10. We record the current index as the earliest occurrence of this state if it hasn't been seen before.
11. Finally, we return the length of the longest valid substring found.

Key Concepts:
- The bitmask `vowel_state` efficiently tracks the parity of each vowel's count.
- A substring is valid if all vowels appear an even number of times, which corresponds to a `vowel_state` of 0.
- By tracking the earliest occurrence of each state, we can calculate the length of valid substrings ending at the current position.
- The XOR operation toggles bits, effectively tracking even/odd counts without needing to store actual counts.

This solution has a time complexity of O(n) as it processes each character once, and a space complexity of O(1) because there are at most 32 possible states (2^5 for 5 vowels), regardless of the string length.

----

# Code
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn find_the_longest_substring(s: String) -> i32 {
        let mut longest_substring = 0;
        let mut vowel_state = 0u8;
        let mut state_first_seen: HashMap<u8, i32> = HashMap::new();
        state_first_seen.insert(0, -1);

        for (index, ch) in s.chars().enumerate() {
            vowel_state ^= match ch {
                'a' => 1 << 0,
                'e' => 1 << 1,
                'i' => 1 << 2,
                'o' => 1 << 3,
                'u' => 1 << 4,
                _ => 0,
            };

            let current_index = index as i32;
            longest_substring = longest_substring.max(
                current_index - state_first_seen.get(&vowel_state).copied().unwrap_or(current_index)
            );

            state_first_seen.entry(vowel_state).or_insert(current_index);
        }

        longest_substring
    }
}


```