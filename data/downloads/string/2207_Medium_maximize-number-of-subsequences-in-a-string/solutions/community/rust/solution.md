# Rust | 100% | simple with intuition!

**Author:** jrockett
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/5338693/](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/5338693/)

---

# Intuition
The maximum subsequence count can always be made by adding either pattern[0] to start or pattern[1] to end.

The total count will be equal to the existing subsequence count plus the max of pattern[0] or pattern[1] occurences (because we add 1 character to either the beginning or the end).

In the case that pattern[0] == pattern[1], the algorithm didn't quite work. I think there is probably a way to get it to work with an if statement in the for loop, but alternatively we can recognize that e.g. "aaaa" has "aa" subsequence 3 + 2 + 1 times, and use appropriate summation formula.


# Complexity
- Time complexity: *O(n)*

- Space complexity: *O(1)*

# Code
```
impl Solution {
    pub fn maximum_subsequence_count(text: String, pattern: String) -> i64 {
        let pattern = pattern.chars().collect::<Vec<_>>();
        let mut c1_count = 0;
        let mut c2_count = 0;
        let mut ss_count = 0;

        for c in text.chars() {
            if c == pattern[0] {
                c1_count += 1;
            }

            if c == pattern[1] {
                c2_count += 1;
                ss_count += c1_count;
            }
        }

        if pattern[0] != pattern[1] {
            ss_count + c1_count.max(c2_count)
        } else {
            // nth triangle number e.g. n + n-1 + ... + 2 + 1
            ((c1_count + 1) * c1_count) / 2 
        }
    }
}
```