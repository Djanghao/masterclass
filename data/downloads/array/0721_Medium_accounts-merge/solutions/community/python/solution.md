# [Python] The clean Union-Find solution you are looking for

**Author:** JummyEgg
**Votes:** 284
**Link:** [https://leetcode.com/problems/accounts-merge/solutions/1084738/](https://leetcode.com/problems/accounts-merge/solutions/1084738/)

---

```python
class UF:
    def __init__(self, N):
        self.parents = list(range(N))
    def union(self, child, parent):
        self.parents[self.find(child)] = self.find(parent)
    def find(self, x):
        if x != self.parents[x]:
            self.parents[x] = self.find(self.parents[x])
        return self.parents[x]
    
class Solution:
    # 196 ms, 82.09%. 
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        uf = UF(len(accounts))
        
        # Creat unions between indexes
        ownership = {}
        for i, (_, *emails) in enumerate(accounts):
            for email in emails:
                if email in ownership:
                    uf.union(i, ownership[email])
                ownership[email] = i
        
        # Append emails to correct index
        ans = collections.defaultdict(list)
        for email, owner in ownership.items():
            ans[uf.find(owner)].append(email)
        
        return [[accounts[i][0]] + sorted(emails) for i, emails in ans.items()]
```
I hope you learn something new. 
If you think your solution is cleaner, I would love to learn how you do it. Please post it below.