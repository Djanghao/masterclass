# Java | Bad description imo

**Author:** Student2091
**Votes:** 2
**Link:** [https://leetcode.com/problems/lonely-pixel-ii/solutions/1781699/](https://leetcode.com/problems/lonely-pixel-ii/solutions/1781699/)

---

I think the question is misleading. I read it 5 times and still did not understand what it wants and failed this testcase:

```
["W","B","B","W","W","B","W","W","W","(W)","W","B","B","W","W"]
["W","B","B","W","W","B","W","W","W","W","W","B","B","W","W"]
["W","W","W","W","W","B","B","B","W","B","W","W","W","W","B"]
["W","W","B","W","B","W","W","W","W","B","B","W","B","W","W"]
["W","B","B","W","W","B","W","W","W","W","W","B","B","W","W"]
["W","W","B","W","B","W","W","W","W","B","B","W","B","W","W"]
["W","W","B","W","B","W","W","W","W","B","B","W","B","W","W"]
["W","W","B","W","B","W","W","W","W","B","B","W","B","W","W"]
5
```

I () the column that I think fits the problem description but the answer is 0 instead of 5 like what I was expecting. 
I thought the question wants us to find the column that has `target` number of `B`s, and each of the row that has `B` has to also have the same number of `B`, but it is apparently not what the question wants.

Anyways, after skimming through various post titles on LeetCode discussion, I realize that the question wants the row to be **exactly the same**, not just having the same number of `B`...

So here is my solution to that: I guess there is a reason why this problem has 700 dowvotes and like 70 upvotes.

**Solution**:
```Java
class Solution {
    public int findBlackPixel(char[][] picture, int target) {
        int m = picture.length, n = picture[0].length;
        int[] row = new int[m];
        int[] hash = new int[m];
        int p = 31, mod = (int)1e9 + 7;
        Map<Integer, List<Integer>> col = new HashMap<>();
        for (int i = 0; i < m; i++){
            int h = 0;
            for (int j = 0; j < n; j++){
                h = (h * p + picture[i][j]) % mod;
                if (picture[i][j] == 'B'){
                    col.computeIfAbsent(j, o -> new ArrayList<>()).add(i);
                    row[i]++;
                }
            }
            hash[i] = h;
        }

        int ans = 0;
        for (int i = 0; i < m; i++){
            for (int j = 0; j < n; j++){
                if (picture[i][j] == 'B' && row[i] == target && col.get(j).size() == target){
                    int add = 1;
                    for (int v : col.get(j)){
                        if (hash[v] != hash[i])
                            add = 0;
                    }
                    ans += add;
                }
            }
        }

        return ans;
    }
}
```