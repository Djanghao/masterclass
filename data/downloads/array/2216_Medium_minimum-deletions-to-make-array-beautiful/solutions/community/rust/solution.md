# a simple solution can be copied to any language | RUST^tm

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/4054909/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/4054909/)

---

i got the inspiration from the hint given by this problem, delete as many same adjecent numbers. (sorry for the broken english)
# Code
```
impl Solution {
    pub fn min_deletion(nums: Vec<i32>) -> i32 {
        let mut idx: usize = 0;
        let mut count: i32 = 0;
        // let mut n_temp: Vec<i32> = nums.to_vec();

        while idx < nums.len()-1 {
            // println!("{:?}-{}", n_temp, idx);
            if nums[idx] == nums[idx+1] {
                // n_temp.remove(idx); // why dont we just replace the value or dont even replace it, we just need some numbers that needed to be removed
                // count += 1;

                // a better one?
                let mut next: usize = idx + 1;
                while next < nums.len() && nums[idx] == nums[next] {
                    count += 1;
                    next += 1;
                }
                idx = next - 1;
                continue;
            }
            idx += 2;
        }
        if (nums.len()-count as usize) % 2 != 0 {
            count += 1;
        }
        // println!("-->{:?}", n_temp);

        count
    }
}
```