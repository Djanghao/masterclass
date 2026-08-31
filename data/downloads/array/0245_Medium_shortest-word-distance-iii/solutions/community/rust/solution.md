# Rust solution simple and easy

**Author:** nathanguo
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance-iii/solutions/3368208/](https://leetcode.com/problems/shortest-word-distance-iii/solutions/3368208/)

---


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn shortest_word_distance(words_dict: Vec<String>, word1: String, word2: String) -> i32 {
        let (mut word1_index, mut word2_index, mut ans) = 
        (-1, -1, std::i32::MAX);
        for i in 0..words_dict.len() {
            if words_dict[i] == word1 {
                word1_index = i as i32;
            }
            if words_dict[i] == word2 {
                if word1 == word2 {
                    word1_index = word2_index;
                }
                word2_index = i as i32;
            }
            if word2_index != -1 && word1_index != -1 {
                ans = std::cmp::min(ans, (word2_index-word1_index).abs())
            }
        }
        ans
    }
}
```
Like if you enjoy my solution!