# 💥Rust | Memory beats 100.00%, Runtime beats 66.67% [EXPLAINED]

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5720544/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5720544/)

---

# Intuition
We need to find how many strings in given ranges start and end with a vowel. Using a prefix sum array allows us to quickly count these strings over any range.

# Approach
Prefix Sum Array: Create an array where each entry holds the count of valid strings (starting and ending with a vowel) up to that position.

Range Query: For each query, use the prefix sum array to quickly calculate the number of valid strings in the specified range by subtracting the counts at the range's boundaries.

# Complexity
- Time complexity:
O(n + q), where n is the number of words and q is the number of queries. Building the prefix sum array takes O(n) time, and answering each query takes O(1) time.

- Space complexity:
O(n), due to the space needed for the prefix sum array.

# Code
```rust []
impl Solution {
    pub fn vowel_strings(words: Vec<String>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let vowels = ['a', 'e', 'i', 'o', 'u'].iter().copied().collect::<std::collections::HashSet<_>>();

        // Step 1: Build the prefix sum array
        let mut prefix_sum = vec![0; words.len() + 1];
        for (i, word) in words.iter().enumerate() {
            let is_vowel_string = word.chars().next().map_or(false, |c| vowels.contains(&c)) &&
                                  word.chars().last().map_or(false, |c| vowels.contains(&c));
            prefix_sum[i + 1] = prefix_sum[i] + if is_vowel_string { 1 } else { 0 };
        }

        // Step 2: Answer each query
        queries.into_iter().map(|query| {
            let left = query[0] as usize;
            let right = query[1] as usize;
            prefix_sum[right + 1] - prefix_sum[left]
        }).collect()
    }
}

```