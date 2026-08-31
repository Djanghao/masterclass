# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/3271975/](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/3271975/)

---

# Code
```
impl Solution {
    pub fn max_task_assign(tasks: Vec<i32>, workers: Vec<i32>, pills: i32, strength: i32) -> i32 {
        use std::collections::VecDeque;

        fn check(tasks: &[i32], workers: &[i32], pills: i32, strength: i32, k: usize) -> bool {
            let mut pills = pills;
            if k > workers.len() {
                return false;
            }
            let mut t = 0;
            let mut q = VecDeque::new();
            for i in (0..k).rev() {
                if q.is_empty() && t < k {
                    q.push_front(tasks[t]);
                    t += 1;
                }
                if *q.back().unwrap() <= workers[i] {
                    q.pop_back();
                } else {
                    if pills == 0 {
                        return false;
                    }
                    if *q.back().unwrap() > workers[i] + strength {
                        return false;
                    }
                    while t < k && tasks[t] <= workers[i] + strength {
                        q.push_front(tasks[t]);
                        t += 1;
                    }
                    q.pop_front();
                    pills -= 1;
                }
            }
            true
        }

        let (mut l, mut r) = (0, tasks.len());
        let mut tasks = tasks;
        let mut workers = workers;
        tasks.sort();
        workers.sort_by(|a, b| b.cmp(a));
        while l < r {
            let mid = (l + r + 1) / 2;
            if check(&tasks, &workers, pills, strength, mid) {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        l as i32
    }
}
```