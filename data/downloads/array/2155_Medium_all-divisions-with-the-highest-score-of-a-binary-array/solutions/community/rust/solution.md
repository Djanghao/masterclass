# Rust solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/3329461/](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/3329461/)

---

# Code
```
impl Solution {
    pub fn max_score_indices(nums: Vec<i32>) -> Vec<i32> {
        let mut onex_prefix = vec![0; nums.len()];
        for i in (0..nums.len()).rev() {
            if nums[i] == 1 {
                onex_prefix[i] += 1;
            }
            if i < nums.len() - 1 {
                onex_prefix[i] += onex_prefix[i + 1];
            }
        }

        let mut zeros_count = 0;
        let mut scores = vec![0; nums.len() + 1];
        let mut max_score = 0;
        for i in 0..=nums.len() {
            if i == nums.len() {
                scores[i] = zeros_count;
            } else {
                scores[i] = (zeros_count + onex_prefix[i]);
                if nums[i] == 0 {
                    zeros_count += 1;
                }
            }
            max_score = max_score.max(scores[i]);
        }
        scores[nums.len()] = zeros_count;

        scores
            .into_iter()
            .enumerate()
            .filter(|(_, x)| *x == max_score)
            .map(|(i, _)| i as i32)
            .collect()        
    }
}
```