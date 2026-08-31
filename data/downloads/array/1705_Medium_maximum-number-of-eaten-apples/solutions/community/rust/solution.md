# Rust

**Author:** luckychacha
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/2855775/](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/2855775/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 19 ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 2.6 MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::BinaryHeap;

#[derive(Eq, PartialEq)]
struct AppleBatch {
    sum: i32,
    expiration: i32,
}

impl AppleBatch {
    pub fn new(sum: i32, expiration: i32) -> Self {
        AppleBatch { sum, expiration }
    }
}

impl PartialOrd for AppleBatch {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Option::Some(self.cmp(other))
    }
}

impl Ord for AppleBatch {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        other.expiration.cmp(&self.expiration)
    }
}

impl Solution {
    pub fn eaten_apples(apples: Vec<i32>, days: Vec<i32>) -> i32 {
        let mut queue: BinaryHeap<AppleBatch> = BinaryHeap::new();
        let mut result = 0;
        let mut tmp_day = 0;
        let n = apples.len();

        while tmp_day < n || !queue.is_empty() {
            if tmp_day < n && apples[tmp_day] > 0 {
                queue.push(AppleBatch::new(
                    apples[tmp_day],
                    tmp_day as i32 + days[tmp_day]
                ));
            }

            while let Some(last) = queue.peek() {
                if last.expiration <= tmp_day as i32 {
                    queue.pop();
                } else {
                    break;
                }
            }

            let mut need_pop = false;
            if let Some(mut last) = queue.peek_mut() {
                last.sum -= 1;
                result += 1;
                if last.sum == 0 {
                    need_pop = true;
                }
            };
            if need_pop {
                queue.pop();
            }
            tmp_day += 1;
        }

        result
    }
}
```