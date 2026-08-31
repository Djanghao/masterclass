# Solved 14 minutes after the contest :(

**Author:** _Danie1
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/solutions/4520872/](https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/solutions/4520872/)

---

Warning: code is written badly.

# Intuition

$10^4 \	imes 26$ is not too big, so we can try each combination in turn, as long as we do some precalculation.

The main things we want to be able to do quickly are:

- Given an index, we want to be able to find out how many partitions there are until the end if we make no changes to anything after index. (This can be precalculated and stored in an array in $O(n)$ time).
- If we change a character, we want to quickly find out where the end of the partition after the character will be. We do this by precalculating an array which stores at index i the number of each character appearing in the string after position i. Then we can binary search on this array to quickly answer the question.

One we have done the precalculation, we can just iterate through the array counting how many partitions we have seen so far, and at each index we try each possible character and see how many partitions it will give us in total. The calculation can be done quickly since we did the precalculations.

# Complexity
- Time complexity: $O(n\\log(n))$

- Space complexity: $O(n)$

# Code
```
fn sub(a: &[u32; 26], b: &[u32; 26]) -> [u32; 26] {
    let mut output = a.clone();
    for (index, &num) in b.iter().enumerate() {
        output[index] -= num;
    }
    output
}
fn plus(a: &[u32; 26], b: &[u32; 26]) -> [u32; 26] {
    let mut output = a.clone();
    for (index, &num) in b.iter().enumerate() {
        output[index] += num;
    }
    output
}

fn char_count(a: &[u32; 26]) -> u32 {
    a.iter().filter(|&&x| x > 0).count() as u32
}

fn get_next_index(current_chars: &[u32; 26], index: usize, char_counts: &Vec<[u32; 26]>, k: i32) -> usize {
    let mut b = &char_counts[index];
    index + char_counts[index..].partition_point(|a| char_count(&plus(current_chars, &sub(b, a))) <= k as u32)
}

impl Solution {
    pub fn max_partitions_after_operations(s: String, k: i32) -> i32 {
        if k == 26 {
            return 1;
        }
        let s = s.as_bytes();
        let mut char_counts = vec![[0u32; 26]; s.len()];
        let mut current_chars = [0; 26];
        for (index, char) in s.iter().enumerate().rev() {
            let char_index = (char - b'a') as usize;
            char_counts[index] = current_chars.clone();
            current_chars[char_index] += 1;
        }
        let mut partition_next = vec![0usize; s.len()];
        let mut high = s.len();
        let mut low = s.len();
        let mut current_chars = [0; 26];
        while low > 0 {
            low -= 1;
            let char_index = (s[low] - b'a') as usize;
            current_chars[char_index] += 1;
            while current_chars.iter().filter(|&&x| x > 0).count() as u32 > k as u32 {
                high -= 1;
                let char_index = (s[high] - b'a') as usize;
                current_chars[char_index] -= 1;
            }
            partition_next[low] = high;
        }
        let mut partitions = vec![0; s.len()];
        let mut low = s.len();
        while low > 0 {
            low -= 1;
            partitions[low] = partitions.get(partition_next[low]).cloned().unwrap_or(0) + 1;
        }
        let mut max = 0;
        
        let mut current_chars = [0; 26];
        let mut state = 0;
        let mut parts = 0;
        for (index, char) in s.iter().enumerate() {
            let char_index = (char - b'a') as usize;
            current_chars[char_index] += 1;
            if current_chars.iter().filter(|&&x| x > 0).count() > k as usize {
                current_chars = [0; 26];
                state = 0;
                current_chars[char_index] += 1;
                parts += 1;
            }
            current_chars[char_index] -= 1;
            for char in b'a'..=b'z' {
                let mut poss = parts;
                let char_index = (char - b'a') as usize;
                current_chars[char_index] += 1;
                if current_chars.iter().filter(|&&x| x > 0).count() > k as usize {
                    let mut current_chars = [0; 26];
                    current_chars[char_index] += 1;
                    let next_part = get_next_index(&current_chars, index, &char_counts, k);
                    poss += 1 + partitions.get(next_part).cloned().unwrap_or(0);
                } else {
                    let next_part = get_next_index(&current_chars, index, &char_counts, k);
                    poss += partitions.get(next_part).cloned().unwrap_or(0);
                }
                current_chars[char_index] -= 1;
                max = max.max(poss);
            }
            current_chars[char_index] += 1;
        }
        
        max + 1
    }
}
```