# JavaScript O(N) Hash Table

**Author:** hon9g
**Votes:** 10
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/525172/](https://leetcode.com/problems/rank-teams-by-votes/solutions/525172/)

---

- `N = the length of votes`
- `C = the length of votes[i]. it is between 1 and 26.`
- Time Complexity: **O(CN + C ** 2) = O(N)**
- Space Complexity: **O(CN) = O(N)**

```JavaScript
/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    if (votes.length === 1) return votes[0];
    const score = new Map(votes[0].split('').map(c => [c, new Array(votes[0].length).fill(0)]));
    for (s of votes) {
        for (let i = 0; i < s.length; i++) {
            score.get(s[i])[i]++;
        }
    }
    return votes[0].split('').sort((a,b) => {
        for (let i = 0; i < votes[0].length; i++) {
            if (score.get(a)[i] > score.get(b)[i]) return -1;
            if (score.get(a)[i] < score.get(b)[i]) return 1;
        }
        return a < b ? -1 : 1;
    }).join('');
};
```