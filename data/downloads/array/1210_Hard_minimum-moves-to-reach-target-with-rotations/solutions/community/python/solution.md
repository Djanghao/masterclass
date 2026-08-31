# Python 3 (BFS, DFS, and DP) (With Explanation) (beats 100.00%)

**Author:** junaidmansuri
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/393042/](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/393042/)

---

(Note to Reader: It will be helpful to have the code at the bottom visible separately on your screen while reading this explanation)

_**BFS Explanation:**_

This program uses a BFS approach starting out from the top left corner. The program starts by saving the first position of the snake into list S. You do not need to know three pieces of information to know precisely where the snake is. From the three pieces of information (location of the snake's head, location of the snake's tail, and its orientation), you really only need to know two pieces of information. In this porgram, we only look at the position of the snake's tail and its orientation (horizontal = 'h', or vertical = 'v').

The program starts by finding the size of the square grid and stores the value as N which is important because we do not want the snake to go out of bounds. The starting location of the snake is put inside the list S. The snake's tail starts at (0,0) and its orientation is horizontal. Thus S contains the tuple (0,0,'h'). T is initialized as an empty list. In each iteration of the while loop, T will contain the new positions that the snake can go to based on the entire set of current positions it is at, which is stored in S. So the list S contains all of the snakes current positions after c moves and the list T will contain all of the snakes permissible positions after c + 1 moves. The variable c is the number of moves the snake has made thus far and c is initialized to 0 since the snake has not moved yet. The set V is a set which will contain all the previously visited positions of the snake, where the positions are encoded into tuples of length 3.

The while loop will continue as long as there are new positions for the snake to go and the snake has not reached its destination. Note that the destination position is (N-1,N-2,'h') as given in the problem description. If there are no new positions for the snake to go and the destination has not been reached, the while loop will end and -1 is returned. The for loop iterates through every current position of the snake which is in the list S. Remember that in a BFS search you expand outward from the starting point. So you can imagine that S contains the outer expanding front of all the places that the snake could have gotten to after c moves. As the for loop iterates through S, if it finds a point in S that the snake has already visited, that point is ignored as there is no point in going in that direction again. This step is essential as otherwise the snake could potentially go in circles. An example of this is that the snake can just go clockwise, counter clockwise, clockwise, counter clockwise, over and over and over. This will cause an exponential increase in the size of S which can slow things down tremendously.

Provided that the position we are currently analyzing in S has not been visited, the program continues onto the next line. This position tuple is stored in _i_ from the for loop. If the position tuple _i_ equals the destination tuple, the program returns c. Since we want the shortest path, there is no point in searching after the first path to the destination is reached as it can only have a larger c. For ease of coding, the row and column positions of the snake's tail are called _a_ and _b_ respectively and the orientation is stored as the letter _o_. We also add the position tuple to the set of visited tuples so that we do not visit it again in the future.

The next part of the code looks at where the snake can move given its current location. The first if statement examines the possible next moves if the snake is currently in a horizontal position. Recall that (a,b) is the location of the snake's tail. The next if statement (inside the first one) sees if the snake can move to the right horizontally. This requires checking to make sure that the snake's head isn't at the right edge of the grid and that there is an open space ahead of the snake's head. If both conditions hold, the new location of the snake's tail is added to T. Recall that T is the list of all the new potential locations that the snake can go to in move c + 1. The next if statement checks to see if there are a horizontal pair of zeros directly under the horizontally oriented snake and that the snake is not on the bottom edge of the grid. If these conditions hold then the snake has two permissible moves. It can move down, maintaining its horizontal position, or it can rotate clockwise. These lead to two new positions which are added to the growing list T. Note that when the snake rotates, its orientation changes.

The next if statement examines the possible next moves if the snake is currently in a vertical position. In a similar fashion it checks to see if the snake is at the right or bottom edge of the grid or if there are open spaces for it to move. If there are, it will add the new locations to T.

After all of the new potential locations have been added to T, the list S is overwritten by the list T and list T is emptied. The count of the number of moves, stored in c, is increased by 1. The while loop then continues with a new list S to iterate through in the for loop. If during a for loop, as the program iterates through S, not a single new permissible position can be found, then nothing will be appended to the empty list T. If T stays empty, then S will be overwritten by it and the while loop which only runs if S is nonempty will stop and -1 will be returned.

