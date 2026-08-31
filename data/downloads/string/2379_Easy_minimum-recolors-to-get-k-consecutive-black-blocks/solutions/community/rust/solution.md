# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2458274/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2458274/)

---

```
impl Solution {
    pub fn minimum_recolors(blocks: String, k: i32) -> i32 {
        let idx = |b: u8| -> usize { (b > b'B') as _ };
        let mut counter = [0; 2];
        let mut res = i32::MAX;
        let bb = blocks.as_bytes();
        let ku = k as usize;

        for (i, w) in bb.windows(ku).enumerate() {
            match i > 0 {
                true => {
                    counter[idx(w[ku - 1])] += 1;
                    counter[idx(bb[i - 1])] -= 1;
                }
                false => w.iter().for_each(|&b| counter[idx(b)] += 1),
            };

            match counter[1] {
                0 => return 0,
                n => res = res.min(n),
            }
        }
        res
    }
}
```