# dfs solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5992355/](https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5992355/)

---

# Intuition
Just use polynomial rolling hash, which is easy to calculate and add.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```rust []
impl Solution {
    const MOD:usize=4294967291;

    pub fn find_answer(parent: Vec<i32>, s: String) -> Vec<bool> {
        let n=parent.len();

        let mut bases=vec![0usize; n];
        bases[0]=1;
        for i in 1..n{
            bases[i]=(bases[i-1]*29)%Self::MOD;
        }

        let s=s.as_bytes();
        let mut tree=vec![Vec::new(); n];
        for (i, &n) in parent.iter().enumerate(){
            if n>=0{
                tree[n as usize].push(i);
            }
        }
        let mut hashs=vec![(0usize, 0usize, 0usize); n];
        Self::dfs(0, &tree, &bases, &mut hashs, s);
        hashs.iter().map(|h|h.0==h.1).collect()
    }

    fn dfs(
        i: usize,
        tree: &Vec<Vec<usize>>,
        bases: &Vec<usize>,
        hashs: &mut Vec<(usize, usize, usize)>,
        s: &[u8]
    ){
        let b=(s[i]-96) as usize;
        if tree[i].len()==0{
            hashs[i]=(b, b, 1);
        }else{
            for &j in &tree[i]{
                Self::dfs(j, tree, bases, hashs, s);
            }

            let mut f=0;
            let mut c=0;
            for &j in &tree[i]{
                f=(f+hashs[j].0*bases[c])%Self::MOD;
                c+=hashs[j].2;
            }
            f=(f+b*bases[c])%Self::MOD;
            hashs[i].2=c+1;
            hashs[i].0=f;
            f=b;
            c=1;
            for &j in tree[i].iter().rev(){
                f=(f+hashs[j].1*bases[c])%Self::MOD;
                c+=hashs[j].2;
            }
            hashs[i].1=f;
        }
    }
}
```