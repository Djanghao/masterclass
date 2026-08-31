# generate zebra pattern

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/transform-to-chessboard/solutions/5742216/](https://leetcode.com/problems/transform-to-chessboard/solutions/5742216/)

---

There is no interference between row an column operation. Hence, we need to count how many operations are needed to make the first row and the first column to zebra pattern.

In addition, we need to check whether the whole matrix follows the same pattern as prescribed by leading row and column.


```rust []
fn zebra(r: &Vec<i32>) -> Option<i32> {
    let n = r.len();
    let (k0, k1) = r.iter().fold((0,0), |(k0, k1),x| match x {
        0 => (k0+1,k1),
        _ => (k0, k1+1)
    });
    
    if k0 > k1 {
        let z = r.iter().step_by(2).filter(|x|**x!=0).count() as i32;
        return if k1 + 1 != k0 {None} else {Some(z)};
    }
    if k0 < k1 {
        let z = r.iter().step_by(2).filter(|x|**x!=1).count() as i32;
        return if k0 +1 != k1 {None} else {Some(z)}
    }

    let a = r.iter().step_by(2).filter(|x|**x!=r[0]).count();
    Some(a.min(n/2 - a) as _)
}

impl Solution {
    pub fn moves_to_chessboard(b: Vec<Vec<i32>>) -> i32 {
        let n = b.len();
        let row = b[0].clone();
        let col = (0..n).map(|i|b[i][0]).collect::<Vec<_>>();
        
        for i in 0..n  {
            for j in 0..n   {
                if b[i][j] == (1 + b[0][0] + row[j] + col[i]) % 2  {return -1}
            }
        }
        if let (Some(a), Some(b)) = (zebra(&row), zebra(&col)) {
            a+b
        } else {
            -1
        }
    }
}
```