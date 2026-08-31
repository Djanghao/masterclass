# Rust - 73ms, BinaryHeap with Struct

**Author:** JamesFrames
**Votes:** 2
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/2965232/](https://leetcode.com/problems/single-threaded-cpu/solutions/2965232/)

---

```
use std::collections::BinaryHeap;
use std::cmp::Ordering;

#[derive(PartialEq, Eq, Copy, Clone)]
struct Task{
    pub enqueue_time: i32,
    pub processing_time: i32,
    pub initial_idx: usize,
}

impl PartialOrd for Task {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        if other.processing_time == self.processing_time {
            return Some(other.initial_idx.cmp(&self.initial_idx));
        }
        Some(other.processing_time.cmp(&self.processing_time))
    }
}

impl Ord for Task {
    fn cmp(&self, other: &Self) -> Ordering {
        if other.processing_time == self.processing_time {
            return other.initial_idx.cmp(&self.initial_idx) ;
        }
        other.processing_time.cmp(&self.processing_time)
    }
}

impl Solution {
    pub fn get_order(mut tasks: Vec<Vec<i32>>) -> Vec<i32> {
        // Store tasks by enqueue time to mark them available in order
        let mut tasks = tasks.into_iter().enumerate().map(|(idx, task)| {
            Task { enqueue_time: task[0], processing_time: task[1], initial_idx: idx }
        }).collect::<Vec<Task>>();

        tasks.sort_by(|taskA, taskB| {
            taskB.enqueue_time.cmp(&taskA.enqueue_time)
        });


        let mut output = vec![];
        let mut current_time = 0;
        let mut available_tasks: BinaryHeap<Task> = BinaryHeap::new();
        while tasks.len() > 0 || available_tasks.len() > 0 {
            // Get all tasks that are valid by this time
            while tasks.len() > 0 && tasks[tasks.len() - 1].enqueue_time <= current_time {
                let task = tasks.pop().unwrap();
                available_tasks.push(task);
            }

            if let Some(task) = available_tasks.pop() {
                // Run the best available task
                output.push(task.initial_idx as i32);
                current_time += task.processing_time;
            } else {
                // Set the time to the time of the next valid task when no tasks are available
                current_time = tasks[tasks.len() - 1].enqueue_time;
            }
        }
        return output;
    }
}
```