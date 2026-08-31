# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/2965400/](https://leetcode.com/problems/walking-robot-simulation/solutions/2965400/)

---

# Code
```
impl Solution {
    pub fn robot_sim(commands: Vec<i32>, obstacles: Vec<Vec<i32>>) -> i32 {
        let mut obstacles = obstacles;
        obstacles.sort();
        let mut x = 0;
        let mut y = 0;
        let mut dir = 0_i32;
        let mut res = 0;
        let ds = vec![vec![0, 1], vec![1, 0], vec![0, -1], vec![-1, 0]];
        for i in 0..commands.len() {
            if commands[i] == -2 {
                dir -= 1;
            } else if commands[i] == -1 {
                dir += 1;
            } else {
                for _j in 0..commands[i] {
                    let pos = vec![x + ds[dir as usize][0], y + ds[dir as usize][1]];
                    if obstacles.binary_search(&pos).is_ok() {
                        break;
                    }
                    x += ds[dir as usize][0];
                    y += ds[dir as usize][1];
                }
                res = res.max(x * x + y * y);
            }
            if dir == -1 {
                dir = 3;
            }
            if dir == 4 {
                dir = 0;
            }
        }
        res
    }
}
```