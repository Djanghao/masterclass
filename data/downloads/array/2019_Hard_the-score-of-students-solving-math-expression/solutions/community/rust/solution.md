# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/3246165/](https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/3246165/)

---

# Code
```
impl Solution {
    pub fn score_of_students(s: String, answers: Vec<i32>) -> i32 {
        use std::collections::HashSet;
        fn dfs(s: &[u8], st: usize, fin: usize, memo: &mut Vec<Vec<HashSet<i32>>>) {
            if memo[st][fin].is_empty() {
                let mut st_fin_set = HashSet::new();
                if fin - st == 1 {
                    st_fin_set.insert((s[st] - b'0') as i32);
                }
                for i in (st + 1..fin).step_by(2) {
                    dfs(s, st, i, memo);
                    dfs(s, i + 1, fin, memo);
                    for &n1 in &memo[st][i] {
                        for &n2 in &memo[i + 1][fin] {
                            let n = if s[i] == b'*' { n1 * n2 } else { n1 + n2 };
                            if n <= 1000 {
                                st_fin_set.insert(n);
                            }
                        }
                    }
                }
                memo[st][fin] = st_fin_set;
            }
        }

        let s = s.as_bytes();
        let mut memo = vec![vec![HashSet::new(); 32]; 32];
        let mut correct = 0;
        let mut j = 0;
        let s_len = s.len();
        for i in (1..=s_len).step_by(2) {
            if i == s_len || s[i] == b'+' {
                let mut mul = 1;
                while j < i {
                    mul *= (s[j] - b'0') as i32;
                    j += 2;
                }
                correct += mul;
            }
        }
        dfs(s, 0, s_len, &mut memo);
        let f = |&ans: &i32| -> i32 {
            if ans == correct {
                5
            } else if memo[0][s_len].contains(&ans) {
                2
            } else {
                0
            }
        };
        answers.iter().map(f).sum()
    }
}
```