# Rust easy solution

**Author:** williamcs
**Votes:** 3
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3187277/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3187277/)

---


```
impl Solution {
    pub fn add_to_array_form(num: Vec<i32>, k: i32) -> Vec<i32> {
        let mut k = k;
        let mut res = vec![];
        let mut j = num.len();
        let mut carry = 0;

        while j > 0 || k > 0 || carry > 0 {
            if j > 0 {
                carry += num[j - 1];
                j -= 1;
            }

            carry += k % 10;
            k /= 10;

            res.push(carry % 10);
            carry /= 10;
        }

        res.reverse();
        res
    }
}
```