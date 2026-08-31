# Rust | not DP

**Author:** tifv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3885243/](https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3885243/)

---

Let $n$ be the length of the given arrays, and let $a_{i}$ and $b_{i}$ represent the values of the arrays `nums1` and `nums2`, respectively, $i = 1, \\ldots, n$.

There is no point in choosing the same index twice, or delaying operations in time. Therefore, if we are to minimize the obtained sum in time $T$, we will apply operation to some distinct indices $i_{1}$, $i_{2}$, \u2026, $i_{T}$. It follows $T \\leq n$.

Also, the order of applying the operation to the given indices with the given $T$ is determined by $b_{i_{1}} \\leq b_{i_{2}} \\leq \\ldots \\leq b_{i_{T}}$, and the minimum obtained sum will be
$\\sum_{i = 1}^{n} (a_{i} + T \\cdot b_{i}) - \\sum_{k = 1}^{T} (a_{i_{k}} - k \\cdot b_{i_{k}})$.

We will step through $T = 0, \\ldots, n$. For each $T$ we will determine the set of indices to which the operation will be applied, and check whether the obtained sum is less than given `x`.

*Lemma.* Suppose that for time $T < n$ it is known that in order to minimize the sum the operation can be applied to the indices $i_{1}$, $i_{2}$, \u2026, $i_{T}$ in some order. Then for time $T + 1$ the operation can be applied to the same set of indices plus one of the remaining indices, namely $i$ such that the the sum $a_{i} + \\sum_{k = 1}^{T} \\max(b_{i}, b_{i_{k}})$ is the largest.

This lemma allows us to construct the set of indices iteratively. We will maintain the array $\\left\\lbrace a_{i} + \\sum_{k = 1}^{T} \\max(b_{i}, b_{i_{k}}) \\right\\rbrace_{i=1}^{n}$ to make the search for the next index linear. We will also maintain the set of chosen indices sorted by $b_{i}$ to make computation of the minimum sum linear as well.

# Complexity
- Time complexity: $O(n^2)$.

- Space complexity: $O(n)$.

# Code
```
impl Solution {

    pub fn minimum_time(nums1: Vec<i32>, nums2: Vec<i32>, x: i32) -> i32 {
        let sum1: i32 = nums1.iter().sum();
        let sum2: i32 = nums2.iter().sum();
        let mut rating = std::collections::BTreeSet::new();
        let mut indices = Self::indices(&nums1, &nums2);
        loop {
            let time = rating.len() as i32;
            if ( sum1 + sum2 * time
                - rating.iter().enumerate()
                    .map( |(i, &(num2, num1, _))|
                        num1 + num2 * (i as i32 + 1) )
                    .sum::<i32>()
            ) <= x {
                return time;
            }
            if let Some(index) = indices.next() {
                rating.insert((nums2[index], nums1[index], index));
            } else {
                return -1;
            }
        }
    }

    pub fn indices<'a>(
        nums1: &'a Vec<i32>, nums2: &'a Vec<i32>,
    ) -> impl Iterator<Item=usize> + 'a {
        let n = nums1.len();
        let mut eff_nums = (0..n)
            .map(|i| Some(nums1[i] + nums2[i]))
            .collect::<Vec<_>>();
        (0..n).map(move |_| {
            let index = eff_nums.iter().copied().enumerate()
                .filter_map(|(i, maybe_x)| maybe_x.map(|x| (i, x)))
                .max_by_key(|&(_, x)| x)
                .expect("should not yet exhaust all the indices")
                .0;
            eff_nums[index] = None;
            for i in 0..n {
                let num_mut = match &mut eff_nums[i] {
                    None => continue,
                    Some(num_mut) => num_mut,
                };
                *num_mut += i32::max(nums2[i], nums2[index]);
            }
            index
        })
    }

}

```