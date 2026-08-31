# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/3254147/](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/3254147/)

---

# Code
```
impl Solution {
    pub fn maximum_invitations(favorite: Vec<i32>) -> i32 {
        let n = favorite.len();
        let mut visited = vec![false; n];
        let mut to_leaf = vec![0; n];
        let mut in_degree = vec![0; n];

        for &item in favorite.iter() {
            in_degree[item as usize] += 1;
        }
        let mut q = std::collections::VecDeque::new();
        for (i, &item) in in_degree.iter().enumerate() {
            if item == 0 {
                q.push_back(i);
                visited[i] = true;
            }
        }

        while !q.is_empty() {
            let el = q.pop_front().unwrap();
            let j = favorite[el];
            to_leaf[j as usize] = to_leaf[j as usize].max(1 + to_leaf[el]);
            in_degree[j as usize] -= 1;
            if in_degree[j as usize] == 0 {
                visited[j as usize] = true;
                q.push_back(j as usize);
            }
        }

        let (mut res, mut res2) = (0, 0);
        for i in 0..n {
            if !visited[i] {
                let mut len = 0;
                let mut j = i;
                while !visited[j] {
                    visited[j] = true;
                    len += 1;
                    j = favorite[j] as usize;
                }
                if len == 2 {
                    res2 += 2 + to_leaf[i] + to_leaf[favorite[i] as usize];
                } else {
                    res = res.max(len);
                }
            }
        }

        res.max(res2)
    }
}
```