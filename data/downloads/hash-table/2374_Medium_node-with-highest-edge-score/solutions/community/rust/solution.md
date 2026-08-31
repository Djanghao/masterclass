# Rust solution, beats 100%

**Author:** benkol003
**Votes:** 0
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/5431117/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/5431117/)

---


# Code
```
    impl Solution {

        
        pub fn edge_score(edges: Vec<i32>) -> i32 {
            let mut node_score = vec![0usize; edges.len()];

            for (i,&vv) in edges.iter().enumerate(){
                let v = vv as usize;
                node_score[v]+=i;
            }
            let mut max_i = 0usize;
            let mut max_v=0usize;
            for (i,&v) in node_score.iter().enumerate(){
                if v>max_v {
                    max_v=v;
                    max_i=i;
                }
            }
            return max_i as i32;
        }
    }
```