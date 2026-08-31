# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 53
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/2768872/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/2768872/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.

---

<iframe src="https://leetcode.com/playground/aFX68kxW/shared" frameBorder="0" width="100%" height="500"></iframe>

For most BFS problems, you should see the following pattern.

<iframe src="https://leetcode.com/playground/Sb9vuTRo/shared" frameBorder="0" width="100%" height="500"></iframe>

Another nice solution from @martin0327. Instead of actual mutating, we can check the difference between the current gene string and those in `bank`. Push the target one in `bank` to the queue if they are different by 1 character and increase the distance by 1.

```
class Solution {
public:
  int minMutation(string start, string end, vector<string>& b) {
    map<string,int> dist;
    dist[start] = 0;
    queue<string> q;
    q.push(start);
    while (q.size()) {
      auto u = q.front(); q.pop();
      for (auto v : b) {
        if (dist.count(v)) continue;
        int cnt = 0;
        for (int i = 0; i < 8; i++) {
          if (u[i] != v[i]) cnt++;
        }
        if (cnt == 1) {
          dist[v] = dist[u] + 1;
          q.push(v);
        }
      }
    }
    if (dist.count(end)) return dist[end];
    else return -1;
  }
}; 
```