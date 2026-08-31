# my stinky solution TLE, but i got inspitation(imitate ofc) from other | RUST^tm

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/3765330/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/3765330/)

---

# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn get_distances(arr: Vec<i32>) -> Vec<i64> {
        let mut result: Vec<i64> = vec![];
        let mut map_num_idxs: HashMap<i32, Vec<i64>> = HashMap::new();
        // num : [curr_sum, curr_idx_idxs, ...idxs]

        // finding the current sum: curr_idx: the first one
        // let mut curr_sum_idx: HashMap<i32, Vec<i32>> = HashMap::new();
        // curr_sum: num => [idx, curr_sum] 

        for i in 0..arr.len() {
            if let Some(vec) = map_num_idxs.get_mut(&arr[i]) {
                // num : [ curr_sum, curr_idx_idxs, ...idxs]
                vec.push(i as i64);
                vec[0] += i64::abs(i as i64-vec[vec[1] as usize]);
            }else {
                map_num_idxs.insert(arr[i], vec![0,2,i as i64]);
            }
        }
        // println!("{:?}", map_num_idxs);

        for i in 0..arr.len() {
            // // TLE
            // let mut sum: i64 = 0;
            // // TLE
            if let Some(idxs) = map_num_idxs.get_mut(&arr[i]) {
                if idxs[idxs[1] as usize] as usize == i {
                    result.push(idxs[0]);
                    continue;
                }
                // num : [ curr_sum, curr_idx_idxs, ...idxs]
                // inspiration : https://leetcode.com/problems/intervals-between-identical-elements/solutions/1647499/hash-and-formula/
                // https://leetcode.com/problems/intervals-between-identical-elements/solutions/1647499/hash-and-formula/comments/1192260
                let mut prev_sum: i64 = idxs[0] as i64;
                let diff: i64 = i64::abs(idxs[idxs[1] as usize] as i64 - idxs[(idxs[1] + 1) as usize] as i64);
                let count_ele_before: i64 = idxs.len() as i64 -  (idxs.len() as i64 - idxs[1] as i64) - 2;
                let count_ele_after: i64 = idxs.len() as i64 - idxs[1] as i64 - 2;
                let distance_reduced = diff * count_ele_after;
                // DistanceReduced = Diff * (count of Elements on right side of 7)  = 2 * 2 = 4
                let distance_increased = diff * count_ele_before;
                // DistanceIncreased = Diff * (count of Elements on left side of 5) = 2 * 1 = 2
                let curr_sum = prev_sum - distance_reduced + distance_increased;
                //result[7] = result[5] - DistanceReduced + DistanceIncreased = 18 - 4 + 2 = 16

                // println!("arr_idx:{},before:{},after:{}", i,count_ele_before,count_ele_after);
                // println!("{:?}", idxs);
                // println!("{:?}", curr_sum);
                // println!("{}", diff);


                idxs[1] += 1;
                idxs[0] = curr_sum;
                result.push(curr_sum);

                // // TLE
                // for idx in 2..idxs.len() {
                //     sum += i64::abs((i as i64-idxs[idx]) as i64);
                // }
                // // TLE
            }
            // // TLE
            // result.push(sum);     
            // // TLE
        }

        result
    }
}
```