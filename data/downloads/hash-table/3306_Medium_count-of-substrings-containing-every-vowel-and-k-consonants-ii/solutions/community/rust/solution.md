# Rust Solution

**Author:** abhineetraj1
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5850050/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5850050/)

---

# Intuition
To solve this problem, we need to efficiently track the occurrence of vowels and consonants as we explore substrings of word. The goal is to maintain a sliding window that expands and contracts based on the conditions for valid substrings.

# Approach
1. **Bit Manipulation**: 
   - Use a bitmask to track the presence of each vowel in the current substring. This allows for quick checks to see if all vowels are present.

2. **Sliding Window Technique**:
   - Use two pointers (`l` and `r`) to represent the current substring.
   - As you expand the right pointer (`r`), count vowels and consonants.
   - If the conditions (at least `k` consonants and all vowels present) are met, count the valid substrings that can be formed and increment the left pointer (`l`) to potentially find new valid substrings.

3. **Counting Valid Substrings**:
   - For every valid configuration of the sliding window, calculate how many valid substrings can be formed starting from the left pointer to the end of the array.

4. **Final Calculation**:
   - The total valid substrings are calculated by subtracting the counts for `k + 1` from those for `k`, which efficiently provides the count of substrings with exactly `k` consonants.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn count_of_substrings(word: String, k: i32) -> i64 {
        let arr: Vec<char> = word.chars().collect();
        Self::count_at_least_k(&arr, k) - Self::count_at_least_k(&arr, k + 1)
    }

    fn count_at_least_k(arr: &[char], k: i32) -> i64 {
        let mut res = 0;
        let mut count = vec![0; 26];
        let mut mask = 0;
        let mut consonants = 0;
        let mut l = 0;
        let mut r = 0;

        let vowel_mask = Self::vowel_mask();

        while r < arr.len() {
            count[arr[r] as usize - 'a' as usize] += 1;
            if (vowel_mask & (1 << (arr[r] as usize - 'a' as usize))) != 0 {
                mask |= 1 << (arr[r] as usize - 'a' as usize);
            } else {
                consonants += 1;
            }

            while consonants >= k && mask == vowel_mask {
                res += (arr.len() - r) as i64;
                if (vowel_mask & (1 << (arr[l] as usize - 'a' as usize))) == 0 {
                    consonants -= 1;
                } else {
                    count[arr[l] as usize - 'a' as usize] -= 1;
                    if count[arr[l] as usize - 'a' as usize] == 0 {
                        mask ^= 1 << (arr[l] as usize - 'a' as usize);
                    }
                }
                l += 1;
            }
            r += 1;
        }
        res
    }

    fn vowel_mask() -> usize {
        let mut mask = 0;
        mask |= 1; // a
        mask |= 1 << ('e' as usize - 'a' as usize);
        mask |= 1 << ('i' as usize - 'a' as usize);
        mask |= 1 << ('o' as usize - 'a' as usize);
        mask |= 1 << ('u' as usize - 'a' as usize);
        mask
    }
}

```