_**BFS Code:**_ (beats 100.00%) ( 270 ms )
```
class Solution:
    def minimumMoves(self, G: List[List[int]]) -> int:
    	N, S, T, V, c = len(G), [(0, 0, 'h')], [], set(), 0
    	while S:
    		for i in S:
    			if i in V: continue
    			if i == (N-1, N-2, 'h'): return c
    			(a, b, o), _ = i, V.add(i)
	    		if o == 'h':
    				if b + 2 != N and G[a][b+2] == 0: T.append((a, b+1, o))
    				if a + 1 != N and G[a+1][b] == 0 and G[a+1][b+1] == 0: T.append((a+1, b, o)), T.append((a, b, 'v'))
    			elif o == 'v':
    				if a + 2 != N and G[a+2][b] == 0: T.append((a+1, b, o))
    				if b + 1 != N and G[a][b+1] == 0 and G[a+1][b+1] == 0: T.append((a, b+1, o)), T.append((a, b, 'h'))
    		S, T, c = T, [], c + 1
    	return -1
		
		
		
		
```
_**DFS Code:**_ (Time Limit Exceeded on Test Case 12 / 42 ) (A 20 x 20 Grid takes too long with DFS)
```
class Solution:
    def minimumMoves(self, G: List[List[int]]) -> int:
    	N, V, M, self.t, self.m = len(G), set(), collections.defaultdict(int), 0, math.inf
    	print(N)
    	def dfs(a,b,o):
    		if (a,b,o) in V or M[(a,b,o)] == 2 or self.t > self.m: return
    		if (a,b,o) == (N-1,N-2,'h'):
    			self.m = min(self.m,self.t)
    			for i in V: M[i] = 1
    			return
    		self.t, _ = self.t + 1, V.add((a,b,o))
    		if o == 'h':
    			if b + 2 != N and G[a][b+2] == 0: dfs(a, b+1, o)
    			if a + 1 != N and G[a+1][b] == 0 and G[a+1][b+1] == 0: dfs(a+1, b, o), dfs(a, b, 'v')
    		elif o == 'v':
    			if a + 2 != N and G[a+2][b] == 0: dfs(a+1, b, o)
    			if b + 1 != N and G[a][b+1] == 0 and G[a+1][b+1] == 0: dfs(a, b+1, o), dfs(a, b, 'h')
    		if M[(a,b,o)] == 0: M[(a,b,o)] = 2
    		self.t, _ = self.t - 1, V.remove((a,b,o))
    	dfs(0,0,'h')
    	return -1 if self.m == math.inf else self.m


```
_**DP Code:**_ (beats ~50%) ( 420 ms )
```
class Solution:
    def minimumMoves(self, G: List[List[int]]) -> int:
    	N, I, DP = len(G)-1, math.inf, [[math.inf]*2 for i in range(len(G)+1)]
    	DP[N-1][0] = I if 1 in [G[N][N],G[N][N-1]] else 0
    	for j in range(N-2,-1,-1): DP[j][0] = (DP[j+1][0] + 1) if G[N][j] == 0 else I
    	for i,j in itertools.product(range(N-1,-1,-1),range(N,-1,-1)):
    		n = [G[i][j],G[i][min(j+1,N)],G[min(i+1,N)][j],G[min(i+1,N)][min(j+1,N)]]
    		DP[j][0], DP[j][1] = min(1+DP[j+1][0],1+DP[j][0]), min(1+DP[j+1][1],1+DP[j][1])
    		if 1 not in n: DP[j][0], DP[j][1] = min(DP[j][0],2+DP[j+1][1],1+DP[j][1]), min(DP[j][1],2+DP[j+1][0],1+DP[j][0])
    		if 1 in [n[0],n[1]]: DP[j][0] = I
    		if 1 in [n[0],n[2]]: DP[j][1] = I
    	return -1 if DP[0][0] == I else DP[0][0]
		
		
		
- Junaid Mansuri
(LeetCode ID)@hotmail.com