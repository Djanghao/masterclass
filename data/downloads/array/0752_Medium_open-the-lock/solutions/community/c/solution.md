# ✅ Short & Easy Solution | BFS Traversal Explained w/ Commented Code

**Author:** archit91
**Votes:** 120
**Link:** [https://leetcode.com/problems/open-the-lock/solutions/1250656/](https://leetcode.com/problems/open-the-lock/solutions/1250656/)

---

\u2714\uFE0F ***Solution - I (BFS)***

First, let's simplify the problem statement. We are given a string *`start = "0000"`* and asked to reach *`target`* by turning (minimum times) a digit forward or backward one at a time without reaching any of the strings in *`deadends`*.

We can't just turn a digit forward or backward just based on which turn gets us quicker to the corresponding digit of target faster because this approach may lead us towards a **deadend**. So, it makes sense to try and turn a digit in both the direction and return the one that leads to *`target`* in minimum moves.

The solution can be modelled as a **BFS traversal**, wherein we try to shift each digit of current string *`curstr`* in both the possible direction. We **increment *`turns`* at each level of BFS and return when *`target`*** is reached during the traversal.

We use a hashset to insert all the *`deadends`* string for efficient check on whether we reach a deadend at anytime. Similarly, we store all the visited string in *`visited`* to ensure that we won't revisit a string again. For BFS traversal, we would also require to maintain a queue. The algorithm can be summed up into following steps:-

1. Insert all strings from *`deadends`* into a hashset and also maintain a *`visited`* set for all strings traversed so far.
2. Start BFS traversal from `"0000"` by pushing it into the queue and looping till the queue becomes empty.
3. At each level of BFS, take the current string and try turning each digit in both forward & backward direction. For eg. we can apply the turning process on `"0000"` to get `["1000", "9000", "0100", "0900", "0010", "0090", "0001", "0009"]`.
4. If any of the strings after applying turning process become equal to *`target`*, return the *`turns`* required till now.
5. Else, just push the turned strings into the queue, insert it into *`visited`* set and repeat the same process for all strings in the queue.
6. If the queue becomes empty, we have tried all possible paths to reach *`target`* and failed. So return -1.

**C++**
```
int openLock(vector<string>& deadends, string target) {
	unordered_set<string> dead(begin(deadends), end(deadends)), seen({"0000"});
	if(dead.find("0000") != end(dead)) return -1; // if start string itself is a deadend
	if(target == "0000") return 0; // if start string itself is the target string.
	queue<string> q({"0000"});
	int n, minTurns = 0;
	while(!q.empty()) {            
		n = size(q), minTurns++;
		for(int i = 0; i < n; i++) { // traversing all nodes on the current level of BFS traversal
			auto cur_str = q.front(); q.pop();       
			// Trying forward and backward turn for each digit of current string
			for(int j = 0; j < 4; j++) 
				for(auto adj_str : turn(cur_str, j)) 
					if(seen.find(adj_str) == end(seen) && dead.find(adj_str) == end(dead)) // adjacent (turned) string is not visited earlier, nor a dead end
						if(adj_str == target) return minTurns;
						else q.push(adj_str), seen.insert(adj_str);
		}
	}
	return -1;
}
// turns the ith digit of s in forward and backward direction and returns the turned string as vector
vector<string> turn(string s, int i) {
	vector<string> res(2, s);
	res[0][i] = '0' + (res[0][i] - '0' + 1) % 10;        // forward turn
	res[1][i] = '0' + (res[1][i] - '0' - 1 + 10) % 10;   // backward turn
	return res;
}
```

***Time Complexity :*** **`O(N)`**, where `N` is the number of strings in deadends and `O(N)` is required to insert all the strings into the hashset. The BFS traversal requires `O(1)`. It may be strange but that's how you calculate big O complexity. The time required by our BFS traversal doesn't depend on the input and in the worst case, we end up making 10000 iterations at max. Please let me know if there's any mistake in this analysis

***Space Complexity :*** **`O(N)`**

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---