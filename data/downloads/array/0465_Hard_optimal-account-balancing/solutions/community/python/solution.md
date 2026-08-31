# Python: Fast, Clear and Short

**Author:** dibdidib
**Votes:** 38
**Link:** [https://leetcode.com/problems/optimal-account-balancing/solutions/339257/](https://leetcode.com/problems/optimal-account-balancing/solutions/339257/)

---

Build a map `balances` which sums debts for each person.
Remove any people who have zero balance.
Define a recursive function `dfs()` to return the minimum cost of balancing accounts.
Recurse as follows on `balances`:

0. Base case: return zero if `balances` is empty. Otherwise,
1. Search for candidate groups which have balances which sum to zero.
2. For a candidate group of minimum size, `group_size - 1` is the minimum number of transactions necessary to settle balances, and `group_size - 1 + dfs(remaining_balances)` is the minimum possible result for the candidate group.
3. Return the minimum result of the search.

In point 2, why is `group_size - 1` the minimum number of transactions necessary to settle balances? To construct a sufficient sequence of transactions, make all the candidate elements stand in a line, and have the `i th` transfer their non-zero balance to the `i + 1 th` until the last element has the remaining balance. By addition, the balances all resolve to zero. By the commutative property of addition, this works for any line order. This proves that `group_size - 1` transactions is sufficient. We can prove that it is necessary by modeling the candidate elements as list of nodes, noting that we need `group_size - 1` edges to connect the list, and noting that every list node must be connected for balances to be settled. Thanks to @mmmax for asking this question.

In the code below, [functools LRU cache](https://docs.python.org/3/library/functools.html#functools.lru_cache) handles memoization. All we need to do is make function `dfs()` accept hashable arguments. This is the purpose of `tuplify`: to convert the map into a canonical hashable value in case there are any overlapping subproblems in the DFS.

```python
def minTransfers(self, transactions: List[List[int]]) -> int:

    tuplify = lambda balance: tuple(sorted((k, v) for k, v in balance.items()))

    @lru_cache(None)
    def dfs(balances):
        if not balances:
            return 0
        res = math.inf
        balances = {k: v for k, v in balances}
        for size in range(2, len(balances) + 1):
            for group in itertools.combinations(balances.keys(), size):
                if sum(balances[k] for k in group) == 0:
                    remaining_balances = {k: v for k, v in balances.items() if k not in group}
                    res = min(res, size - 1 + dfs(tuplify(remaining_balances)))
        return res

    balances = collections.defaultdict(int)
    for u, v, z in transactions:
        balances[u] += z
        balances[v] -= z
    return dfs(tuplify({k: v for k, v in balances.items() if v}))
```

In the inner loop of the DFS, we can make a slight modification to apply an approach of trying to greedily close out any two accounts with inverse balances. As explained in [this post](https://leetcode.com/problems/optimal-account-balancing/discuss/95363/Easy-backtracking-%2B-greedy-solution-with-explanation-(Python-Accepted)), if we find any such pair of balances, we can settle them greedily and continue with the DFS.

```python
def minTransfers(self, transactions: List[List[int]]) -> int:

			# ... unchanged ...

            for group in itertools.combinations(balances.keys(), size):
                if sum(balances[k] for k in group) == 0:
                    remaining_balances = {k: v for k, v in balances.items() if k not in group}
                    res = min(res, size - 1 + dfs(tuplify(remaining_balances)))
                    if len(group) == 2: # added
                        return res

			# ... unchanged ...
			
```

One other pruning trick which improves performance:

```python
def minTransfers(self, transactions: List[List[int]]) -> int:

		# ... unchanged ...

        for size in range(2, len(balances) + 1):
            if res <= size - 1: # added
                break
            for group in itertools.combinations(balances.keys(), size):
                if sum(balances[k] for k in group) == 0:
                    remaining_balances = {k: v for k, v in balances.items() if k not in group}
                    res = min(res, size - 1 + dfs(tuplify(remaining_balances)))
                    if len(group) == 2: 
                        return res
						
		# ... unchanged ...
		
```

Time complexity: Letting `N` be the number of verticies in the graph `balance`, our time complexity is `O(2^N)` because we memoize on subsets. Pruning, memoization, and the "precise-close-out" trick help to reduce the runtime considerably.

Thanks to @dodolala for providing a counter-example the previous incorrect version of this solution which greedily selected the smallest group of balances summing to zero in the DFS.