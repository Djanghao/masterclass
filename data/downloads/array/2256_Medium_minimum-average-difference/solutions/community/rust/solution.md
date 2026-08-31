# [Rust] Prefix sum - O(1) space

**Author:** keep_of_kalessin
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/2875860/](https://leetcode.com/problems/minimum-average-difference/solutions/2875860/)

---


### Prefix Sum

```rust
pub fn minimum_average_difference(nums: impl AsRef<[i32]>) -> i32 {
    let nums = nums.as_ref();

    // Calculate the prefix sum., use i64 in order to avoid overflows
    let mut sum = vec![0i64; nums.len()];
    sum[0] = nums[0] as i64;
    for i in 1..sum.len() {
        sum[i] = sum[i - 1] + nums[i] as i64;
    }

    let mut val = i64::MAX;
    let mut idx = 0;

    for i in 0..sum.len() {
        // Get the sum of the two halves of the array: [0..=i] AND [i+1..sum.len]
        let a = sum[i];
        let b = sum[sum.len() - 1] - sum[i];

        //  Calculate the average value for each half 
        let x = a / (i + 1) as i64;
        let y = b / 1.max(sum.len() - i - 1) as i64; // avoid division by 0

        // Check if the absolute difference is smaller
        let diff = x.max(y) - x.min(y);
        if diff < val {
            val = diff;
            idx = i;
        }
    }

    idx as i32
}
```

### Prefix SUm with `O(1)` space

The same idea ass above, but we calculate the prefix sum on the fly:

```rust
pub fn minimum_average_difference(nums: impl AsRef<[i32]>) -> i32 {
    let nums = nums.as_ref();

    let total = nums.iter().map(|x| *x as i64).sum::<i64>();
    let mut sum = 0;

    let mut val = i64::MAX;
    let mut idx = 0;

    for i in 0..nums.len() {
        sum += nums[i] as i64;

        let a = sum;
        let b = total - sum;

        let x = a / (i + 1) as i64;
        let y = b / 1.max(nums.len() - i - 1) as i64;

        let diff = x.max(y) - x.min(y);
        if diff < val {
            val = diff;
            idx = i;
        }
    }

    idx as i32
}
```
