# Rust Segment Tree

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/2358263/](https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/2358263/)

---

~~~
impl Solution {
    pub fn amount_painted(paint: Vec<Vec<i32>>) -> Vec<i32> {
        let mut n = 0usize;
        for p in &paint { n = n.max(p[1] as usize + 1); }
        
        let mut tree = vec![0; 4 * n];
        Self::build(1, 0, n - 1, &mut tree);
        
        let mut ret = vec![];
        for p in paint {
            ret.push(Self::find(1, 0, n - 1, p[0] as usize, p[1] as usize -1, &tree));
            Self::paint(1, 0, n - 1, p[0] as usize, p[1] as usize - 1, &mut tree);
        }
        
        ret
    }
    
    fn build(u: usize, left: usize, right: usize, tree: &mut Vec<i32>) {
        if left == right {
            tree[u] = 1;
            return;
        }
        
        let mid = left + (right - left) / 2;
        
        Self::build(2 * u, left, mid, tree);
        Self::build(2 * u + 1, mid + 1, right, tree);
        
        tree[u] = tree[2 * u] + tree[2 * u + 1];
    }
    
    fn find(u: usize, left: usize, right: usize, l: usize, r: usize, tree: &Vec<i32>) -> i32 {
        if left >= l && right <= r {
            return tree[u];
        }
        if left > r || right < l { return 0 }
        
        let mid = left + (right - left) / 2;
        let mut ret = 0;
        
        if tree[2 * u] > 0 { 
            ret += Self::find(2 * u, left, mid, l, r, tree); 
        }
        if tree[2 * u + 1 ] > 0  {
            ret += Self::find(2 * u + 1, mid + 1, right, l, r, tree); 
        }
        
        ret
    }
    
    fn paint(u: usize, left: usize, right: usize, l: usize, r: usize, tree: &mut Vec<i32>) {
        if left >= l && right <= r {
            tree[u] = 0;
            return
        }
        
        if left > r || right < l { return }
        
        let mid = left + (right - left) / 2;
        
        if  tree[2 * u] > 0 { 
            Self::paint(2 * u, left, mid, l, r, tree); 
        }
        if tree[2 * u + 1] > 0 {
            Self::paint(2 * u + 1, mid + 1, right, l, r, tree); 
        }
        
        tree[u] = tree[2 * u] + tree[2 * u + 1];
    }
}
~~~