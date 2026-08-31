# rust greedy

**Author:** CHIYOI
**Votes:** 11
**Link:** [https://leetcode.com/problems/gas-station/solutions/3011628/](https://leetcode.com/problems/gas-station/solutions/3011628/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The answer is guaranteed to be unique so that we can just find the station where we need gas the most.
To measure the necessary, we can draw a graph with two axis: x-axis is the station index`i` and the y-axis is the prefix-sum of `gas[i] - cost[i]`, which means if we start from the first station, how much gas we have when we got to each station.
Then, the lowest point on the graph is the answer we want, because if we start at it, we can have a gas tank with non-negative amount of rest gas when we got to any of other stations.
Specially, if we got a negative amount at the last element of the prefix-sum, it means we can never complete the circle because the total gas is less than the total cost.

# Approach
<!-- Describe your approach to solving the problem. -->
1. perform `zip` and `map` to get the `gas[i] - cost[i]`, warp with an `enumerate` to get the indices
2. `fold` with `(<prefix-sum>, (<lowest point index>, <lowest point value(for comparing)>))`
3. check the answer: if the `prefix-sum` is negative, return -1, else return the `lowest point index`

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn can_complete_circuit(gas: Vec<i32>, cost: Vec<i32>) -> i32 {
        match gas
            .into_iter()
            .zip(cost.into_iter())
            .map(|(g, c)| g - c)
            .enumerate()
            .fold((0, (0, 0)), |(s, pass @ (_, vm)), (i, v)| match s + v {
                s if s < vm => (s, (i as i32 + 1, s)),
                s => (s, pass),
            }) {
            (s, _) if s < 0 => -1,
            (_, (im, _)) => im,
        }
    }
}
```
- We can use `into_iter` because the vectors are not used any more.
- During each iteration in `fold`, first we rebind `s` to the new sum, then compare it to the previous min and determine whether to swap or not. Don't forget to convert i to `i32` because the default index type is `usize`.