# rust

**Author:** sdvorchin
**Votes:** 0
**Link:** [https://leetcode.com/problems/process-tasks-using-servers/solutions/5138914/](https://leetcode.com/problems/process-tasks-using-servers/solutions/5138914/)

---

# Code
```
use std::collections::{BinaryHeap, VecDeque};
impl Solution {
    pub fn assign_tasks(servers: Vec<i32>, tasks: Vec<i32>) -> Vec<i32> {
        let k = tasks.len() as i32;
        let mut tasks = tasks.into_iter();
        let mut waiting = VecDeque::new();
        let mut available = servers.into_iter().zip(0i32..).map(|(w, i)| (-w, -i)).collect::<BinaryHeap<_>>();
        let mut occupied = BinaryHeap::new();
        let mut ans = Vec::new();
        for t in 0.. {
            if let Some(task) = tasks.next() { waiting.push_back(task); }
            while t + occupied.peek().unwrap_or(&(i32::MIN + 1, 0, 0)).0 >= 0 {
                if let Some((_, w, i)) = occupied.pop() {
                    available.push((w, i));
                }
            }
            while waiting.len() > 0 && available.len() > 0 {
                let task = waiting.pop_front().unwrap();
                let (w, i) = available.pop().unwrap();
                occupied.push((-t - task, w, i));
                ans.push(-i);
            }
            if t > k && waiting.len() == 0 { break; }
        }
        ans
    }
}
```