# low level code

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-turbulent-subarray/solutions/5731007/](https://leetcode.com/problems/longest-turbulent-subarray/solutions/5731007/)

---


```rust []
impl Solution {
    pub fn max_turbulence_size(arr: Vec<i32>) -> i32 {

        if arr.len() < 2 {
            return arr.len() as i32
        }
        
        let mut best = 1;
        let mut i = 0;
        let mut j = 0;
        while i < arr.len()-1 {
            if arr[i+1] != arr[i] {best = best.max(2)}
            let mut j = i + 1;
            while j < arr.len() - 1 {
                j += 1;
                
                let [a,b,c] = arr[j-2..=j] else {panic!()};
                if (a < b && b > c) || ( a > b && b < c)  {
                    best = best.max(j-i+1)
                } else {
                    i = j - 2;
                    break
                }
            }
            i += 1
        }
        best as _
    }
}
```