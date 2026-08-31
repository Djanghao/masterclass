# Rust DP solution

**Author:** 673556617
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/4341837/](https://leetcode.com/problems/delete-and-earn/solutions/4341837/)

---

# Intuition

Originall was thinking to fetch based on a Hashmap. but then realize this is more of a house rob. Even though the requirement is on the current value's left/right, but it is essentially can be done on one side, then it becomes the house rob..


# Approach
Dynamic programming approach. Consider res[points.len()+1][2] as the DP arrary: then we have the following formula:

2d arrary, each row: index 0 means not take the current value; index 1 means take the current value, and accumulate all sum results until this row.

res[0][0] = res[0][1] = 0 // start condition
res[1][0] =0,  res[0][1] = sum(points[1]) // count how many 1s.

otherwise:

res[n][0] = max(res[n-1][0], res[n-1][0]) // since not taking the current number, we can get the most value by from res[n-1], either take number `n-1` we don't really care about, it is the DP's job to get the max value.

res[n][1] = res[n-1][0] + points[i] // since we are taking current number: n, then we cannot take the previous number, so we only care about res[i-1][0]


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
 use std::cmp::max;

impl Solution {
    pub fn delete_and_earn(nums: Vec<i32>) -> i32 {
        let min_v = *nums.iter().min().unwrap();
        let max_v = *nums.iter().max().unwrap();

        // loop
        let mut points: Vec<i32> = vec![0; (max_v + 1) as usize];
        for num in nums.iter() {
            points[*num as usize] += num;
        }

        // dp
        let mut res: Vec<Vec<i32>> = vec![vec![0; 2]; (max_v+1) as usize];

        // handle index = 1
        res[1][0] = 0;
        res[1][1] = points[1];

        for i in 2..points.len() {
            // don't take
            let max_1 = max(res[i - 1][0], res[i - 1][1]);
            // take
            let max_2 = res[i - 1][0] + points[i];


            res[i][0] = max_1;
            res[i][1] = max_2;
        }

        return max(res[points.len() - 1][0], res[points.len() - 1][1]);
    }
}
```