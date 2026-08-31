# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4826988/](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4826988/)

---

```
impl Solution {
    pub fn result_array(nums: Vec<i32>) -> Vec<i32> {
        let n = nums.len();
        let mut left = vec![nums[0]];
        let mut right = vec![nums[1]];
        let mut ll = vec![nums[0]];
        let mut rr = vec![nums[1]];
        let mut l = 0;
        let mut r = 0;

        for &nums_i in nums.iter().take(n).skip(2) {
            let x = Self::greater_count(&left, nums_i);
            let y = Self::greater_count(&right, nums_i);

            match y.cmp(&x) {
                std::cmp::Ordering::Greater => {
                    right.insert(right.len() - y, nums_i);
                    rr.push(nums_i);
                    r += 1;
                }
                std::cmp::Ordering::Less => {
                    left.insert(left.len() - x, nums_i);
                    ll.push(nums_i);
                    l += 1;
                }
                std::cmp::Ordering::Equal => {
                    if l <= r {
                        left.insert(left.len() - x, nums_i);
                        ll.push(nums_i);
                        l += 1;
                    } else {
                        right.insert(right.len() - y, nums_i);
                        rr.push(nums_i);
                        r += 1;
                    }
                }
            }
        }
        ll.append(&mut rr);
        ll
    }

    fn greater_count(arr: &[i32], val: i32) -> usize {
        let index = arr.partition_point(|&x| x <= val);
        arr.len() - index
    }
}

```