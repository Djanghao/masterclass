# rust solution

**Author:** drizz1e
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/2639083/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/2639083/)

---

```rust
impl Solution {
    pub fn minimum_effort(tasks: Vec<Vec<i32>>) -> i32 {
        let mut extras = Vec::new();
        for task in tasks.iter() {
            extras.push(task[1] - task[0]);
        }
        let mut indices = (0..tasks.len()).collect::<Vec<_>>();
        indices.sort_by_key(|&i| -&extras[i]);
        let (mut min_energy, mut cur_cost) = (0, 0);
        for &idx in indices.iter() {
            cur_cost += tasks[idx][0];
            let ene = cur_cost + extras[idx];
            if min_energy < ene {
                min_energy = ene;
            }
        }
        min_energy
    }
}
```