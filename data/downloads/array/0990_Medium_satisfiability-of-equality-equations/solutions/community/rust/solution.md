# Rust | 0ms 100% | Clean Union-Find Implementation

**Author:** erfansafari111
**Votes:** 1
**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2626341/](https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2626341/)

---

```
pub struct Union {
    pub conns: Vec<usize>
}

impl Union {
    pub fn new(size: usize) -> Self {
        let mut conns = vec![0; size];
        for i in 0..conns.len() {
            conns[i] = i;
        }
        Self {
            conns: conns,
        }
    }
    
    pub fn union(&mut self, a: usize, b: usize) {
        let temp = self.conns[a];
        for i in 0..self.conns.len() {
            if self.conns[i] == temp {
                self.conns[i] = self.conns[b];
            }
        }
    }
    
    pub fn find(&mut self, a: usize, b: usize) -> bool {
        self.conns[a] == self.conns[b]
    }
}

impl Solution {
    pub fn equations_possible(equations: Vec<String>) -> bool {
        let index = |ch: u8| (ch - 'a' as u8) as usize;
        let mut conns = Union::new(26);
        
        for i in 0..equations.len() {
            let chars = equations[i].as_bytes();
            if chars[1] == '=' as u8 {
                let (a, b) = (index(chars[0]), index(chars[3]));
                conns.union(a, b);
            }
        }
        
        for i in 0..equations.len() {
            let chars = equations[i].as_bytes();
            let (a, b) = (index(chars[0]), index(chars[3]));
            if chars[1] == '!' as u8 && conns.find(a, b) {
                return false;
            }
        }
        true
    }
}
```