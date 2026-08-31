# Rust

**Author:** Mee_CI
**Votes:** 2
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/1584515/](https://leetcode.com/problems/duplicate-zeros/solutions/1584515/)

---

```
impl Solution {
    pub fn duplicate_zeros(arr: &mut Vec<i32>) {
        let mut i=0;
        while i < arr.len()-1{
            if arr[i] == 0{
                for j in (i+1..=arr.len()-1).rev(){
                    arr[j] = arr[j-1]
                }
                arr[i+1] = 0;
                i +=1;
            }
            i+=1
        }
    }
}
```