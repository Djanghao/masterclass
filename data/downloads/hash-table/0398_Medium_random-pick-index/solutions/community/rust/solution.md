# Rust Way; No rand func; Using Cyclic Iterator for equal probability or Infinite array.

**Author:** tardunge
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-index/solutions/5241161/](https://leetcode.com/problems/random-pick-index/solutions/5241161/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Pick is tricky, as it demands equal probability of the index returned everytime it gets called for a target. If we can return the elements in order and repeat it for every call, the equal probability is guaranteed over any sample.

# Approach
<!-- Describe your approach to solving the problem. -->
We can either maintain an index which keeps track of the nth index we returned for a target or we can just use rust's vectors' builtin cyclcic iterator to address this issue instead of maintaining the position all the time.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::iter::Cycle;
use std::vec::IntoIter;
use std::collections::HashMap;

struct Solution
{
    map: HashMap<i32, Cycle<IntoIter<i32>>>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Solution
{

    fn new(nums: Vec<i32>) -> Self {
        let mut dups_map: HashMap<i32, Vec<i32>> = HashMap::new();
        // generate vectors for each uniq element storing their indicies.
        for (index,&num) in nums.iter().enumerate() {
            dups_map.entry(num).or_insert_with(Vec::new).push(index as i32);
        }
        // use the vectors generated for the node instead of maintaining them
        // twice in the node. just keep the cyclic iter as it is more or less immutable
        // in the problem's context.
        let map = dups_map.into_iter()
            .map(|(key,val)| (key, val.into_iter().cycle()))
            .collect();
        Solution { map }
    }
    
    fn pick(&mut self, target: i32) -> i32 {
        if let Some(cyclic_iter) = self.map.get_mut(&target) {
            cyclic_iter.next().unwrap_or(0)
        } else {
            0
        }
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * let obj = Solution::new(nums);
 * let ret_1: i32 = obj.pick(target);
 */
```