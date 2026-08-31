# rust solution, 4 lines, very clear

**Author:** royleo35
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/2529562/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/2529562/)

---

if nums[l-1] <= 0 res = nums[l-1]* nums[l-2] * nums[l-3]
else nums[l-1] > 0
     res = nums[l-1] * (nums[0] * nums[1])  // [0] and [1] are very samll negtive number
	 ret = nums[l-1] * (nums[l-2]*nums[l-3]) // [l-3] and [l-2] maybe one postive or two postive,whatever
```
impl Solution {
    pub fn maximum_product(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        nums.sort_unstable();
        let l = nums.len();
        std::cmp::max(nums[l-1]*nums[l-2]*nums[l-3], nums[0]*nums[1]*nums[l-1])
    }
}
```