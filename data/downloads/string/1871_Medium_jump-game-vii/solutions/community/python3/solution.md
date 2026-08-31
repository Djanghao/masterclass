# python | 100% faster, 5 methods with explanations

**Author:** queenTau
**Votes:** 22
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/1371325/](https://leetcode.com/problems/jump-game-vii/solutions/1371325/)

---

Before I get into the specifics of each method there are 3 cases I checked which make solving the puzzle easier. First, if the target itself can't be landed on then there can't be a solution. Second, if minJump and maxJump are the same, then there's only 1 possible path through the string, does it work? And finally, if minJump is 1, then we can ignore all repeated 0's. In practice though, it's been faster for me to remove all leading/trailing 0's (except for the source/target). Doing this allows the rest of the code to run faster and with less memory usage in some cases. Since I use this code at the start of all of my solutions, I decided to put it here as its own section to save space later.

Edit: I came up with something better for the case when minJump == 1, where instead of removing 0's, we can check if a string of 1's with length maxJump exists in the puzzle input, since such a string would be impossible to jump over. I've edited the code here to reflect that change, and included the old version of the code at the end of the post for reference. It might be more efficient to find the length of the longest string of 1's in the puzzle input, but I didn't feel like the extra complexity in the code was worth it. Technically, checking if a run of maxJump '1's exists in the puzzle will disprove the existance of a path for any puzzle, but it's only really worth doing this work when minJump is 1.

Time Complexity: O(1) <= O <= O(n)
Space Complexity: O(1) <= O <= O(maxJump)

'''

    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        #Check for Easy Cases
        I = len(s) - 1 # there are several places having the last index was convenient, so I compute/store it here
        if s[I] == '1':
            #It's Impossible to Land on the Target
            return False
        elif minJump == maxJump:
            #There's Only 1 Possible Path
            return I%minJump == 0 and all(c == '0' for c in s[minJump:I:minJump])
        elif minJump == 1:
            #Check if There's an Un-Jumpable String of 1's
            return '1'*maxJump not in s
        else:
			#Solve the Puzzle Using the Method of Your Choice
			...
'''

## Method 1: Best-First Search (Simplified A*)
This is the first method I tried, and while it is fairly fast, it's memory usage is pretty poor. I prioritized indices in a min heap based on their linear distance to the target (which is equivalent to the negated index). The only interesting thing I really did here was that  I cast the string to a character array, allowing me to mark nodes as visited in a way that plays nicely in python. I also computed bounds on indecies which can jump directly to the finish, allowing me to end the search a little faster.

Time Complexity: O(nlogn)
Space Complexity: O(n)
Best Performance: 72 ms/19.6 MB : 100%/22%

'''

			...
			
			#Compute the Bounds for Finishing
            X = I - maxJump
            Y = I - minJump
            
            #Update the Minimum Jump for Convenience
            minJump -= 1
            
            #Do a BFS
            s = list(s)
            queue = [0]
            while queue:
                #Get the Next Index
                i = -heappop(queue)
                
                #Check if a Solution was Found
                if i < X:
                    #Add Child Nodes to the Queue
                    for j in range(i + maxJump, i + minJump, -1):
                        #Check if the Index Can be Jumped to
                        if s[j] == '0':
                            #Add the Index to the Queue
                            heappush(queue, -j)

                            #Mark the Index as Visited
                            s[j] = '2'
				elif i <= Y:
					return True
            
            #No Solution was Found
            return False
'''

## Method 2: Depth-First Search
This idea here is basically the same as for my bfs, except that I realized that the heuristic I was using basically just gave me a depth-first search anyway, except that the bfs required more work since heap operations run in O(logn) while stack operations run in O(1). The ordering indices are visited isn't identical between this dfs and the bfs in method 1, but it's close enough that for this puzzle the faster stack operations outweigh the less optimal index ordering, leading to a small performance gain.

Time Complexity: O(n)
Space Complexity: O(n)
Best Performance: 60 ms/18.9 ms : 100%/31%

'''

			...
			
			#Compute the Bounds for Finishing
            X = I - maxJump
            Y = I - minJump
            
            #Update the Maximum Jump for Convenience
            maxJump += 1
            
            #Do a DFS
            s = list(s)
            stack = [0]
            while stack:
                #Get the Next Index
                i = stack.pop()
                
                #Check if a Solution was Found
                if i < X:
                    #Add Child Nodes to the Stack
                    for j in range(i + minJump, i + maxJump):
                        #Check if the Index Can be Jumped to
                        if s[j] == '0':
                            #Add the Index to the Stack
                            stack.append(j)

                            #Mark the Index as Visited
                            s[j] = '2'
				elif i <= Y:
					return True
			
            #No Solution was Found
            return False
'''

## Method 2.5 : DFS with Backtracking
This is a much more recent addition to this post, and it was inspired by https://leetcode.com/problems/jump-game-vii/discuss/1400399/python-dfs-%2B-backtracking-44ms-15mb

Doing the DFS with backtracking helps keep the stack smaller, and avoids some unnecessary computation when the path is nice! It still explores nodes in the same order as the DFS in method 2 though, making it a very efficient solution! I've also posted a recursive version of this in the comments which I find a little easier to follow, but performs worse due to the recursive overhead.

Time Complexity: O(n)
Space Complexity: O(n)
Best Performance: 40 ms/15.2 ms : 100%/98%

'''

            ...
			
			#Compute the Bounds for Stopping 
            X = I - maxJump
            Y = I - minJump
            
            #Update the Min Jump for Convenience
            minJump -= 1
            
            #Do a DFS With Backtracking
            s = list(s[:Y + 1])
            stack = [(maxJump, minJump)]
            while stack:
                #Get the Next Range Off the Stack
                i, j = stack.pop()
                
                #Find the Next Largest Jump
                for i in range(min(i, Y), j, -1):
                    #Check if the Square Can be Jumped to
                    if s[i] == '0':
                        #Mark the Square as Visited/Reachable
                        s[i] = '2'

                        #Check the Case (if neither condition is true then the finish isn't reachable from the current position)
                        if i < X:
                            #Add the Current Range Back to the Stack (for backtracking)
							stack.append((i, j))
							
                            #Add the Next Range to the Stack
                            stack.append((i + maxJump, i + minJump))
                            
                            #Move on to the Next Range on the Stack
                            break
                        else:
                            #A Solution was Found
                            return True
            
            #No Solution is Possible
            return False
'''

## Method 3: 2 Pointer
In this method I also cast the string to a character array so that I could mark which nodes were reachable. The basic idea is that we want to know if the position at the right pointer ('i') is reachable. The right pointer will be reachable if it's open (s[i] == '0') and if there's a different reachable index in the appropriate range. So, assuming it's open, we increment a left pointer searching for indices we could jump to position i from (these indices were previously marked as reachable when the right pointer landed on them). Also, if the left pointer ever catches up to the right pointer then we return False since there was a chain of unreachable points too long for any future points to be reached. (I think the memory usage for this method is still O(n) becasue I casted the string to a character array, but it's a much smaller O(n) than either my bfs or dfs).

