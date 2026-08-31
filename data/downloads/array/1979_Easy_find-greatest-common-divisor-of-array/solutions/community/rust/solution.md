# rust solution

**Author:** Sanzenin_Aria
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/3129043/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/3129043/)

---

```
impl Solution {
    pub fn find_gcd(nums: Vec<i32>) -> i32 {
        fn gcd(x: i32, y: i32) -> i32{
            match x == 0{
                true => y,
                false => gcd(y%x, x),
            }
        };

        gcd(*nums.iter().max().unwrap(), *nums.iter().min().unwrap())
    }
}
```