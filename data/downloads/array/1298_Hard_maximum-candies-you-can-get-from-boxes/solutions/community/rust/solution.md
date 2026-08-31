# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/3090045/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/3090045/)

---

# Code
```
impl Solution {
    pub fn max_candies(status: Vec<i32>, candies: Vec<i32>, keys: Vec<Vec<i32>>, contained_boxes: Vec<Vec<i32>>, initial_boxes: Vec<i32>) -> i32 {
        let mut status = status;
        let mut q = std::collections::VecDeque::new();
        let mut result = 0;
        let mut reachable_closed_boxes = vec![false; status.len()];
        for i in initial_boxes {
            if status[i as usize] == 1 {
                q.push_back(i);
            } else {
                reachable_closed_boxes[i as usize] = true;
            }
        }
        while !q.is_empty() {
            let i = q.pop_front().unwrap();
            result += candies[i as usize];
            for &j in &keys[i as usize] {
                if status[j as usize] == 0 && reachable_closed_boxes[j as usize] {
                    q.push_back(j);
                }
                status[j as usize] = 1;
            }
            for &j in &contained_boxes[i as usize] {
                if status[j as usize] == 1 {
                    q.push_back(j);
                } else {
                    reachable_closed_boxes[j as usize] = true;
                }
            }
        }
        result
    }
}
```