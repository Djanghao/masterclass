# Rust: Dynamic Programming

**Author:** artemstr31
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/4379479/](https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/4379479/)

---

# Intuition
The problem involves choosing between regular and express lanes at each step to minimize the total cost of travel. The intuition here is to dynamically compute the minimum cost for each step, considering the costs of both regular and express lanes and the choices made in the previous steps.

# Approach
- Iterate through each step, maintaining the cost of the regular and express lanes at the current step.
- At each step, calculate the cost of using the regular lane as the sum of the current regular lane cost and the minimum of the previous regular lane cost and the previous express lane cost.
- Similarly, calculate the cost of using the express lane as the sum of the current express lane cost and the minimum of the previous express lane cost and (the cost to change to express plus the previous regular lane cost).
- Keep track of the minimum cost at each step and update the previous lane costs accordingly.
- Build an array $costs$ containing the minimum cost at each step.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```
impl Solution {
    pub fn minimum_costs(regular: Vec<i32>, express: Vec<i32>, express_cost: i32) -> Vec<i64> {
        let n = regular.len();
        let mut prev_regular_lane: i64 = 0;
        let mut prev_express_lane: i64 = express_cost as i64;
        let mut costs: Vec<i64> = Vec::new();

        for i in 0..n {
            let regular_lane_cost: i64 = regular[i] as i64 + prev_regular_lane.min(prev_express_lane);
            let express_lane_cost: i64 = express[i] as i64 + prev_express_lane.min(express_cost as i64 + prev_regular_lane);
            costs.push(regular_lane_cost.min(express_lane_cost));
            prev_regular_lane = regular_lane_cost;
            prev_express_lane = express_lane_cost;
        }

        costs
    }
}
```