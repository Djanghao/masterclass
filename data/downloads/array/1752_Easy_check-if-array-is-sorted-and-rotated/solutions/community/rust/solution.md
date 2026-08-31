# rust solution

**Author:** meizatshrit
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/1055342/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/1055342/)

---

anyone with a Rustier solution is more the welcome to comment 

```
    pub fn check(nums: Vec<i32>) -> bool {
        let mut count = 0;

        let mut i = 0;

        while i != nums.len() {
            if nums[i] > nums[(i + 1) % nums.len()] {
                count += 1;
            }

            i += 1;
        }

        if count > 1 {
            return false;
        } else {
            return true;
        }
    }