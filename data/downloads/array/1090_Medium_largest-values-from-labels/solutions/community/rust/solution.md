# Rust solution: Runtime 4 ms Beats 40.00% Analyze Complexity Memory 2.61 MB Beats 20.00%

**Author:** sxfdkmsa
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/5495967/](https://leetcode.com/problems/largest-values-from-labels/solutions/5495967/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn largest_vals_from_labels(values: Vec<i32>, labels: Vec<i32>, num_wanted: i32, use_limit: i32) -> i32 {
        let mut items: Vec<(i32, i32)> = values.iter().zip(labels.iter()).map(|(&v, &l)| (v, l)).collect();
        items.sort_by(|a, b| b.0.cmp(&a.0));
        
        let mut label_count: HashMap<i32, i32> = HashMap::new();
        let mut selected_values = Vec::new();
        let mut num_selected = 0;
        
        for &(value, label) in &items {
            if num_selected == num_wanted {
                break;
            }
            
            let label_usage = label_count.entry(label).or_insert(0);
            
            if *label_usage < use_limit {
                selected_values.push(value);
                *label_usage += 1;
                num_selected += 1;
            }
        }
        
        selected_values.iter().sum()
    }
}

```