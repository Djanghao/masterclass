# Rust | Lazy Solution

**Author:** erfansafari111
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/2503881/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/2503881/)

---

```
impl Solution {
    pub fn find_rotation(mut mat: Vec<Vec<i32>>, target: Vec<Vec<i32>>) -> bool {
        for i in 0..4 {
            Self::rotate(&mut mat);
            if mat == target {
                return true;
            }
        }
        false
    }
    
    pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
        matrix.reverse();
        for i in 0..matrix.len() {
            for j in 0..i {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
}
```