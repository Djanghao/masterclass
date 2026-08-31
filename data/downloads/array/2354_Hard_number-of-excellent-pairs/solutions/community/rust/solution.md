# rust 19ms solution with explain

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-excellent-pairs/solutions/5010121/](https://leetcode.com/problems/number-of-excellent-pairs/solutions/5010121/)

---

![image.png](./images/0.png)

# Approach
The question does't rely on the order of the number, or it's frequency. In fact, the multiple appearance of a number will cause a trouble. The first step would be change the vec into a set.

Read this truth table.

| A | B |A&B + A\\|B|
|:-:|:-:|:--------:|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|2|

So the sum required in the question is the sum of (how many 1 the binary of the the number have), or popcount, of the two number.

The question becomes counting how many (a, b) so that popcount(a)+popcount(b)>=k. This is an easy-level question.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::HashSet;
impl Solution {
    pub fn count_excellent_pairs(nums: Vec<i32>, k: i32) -> i64 {
        let k=k as usize;
        let s:HashSet<i32>=HashSet::from_iter(nums.iter().cloned());
        let mut n=[0i64; 33];
        let mut m=0;
        for i in s{
            let t=i.count_ones() as usize;
            n[t]+=1;
            if t>m{m=t;}
        }
        let mut res=0;
        for i in 0..=m{
            for j in 0..=m{
                if i+j>=k{
                    res+=n[i]*n[j];
                }
            }
        }
        res
    }
}
```