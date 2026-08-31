# 46ms O(nlog(n)) Divide and Conquer

**Author:** Martician
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-range-sum/solutions/4861154/](https://leetcode.com/problems/count-of-range-sum/solutions/4861154/)

---

Let ```n``` be the length of the input array, ```mid = n / 2``` and let's consider a range ```[i, j)``` where ```0 < i < j <= n```. For each such range there are three possible options:
```
1) 0 < i < j <= mid
2) 0 < i < mid < j
3) mid <= i < j <= n
```
We notice that cases ```1``` and ```3``` are just smaller versions of the original problem. That indicates that we could use a divide and conquer approach. If our algorithm can handle smaller inputs we should only consider case 2. That is, for each ```i``` in ```[0, mid)``` we should count all corresponding indeces ```j``` in ```[mid, n)``` such that: ```lower <= Sum(i, j) <= upper``` where ```Sum(i, j)``` could be calculated using a prefix sum array:
```
Sum(i, j) = Prefix_Sum[j] - Prefix_Sum[i]
```

A brute force solution can count all such indices in $$\\Theta(n^2)$$ time which is not optimal. We should try to think of a faster solution. An important observation is that the ordering of the prefix sums in ranges ```[0, mid)``` and ```[mid, n)``` doesn't matter. We could sort the prefix sums in these ranges so that it's easier to count the valid indices:
```
Assume [0, mid) and [mid, n) subarrays are sorted. Then:
For each i1, i2 in [0, mid) such that i1 < i2
it's true that their corresponding j indices lie in subsequent subarrays
[j1_start, j1_end), [j2_start, j2_end) where
mid <= j1_start <= j2_start < n
mid <= j1_end <= j2_end <= n
```
This means that for each index ```i``` in ```[0, mid)``` we could reuse the corresponding subarray of ```i - 1```, shifting it's start and end indices by some amount to the right. Since the maximum number of shifts we can do is limited by ```n``` the total complexity of counting all pairs would be linear.

The worst case complexity can be described by the following recurrence relation:
$$T(n) = 2T(n/2) + \\Theta(n) + \\Theta(sort(n)) = 2T(n/2) + \\Theta(sort(n))$$
With quicksort (Rust's ```sort_unstable```) this would be:
$$T(n) = \\Theta(n^2)$$
With a $$\\Theta(nlogn)$$ sorting algorithm:
$$T(n) = \\Theta(nlog^2n)$$
With a linear $$\\Theta(n)$$ sort:
$$T(n) = \\Theta(nlogn) $$

Rust's built-in slice ```sort``` is inspired by the timsort sorting algorithm. Although timsort's worst case complexity is $$\\Theta(nlogn)$$, having already sorted two subarrays it would only take linear time to merge them so using timsort should have a worst  case complexity of $$\\Theta(n)$$ and fall into the third category.

Implementation:
```
impl Solution {
    pub fn count_range_sum(nums: Vec<i32>, lower: i32, upper: i32) -> i32 {
        let mut n = nums.len();

        let mut prfx_sum = vec![0; n + 1];
        for i in 0..n {
            prfx_sum[i + 1] = prfx_sum[i] + nums[i] as i64;
        }

        fn merge(nums: &mut [i64], lower: i64, upper: i64) -> i32 {
            let (l, r) = (0, nums.len());

            let mid = (l + r) >> 1;
            if mid == l {
                return 0;
            }

            let mut count =
                merge(&mut nums[..mid], lower, upper) + merge(&mut nums[mid..], lower, upper);

            let (mut j, mut k) = (mid, mid);
            for i in l..mid {
                while j != r && nums[j] - nums[i] < lower {
                    j += 1;
                }
                while k != r && nums[k] - nums[i] <= upper {
                    k += 1;
                }
                count += (k - j) as i32;
            }
            nums.sort();

            count
        }

        merge(&mut prfx_sum, lower as i64, upper as i64)
    }
}
```
