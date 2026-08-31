# Python 3 | DFS, Adjacency List | Explanation

**Author:** idontknoooo
**Votes:** 55
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/1797403/](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/1797403/)

---

### Explanation
- Intuition: Try drawing something simple to help you understand the question better
- Steps:
	1. Find all possible bottom row combinations
	2. For each combination, find its possible neighbor rows
	3. Starting from the bottom row, 
		- take each combination and build up to the `height` level
		- count possible ways using **DFS** (use `@cache` to avoid repeat computing, you can also write your own cache using `dict`)
- BFS will TLE, unless a good pruning approach is worked out
- Time Complexity:
	- It's hard to use input parameters to represent the time complexity, so I will make an estimation using worst test case 
	-  Given the most complicated input
		```100```
		```10```
		```[1,2,3,4,5,6,7,8,9,10]```
		Then `len(combos) == 512`, there are `100` level at max, so with `@cache`, the max computation during DFS is about `O(51200)`
		Finding possible neighbor takes `512*512=O(262144)`
		In total time is at `O(10^5)` level
- Space is capped by the adjacency list `d`, which is `O(10^5)`
### Implementation
```
class Solution:
    def buildWall(self, height: int, width: int, bricks: List[int]) -> int:
        combos = []
        def get_combos(cur, cur_sum):                     # 1. find all possible bottom row combination (combos)
            nonlocal combos, width
            if cur_sum > width: return
            if cur_sum == width:
                combos.append(tuple(cur))                 # if width matches, add to `combos`
                return
            for brick in bricks:
                get_combos(cur + [brick], cur_sum + brick)
        get_combos([], 0)
        
        d = collections.defaultdict(list)                 # make a adjacency list for {combo: [possible_neighbor_row...]}
        
        for i, combo in enumerate(combos):                # 2. for each `combo`, find its possible neighbor row
            s, cur = set(), 0
            for val in combo[:-1]:                        # use set `s` to store all join location, we don't care the right edge (hence combo[:-1]) 
                s.add(cur:=cur+val)
            for j, nei in enumerate(combos):    
                cur = 0                
                for val in nei[:-1]:
                    cur += val
                    if cur in s: break                    # if `combo` and its neighbor row `nei` join bricks at `cur`, then this neighbor can't be used at upper row
                else:                        
                    d[combo].append(nei)
                    
        ans, mod = 0, int(1e9+7)
        
        @cache
        def dfs(combo, h):                                # count number of ways build brick up to `height` \\
            nonlocal ans, d, height                       #   with current row as `combo` at the `h`th row
            if height == h: return 1
            return sum(dfs(nei, h+1) for nei in d[combo])
            
        for combo in combos:                              # 3. for each `combo`, starting from bottom row, build up to `height`
            ans += dfs(combo, 1) % mod                    # count all possible ways and take the sum
            
        return ans % mod   
```