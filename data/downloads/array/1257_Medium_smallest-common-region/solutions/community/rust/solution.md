# Rust 100%

**Author:** dacozai
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-common-region/solutions/5799455/](https://leetcode.com/problems/smallest-common-region/solutions/5799455/)

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
```rust []
impl Solution {
    pub fn find_smallest_region(regions: Vec<Vec<String>>, region1: String, region2: String) -> String {
        use std::collections::HashMap;
        use std::collections::HashSet;
        let mut child_parent_map = HashMap::<String, String>::new();
        for r in &regions {
            let parent = &r[0];
            for child in &r[1..] {
                child_parent_map.insert(child.clone(), parent.clone());
            }
        }
        let mut rg_two_parents = HashSet::<String>::new();
        let mut tmp = region2;
        while let Some(parent) = child_parent_map.get(&tmp) {
            rg_two_parents.insert(tmp.clone());
            tmp.clone_from(parent);
        }
        rg_two_parents.insert(tmp);

        let mut cursor = region1;
        while let Some(parent) = child_parent_map.get(&cursor) {
            if rg_two_parents.contains(&cursor) {
                return cursor;
            }
            cursor.clone_from(parent);
        }

        if rg_two_parents.contains(&cursor) {
            return cursor;
        }
        "DoesNotExist".to_string()
    }
}
```