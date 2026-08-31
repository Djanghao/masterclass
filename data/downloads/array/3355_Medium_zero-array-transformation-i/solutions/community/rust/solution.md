# Rust solution

**Author:** chenyo-17
**Votes:** 0
**Link:** [https://leetcode.com/problems/zero-array-transformation-i/solutions/6054912/](https://leetcode.com/problems/zero-array-transformation-i/solutions/6054912/)

---

# Code
```rust []
impl Solution {
    pub fn is_zero_array(nums: Vec<i32>, queries: Vec<Vec<i32>>) -> bool {
        // first sort queries based on the starts and the ends separately
        // then for each i, binary search on the right-most query r whose start <= i
        // and binary search on the left-most query l whose end >= i
        // let n be the number of queries,
        // then n-(n-r-1)-l = r+1-l queries contain i
        let mut queries_sort_by_0 = queries.clone();
        queries_sort_by_0.sort();
        let mut queries_sort_by_1 = queries;
        queries_sort_by_1.sort_by_key(|q| q[1]);
        for i in 0..nums.len() {
            let binary_search_start_no_higher_than =
                |queries: &Vec<Vec<i32>>, target: i32| match queries.binary_search_by(|q| {
                    if q[0] > target {
                        std::cmp::Ordering::Greater
                    } else {
                        std::cmp::Ordering::Less
                    }
                }) {
                    Ok(i) => Some(i),
                    Err(i) if i > 0 => Some(i - 1),
                    Err(_) => None,
                };
            let binary_search_end_no_lower_than =
                |queries: &Vec<Vec<i32>>, target: i32| match queries.binary_search_by(|q| {
                    if q[1] >= target {
                        std::cmp::Ordering::Greater
                    } else {
                        std::cmp::Ordering::Less
                    }
                }) {
                    Ok(i) => Some(i),
                    Err(i) if i < queries.len() => Some(i),
                    Err(_) => None,
                };
            let mut count_i = 0;
            if let Some(r) = binary_search_start_no_higher_than(&queries_sort_by_0, i as i32) {
                if let Some(l) = binary_search_end_no_lower_than(&queries_sort_by_1, i as i32) {
                    count_i = r - l + 1;
                }
            }
            if (count_i as i32) < nums[i] {
                return false;
            }
        }
        true
    }
}



```