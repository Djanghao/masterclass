# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/3243007/](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/3243007/)

---

# Code
```
impl Solution {
    pub fn smallest_missing_value_subtree(parents: Vec<i32>, nums: Vec<i32>) -> Vec<i32> {
        fn dfs(i: usize, children: &Vec<Vec<usize>>, seen: &mut Vec<bool>, nums: &Vec<i32>) {
            if seen[nums[i] as usize] {
                return;
            }
            for &j in &children[i] {
                dfs(j, children, seen, nums);
            }
            seen[nums[i] as usize] = true;
        }
    
        let n = parents.len();
        let mut res = vec![1; n];
        let mut seen = vec![false; 100010];
        let it = nums.iter().position(|&x| x == 1);
        if it.is_none() {
            return res;
        }
        let mut children = vec![vec![]; n];
        for i in 1..n {
            children[parents[i] as usize].push(i);
        }
        let mut i = it.unwrap() as i32;
        let mut miss = 1;
        while i > -1 {
            dfs(i as usize, &children, &mut seen, &nums);
            while seen[miss as usize] {
                miss += 1;
            }
            res[i as usize] = miss;
            i = parents[i as usize];
        }
        res
    }
}
```