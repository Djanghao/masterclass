# Rust Bit Mask

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2526357/](https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2526357/)

---

~~~
impl Solution {
    pub fn maximum_rows(mat: Vec<Vec<i32>>, cols: i32) -> i32 {
        let (m, n) = (mat.len(), mat[0].len());
        let sz = 1 << n;
        let mut flag = vec![0; n];
        for j in 0..n {
            for i in 0..m {
                if mat[i][j] == 1 { flag[j] = 1; }
            }
        }
        
        let mut ret = 0;
        for mask in 0..sz {
            let mut cnt = 0;
            let mut data = vec![0; n];
            for k in 0..n {
                if (mask & (1 << k)) == 0 { continue }
                data[k] = flag[k];
                cnt += 1;
            }
            if cnt != cols { continue }
            
            let mut temp = 0;
            for i in 0..m {
                let mut covered = true;
                for j in 0..n {
                    if mat[i][j] > data[j] { covered = false; }
                }
                if covered { temp += 1; }
            } 
            ret = ret.max(temp);
        }
        ret
    }
}
~~~