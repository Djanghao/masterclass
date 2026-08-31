# DFS with branch cutting O(n!)

**Author:** hucancode
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5151863/](https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5151863/)

---

# Approach
I don't have a clever way, I will use DFS with 2 optimizations:
- Use bitmask to memorize state
- Remember the best result, and keep travel all possibility. Cut any branch with score worse than the best result so far
- Remember the best result for each mask, so we can cut even more useless branch

# Complexity
- Time complexity: $O(n!)$
- Space complexity: $O(n)$
- It's slow (400ms with $n=14$) but still AC with current test suite
# Code
```
impl Solution {
    pub fn find_permutation(nums: Vec<i32>) -> Vec<i32> {
        use std::collections::HashMap;
        let mut n = nums.len();
        let mut best = i32::MAX;
        let mut ret = Vec::new();
        let mut scores = HashMap::new();
        let mut q = Vec::new();
        for i in (0..n).rev() {
            q.push((i, i, 0));
        }
        let mut arr = Vec::new();
        let mut mask = 0;
        while let Some((head, tail, score)) = q.pop() {
            if score < 0 {
                if let Some(x) = arr.pop() {
                    mask ^= 1<<x;
                }
                continue;
            }
            if score >= best || 
                scores.get(&(head, tail, mask))
                    .is_some_and(|&x| x <= score) {
                continue;
            }
            //println!("insert {j} to {arr:?}\
{mask:#14b}");
            if arr.len() == n {
                //println!("arr {arr:?}, score {score}");
                best = score;
                ret = arr.clone();
                continue;
            }
            scores.insert((head, tail, mask), score);
            q.push((head,tail,-1));
            arr.push(tail as i32);
            mask |= 1<<tail;
            if arr.len() == n {
                let extra = (tail as i32 - nums[head]).abs();
                q.push((head, head, score + extra));
            } else {
                for x in (0..n).rev() {
                    if (1<<x) & mask == 0 {
                        let extra = (tail as i32 - nums[x]).abs();
                        q.push((head,x, score + extra));
                    }
                }
            }
        }
        return ret;
    }
}
```

Edit: Borrow [votrubac](https://leetcode.com/u/votrubac/)'s idea, we can start with any number, so the first number will always be $0$ for the best lexicography

**New runtime: 20ms with $n=14$**

```rust
impl Solution {
    pub fn find_permutation(nums: Vec<i32>) -> Vec<i32> {
        use std::collections::HashMap;
        let mut n = nums.len();
        let mut best = i32::MAX;
        let mut ret = Vec::new();
        let mut scores = HashMap::new();
        let mut q = vec![(0,0)];
        let mut arr = Vec::new();
        let mut mask = 0;
        while let Some((tail, score)) = q.pop() {
            if score < 0 {
                if let Some(x) = arr.pop() {
                    mask ^= 1<<x;
                }
                continue;
            }
            if score >= best || 
                scores.get(&(tail, mask))
                    .is_some_and(|&x| x <= score) {
                continue;
            }
            //println!("insert {j} to {arr:?}\
{mask:#14b}");
            if arr.len() == n {
                //println!("arr {arr:?}, score {score}");
                best = score;
                ret = arr.clone();
                continue;
            }
            scores.insert((tail, mask), score);
            q.push((tail,-1));
            arr.push(tail as i32);
            mask |= 1<<tail;
            if arr.len() == n {
                let extra = (tail as i32 - nums[0]).abs();
                q.push((0, score + extra));
            } else {
                for x in (0..n).rev() {
                    if (1<<x) & mask == 0 {
                        let extra = (tail as i32 - nums[x]).abs();
                        q.push((x, score + extra));
                    }
                }
            }
        }
        return ret;
    }
}
```