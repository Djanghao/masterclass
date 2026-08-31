# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/3182146/](https://leetcode.com/problems/fancy-sequence/solutions/3182146/)

---

# Code
```
const MOD: i64 = 1_000_000_007;

struct Fancy {
    seq: Vec<i64>,
    increment: i64,
    mult: i64,
}

impl Fancy {
    fn new() -> Self {
        Fancy {
            seq: Vec::new(),
            increment: 0,
            mult: 1,
        }
    }

    fn append(&mut self, val: i32) {
        let v = (((MOD + val as i64 - self.increment) % MOD) * self.mod_pow(self.mult, MOD - 2)) % MOD;
        self.seq.push(v);
    }

    fn add_all(&mut self, inc: i32) {
        self.increment = (self.increment + inc as i64) % MOD;
    }

    fn mult_all(&mut self, m: i32) {
        let m = m as i64;
        self.mult = (self.mult * m % MOD) % MOD;
        self.increment = (self.increment * m % MOD) % MOD;
    }

    fn get_index(&self, idx: i32) -> i32 {
        let idx = idx as usize;
        if idx >= self.seq.len() {
            -1
        } else {
            let v = ((self.seq[idx] * self.mult) % MOD + self.increment) % MOD;
            v as _
        }
    }

    fn mod_pow(&self, x: i64, y: i64) -> i64 {
        let mut tot = 1;
        let mut p = x;
        let mut y = y;
        while y > 0 {
            if y & 1 == 1 {
                tot = (tot * p) % MOD;
            }
            p = (p * p) % MOD;
            y >>= 1;
        }
        tot
    }
}
```