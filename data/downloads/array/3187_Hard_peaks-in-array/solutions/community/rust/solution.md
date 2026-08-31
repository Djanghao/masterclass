# Fenwick trees

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/peaks-in-array/solutions/5622088/](https://leetcode.com/problems/peaks-in-array/solutions/5622088/)

---

```
#[derive(Debug)]
struct Fenwick {
    x: Vec<i32>,
}

impl Fenwick {
    fn new(n: usize) -> Self {
        Fenwick { x: vec![0; n] }
    }
    fn update(&mut self, i: usize, value: i32) {
        let mut i = i;
        while i < self.x.len() {
            self.x[i] += value;
            i |= i + 1;
        }
    }
    fn cumsum(&self, i: usize) -> i32 {
        let mut i = i;
        let mut r = 0;
        loop {
            r += self.x[i];
            i = i & (i + 1);
            if i == 0 {
                return r;
            }
            i -= 1
        }
    }
}

fn peaks(nums: &[i32]) -> Vec<i32> {
    let mut r = vec![0; nums.len()];
    for (i,w) in nums.windows(3).enumerate() {
        if w[0] < w[1] && w[1] > w[2] {
            r[i+1] = 1;
        }
    }
    r
}
impl Solution {
    pub fn count_of_peaks(nums: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let n = nums.len();
        let mut nums = nums.clone();
        let mut fenwick = Fenwick::new(n);
        let mut pp = peaks(&nums);
        for (i,x) in pp.iter().enumerate() {
            if *x == 1 {
                fenwick.update(i, *x)
            }
        }
        let mut r = vec![];

        for q in queries.into_iter() {
            match q[..] {
                [1, a, b] => if a + 1> b {r.push(0)} else {
                  r.push(fenwick.cumsum((b as usize).saturating_sub(1)) - if a > 0 {fenwick.cumsum(a  as usize )} else {0})       
                },
                [2, i, x] => {let i = i as usize;
                               nums[i] = x;
                                let a = i.saturating_sub(2);
                                let b = (i+2).min(n-1);
                                let npp = peaks(&nums[a..=b]);
                                for i in a+1..=b-1 {
                                    let v = npp[i-a];
                                    if pp[i] != v {
                                        fenwick.update(i, v-pp[i]);
                                        pp[i] = v;
                                    }
                                } 
                },
                _ => unreachable!()
            }
        }
        r
    }
}
```