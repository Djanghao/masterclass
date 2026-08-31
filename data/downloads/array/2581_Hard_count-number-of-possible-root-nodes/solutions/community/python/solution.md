# short python template for tree based dp problems

**Author:** leetcode_dafu
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256072/](https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256072/)

---

if you dont know rerooting or do not want to write two dfs, you can try the template below. 

it is not always O(n). e.g. it is O(n^2) for LC 2538 in the worst case with star graph. But it seems enough for general interviews and contests here

	    adj, g =defaultdict(set), Counter(map(tuple,guesses))
        for i,j in edges:
            adj[i].add(j)
            adj[j].add(i)
              
        @cache
        def t(cur,prev):
            return g[prev,cur]+sum(t(kid,cur) for kid in adj[cur]-{prev})

        return sum(t(i,-1)>=k for i in adj)

For tree-based dp problems that give you edges as inputs, below is the template

1. store edges into an adjancent list

2. define a dfs function with two key parameters (cur, prev) to control the direction we will move along an edge between cur and prev

3. within dfs(cur,prev), the recursion is to call t(nxt,cur) for nxt in adj[cur]-{prev}

4. we add memorization (@cache) so that each edge between cur and prev will only be visited twice: one from cur to prev, one from prev to cur

5. we call dfs(i,-1) for i in range(n). -1 denotes no prev for i, so i is the root.

Using this template, we can solve all the following problems with minor edits.
https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/discuss/3052569/template-for-tree-based-dp-problems-with-edges-inputs

https://leetcode.com/discuss/interview-question/2751188/Lucid-OA-new-grad-SWE

https://leetcode.com/discuss/interview-question/1463104/Media.net-or-OA-or-Minimum-cost-to-buy-oranges

https://leetcode.com/discuss/interview-question/2639890/Media.Net(Directi)-OA-On-campus-Questions-%3A)

https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/

https://leetcode.com/discuss/interview-question/2788156/OA-2022-or-Pythagorean-Triplets