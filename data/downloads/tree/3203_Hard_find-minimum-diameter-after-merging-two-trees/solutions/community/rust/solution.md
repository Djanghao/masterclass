# rust simple solution with explain

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/5397557/](https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/5397557/)

---

![image.png](./images/0.png)

# Intuition
Let distance of a node be the maximum distance of the node to any other node.

The answer is the maximum of three number.

1. The diameter of the first tree.
2. The diameter of the secons tree.
3. 1+the minimum distance of nodes in tree1+the minimum distance of nodes in tree2

So the key is to figure out the diameter and the minimum distance.

# Approach
I use two dfs to calculate these number.

Since it is a tree, any node can be the root. Just let 0 be the root.

The first dfs figure out the longest and second longest distance from this node to the leaf. The path to the longest is marked.

The second dfs calculate the two number passing this node. Note that we have three number here: the longest distance to the leaf, the second longest number to the leaf, the longest distance from parent. The distance is the maximum of these numbers, and the diameter is the sum of two largest. 

Take care what you want to pass to the children. If it is the path of the longest distance to the leaf, the situation is special.

# Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(n)$$

# Code
```
use std::cmp::{max, min};

impl Solution {
    pub fn minimum_diameter_after_merge(edges1: Vec<Vec<i32>>, edges2: Vec<Vec<i32>>) -> i32 {
        let res1=Self::process(&edges1);
        let res2=Self::process(&edges2);
        max(max(res1.0, res2.0), res1.1+res2.1+1)
    }

    // return (diameter, minimum distance)
    fn process(edges: &Vec<Vec<i32>>)->(i32, i32){
        let n=edges.len()+1;
        let mut e=vec![Vec::new(); n];
        for i in edges{
            let (a, b)=(i[0] as usize, i[1] as usize);
            e[a].push(b);
            e[b].push(a);
        }
        // to_leaf[i]=(longest distance to leaf, the path to logest distance, second longest distance to leaf)
        let mut to_leaf=vec![(0, 0, 0); n];
        Self::helper1(0, n, n, &e, &mut to_leaf);
        let mut res=(0, n as i32);
        Self::helper2(0, (n, 0), n, &e, &to_leaf, &mut res);
        res
    }

    fn helper1(i: usize, 
               from: usize, 
               n:usize, 
               e: &Vec<Vec<usize>>,
               to_leaf: &mut Vec<(i32, usize, i32)>)->i32{
        let mut tmp=(0, n, 0);
        for &j in &e[i]{
            if j==from{continue;}
            let t=Self::helper1(j, i, n, e, to_leaf)+1;
            if t>tmp.0{
                tmp.2=tmp.0;
                tmp.0=t;
                tmp.1=j;
            }else if t>tmp.2{
                tmp.2=t;
            }
        }
        to_leaf[i]=tmp;
        tmp.0
    }

    fn helper2(i: usize,
               from: (usize, i32),
               n: usize,
               e: &Vec<Vec<usize>>,
               to_leaf: &Vec<(i32, usize, i32)>,
               res: &mut (i32, i32)){
        res.0=max(res.0, max(to_leaf[i].0+from.1, to_leaf[i].0+to_leaf[i].2));
        res.1=min(res.1, max(to_leaf[i].0, from.1));
        for &j in &e[i]{
            if j==from.0{continue;}
            if j==to_leaf[i].1{
                Self::helper2(j, (i, max(to_leaf[i].2, from.1)+1), n, e, to_leaf, res);
            }else{
                Self::helper2(j, (i, max(to_leaf[i].0, from.1)+1), n, e, to_leaf, res);
            }
        }
    }
}
```