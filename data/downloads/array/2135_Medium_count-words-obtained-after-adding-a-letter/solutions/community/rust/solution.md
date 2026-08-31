# Rust solution | Bitmask | Set

**Author:** mimanshu-maheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/6048714/](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/6048714/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There are few points to notice while modifying the start word into target word
- you can only add char which is not in start word
- you can rearrange the chars after adding the word

So assume that you create a Set of sorted string from start words
then all we need to do is check if the target word exist in the stop word after removing any character.

# Approach
<!-- Describe your approach to solving the problem. -->
- We create a set of sorted start words. 
- Then for every target word, we remove a character and check if the word exist in the above set or not. 
- To simplify the solution we can use a bitmask rather then the string itself as it is specified that we only have lower case english letters.

Some bitwise operations needed here: 
- to set a bit at $$n^{th}$$ position you can do `mask |= 1 << n`
- to flip the bit that is set if unset or unset if set `mask ^= 1 << n`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O((n * m))$$ where n are the average number of characters in words and m are the number of words.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ in creation of bitmask set/hashtable

# Code
```rust []
use std::collections::HashSet;
impl Solution {
    pub fn word_count(start_words: Vec<String>, target_words: Vec<String>) -> i32 {
        // this way we don't have to sort the string
        // and also it reduces memory
        let mut bitmasks:HashSet<u32> = HashSet::new();
        for word in start_words {
            let mut bitmask = 0;
            for &b in word.as_bytes().iter() {
                bitmask |= 1 << (b - b'a') as u32;
            }
            bitmasks.insert(bitmask);
        }
        let mut count:i32 = 0;
        // for the current target word
        // check if by removing each word if it exists in set.
        for word in target_words {
            let mut bitmask:u32 = 0;
            // create a bit mask for current word
            for &b in word.as_bytes().iter() {
                bitmask |= 1 << (b - b'a') as u32;
            }
            // remove each char and check if it exist in set.
            // as we can rearrange order doesn't matter.
            for &b in word.as_bytes().iter() {
                if bitmasks.contains(&(bitmask ^ (1 << (b - b'a') as u32))) {
                    count += 1;
                    break;
                }
            }
        }
        count
    }
}
```

![image.png](./images/0.png)
