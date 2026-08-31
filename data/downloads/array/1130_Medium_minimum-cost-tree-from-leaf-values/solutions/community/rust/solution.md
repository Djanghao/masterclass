# rust greedy

**Author:** zxcq544
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/1160769/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/1160769/)

---

rust greedy. copy of python 6 line solutions.
```
use std::cmp::min;
impl Solution {
    pub fn mct_from_leaf_values(mut arr: Vec<i32>) -> i32 {
        let n = arr.len();
        let mut A:Vec<i32> = vec![];
        A.push(std::i32::MAX);
        A.append(&mut arr);
        A.push(std::i32::MAX);
        let mut res = 0;        
        while A.len()>3{
            let min_index = min_index(&A);
            res+=min(A[min_index-1],A[min_index+1]) * A[min_index];
            A.remove(min_index);
        }
        return res;
    }
}
pub fn min_index(array: &Vec<i32>) -> usize {
    let mut i = 0;
    for (j, &value) in array.iter().enumerate() {
        if value < array[i] {
            i = j;
        }
    }
    return i;
}
```
            
        

