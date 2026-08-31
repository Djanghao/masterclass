# Idiomatic Rust Solution With Iterators & Pattern Matching

**Author:** luisosta
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/2861407/](https://leetcode.com/problems/shortest-word-distance/solutions/2861407/)

---



# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn shortest_distance(words_dict: Vec<String>, word1: String, word2: String) -> i32 {
        let mut index_one: Option<usize> = None;
        let mut index_two: Option<usize> = None;

        let mut min = words_dict.len();

        words_dict.iter().enumerate().for_each(|(index, word)| {
            if word.eq(&word1) {
                index_one = Some(index);
            }

            if word.eq(&word2) {
                index_two = Some(index);
            }

            match (index_one, index_two, index_one.cmp(&index_two)) {
                (Some(index_one), Some(index_two), std::cmp::Ordering::Greater) => {
                    min = min.min(index_one - index_two);
                }
                (Some(index_one), Some(index_two), _) => {
                    min = min.min(index_two - index_one);
                }
                _ => {}
            }
        });
        min as i32
    }
}
```