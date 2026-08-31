# [Rust & Swift] 🍎 0ms O(n) w/ Frequency frequency. 🍎

**Author:** NotTheSwimmer
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2649497/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2649497/)

---

# Solution
## Rust
Submission link: https://leetcode.com/submissions/detail/813307898/

```rust
use std::collections::HashMap;

impl Solution {
    pub fn equal_frequency(word: String) -> bool {
        let mut c = HashMap::new();
        for char in word.chars() {
            *c.entry(char).or_insert(0) += 1;
        }
        let mut counts = HashMap::new();
        for count in c.values() {
            *counts.entry(count).or_insert(0) += 1;
        }
        if counts.len() == 1 {
            return counts.contains_key(&1) || counts.contains_key(&word.len());
        }
        if counts.len() == 2 {
            let min = counts.iter().min_by_key(|(&k, _)| k).unwrap().0;
            return counts.get(&1) == Some(&1) || counts.get(&(*min + 1)) == Some(&1);
        }
        false
    }
}
```

## Swift
Submission link: https://leetcode.com/submissions/detail/813302222/

```swift
class Solution {
    func equalFrequency(_ word: String) -> Bool {
        var c = [Character: Int]()
        for char in word {
            c[char] = (c[char] ?? 0) + 1
        }
        var counts = [Int: Int]()
        for count in c.values {
            counts[count] = (counts[count] ?? 0) + 1
        }
        if counts.count == 1 {
            return counts[1] != nil || counts[word.count] != nil
        }
        if counts.count == 2 {
            return counts[1] == 1 || counts[counts.min(by: { $0.value > $1.value })!.key + 1] == 1
        }
        return false
    }
}
```

# Intution
- The problem is about frequencies, so we want a counter, which maps elements to frequencies.
- Specifically, all of our cases deal with the frequency of frequencies, so we count the the frequencies.
- We can break the problem down case-by-case for a solution

# Cases
Cases below are written like nested if/else statements and operate on assumptions that the cases above them on the tree were False.

1. There is one frequency.
	a. The only frequency is 1, so we can remove an entire occurence of that frequency, making it always **True**. Example: `"abcd" => "abc"`
	b. The only frequency occurs only once, so we can convert it to a new frequency, making it always **True**. This is the same as saying the only frequency is the length of the word. Example: `"aaaa" => "aaa"`
	c. Otherwise, it is always **False**. Example: `"aabb"`.
2. There are two frequencies.
	a. The lower frequency is 1 and occurs once. This will always be **True**. Example: `"aaabbbc" => "aaabbb"`
	b. The difference in frequencies is 1, and the larger frequency occurs only once. This will always be **True**. Example: `"aabbb" => "aabb"`
	c. The remaining cases will always be **False** because they necessarily have either two frequencies that differ but the larger occurs multiple times or they have a frequency which differs by more than 1. Examples: `"aabbbccc"` and `"aabbbb"`.
3. There are three or more frequencies. This will always be **False**. You can't change the two largest of these with one delete to be equal to the lowest one. Example: `"abbccc"`