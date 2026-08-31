# Rust O(n) solution. Beats 100%!! 0ms Fast Solution using HashMaps!!

**Author:** rohitanwar
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/5959365/](https://leetcode.com/problems/jump-game-iii/solutions/5959365/)

---

# Intuition
The problem is basic DFS traversal of the graph to find the required valuel.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Instead of the traditional method of using a `visited` array, we instead use a `HashMap` which makes lookup $O(1)$, instead of the traditional $O(n)$.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
use std::collections::HashMap;
impl Solution {
    pub fn can_reach(arr: Vec<i32>, start: i32) -> bool {
        let mut toVisit = Vec::new();
        let n = arr.len() as i32;
        toVisit.push(start);
        let mut visited = HashMap::new();
        while toVisit.len() > 0 {
            let curr = toVisit.pop().unwrap();
            if arr[curr as usize] == 0{
                return true;
            }
            visited.insert(curr,1);
            let left = curr - arr[curr as usize];
            let right = curr + arr[curr as usize];
            if left >= 0 && left < n && visited.get(&left).is_none(){
                toVisit.push(left);
            }
            if right >= 0 && right < n && visited.get(&right).is_none(){
                toVisit.push(right);
            }
        }
        return false;
    }
}
```