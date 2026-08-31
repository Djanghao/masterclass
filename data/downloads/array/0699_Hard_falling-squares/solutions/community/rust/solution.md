# simplfy check every previous square, O(n^2)

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/falling-squares/solutions/5522617/](https://leetcode.com/problems/falling-squares/solutions/5522617/)

---


```
impl Solution {
    pub fn falling_squares(xs: Vec<Vec<i32>>) -> Vec<i32> {
        let n = xs.len();
        let mut h = vec![0; n];
        let mut hh = 0; 
        let mut r = Vec::with_capacity(n);
        hh = 0;
        for i in 0..n {
            let x = xs[i][0];
            let s = xs[i][1];
            for j in 0..i {
                let y = xs[j][0];
                let z = xs[j][1];
                if (y <= x  && x < y + z)  ||  (y < x + s  && x + s <= y + z) 
                |  (x <= y  && y < x + s)  ||  (x < y + z  && y + z <= x + s) {
                    h[i] = h[i].max(h[j])
                }
            }
            h[i] += s;
            hh = hh.max(h[i]);
            r.push(hh)
        }
        r
    }
}
```