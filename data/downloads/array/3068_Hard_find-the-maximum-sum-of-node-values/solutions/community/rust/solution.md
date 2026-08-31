# rust simplest solution with explain

**Author:** sovlynn
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5176848/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5176848/)

---

# Intuition
Why I need edges? If you want to flip a and b, you can always find a path from a to b, and file all the path twice.

So you can filp as many time you want, just make sure the total flip time is even.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn maximum_value_sum(nums: Vec<i32>, k: i32, edges: Vec<Vec<i32>>) -> i64 {
        let k = k as i64;
        let mut res=0;
        let mut sac=std::i64::MAX;
        let mut count=0;
        for &i in &nums{
            let i = i as i64;
            let fi=i^k;
            if fi>i{
                res+=fi;
                count+=1;
                sac=std::cmp::min(sac, fi-i);
            }else{
                res+=i;
                sac=std::cmp::min(sac, i-fi);
            }
        }
        if count%2==1{
            res-sac
        }else{
            res
        }
    }
}
```