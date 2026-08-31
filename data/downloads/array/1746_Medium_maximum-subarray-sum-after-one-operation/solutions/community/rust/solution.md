# Functional style O(n)/O(1) solution in Rust

**Author:** ustinovas
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/3062799/](https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/3062799/)

---

# Intuition
The main idea of the original Max Subarray Sum problem is that if we found current cumulative sum is negative it leads to resetting the sum to the current element value. This makes sense as negative value can only decrease the final result.
Here we do the same but in parallel we maintain one more aggregated value for the sum with the operation applied.

# Approach
So, we have two sequences over the elements of the `nums` array. Assuming the `nums` array defined as $$nums = [a_{1}, ..., a_{i}, ..., a_{n}]$$, these sequences will be:

$$S_{i} = \\begin{cases} S_{i-1}+a_{i} & \	ext{if $S_{i-1} \\geq 0$} \\\\
 a_{i} & \	ext{otherwise} \\end{cases}$$
and
$$Q_{i} = \\max \\left(Q_{i-1} + a_{i}, \\begin{cases} S_{i-1}+a_{i}^{2} & \	ext{if $S_{i-1} \\geq 0$} \\\\
 a_{i}^{2} & \	ext{otherwise} \\end{cases}\\right)$$

where $$S_{i}$$ is the max subarray sum for a subarray ending on $$i_{th}$$ element with no operation applied;
and $$Q_{i}$$ is the max subarray sum for a subarray ending on $$i_{th}$$ element with operation applied to one of its elements.
As you can see it is enough to store in memory $$S_{i-1}$$ and $$Q_{i-1}$$ values to be able to calculate $$S_{i}$$ and $$Q_{i}$$, so the problem can be solved with $$O(1)$$ space complexity.

The final step is to keep tracking of the max $$Q_{i}$$ value for all indexes from $$1$$ to $$N$$, as we must apply operation to some element of the input array.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn max_sum_after_operation(nums: Vec<i32>) -> i32 {
        nums.iter().fold((0, 0, 0), |(max, sq_sum, sum), &el| Some(if sum>=0 {sum} else {0})
            .map(|sum| ((sq_sum+el).max(sum+el*el), sum+el))
            .map(|(sq_sum, sum)| (sq_sum.max(max), sq_sum, sum))
            .unwrap()
        ).0
    }
}
```