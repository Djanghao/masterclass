# Union-Find

**Author:** S_T_S
**Votes:** 0
**Link:** [https://leetcode.com/problems/process-restricted-friend-requests/solutions/6045533/](https://leetcode.com/problems/process-restricted-friend-requests/solutions/6045533/)

---

# Code
```rust []
use std::cell::Cell;

#[derive(Debug)]
struct Node {
	parent : Cell<u32>, // using Cell so find only takes a &self and not a &mut self (not that it matters much, its just nicer)
    size : i32,
}

#[derive(Debug)]
struct UF {
    data : Vec<Node>,
}

impl UF {
    fn new(n : usize) -> Self {
        assert!(n <= u32::MAX as usize);
        let mut data = Vec::with_capacity(n);
        for i in 0..n {
            data.push(Node { parent: Cell::new(i as u32), size: 1, });
        }
        return Self { data, };
    }
    fn find<U : TryInto<usize>>(&self, i : U) -> usize {
        let i : usize = i.try_into().unwrap_or(usize::MAX); // :-)
        fn find_mono(this : &UF, i : usize) -> usize {
            if this.data[i].parent.get() as usize == i {
                return i;
            }
            let sub = this.find(this.data[i].parent.get() as usize);
            this.data[i].parent.set(sub as u32);
            return sub;
        }
        find_mono(self, i)
    }
    fn union<U1 : TryInto<usize>, U2 : TryInto<usize>>(&mut self, i : U1, j : U2) {
        let i : usize = i.try_into().unwrap_or(usize::MAX); // :-)
        let j : usize = j.try_into().unwrap_or(usize::MAX); // :-)
        fn union_mono(this : &mut UF, i : usize, j : usize) {
            let sub1 = this.find(i);
            let sub2 = this.find(j);
            if sub1 == sub2 {
                return;
            }
            let sz1 = this.data[sub1].size;
            let sz2 = this.data[sub2].size;
            if sz1 < sz2 {
                this.data[sub1].parent.set(sub2 as u32);
                this.data[sub2].size += sz1;
            } else {
                this.data[sub2].parent.set(sub1 as u32);
                this.data[sub1].size += sz2;
            }
        }
        union_mono(self, i, j)
    }
}

use std::cmp::*;
impl Solution {
    // O(n + |restrictions| * |requests| * alpha(n))
    pub fn friend_requests(n: i32, restrictions: Vec<Vec<i32>>, requests: Vec<Vec<i32>>) -> Vec<bool> {
        let mut uf = UF::new(n as usize);
        let mut ans = Vec::with_capacity(requests.len());
        for request in requests {
            let i1 = uf.find(request[0]);
            let i2 = uf.find(request[1]);
            let (i1, i2) = (min(i1, i2), max(i1, i2));
            let mut conflict = false;
            for restriction in restrictions.iter() {
                let r1 = uf.find(restriction[0]);
                let r2 = uf.find(restriction[1]);
                let (r1, r2) = (min(r1, r2), max(r1, r2));
                if i1 == r1 && i2 == r2 {
                    conflict = true;
                    break;
                }
            }
            if conflict {
                ans.push(false);
            } else {
                uf.union(i1, i2);
                ans.push(true);
            }
        }
        return ans;
    }
}
```