# [Rust] Triple VecDeque

**Author:** mortonjack
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-pick-k-ones/solutions/4888614/](https://leetcode.com/problems/minimum-moves-to-pick-k-ones/solutions/4888614/)

---

# Intuition
I know how to do this. I don't want to do this. I know how to do this. I don't want to do this.

# Explaining my atrocious code
Our VecDeques are used to maintain a sliding window, `included_left` and `included_right` include the nearest `k - max_changes` ones our window. Why `k - max_changes`? Because aside from the elements directly left/right of whats-his-face's index, and whatever is on his index, it'll always be cheapest to just use `max_changes` to spawn in ones until we have `k` ones or we run out of changes. 

We also keep track of the sum of the distances from our chosen index (starting at 0) to all of the ones within our sliding windows. As we'll iterate from left to right, whenever we move up our index, we add one to our distance for every element in `included_left` and we subtract one for everything in `included_right`. 

# A seemingly simple calculation
So for each index, we can calculate the moves required as follows:

- Decrement `k` if we start on a one.
- Decrement `k` and add a move for each adjacent one (unless `k == 0` beforehand)
- Let x be the number of tiles we will transform next to us, represented by `min(max_changes, k)`. Decrement `k` by `x`, and these each require two moves so increment moves by `2*x`.
- If we still don't have enough ones, add the sum of the distances in our sliding window to the movecount. Make sure not to include the adjacent tiles in this.

Okay, simple enough. Actually, if you understand this, most of the code is just implementing this logic, making sure to keep an accurate track of the left/right tiles, and sliding our window over when the distance between our new index and the leftmost tile of our window is greater than the would-be distance between our new index and the next one to include in our window (contained within `excluded`). Best read through the code now. Please please PLEASE leave suggestions on how to improve this if you have them, I am desperate, also leave any questions (about the algorithm or code) and I will do my best to answer.

# Code
```
use std::collections::VecDeque;

impl Solution {
    pub fn minimum_moves(nums: Vec<i32>, k: i32, max_changes: i32) -> i64 {
        let mut included_left = VecDeque::new();
        let mut included_right = VecDeque::new();
        let mut excluded = VecDeque::new();
        let mut distances = 0;
        for i in 1..nums.len() {
            if nums[i] == 0 { continue; }
            if included_right.len() as i32 + nums[0] < k - max_changes {
                included_right.push_back(i as i64);
                distances += i as i64;
            } else {
                excluded.push_back(i as i64);
            }
        }
        
        let mut best = i64::MAX;
        for i in 0..nums.len() {
            let mut moves = 0;
            // Starting on 1: k -= 1
            let mut k = k - nums[i];
            // If either adjcaent cell is 1: moves -= 1 (per)
            if k > 0 { if let Some(1) = nums.get(i-1) { moves += 1; k -= 1; } }
            if k > 0 { if let Some(1) = nums.get(i+1) { moves += 1; k -= 1; } }
            let initial_moves = moves;
            let x = std::cmp::min(k, max_changes) as i64;
            k -= x as i32;
            moves += x*2;
            // Remaining numbers is sum of distances to nearest numbers
            if k > 0 { moves += (distances as i64) - initial_moves; }
            // update best count
            best = std::cmp::min(best, moves);
            // always keep track of distances to k-max_changes nearest numbers
            let next = i as i64 + 1;
            distances -= included_right.len() as i64;
            if nums[i] == 1 { included_left.push_back(i as i64); }
            distances += included_left.len() as i64;
            if included_left.len() > 0 && excluded.len() > 0 {
                let leftmost = *included_left.front().unwrap();
                let rightmost = *excluded.front().unwrap();
                if next - leftmost > rightmost - next {
                    included_left.pop_front();
                    included_right.push_back(rightmost);
                    excluded.pop_front();
                    distances -= next - leftmost;
                    distances += rightmost - next;
                }
            }
            if let Some(&idx) = included_right.front() {
                if idx == next { included_right.pop_front(); }
            }
        }
        best
        
    }
}
```