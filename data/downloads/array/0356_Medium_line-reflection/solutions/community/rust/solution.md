# Rust Solution (0ms) Super Simple

**Author:** becharpre
**Votes:** 0
**Link:** [https://leetcode.com/problems/line-reflection/solutions/5076200/](https://leetcode.com/problems/line-reflection/solutions/5076200/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since every point in the input must have its reflection also in the input, we will find the mid point between the minimum and maximum x coordinates in the input and just assume thats the line of reflection.
# Approach
<!-- Describe your approach to solving the problem. -->
We accumulate the input into a Hash Set, for fast membership checking. We then check to see if for every point if the reflection about our midpoint is also in our Hash Set.
# Complexity
- Time complexity:
- $$O(n)$$ Its O(n) to collect all the points into a HashSet, O(n) to find the min and max, and O(n) to check if each points reflection is in the Hash Set
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- $$O(n)$$ We create a HashSet that is O(n) space
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashSet;
use std::collections::HashMap;

impl Solution {
    pub fn is_reflected(points: Vec<Vec<i32>>) -> bool {
        if points.is_empty(){
            return true;
        }
        let hs_points : HashSet<(i32,i32)> = points.iter().map(|p| {(p[0],p[1])}).collect();
        let (min_x, max_x) = hs_points.iter().fold((i32::MAX, i32::MIN), |(min, max), &(x, _)| {
            (min.min(x), max.max(x))
        });


        let mid = min_x + max_x;


        hs_points.iter().fold(true, |acc, (x, y)| {
            acc && hs_points.contains(&((mid - x), *y))
        })
        
    }

}
```