# Call rng once per flip

**Author:** bryceat
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-flip-matrix/solutions/3270222/](https://leetcode.com/problems/random-flip-matrix/solutions/3270222/)

---

# Intuition
We could make a giant vec of all of the coordinate pairs in the matrix.  Then when ever we flip one move it to the back and next time make sure we call an index from a range that is smaller by one (we also need to move the one that is now out of range back into range).

The trick is we only need to track the indexes we changed. 

# Code
```
use rand::Rng;
use std::collections::HashMap;

struct Solution {
    v: HashMap<usize,usize>,
    n: usize,
    m: usize,
    tot: usize
}

impl Solution {

    fn new(m: i32, n: i32) -> Self {
        Self{v:HashMap::new(), n: n as usize, m: m as usize, tot: (m * n) as usize}
    }
    
    fn flip(&mut self) -> Vec<i32> {
        let mut rng = rand::thread_rng();
        let x = rng.gen_range(0,self.tot);
        let y = *self.v.get(&x).unwrap_or(&x);
        self.tot -= 1;
        let z = *self.v.get(&self.tot).unwrap_or(&self.tot);
        self.v.insert(x,z);
        self.v.insert(self.tot,y);
        vec![(y % self.m) as i32, (y / self.m) as i32]
    }
    
    fn reset(&mut self) {
        self.tot = self.m * self.n;
    }
}
```