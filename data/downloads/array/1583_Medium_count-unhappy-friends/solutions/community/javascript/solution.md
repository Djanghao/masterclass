# [Javascript] hashMap

**Author:** alanchanghsnu
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-unhappy-friends/solutions/843947/](https://leetcode.com/problems/count-unhappy-friends/solutions/843947/)

---

1. build the happyMap the record the rank of happiness
ex: 
Input: `n = 4`, preferences = `[[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]]`, pairs = `[[0, 1], [2, 3]]`
Output: 2
`p1 - p2 - rank`
`0 - 1 - 0`
`1 - 0 - 2`
`2 - 3 - 0`
`3 - 2 - 1`
`==> happyMap: [0, 2, 0, 1]`

2. Check each person. If there is one higher rank person who prefer to be partnered with him/her, `unhappy++`

```
var unhappyFriends = function(n, preferences, pairs) {
    let happyMap = new Array(n);
    for (let [i, j] of pairs) {
        happyMap[i] = preferences[i].indexOf(j);
        happyMap[j] = preferences[j].indexOf(i);
    }
    
    let unhappy = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < happyMap[i]; j++) {
            let partner = preferences[i][j];
            if (preferences[partner].indexOf(i) < happyMap[partner]) {
                unhappy++;
                break;
            }
        }
    }
    
    return unhappy;
};