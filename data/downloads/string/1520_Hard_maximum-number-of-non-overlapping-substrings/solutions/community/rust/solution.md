# Rust 100% fastest, greedy O(26n), explained

**Author:** sdds7667
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/3040174/](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/3040174/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Got help from the other solutions: 
[Solution for building intervals](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/743223/c-java-greedy-o-n/)

This solution builds on the classical greedy algorithm, [Unweighted Interval Scheduling Optimization](https://en.wikipedia.org/wiki/Interval_scheduling#Unweighted). Solved using earliest deadline first, or in our case earliest right index first. 

The outline of the algorithm is: 
1. Build the interval (start index, end index) for each character; <b>Not necessarely the leftmost occurence and rightmist occurence</b>
    * Find leftmost, rightmost occurence of each character. 
    * Iterate from leftmost to rightmost occurence. For each character, if the leftmost of that character is less than current interval leftmost, then this is interval duplicates that one: 
    "abab": Here, when iterating through the interval of ```b```, when hitting char ```a```, it's leftmost (0) is smaller then b's leftmost(1). This means that the interval of ```b``` is the same as the interval of a: ```0-3```.
    * Update the right to be ```max(current right, character's right)```.
    * If the interval is not duplicated, push it to the list of intervals to be considered for the interval scheduling optimization.
2. Using the interval schedule optimization, select the intervals that maximize the number of intervals included.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

Building the intervals: 
O(26 * n): Worst case scenario, all characters intertwine each other:
```"abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"```.
In this case, the only valid interval is the whole string. 
= O(n)

Interval scheduling optimization: 
Greedy O(26) = O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::cmp::{max, min};

impl Solution {
    pub fn max_num_of_substrings(s: String) -> Vec<String> {
        let char_array = s.as_bytes();

        let mut fc = [usize::MAX; 123];
        let mut lc = [0usize; 123];
        // step 1: collect indices
        for (index, &chr) in char_array.iter().enumerate() {
            let chr = chr as usize;
            fc[chr] = min(fc[chr], index);
            lc[chr] = index;
        }
        // update intervals to include all the inner characters
        let mut intervals = Vec::new();

        for (index, i) in fc.iter().enumerate() {
            let mut r = lc[index];
            let mut j = *i;
            while j < r {
                // interval of character at j starts before the current interval
                if fc[char_array[j] as usize] < *i {

                    // interval is duplicated
                    break;
                }

                // update the interval with the new character's rightmost occurence
                r = max(r, lc[char_array[j] as usize]);
                j += 1;
            }
            if j == r {
                intervals.push((*i, r));
            }
        }

        // Interval scheduling optimization
        intervals.sort_unstable_by_key(|x| x.1);
        let mut res = Vec::new();
        let mut i = 0;
        for (st, f) in intervals {
            if st < i {
                continue;
            }
            i = f;
            let mut sbs = String::new();
            for j in st..=f {
                sbs.push(char::from(char_array[j]));
            }
            res.push(sbs);
        }

        res
    }
}

```