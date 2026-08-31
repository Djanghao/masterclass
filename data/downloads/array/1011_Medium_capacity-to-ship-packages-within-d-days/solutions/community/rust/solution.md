# [JavaScript || Rust] Easy to understand solution

**Author:** emmakuen
**Votes:** 5
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3217242/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3217242/)

---

## JavaScript Solution\r
\r
```javascript\r
/**\r
 * @param {number[]} weights\r
 * @param {number} days\r
 * @return {number}\r
 */\r
const shipWithinDays = function (weights, days) {\r
  let maxCapacity = 0;\r
  let minCapacity = 0;\r
\r
  for (const weight of weights) {\r
    maxCapacity += weight;\r
    minCapacity = Math.max(minCapacity, weight);\r
  }\r
\r
  while (minCapacity < maxCapacity) {\r
    const capacity = Math.floor((maxCapacity + minCapacity) / 2);\r
    let currentDays = 1;\r
    let currentLoad = 0;\r
    for (const weight of weights) {\r
      currentLoad += weight;\r
      if (currentLoad > capacity) {\r
        currentDays++;\r
        currentLoad = weight;\r
      }\r
    }\r
\r
    if (currentDays > days) minCapacity = capacity + 1;\r
    else maxCapacity = capacity;\r
  }\r
\r
  return minCapacity;\r
};\r
\r
```\r
\r
## Rust Solution\r
\r
```rust\r
impl Solution {\r
    pub fn ship_within_days(weights: Vec<i32>, days: i32) -> i32 {\r
        let mut max_capacity = 0;\r
        let mut min_capacity = 0;\r
\r
        for weight in weights.iter() {\r
            max_capacity += weight;\r
            min_capacity = std::cmp::max(min_capacity, *weight);\r
        }\r
\r
        while min_capacity < max_capacity {\r
            let capacity = (min_capacity + max_capacity) / 2;\r
            let mut current_load = 0;\r
            let mut current_days = 1;\r
            for weight in weights.iter() {\r
                current_load += *weight;\r
                if current_load > capacity {\r
                    current_days += 1;\r
                    current_load = *weight;\r
                }\r
            }\r
\r
            if current_days > days {\r
                min_capacity = capacity + 1;\r
            } else {\r
                max_capacity = capacity;\r
            }\r
        }\r
\r
        min_capacity\r
    }\r
}\r
```\r
