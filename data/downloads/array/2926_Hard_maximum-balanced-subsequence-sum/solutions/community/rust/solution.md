# Sort of Fenwick(Binary indexed tree) for the max prefix query. Beats 100%

**Author:** kpagacz
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4255761/](https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4255761/)

---

```
pub struct Fenwick {
    arr: Vec<i64>,
}

impl Fenwick {
    pub fn new(size: usize) -> Self {
        Self {
            arr: vec![i64::MIN; size + 1],
        }
    }

    fn least_significant_bit(n: usize) -> usize {
        (n as i32 & (-(n as i32))) as usize
    }

    pub fn update(&mut self, pos: i32, value: i64) {
        let mut index = pos as usize + 1;
        while index < self.arr.len() {
            // println!("update: {index}");
            self.arr[index] = self.arr[index].max(value);
            index += Fenwick::least_significant_bit(index);
        }
    }

    pub fn query(&self, pos: i32) -> i64 {
        let mut answer = i64::MIN;
        let mut index = pos as usize;
        while index > 0 {
            // println!("query: {index}");
            answer = answer.max(self.arr[index]);
            index -= Fenwick::least_significant_bit(index);
        }

        answer
    }
}

impl Solution {
    pub fn max_balanced_subsequence_sum(nums: Vec<i32>) -> i64 {
        use std::collections::HashMap;
        let derived: Vec<i64> = nums
            .iter()
            .enumerate()
            .map(|(pos, &num)| num as i64 - pos as i64)
            .collect();
        let mut compressed: Vec<(i64, usize)> = derived
            .iter()
            .enumerate()
            .map(|(pos, num)| (*num, pos))
            .collect();
        compressed.sort();
        let dp_pos_to_compressed_pos = compressed.iter().enumerate().fold(
            HashMap::new(),
            |mut map, (compressed_pos, compressed)| {
                map.insert(compressed.1, compressed_pos);
                map
            },
        );

        let mut dp: Vec<i64> = nums.into_iter().map(|num| num as i64).collect();
        let mut fenwick = Fenwick::new(dp.len());
        // println!("derived: {derived:?}");
        // println!("compressed: {compressed:?}");
        (0..dp.len()).for_each(|pos| {
            let pos_in_compressed = *dp_pos_to_compressed_pos.get(&pos).unwrap();
            let query = fenwick.query(pos_in_compressed as i32);
            // println!("{dp:?} pos in compressed: {pos_in_compressed} max so far: {query}");
            if query != i64::MIN {
                dp[pos] = dp[pos].max(dp[pos] + query);
            }
            fenwick.update(pos_in_compressed as i32, dp[pos]);
        });
        *dp.iter().max().unwrap()
    }
}
```