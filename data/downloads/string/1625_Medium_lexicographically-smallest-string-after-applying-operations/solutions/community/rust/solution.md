# Brute DFS with Vec<u32> representation for Strings

**Author:** PantomInach
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/4344471/](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/4344471/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Go through all possible strings with DFS. Track if a string already occured in the DFS and terminate branch if so. The strings are represented as Vec's of u32 for faster execution of operations a and b.

# Code
```
use std::collections::HashSet;

type SVec = Vec<u32>;

struct Results{
    occured: HashSet<SVec>,
}

impl Results {
    fn new() -> Results {
        Results { occured: HashSet::new() }
    }

    fn check_in(&mut self, s: &SVec) -> bool {
        !self.occured.insert(s.to_vec())
    }
}

fn apply_a(s: &SVec, a: i32) -> SVec {
    s.clone().iter().enumerate().map(|(i, x)| if i % 2 == 1 {((*x as i32 + a) % 10) as u32} else {*x}).collect()
}

fn apply_b(s: &SVec, b: i32) -> SVec {
    let mut new_s = s.clone();
    new_s.rotate_right(b as usize);
    new_s
}

fn recurs(results: &mut Results, s: SVec, a: i32, b: i32) {
    if !results.check_in(&s) {
        recurs(results, apply_a(&s, a), a, b);
        recurs(results, apply_b(&s, b), a, b);
    }
}

fn digits_to_string(ds: &Vec<u32>) -> String {
    ds.iter().map(|x| char::from_u32(48 + *x).unwrap()).collect()
}

impl Solution {
    pub fn find_lex_smallest_string(s: String, a: i32, b: i32) -> String {
        let mut res = Results::new();
        recurs(&mut res, s.chars().map(|c| c as u32 - '0' as u32).collect(), a, b);
        let x = res.occured.iter().map(|x| digits_to_string(x)).min().unwrap();
        let mut paded = "0".repeat(s.len() - x.len());
        paded.push_str(&x);
        paded
    }

}
```