# Rust | (0ms, 2.1 MB)

**Author:** RBird111
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3710293/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3710293/)

---

# Code
```rust
impl Solution {
    pub fn maximum_requests(n: i32, requests: Vec<Vec<i32>>) -> i32 {
        let mut answer = 0;
        let mut indegree = vec![0; n as usize];
        Self::dfs(0, &requests, &mut indegree, 0, 0, &mut answer);

        answer
    }

    fn dfs(
        idx: usize,
        requests: &Vec<Vec<i32>>,
        indegree: &mut Vec<i32>,
        one_count: i32,
        approved: i32,
        answer: &mut i32,
    ) {
        if requests.len() - idx + approved as usize <= *answer as usize {
            return;
        }

        if idx == requests.len() {
            if one_count == 0 {
                *answer = (*answer).max(approved);
            }
            return;
        }

        let from = requests[idx][0];
        let to = requests[idx][1];

        if from == to {
            Self::dfs(idx + 1, requests, indegree, one_count, approved + 1, answer);
            return;
        }

        indegree[from as usize] -= 1;
        indegree[to as usize] += 1;

        let mut new_one_count = one_count;
        new_one_count += match indegree[from as usize] {
            -1 => 1,
             0 => -1,
             _ => 0,
        };
        new_one_count += match indegree[to as usize] {
            1 => 1,
            0 => -1,
            _ => 0,
        };

        Self::dfs(
            idx + 1,
            requests,
            indegree,
            new_one_count,
            approved + 1,
            answer,
        );

        indegree[from as usize] += 1;
        indegree[to as usize] -= 1;

        Self::dfs(idx + 1, requests, indegree, one_count, approved, answer);
    }
}

```