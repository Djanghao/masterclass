# Rust | Counter approach

**Author:** deleted_user
**Votes:** 3
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/1539339/](https://leetcode.com/problems/two-out-of-three/solutions/1539339/)

---

```
impl Solution {
    pub fn two_out_of_three(nums1: Vec<i32>, nums2: Vec<i32>, nums3: Vec<i32>) -> Vec<i32> {
        let mut counts1: [i32;101] = [0;101];
        let mut counts2: [i32;101] = [0;101];
        let mut counts3: [i32;101] = [0;101];

        for n in nums1 {
            counts1[n as usize] = 1;
        }

        for n in nums2 {
            counts2[n as usize] = 1;
        }

        for n in nums3 {
            counts3[n as usize] = 1;
        }

        let mut res: Vec<i32> = Vec::new();

        for v in 1..101 {
            if counts1[v] + counts2[v] + counts3[v] >= 2 {
                res.push(v as i32);
            }
        }

        res
    }
}
```