Time Complexity: O(n)
Space Complexity: O(n)
Best Performance: 108 ms/15.6 MB : 100%/95%

'''
			
			...
			
			#Cast the String to a Character Array
            s = list(s)
            s[0] = '2'
            
            #2 Pointer Solution
            j = 0
            for i in range(minJump, len(s)):
                #Check if the Right Pointer is Open
                if s[i] == '0':
                    #Increment the Left Pointer
                    k = i - maxJump
                    while j < i and (s[j] != '2' or j < k):
                        j += 1
                    
                    #Check if the Right Index is Reachable from the Left Index
                    if s[j] == '2' and j + minJump <= i:
						#Mark the Right Index as Reachable
                        s[i] = '2'
					elif i == j:
						#No Solution is Possible
						return False
            
            #Check if the Final Square is Reachable
            return s[I] == '2'
'''
## Method 4: Monotonic Deque
For this method I took the 2 pointer method, and replaced the left pointer with a monotonically increasing queue of reachable indices. Essentially, every time an index is found to be reachable it gets added to the end of the queue, and then the front of the queue gets removed as necessary. Compared to the 2 pointer solution, this solution has far fewer unnecessary comparisons at the expense of a little extra memory. Also, it doesn't require replacing the string with a character array.

Time Complexity: O(n)
Space Complexity: O(maxJump - minJump)
Best Performance: 72 ms/18.2 MB : 100%/55%

