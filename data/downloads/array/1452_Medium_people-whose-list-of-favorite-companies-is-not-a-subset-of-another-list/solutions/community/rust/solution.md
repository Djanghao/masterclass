# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/3146724/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/3146724/)

---

# Code
```
impl Solution {
    pub fn people_indexes(favorite_companies: Vec<Vec<String>>) -> Vec<i32> {
        let mut result = Vec::new();
        let favorite_companies = favorite_companies
            .into_iter()
            .map(|v| v.into_iter().collect::<std::collections::HashSet<_>>())
            .collect::<Vec<_>>();
        for i in 0..favorite_companies.len() {
            let mut is_subset = false;
            for j in 0..favorite_companies.len() {
                if i == j {
                    continue;
                }
                if favorite_companies[i].is_subset(&favorite_companies[j]) {
                    is_subset = true;
                    break;
                }
            }
            if !is_subset {
                result.push(i as i32);
            }
        }
        result
    }
}
```