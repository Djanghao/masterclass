# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/car-fleet-ii/solutions/3213685/](https://leetcode.com/problems/car-fleet-ii/solutions/3213685/)

---

# Code
```
impl Solution {
    pub fn get_collision_times(cars: Vec<Vec<i32>>) -> Vec<f64> {
        pub fn collision_time(cars: &[Vec<i32>], curr: usize, next: usize) -> f64 {
            (cars[next][0] - cars[curr][0]) as f64 / (cars[curr][1] - cars[next][1]) as f64
        }

        let mut stack: Vec<usize> = Vec::new();
        let mut v = vec![-1.0; cars.len()];
        for i in (0..cars.len()).rev() {
            while !stack.is_empty()
                && (cars[i][1] <= cars[stack[stack.len() - 1]][1]
                    || (stack.len() > 1
                        && collision_time(&cars, i, stack[stack.len() - 1]) >= v[stack[stack.len() - 1]]))
            {
                stack.pop();
            }
            let time = if stack.is_empty() {
                -1.0
            } else {
                collision_time(&cars, i, stack[stack.len() - 1])
            };
            v[i] = time;
            stack.push(i);
        }
        v
    }
}
```