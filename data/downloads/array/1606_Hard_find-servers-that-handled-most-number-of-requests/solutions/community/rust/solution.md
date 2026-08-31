# Rust Binary Heap and BTreeSet

**Author:** michielbaird
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/942408/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/942408/)

---

I use a BTreeSet to keep track of the  of the available servers and and a priority queue to keep track of the assigned requests. 

```
use std::cmp::Reverse;
use std::collections::BinaryHeap;
use std::collections::BTreeSet;

impl Solution {
    pub fn busiest_servers(k: i32, arrival: Vec<i32>, load: Vec<i32>) -> Vec<i32> {
        let k = k as usize;
        let mut servers = BTreeSet::new();
        for i in 0..k {
            servers.insert(i);
        }
        
        let mut activeRequests: BinaryHeap<Reverse<(i32, usize)>> = BinaryHeap::new();
        let mut iterator = arrival.iter().zip(load.iter()).peekable();
        let mut requests = vec![0; k];
        let mut i = 0;
        
        while let Some((&t2, &l)) = iterator.peek() {
            if activeRequests.peek().is_none() || (activeRequests.peek().unwrap().0).0 > t2 {
                let (time, load) = iterator.next().unwrap();
                
                if servers.len() > 0 {
                    let s = if let Some(server) = servers.range(i..).next() {
                        *server
                    } else {
                        *servers.range(..).next().unwrap()
                    };
                    servers.remove(&s);
                    requests[s] += 1;
                    activeRequests.push(Reverse((time+load, s)));
                }
                i += 1;
                i %= k;
            } else {
                let Reverse((_, server)) = activeRequests.pop().unwrap();
                servers.insert(server);
            }
        }

        let maxR = *requests.iter().max().unwrap();
        requests.iter().enumerate().filter(|x| *x.1 == maxR).map(|x|x.0 as i32).collect()
    }
}
```