# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/distant-barcodes/solutions/3037070/](https://leetcode.com/problems/distant-barcodes/solutions/3037070/)

---

# Code
```
impl Solution {
    pub fn rearrange_barcodes(barcodes: Vec<i32>) -> Vec<i32> {
        let mut barcodes = barcodes;
        let mut pos = 0;
        let mut m = std::collections::HashMap::new();
        let mut s = std::collections::BTreeSet::new();
        for n in barcodes.iter() {
            *m.entry(*n).or_insert(0) += 1;
        }
        for (k, v) in m.iter() {
            s.insert((v, k));
        }
        for (&v, &k) in s.iter().rev() {
            for _ in 0..v {
                if pos >= barcodes.len() {
                    pos = 1;
                }
                barcodes[pos] = k;
                pos += 2;
            }
        }
        barcodes
    }
}
```