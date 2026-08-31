# Rust Segment Tree (Slow)

**Author:** S_T_S
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-frequency-queries/solutions/4214202/](https://leetcode.com/problems/range-frequency-queries/solutions/4214202/)

---

Using a segment tree is suboptimal for this problem because the monoidal combination operation (```combine```) needs to do a lot of work.

If anybody knows a nice way (avoiding unnecessary cloning) to get rid of the ```split_at_mut```s please leave a comment.

# Code
```
use std::collections::*;

struct ST<T, F> where F : Fn(&mut T, &T) {
    data : Vec<T>,
    combine : F,
    neutral : T,
}

impl<T : Clone, F> ST<T, F> where F : Fn(&mut T, &T) {

    fn from_vec(s : Vec<T>, combine : F, neutral : T) -> Self {
        let n = s.len();
        let mut data = VecDeque::from(s);
        for i in (0..n) {
            data.push_front(neutral.clone());
        }
        let mut data = Vec::from(data);
        for i in (1..n).rev() {
            let left  = 2 * i;
            let right = 2 * i + 1;
            let (s1, s2) = data.split_at_mut(left);
            combine(&mut s1[i], &s2[0]);
            let (s1, s2) = data.split_at_mut(right);
            combine(&mut s1[i], &s2[0]);
        }
        Self { data, combine, neutral, }
    }

    fn len(&self) -> usize {
        self.data.len() / 2
    }

    fn sum(&self, mut a : usize, mut b : usize) -> T {
        a += self.len();
        b += self.len();
        // split sum into left and right sum so the monoid doesn't have to
        // be commutative (in our case it actually is, so this code could be made faster/simpler)
        let mut leftsum = self.neutral.clone();
        let mut rightsum = self.neutral.clone();
        while a <= b {
            if a % 2 == 1 {
                (self.combine)(&mut leftsum, &self.data[a]);
                a += 1;
            }
            if b % 2 == 0 {
                let mut rightdata = self.data[b].clone();
                (self.combine)(&mut rightdata, &rightsum);
                rightsum = rightdata;
                b -= 1;
            }
            a /= 2;
            b /= 2;
        }
        (self.combine)(&mut leftsum, &rightsum);
        return leftsum;
    }

}

type T = HashMap<i32, i32>;

fn combine(left : &mut HashMap<i32, i32>, right : &HashMap<i32, i32>) {
    for (k, v) in right.iter() {
        *left.entry(*k).or_insert(0) += *v;
    }
}

struct RangeFreqQuery {
    st : ST<T, fn(&mut T, &T)>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RangeFreqQuery {

    fn new(arr: Vec<i32>) -> Self {
        let combine : fn(&mut T, &T) = combine;
        let n = arr.len();
        let mut v = vec![HashMap::new(); n];
        for (m, v) in v.iter_mut().zip(arr) {
            m.insert(v, 1);
        }
        RangeFreqQuery { st : ST::from_vec(v, combine, HashMap::new()), }
    }
    
    fn query(&self, left: i32, right: i32, value: i32) -> i32 {
        let m = self.st.sum(left as usize, right as usize);
        *m.get(&value).unwrap_or(&0)
    }
}

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * let obj = RangeFreqQuery::new(arr);
 * let ret_1: i32 = obj.query(left, right, value);
 */
```