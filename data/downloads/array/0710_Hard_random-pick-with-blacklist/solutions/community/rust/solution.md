# HashMap/HashSet solution, mapping blacklisted values to whitelisted ones

**Author:** a1h
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/4592869/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/4592869/)

---

# Idea
The idea is to avoid storing more than the blacklist, especially when $n$ is large and the length $b$ of the blacklist is comparatively small.
If you were to pick a random integer between $0$ and $n-1$ with uniform probability each integer would have probability $\\frac{1}{n}$ of being returned but $\\frac{b}{n}$ of these integers are blacklisted, so what you really want to do if pick a random integer that is between $0$ and $n-1$ but not in the blacklist with probabilty $\\frac{1}{n-b}$.
Suppose you generate a random number between $0$ and $n-b-1$. This interval might contain a number that is in the blacklist but for every number between $0$ and $n-b-1$ in the blacklist there is a number between $n-b$ and $n-1$ that is not blacklisted.
Therefore, you can map blacklisted numbers between $0$ and $n-b-1$ to whitelisted numbers between $n-b$ and $n$, pick a random number between $0$ and $n-b-1$ and return it if it is not in the blacklist or, if it is in the blacklist, return the whitelisted value that the blacklisted value is mapped to.

# Complexity
- Time complexity:
$O(n)$

- Space complexity:
$O(b)$

# Code
```
use rand::{Rng, thread_rng};
use rand::prelude::SliceRandom;
use rand::prelude::ThreadRng;
use std::collections::HashMap;
use std::collections::HashSet;
use std::iter::FromIterator;

struct Solution {
    blist:HashMap<i32,i32>,
    range:i32,
    rng:ThreadRng
}

/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Solution {

    fn new(n: i32, mut blacklist: Vec<i32>) -> Self {
        let blacklist_:HashSet<i32> = HashSet::from_iter(blacklist.clone());
        let mut blist:HashMap<i32,i32> = HashMap::new();
        let range:i32 = n - blacklist.len() as i32;
        let mut x:usize = 0;
        blacklist.sort();
        (range..n).for_each(|i| if !blacklist_.contains(&i) { blist.insert(blacklist[x],i); x += 1; });
        Self { 
            blist,
            range,
            rng: thread_rng()
        }
    }
    
    fn pick(&mut self) -> i32 {
        let r:i32 = self.rng.gen_range(0,self.range);
        if self.blist.contains_key(&r) { return self.blist[&r]} else { return r }
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * let obj = Solution::new(n, blacklist);
 * let ret_1: i32 = obj.pick();
 */
```