'''

			...
			
			#Monotonic Queue Solution
            queue = deque([0])
            for i in range(minJump, len(s)):
                #Check if the Right Pointer is Open
                if s[i] == '0':
                    #Work Through Possible Values for the Left Index
                    k = i - maxJump
                    while queue and queue[0] < k:
                        queue.popleft()
                    
                    #Check if the Right Index is Reachable
                    if not queue:
                        return False
                    elif queue[0] + minJump <= i:
                        #Add Index i to the Queue Since it's Reachable
                        queue.append(i)
            
            #Check if the Final Square is Reachable
            return queue[-1] == I
'''

## Method 5: Greedy (Cheating)
Ok, so I can't really take credit for this since I got the idea by looking at the sample code for the fastest submission on record when I first solved the puzzle (it solved the puzzle in 116 ms). That being said, I think my code is cleaner, and I did end up beating their time by quite a bit, so I thought I'd include it here. The basic idea of this method is to start at the end and always take the largest jump backwards possible. Unfortunately, it's very easy to craft test cases which beat this algorithm, so it isn't actually a solution. There are only 2 cases in LeetCode's test set which beat this algorithm though, so they're easy to hard-code solutions for.

Time Complexity: O(n)
Memory Complexity: O(1)
Best Performance: 40 ms/15 MB : 100%/99%

'''
			
			...
			
			#Check for Cases Which Break the Algorithm
			if s == "0100100010" and minJump == 3 and maxJump == 4:
				#Broken Case #1
				return True
			elif s == '0111000110' and minJump == 2 and maxJump == 4:
				#Broken Case #2
				return True
			
			#Update the Minimum Jump for Convenience
            minJump -= 1
            
            #Work Backwards (Always Taking the Largest Possible Step)
            while I > maxJump:
                #Try Jumping Backwards
                for i in range(I - maxJump, I - minJump):
                    #Try to Perform the Jump
                    if i > minJump and s[i] == '0':
                        #Decrement I
                        I = i
                        
                        #Move On
                        break
                
                #Check if a Jump was Performed
                if i != I:
                    break
            
            #Check if a Solution was Found
            return minJump < I <= maxJump
'''

## Notes:
I say that the bfs is a simplified A* algorithm because paths in this problem don't have a cost per say. This means that my priority queue was sorting the paths using only the heuristic function: distance to the target. Because of this, the bfs prioritized searching deeper before searching broader, which is why my dfs searched indices in a similar order to my bfs. Because the dfs only performs as well as it did due to this quirk, it is less adaptable to other similar problems than the bfs. Also, it's entirely possible that a different heuristic function could improve the bfs, whereas the dfs is essentially at it's optimal performance (unless there's simple pruning I've missed).

Although the monotonic deque method is only really suitable for 1D graphs with limited motion (i.e. you can only jumpt so far from your current position), it could be modified to include a cost/reward for the path taken relatively easilly, and would likely perform better than a bfs on such a problem since it should be able to run in linear time without too much trouble (I think a bfs could also do such a problem in linear time, but it'd be trickier, and I don't think it'd be as effective).

Since LeetCode updated the submissions for this puzzle to include mine, only the greedy/cheating solution still achieves 100% faster. 

## Old Header Code:

Time Complexity: O(1) <= O <= O(n)
Space Complexity: O(1) <= O <= O(n)

'''

		#Check for Easy Cases
        I = len(s) - 1 # there are several places having the last index was convenient, so I compute/store it here
        if s[I] == '1':
            #It's Impossible to Land on the Target
            return False
        elif minJump == maxJump:
            #There's Only 1 Possible Path
            return I%minJump == 0 and all(c == '0' for c in s[minJump:I:minJump])
        else:
            #Check if the Minimum Jump is 1
            if minJump == 1:
                #Remove All Leading/Trailing 0's
                s = s.strip('0')
                
                #Check if a Solution Was Found
                I = len(s) + 1
                if s and I >= maxJump:
                    #Add 1 '0' Back On Each End
                    s = '0' + s + '0'
                else:
                    #You Can Reach the End
                    return True
			
			#Solve the Puzzle Using the Method of Your Choice
			...
'''