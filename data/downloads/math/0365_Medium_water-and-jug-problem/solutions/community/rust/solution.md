# Rust Solution

**Author:** danielmulvad
**Votes:** 0
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/4640766/](https://leetcode.com/problems/water-and-jug-problem/solutions/4640766/)

---

# Intuition
To solve this problem, we need to determine if it's possible to measure an exact amount of water using two jugs with fixed capacities. This problem can be viewed through the lens of number theory, specifically using the concept of the greatest common divisor (GCD). If the target amount of water can be formed by the linear combination of the two jug capacities, it is possible to measure the water.

# Approach
The solution leverages the mathematical property that a linear combination of two numbers (in this case, the capacities of the two jugs) can achieve any multiple of their GCD. Thus, we check if the target capacity is a multiple of the GCD of the two jug capacities. The GCD is calculated using the Euclidean algorithm. Additionally, we ensure that the sum of the two jug capacities is at least equal to the target capacity, as it's impossible to measure more water than the total capacity of the jugs.

# Complexity
- Time complexity: The time complexity is $$O(\\log(\\min(a, b)))$$ where \\(a\\) and \\(b\\) are the capacities of the two jugs. This is because the most time-consuming operation is the calculation of the GCD, which is done using the Euclidean algorithm.
- Space complexity: The space complexity is $$O(1)$$ as the solution uses only a fixed amount of extra space, regardless of the input size.

# Code
```rust
impl Solution {
    pub fn can_measure_water(jug1_capacity: i32, jug2_capacity: i32, target_capacity: i32) -> bool {
        jug1_capacity + jug2_capacity >= target_capacity
            && (jug1_capacity + jug2_capacity == target_capacity
                || target_capacity % gcd(jug1_capacity, jug2_capacity) == 0)
    }
}

fn gcd(mut a: i32, mut b: i32) -> i32 {
    while b != 0 {
        let temp = b;
        b = a % b;
        a = temp;
    }
    a
}
```