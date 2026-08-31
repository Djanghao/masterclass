# Rust Sort & HashMap O(N * (Log N +  Q))

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-nodes/solutions/2618164/](https://leetcode.com/problems/count-pairs-of-nodes/solutions/2618164/)

---

~~~
use std::collections::HashMap;

impl Solution {
    pub fn count_pairs(n: i32, edges: Vec<Vec<i32>>, queries: Vec<i32>) -> Vec<i32> {
        let n = n as usize;
        let mut degree = vec![0; n];
        let mut mp = HashMap::<(usize, usize), i32>::new();
        
        for e in edges {
            let (u, v) = (e[0].min(e[1]) as usize - 1, e[0].max(e[1]) as usize - 1);
            degree[u] += 1;
            degree[v] += 1;
            *mp.entry((u, v)).or_default() += 1;
        }
        
        let mut data = degree.clone();
        let mut ret = vec![];
        
        data.sort();
        for q in queries {
            let (mut temp, mut j) = (0, n);
            
			// this double loop runs in O(n)
            for i in 0..n {
                while j > 0 && data[i] + data[j - 1] > q { j -= 1; }
                temp += (n - j) as i32;
				
				// there are no edges connecting (i + 1)th node to itself
                if data[i] + data[i] > q { temp -= 1; } 
            }
			
			// in the above loop, each edge was counted twice
            temp /= 2;
            
            for (key, val) in &mp {
			    // 1) val is the # of edges connecting nodes key.0 + 1 & key.1 + 1
				// 2) need to further update the count to see if the pair is a valid entry
                if degree[key.0] + degree[key.1] > q && degree[key.0] + degree[key.1] - val <= q { temp -= 1; }
            }
            
            ret.push(temp);
        } 
        
        ret
    }
}
~~~