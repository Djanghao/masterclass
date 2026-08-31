# Rust | Prefix Sum + Binary Search, beats 100% space/time

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/3900889/](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/3900889/)

---

# Intuition

Just look at the hints...

Try finding the count of index `i` where **prefix and postfix sums** at `i` differs by `vec[i] - k`.

# Approach

Dur to complexity constraints, we need to be able to search across possible differences between prefix and postfix sums, *fast*. ~~HashM~~ Sorting the difference array and perform **binary search** on it is good enough.

# Complexity
- Time complexity:
$$O(n \\log n)$$

- Space complexity:
$$O(n)$$

# Code
```rust
pub fn to_pref_sum(vec: &Vec<i64>) -> Vec<i64> {
    let mut ret = Vec::with_capacity(vec.len() + 1);

    let mut pref_sum = i64::default();
    ret.push(pref_sum);
    for &e in vec {
        pref_sum += e;
        ret.push(pref_sum);
    }

    ret
}

impl Solution {
    pub fn ways_to_partition(vec: Vec<i32>, k: i32) -> i32 {
        let vec = vec.into_iter()
            .map(|e| e as i64)
            .collect::<Vec<_>>();
        let k = k as i64;

        let vec_sum = vec.iter().sum::<i64>();
        let pref_sum = to_pref_sum(&vec);
        let mut diff_vec = pref_sum.into_iter()
            .skip(1)
            .take(vec.len() - 1)
            .enumerate()
            .map(|(i, e0)| (vec_sum - e0 * 2, i))
            .collect::<Vec<_>>();
        diff_vec.sort_unstable();

        let ptr_0 = diff_vec.partition_point(
            |&(diff, _)| diff < 0
        );
        let ptr_1 = diff_vec.partition_point(
            |&(diff, _)| diff <= 0
        );

        let mut ret = (ptr_1 - ptr_0);

        for (i, e) in vec.into_iter().enumerate() {
            let (diff_0, diff_1) = (k - e, e - k);
            
            let mut _ret = usize::MIN;

            let ptr_0 = diff_vec.partition_point(
                |&(diff, i_next)| (diff < diff_0)
                    || ((diff == diff_0) && (i_next < i))
            );
            let ptr_1 = diff_vec.partition_point(
                |&(diff, i_next)| diff <= diff_0
            );
            _ret += (ptr_1 - ptr_0);

            let ptr_0 = diff_vec.partition_point(
                |&(diff, i_next)| diff < diff_1
            );
            let ptr_1 = diff_vec.partition_point(
                |&(diff, i_next)| (diff < diff_1)
                    || ((diff == diff_1) && (i_next < i))
            );
            _ret += (ptr_1 - ptr_0);

            ret = ret.max(_ret);
        }

        ret as i32
    }
}
```