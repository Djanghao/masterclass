# Beats 100% Solution

**Author:** amitbasuri123
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-keypresses/solutions/4599816/](https://leetcode.com/problems/minimum-number-of-keypresses/solutions/4599816/)

---

# Intuition
The problem requires us to minimize the number of keypresses needed to type a given string using a special keypad. The keypad has 9 buttons, each capable of being mapped to up to 3 characters. To type a character, we press its corresponding button a number of times equal to the character's position on the button. Therefore, our goal is to map more frequently occurring characters to the first positions on the buttons, thereby minimizing the total keypresses.

# Approach
1. **Count Frequencies**: First, we count the frequency of each character in the string using a frequency counter.
2. **Sort Frequencies**: We then sort these frequencies in descending order because we want to assign the most frequently used characters to the buttons pressed the least number of times.
3. **Assign Buttons**: There are 9 buttons, and each button can map up to 3 characters. The first character on a button requires 1 press, the second requires 2 presses, and the third requires 3 presses. Therefore, we will assign the most frequent character to the 1st press, the next frequent to the 2nd press, and so on.
4. **Calculate Keypresses**: Finally, we calculate the total number of keypresses. For each character, the number of keypresses is its frequency times the number of times the button must be pressed to type that character.

# Complexity
- Time complexity: $$O(n + 26 \\log 26)$$
  - Counting the frequencies of each character takes $$O(n)$$ time, where $$n$$ is the length of the string.
  - Sorting the frequencies takes $$O(26 \\log 26)$$, which simplifies to $$O(1)$$ since the number of distinct characters is constant (26 lowercase English letters).
- Space complexity: $$O(26)$$ or $$O(1)$$
  - We store the frequency of each character, which, at most, will be 26 (for all lowercase English letters).

# Code
```python []
class Solution:
    def minimumKeypresses(self, s: str) -> int:
        # Count the frequency of each character using Counter
        freq = Counter(s)

        # Sort the characters by frequency in descending order
        sorted_freq = sorted(freq.values(), reverse=True)

        # Calculate the total number of keypresses
        return sum(f * (1 + (i // 9)) for i, f in enumerate(sorted_freq))
```
```Go []
func minimumKeypresses(s string) int {
    freq := make(map[rune]int)
    for _, char := range s {
        freq[char]++
    }

    values := make([]int, 0, len(freq))
    for _, v := range freq {
        values = append(values, v)
    }
    sort.Sort(sort.Reverse(sort.IntSlice(values)))

    total := 0
    for i, f := range values {
        total += f * (1 + i/9)
    }
    return total
}
```
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn minimum_keypresses(s: String) -> i32 {
        let mut freq = HashMap::new();
        for ch in s.chars() {
            *freq.entry(ch).or_insert(0) += 1;
        }

        let mut values: Vec<_> = freq.values().collect();
        values.sort_unstable_by(|a, b| b.cmp(a));

        values.iter().enumerate().map(|(i, &f)| f * (1 + (i / 9) as i32)).sum()
    }
}
```