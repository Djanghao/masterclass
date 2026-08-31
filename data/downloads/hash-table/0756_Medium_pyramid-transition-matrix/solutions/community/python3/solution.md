# [Python 3] BFS and DFS

**Author:** gabhay
**Votes:** 5
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/2268424/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/2268424/)

---

BFS solution: gives TLE

	class Solution:
			def get_states(self,s,i,new,allowed):
				if i==len(s):
					self.res.append(''.join(new))
					return 
				for x in allowed[s[i-1]+s[i]]:
					new.append(x)
					self.get_states(s,i+1,new,allowed)
					new.pop()

			def pyramidTransition(self, bottom: str, allowed: List[str]) -> bool:
				a=defaultdict(list)
				for s in allowed:
					a[s[:2]].append(s[2])
				self.res=[bottom]
				for x in self.res:
					if len(x)==1:
						return True
					self.get_states(x,1,[],a)
				return False
				
DFS solution: 

	class Solution:
		@cache 
		def dfs(self ,state, i, nxt):
			if len(state) == 1:
				return True
			if len(state) - 1 == len(nxt): # we have reached the next state completely so this state is valid
				return dfs(nxt, 0, "")
			if i == len(state) - 1: # we have reached the last index without moving to next state it shows this state is invalid
				return False
			for c in a[state[i]+state[i+1]]:
				if dfs(state, i+1, nxt + c):
					return True
			return False
	
		def pyramidTransition(self, bottom: str, allowed: List[str]) -> bool:
			a = defaultdict(list)
			for s in allowed:
				a[s[:2]].append(s[2])
			return self.dfs(bottom, 0, "")