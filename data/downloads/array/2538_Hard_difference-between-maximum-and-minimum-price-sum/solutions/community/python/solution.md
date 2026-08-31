# template for tree-based dp problems with edges inputs

**Author:** leetcode_dafu
**Votes:** 21
**Link:** [https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3052569/](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3052569/)

---

Learned this trick from @yk000123 (https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/discuss/2198125/Python-O(n2)-Iterate-two-edges-with-caching\uFF09

For tree-based dp problems that give you edges as inputs, below is the template

1. store edges into an adjancent list
2. define a dfs function with two key parameters (cur, prev) to control the direction we will move along an edge between cur and prev
3. within dfs(cur,prev), the recursion is to call t(nxt,cur) for nxt in adj[cur]-{prev}
4. we add memorization (@cache) so that each edge between cur and prev will only be visited twice: one from cur to prev, one from prev to cur
5. we call dfs(i,-1) for i in range(n). -1 denotes no prev for i, so i is the root.

        adj=collections.defaultdict(set)
        for i,j in edges:
            adj[i].add(j)
            adj[j].add(i)
                    
        @cache
        def dfs(cur,prev):    
            return price[cur]+max([dfs(nxt,cur) for nxt in adj[cur]-{prev}]+[0])

        return max(dfs(i,-1)-price[i] for i in range(n)) 


Using this template, we can solve all the following problems with minor edits.

https://leetcode.com/discuss/interview-question/2751188/Lucid-OA-new-grad-SWE

https://leetcode.com/discuss/interview-question/1463104/Media.net-or-OA-or-Minimum-cost-to-buy-oranges

https://leetcode.com/discuss/interview-question/2639890/Media.Net(Directi)-OA-On-campus-Questions-%3A)

https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/

https://leetcode.com/discuss/interview-question/2788156/OA-2022-or-Pythagorean-Triplets







