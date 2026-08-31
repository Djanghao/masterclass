# Rust/Python sliding window faster than 100% with explanation.

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-zero-request-servers/solutions/3831392/](https://leetcode.com/problems/count-zero-request-servers/solutions/3831392/)

---

# Intuition
We will need to look at specific time intervals so it is beneficial to sort our `logs` according to time when they happen. Same for queries. So lets assume that both of them are sorted.

Now when we are looking at a particular query `q` we need to find all the `log_ids` which happened during the time `[q - x; q]`. As the logs are already sorted we can achieve this by maintaining a sliding window which will be described by two positions `p1, p2` where `p1` is the starting position in the interval and `p2` is the ending (positions are with respect to logs).

So when we see our `[q - x; q]` interval we need to grow our interval as much as possible (by increasing `p2` until `logs[p2][1] <= q`) and then by shrinking the interval as much as possible (by increasing `p1` until `logs[p1][1] < q - x`). 

While doing so we maintain the dictionary of servers used which maps server id to it counts (remembering to remove ids where count is zero). The result will be `n - len(servers)`.


# Complexity
Let $q$ be the size of queries, $l$ be the size of logs and $k = \\max(l, q)$, then

- Time complexity: $O(k \\log k)$
- Space complexity: $O(k)$

# Code


```Rust []
use std::collections::HashMap;

impl Solution {
  pub fn count_servers(n: i32, mut logs: Vec<Vec<i32>>, x: i32, queries: Vec<i32>) -> Vec<i32> {
    let mut queries_pos: Vec<_> = (0..queries.len()).collect();
    queries_pos.sort_unstable_by_key(|&i| queries[i]);
    logs.sort_unstable_by_key(|v| v[1]); 
    let (mut p1, mut p2) = (0, 0);
    let mut res = vec![0; queries.len()];

    let mut sliding_servers: HashMap<i32, i32> = HashMap::new();
    for pos in queries_pos {
      while p2 < logs.len() && logs[p2][1] <= queries[pos] {
        *sliding_servers.entry(logs[p2][0]).or_default() += 1;
        p2 += 1;
      }

      while p1 < logs.len() && logs[p1][1] < queries[pos] - x {
        *sliding_servers.entry(logs[p1][0]).or_default() -= 1;
        if *sliding_servers.get(&logs[p1][0]).unwrap() == 0 {
          sliding_servers.remove(&logs[p1][0]);
        }
        p1 += 1;
      }

      res[pos] = n - sliding_servers.len() as i32;
    }

    return res;
  }
}
```
```python []
from collections import defaultdict

class Solution:
  def countServers(self, n: int, logs: List[List[int]], x: int, queries: List[int]) -> List[int]:
    logs.sort(key=lambda x: x[1])  # (id, time)
    queries = sorted([(q, i) for i, q in enumerate(queries)])
    p1, p2, res = 0, 0, [0] * len(queries)
    sliding_servers = defaultdict(int)

    for q, pos in queries:
      while p2 < len(logs) and logs[p2][1] <= q:
        sliding_servers[logs[p2][0]] += 1
        p2 += 1
      
      while p1 < len(logs) and logs[p1][1] < q - x:
        if sliding_servers[logs[p1][0]] == 1:
          del sliding_servers[logs[p1][0]]
        else:
          sliding_servers[logs[p1][0]] -= 1
        p1 += 1
      
      res[pos] = n - len(sliding_servers)

    return res
```
