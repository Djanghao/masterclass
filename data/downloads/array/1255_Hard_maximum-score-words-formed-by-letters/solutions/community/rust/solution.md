# [Rust] Non-exhaustive power set | 0ms

**Author:** tmtappr
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5200685/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5200685/)

---

# Intuition
If we were to use an algorithm that generates the [power set](https://en.wikipedia.org/wiki/Power_set) of combinations of the words in `words`, we could take each subset and add up the values of the letters of all words while making sure we don't go beyond the counts of chars in `letters`.

This approach would exhaustively check every subset. However, if we know that 2 given words are already unworkable, we can eliminate all other subsets that contain those 2 words without having to consider them. Iterations involving them can be skipped.

If we find 2 or more words don't work together, and we somehow eliminate all subsets containing them, then we will be doing a non-exhaustive check of the subsets to find the maximum value.

# Approach
The subsets of word combinations are represented as simple 26 byte arrays: 
``` rust
counts = [0i8; 26]
```
First `letters` is converted to a count array `counts`. This is the initial empty set to build the power set on. It can be understood as the available characters after checking the value of an empty subset (all the counts are unaffected).

Then `words` is iterated over. In the next inner loop, the current group of subsets from `sets` are iterated over. The current word is "added" to a copy of the current set.

Adding a word to a copy of a set is essentially taking the count array, and subtracting each character in the word from it while tallying the value of each letter.

If the current word being added to the current subset doesn't go beyond the allowed letter counts, the new updated copy is appended to `sets`. If it does go beyond the letter counts, then it isn't added to `sets`; it's unworkable and eliminating it removes all future subsets that would have been built on the current subset being considered.

This process proceeds until all words have been added to as many sets as each can be added to, and the values have been updated in each new set added.

Then `sets` is scanned for the maxium value, which is returned.

# Complexity
- Time complexity: $O(2^n)$ Average performance should be better because power set is non-exhaustive.
- Space complexity: $O(2^n)$ Average performance should be better.

# Code
``` rust
impl Solution {
    pub fn max_score_words(words   : Vec<String>, 
                           letters : Vec<char>, 
                           score   : Vec<i32>) 
        -> i32 
    {
        fn idx(c: char) -> usize { 
            (c as u8 - b'a') as usize 
        }
        let mut counts = [0i8; 26];

        letters.into_iter().for_each(|c| counts[idx(c)] += 1);

        let mut sets = vec![(0, counts)];
        let mut best = 0;

        for word in words {
            'setloop: for set_idx in 0..sets.len() {
                let (mut val, mut set) = sets[set_idx];

                for ch_idx in word.chars().map(|ch| idx(ch)) {
                    if set[ch_idx] > 0 {
                        set[ch_idx] -= 1;
                        val += score[ch_idx];
                    } else {
                        continue 'setloop;
                    }
                }
                best = best.max(val);
                sets.push((val, set));
            }
        }
        best
    }
}
```