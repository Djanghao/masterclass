# [python] O(N logN) solution, explained & easy-understanding

**Author:** moorissa
**Votes:** 60
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/1429852/](https://leetcode.com/problems/rank-teams-by-votes/solutions/1429852/)

---

### Steps
1. Create a ranking system for each char of each string in the array (hashmap), s.t.:
	```python
		d = {
			'A': [0, 0, 0],  # initialize array of size len(string)
			'B': [0, 0, 0],
			...
		}
	```
2. For each char in the string, we add 1 to the position they are ranked,
	e.g. `d['A'] = [3, 0, 1]` means A is ranked first 3 times, second 0 times, and third once.

3. Sort d.keys() based on their ranking values in dictionary, in descending order
	in case of equal votes, we alphabetically order the keys first using .sort()

4. Join elements in the sorted list into a string

### Complexity
* time: O(N * S + N logN) ~ O(N logN)
* space: O(N * S) ~ O(N)

where N = # votes and S = length of a word in the `votes` array
		max(S) is 26 chars so it would be constant O(1)
		
### Python3
```python
    def rankTeams(self, votes: List[str]) -> str:
        d = {}

        for vote in votes:
            for i, char in enumerate(vote):
                if char not in d:
                    d[char] = [0] * len(vote)
                d[char][i] += 1

        voted_names = sorted(d.keys())
        return "".join(sorted(voted_names, key=lambda x: d[x], reverse=True))
```