# Sliding Window without additional memory

**Author:** drgavrikov
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5353968/](https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/5353968/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

Approach utilizes a sliding window technique to achieve this efficiently.

- Initialization:

**count**: Keeps track of the total number of special substrings (substrings with all unique characters).

**frequencies**: A hash map to keep track of the frequency of each character within the current window.

**left**: The left boundary of the current window.

- Sliding Window Technique:

Iterate through the string s using right as the right boundary of the window.

Increment its frequency in the frequencies map for each character at position right.

- Shrink the Window:

While **frequencies[s[right]]** is greater than 1 (indicating there are repeated characters in the window), move the left boundary to the right and decrement the frequency of the character at position left. If the frequency of this character becomes 1 the character becomes unique again within the window. Increment left to shrink the window.

- Count Special Substrings:

For each valid position of right, the number of special substrings ending at right is $right - left + 1$. This is because all substrings ending at right and starting from any index between left and right (inclusive) are valid special substrings.

# Complexity
- Time complexity: $O(N)$

- Space complexity: $O(1)$ additional memory.

We need an array $frequencies$ to keep the frequencies of characters in the current window. Since there can only be lowercase English letters the size of $frequencies$ is only 26 and hence is independent of $s$ length. Therefore, the total space complexity is constant.

# Code
```
class Solution {
    fun numberOfSpecialSubstrings(s: String): Int {
        var count = 0
        val frequencies = HashMap<Char, Int>()

        var left = 0
        for (right in s.indices) {
            frequencies[s[right]] = frequencies.getOrDefault(s[right], 0) + 1
            while (frequencies.getValue(s[right]) > 1) {
                frequencies[s[left]] = frequencies.getValue(s[left]) - 1
                left++
            }
            count += right - left + 1
        }
        return count
    }
}

```

Most of my solutions are in\xA0[C++](https://github.com/drgavrikov/leetcode-cpp)\xA0and\xA0[Kotlin](https://github.com/drgavrikov/leetcode-jvm)\xA0on my\xA0Github.
