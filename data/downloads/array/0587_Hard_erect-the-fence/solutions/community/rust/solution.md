# [rust] Monotone Chain

**Author:** bryceat
**Votes:** 10
**Link:** [https://leetcode.com/problems/erect-the-fence/solutions/2828945/](https://leetcode.com/problems/erect-the-fence/solutions/2828945/)

---


```
impl Solution {
    pub fn outer_trees(mut trees: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        fn orientation(p: &Vec<i32>, q: &Vec<i32>, r: &Vec<i32>) -> bool {
            (q[0]-p[0])*(r[1]-q[1])-(q[1]-p[1])*(r[0]-q[0]) > 0
        }
        trees.sort_unstable();
        let mut l2r = Vec::with_capacity(trees.len());
        for v in trees.iter() {
            l2r.push((*v).clone());
            while l2r.len() >= 3 && orientation(&l2r[l2r.len() - 3],&l2r[l2r.len() - 2],&l2r[l2r.len() - 1]) {
                l2r.remove(l2r.len() - 2);
            }
        }
        trees.reverse();
        let mut r2l = Vec::with_capacity(trees.len());
        for v in trees.iter() {
            r2l.push((*v).clone());
            while r2l.len() >= 3 && orientation(&r2l[r2l.len() - 3],&r2l[r2l.len() - 2],&r2l[r2l.len() - 1]) {
                r2l.remove(r2l.len() - 2);
            }
        }
        let mut ans = l2r.into_iter().chain(r2l.into_iter()).collect::<Vec<Vec<i32>>>();
        ans.sort_unstable();
        ans.dedup();
        ans
    }
}
```