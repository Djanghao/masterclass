# rust: sort, then greedy

**Author:** bunnycode
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/4907111/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/4907111/)

---

# Code
```
impl Solution {
    pub fn max_number_of_apples(mut weight: Vec<i32>) -> i32 {
        let mut can_carry: i32 = 5000;
        let mut res: i32 = 0;

        weight.sort();
        for w in weight {
            if w > can_carry { return res; }

            can_carry -= w;
            res += 1;
        }

        res
    }
}
```