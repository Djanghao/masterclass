# [Rust]4ms very fast solution

**Author:** Yushi_Lu
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/510619/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/510619/)

---

First, I turn the `int32` based array to `int64` based array, since it will cause overflow for some test cases. 

Then, we can notice that, the maximum in the array is the sum of the previous array. Thus, we find the maximum, minux the rest, we can get the previous array. 

We repeat the process, until there is an element that is smaller or equal than 0, we return false, or the maximum of the array is 1, we return true.
```
impl Solution {
    pub fn is_possible(target: Vec<i32>) -> bool {
        let mut new_tar:Vec<i64> = Vec::new();
        for &i in target.iter() {
            new_tar.push(i as i64);
        }
        let mut sum: i64 = new_tar.iter().sum();
        let mut max_ind:usize = 0;
        loop {
            for i in 0..new_tar.len() {
                if new_tar[i] <= 0 {
                    return false;
                }
                if new_tar[i] > new_tar[max_ind] {
                    max_ind = i;
                }
            }
        
            if new_tar[max_ind] == 1 {
                break true;
            }
            let old_val = new_tar[max_ind] - (sum - new_tar[max_ind]);
            sum = (sum - new_tar[max_ind]) + old_val;
            new_tar[max_ind] = old_val;
        }
    }
}
```