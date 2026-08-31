# Greedy Algorithm for Minimizing Task Completion Time

**Author:** tzrac119
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/4300872/](https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/4300872/)

---

# Intuition
The problem at hand involves finding the minimum time required to complete a set of tasks, each characterized by a start time, end time, and duration. A key observation is that tasks with earlier end times should be prioritized to minimize the overall time spent. Additionally, the algorithm needs to account for overlapping time intervals and ensure that the minimum time is spent on completing the tasks.
# Approach
To address this problem, the algorithm first sorts the tasks based on their end times in ascending order. This sorting step ensures that tasks with earlier end times are processed first. Next, the algorithm iterates through the sorted tasks and, for each task, checks the time intervals from its start time to end time. It counts the number of already visited time slots within this interval.

For each task, the algorithm then proceeds to visit the time slots in reverse order, starting from the end time. It increments the total time spent and marks each unvisited time slot as visited until the required duration for the task is fulfilled.

The use of a visited array helps keep track of the time slots that have already been utilized by previous tasks, preventing unnecessary rework.

# Complexity
- Time complexity:
The time complexity of the algorithm is dominated by the sorting step, which takes O(nlogn) time, where n is the number of tasks. The subsequent iteration through the tasks and time slots takes linear time, resulting in an overall time complexity of  O(nlogn+m), where m is the total number of time slots across all tasks.
- Space complexity:
The algorithm uses a visited array of size 2010 to keep track of time slots, resulting in a constant space complexity of O(1) as the size of the array is independent of the input size. Additionally, the algorithm clones the input vector, which contributes to an additional space complexity of O(n), where n is the number of tasks. Overall, the space complexity is O(n).
# Code
```
impl Solution {
    pub fn find_minimum_time(tasks: Vec<Vec<i32>>) -> i32 {
  let mut tasks = tasks.clone();
    tasks.sort_by(|a, b| a[1].cmp(&b[1]));

    let mut total_time = 0;
    let mut visited = vec![false; 2010];
    for task in tasks.iter() {
        let start_time = task[0];
        let end_time = task[1];
        let duration = task[2];

        let mut current_visited_time = 0;
        for time in start_time..=end_time {
            if visited[time as usize] {
                current_visited_time += 1;
            }
        }

        let mut visit_time = end_time as usize;
        while current_visited_time < duration {
            if !visited[visit_time as usize] {
                total_time += 1;
                current_visited_time += 1;
                visited[visit_time] = true;
            }
            visit_time -= 1;
        }
    }

    total_time
    }
}
```