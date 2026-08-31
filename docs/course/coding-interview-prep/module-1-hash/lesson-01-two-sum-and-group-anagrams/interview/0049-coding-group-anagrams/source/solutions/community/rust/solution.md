# Rust | HashMap | Functional Style | With Comments

**Author:** wallicent
**Votes:** 26
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/2751413/](https://leetcode.com/problems/group-anagrams/solutions/2751413/)

---

Strings are grouped by the histogram of letter frequencies. Use this as the key in a hash map, collecting the strings in the map values. I had hopes of making this a one-liner, but have not figured out a way to get around that we have to return the modified histogram/map in the `fold` body. :)

Implementation notes:
* `N_LETTERS` instead of the magic value 26.
* `strs.into_iter` to take ownership of the provided strings and move them into the map.
* `or_default` for the most concise insertion of an empty vector if this is the first time we encounter a key.
* `into_values` to directly map the values to the output iterator, instead of `into_iter().map(...)`, and to take ownership of the hash map values => the string instances we get as input are the same instances that we return in the output.

```
use std::collections::HashMap;

const N_LETTERS: usize = (b'z' - b'a' + 1) as _;

impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        strs.into_iter().fold(HashMap::<[u8; N_LETTERS], Vec<String>>::new(), |mut map, s| {
            let freqs = s.bytes().map(|b| (b - b'a') as usize).fold([0; N_LETTERS], |mut freqs, bin| {
                freqs[bin] += 1;
                freqs
            });
            map.entry(freqs).or_default().push(s);
            map
        }).into_values().collect()
    }
}
```