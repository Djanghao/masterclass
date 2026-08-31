# [Rust] Custom multi-set | 0-1ms

**Author:** tmtappr
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/5260839/](https://leetcode.com/problems/find-common-characters/solutions/5260839/)

---

# Intuition
Each word could be converted to a character hash set, then the common characters in all words would be revealed by taking the intersection of these sets.

A hash set doesn't allow multiple occurrences of the same character, and doesn't have a built-in counter feature. So a customized "multi-set" can be created. The intersection of these sets would be to take the minimums of the counts for each character:
```
intersection.count[ch] = min(a.count[ch], b.count[ch])
``` 

# Approach
`HashSet` and `HashMap` could be used to implement `CharSet`, but I opted to use simple primitive arrays to keep character counts instead.

The first word from `words` is used to create the initial `CharSet` instance `set`. Then each remaining word is taken, a set created, and then the intersection of the old set and new set is assigned back to `set`.

After iteration over `words` completes, `set` holds the common counts of the characters common to all words. The `set` instance is then converted to a vector of strings using a variation of [counting sort](https://en.wikipedia.org/wiki/Counting_sort) which is $O(26 + m)$ where $m$ is the length of the smallest word.

# Complexity
- Time complexity: $O(m \	imes n)$ where $n$ is the number of words, and $m$ is the average size of the words.
- Space complexity: $O(m)$ in the worst case where all words are composed of the same letter repeated many times. In that case the constructed return will be linearly related to length `m`, the length of the smallest word. The sets will take constant space since there are only two of them at a time of fixed size.

# Code
``` rust
impl Solution {
    pub fn common_chars(words: Vec<String>) -> Vec<String> {
        let mut set = CharSet::new(words[0].clone());

        for word in words.into_iter().skip(1) {
            set = set.intersection(CharSet::new(word));
            if set.is_empty() {
                break;
            }
        }
        set.to_string_vec()
    }
}

struct CharSet {
    counts   : [usize; 26],
    is_empty : bool,
}

impl CharSet {
    fn new(s: String) -> Self {
        let mut counts = [0; 26];
        s.bytes().for_each(|b| counts[(b - b'a') as usize] += 1);
        
        Self { counts, is_empty: s.is_empty() }
    }

    fn intersection(self, other: Self) -> Self {
        let mut set = self;
        set.is_empty = true;

        for (a, b) in set.counts.iter_mut().zip(other.counts) {
            *a = b.min(*a);
            set.is_empty &= *a == 0;
        }
        set
    }

    fn is_empty(&self) -> bool {
        self.is_empty
    }

    fn to_string_vec(self) -> Vec<String> {
        let mut svec  = Vec::new();
        let     alpha = "abcdefghijklmnopqrstuvwxyz";

        for (ch, count) in alpha.chars().zip(self.counts) {
            for _ in 0..count {
                svec.push(ch.to_string());
            }
        }
        svec
    }
}
```