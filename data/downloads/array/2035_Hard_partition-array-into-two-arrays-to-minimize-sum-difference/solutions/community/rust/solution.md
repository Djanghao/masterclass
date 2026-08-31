# Rust solution

**Author:** 6cdh
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/1514888/](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/1514888/)

---

```rust
impl Solution {
    pub fn minimum_difference(nums: Vec<i32>) -> i32 {
        let n = nums.len() / 2;
        let mut cache_left: Vec<Vec<i32>> = vec![vec![]; n + 1];
        let s: i32 = nums.iter().sum();
        for i in 0..(1 << n) as u32 {
            let len_left = i.count_ones() as usize;
            let sum_left = Solution::subsum(i, &nums[..n]);
            cache_left[len_left].push(s - 2 * sum_left);
        }

        cache_left.iter_mut().for_each(|x| x.sort_unstable());

        let mut min_absdiff = i32::max_value();
        for i in 0..(1 << n) as u32 {
            let sum_right = Solution::subsum(i, &nums[n..]);
            let cl = &cache_left[n - i.count_ones() as usize];
            let absdiff = Solution::bsearch_min_absdiff(cl, sum_right);
            min_absdiff = min_absdiff.min(absdiff);
        }
        min_absdiff
    }

    fn subsum(bitset: u32, nums: &[i32]) -> i32 {
        nums.iter().enumerate().fold(
            0,
            |sum, (j, v)| if bitset & (1 << j) != 0 { sum + v } else { sum },
        )
    }

    fn bsearch_min_absdiff(cl: &[i32], sum_right: i32) -> i32 {
        match cl.binary_search(&(2 * sum_right)) {
            Ok(_) => 0,
            Err(j) => {
                if j == 0 {
                    (cl[j] - 2 * sum_right).abs()
                } else if j == cl.len() {
                    (cl[j - 1] - 2 * sum_right).abs()
                } else {
                    let absdiff_left = (cl[j - 1] - 2 * sum_right).abs();
                    let absdiff_right = (cl[j] - 2 * sum_right).abs();
                    absdiff_left.min(absdiff_right)
                }
            }
        }
    }
}
```

I have tried several solution with TLE.

My first attempt is a brute force solution `O(n * 4^n)`.

```rust
impl Solution {
    // 4^n
    pub fn minimum_difference(nums: Vec<i32>) -> i32 {
        let s: i32 = nums.iter().sum();
        let mut min_abs_diff = i32::max_value();
        for bit_set in 0..1 << nums.len() {
            let mut sub_sum = 0;
            let mut cnt = 0;
            for (i, v) in nums.iter().enumerate() {
                if bit_set & (1 << i) != 0 {
                    sub_sum += v;
                    cnt += 1;
                }
            }
            if cnt == nums.len() / 2 {
                min_abs_diff = min_abs_diff.min((s - sub_sum - sub_sum).abs());
            }
        }

        min_abs_diff
    }
}
```

Then I realize I can split the input into two array and solve the subproblems. It still got TLE.

```rust
impl Solution {
    pub fn minimum_difference(nums: Vec<i32>) -> i32 {
        let n = nums.len() / 2;
        let mut cache_left: Vec<Vec<i32>> = vec![vec![]; n + 1];
        for i in 0..(1 << n) as u32 {
            let len_left = i.count_ones() as usize;
            cache_left[len_left].push(nums[..n].iter().enumerate().fold(0, |sum, (j, v)| {
                if i & (1 << j) != 0 {
                    sum + v
                } else {
                    sum
                }
            }));
        }
        let mut min_absdiff = i32::max_value();
        let s: i32 = nums.iter().sum();
        for i in 0..(1 << n) as u32 {
            let sum_right =
                nums[n..].iter().enumerate().fold(
                    0,
                    |sum, (j, v)| if i & (1 << j) != 0 { sum + v } else { sum },
                );
            let len_left = n - i.count_ones() as usize;
			// Big complexity here // consider use binary search then got the final solution
            for sum_left in &cache_left[len_left] {
                let subsum = sum_left + sum_right;
                let absdiff = (s - subsum - subsum).abs();
                min_absdiff = min_absdiff.min(absdiff);
            }
        }
        min_absdiff
    }
}
```