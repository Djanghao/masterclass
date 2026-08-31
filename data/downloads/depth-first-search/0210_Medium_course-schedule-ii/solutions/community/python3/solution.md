# Python BFS beats 98% with Detailed Explanation and Comments!

**Author:** Pythagoras_the_3rd
**Votes:** 86
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/762346/](https://leetcode.com/problems/course-schedule-ii/solutions/762346/)

---

The high level for this solution: We create a graph and prereq dict to track which nodes we have visited and if we're able to travel to certain nodes (if there are no preqs for the intended next course - aka we've taken the prereqs or there are no prereqs.).
Eg. 4, [[1,0],[2,0],[3,1],[3,2]]
Starting: q: deque([0])
preqs: {0: set(), 1: {0}, 2: {0}, 3: {1, 2}}
graph: {0: {1, 2}, 1: {3}, 2: {3}}
We start with course 0 because it has no preqs.
Looking at our graph, 0 has 2 neighbors 1 and 2
We check 1 and 2 to see that if we have taken course 0 whether we can take them.
We determine this by removing 0 (course we have taken) from 1 and 2's prereqs and if there are no additional prereqs we take them (add them to our queue).
After taking 0, 1 and 2 added: deque([1, 2]) 
1 and 2 added because they are neighbors (from our graph): {0: {1, 2}, 1: {3}, 2: {3}}) 
And after taking course 0 now have no prereqs: {0: set(), 1: set(), 2: set(), 3: {1, 2}}
Now we visit 1 as it's first in our FIFO queue.
Looking at course 1's neighbors in our graph there's 3, 
{0: {1, 2}, 1: {3}, 2: {3}}
but it has a prereq we haven't taken 2,
{0: set(), 1: set(), 2: set(), 3: {2}}
Which is still in our queue: deque([2])
So we don't add anything in this iter and then pop 2 from our q.
Now we've taken 2, we can hit 3 from our graph: 0: {1, 2}, 1: {3}, 2: {3}}
we have now taken 2 so we remove the prereq: {0: set(), 1: set(), 2: set(), 3: set()}
And we add 3 to the queue.
deque([3])
We then pop 3, append 3 to our taken list and len(taken) == numCourses so we're done!

```
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        # Create a prerequisite dict. (containing courses (nodes) that need to be taken (visited)
		# before we can visit the key.
        preq = {i:set() for i in range(numCourses)}
		# Create a graph for adjacency and traversing.
        graph = collections.defaultdict(set)
        for i,j in prerequisites:
		    # Preqs store requirments as their given.
            preq[i].add(j)
			# Graph stores nodes and neighbors.
            graph[j].add(i)
        
        q = collections.deque([])
		# We need to find a starting location, aka courses that have no prereqs.
        for k, v in preq.items():
            if len(v) == 0:
                q.append(k)
		# Keep track of which courses have been taken.
        taken = []
        while q:
            course = q.popleft()
            taken.append(course)
			# If we have visited the numCourses we're done.
            if len(taken) == numCourses:
                return taken
			# For neighboring courses.
            for cor in graph[course]:
			    # If the course we've just taken was a prereq for the next course, remove it from its prereqs.
                preq[cor].remove(course)
				# If we've taken all of the preqs for the new course, we'll visit it.
                if not preq[cor]:
                    q.append(cor)
		# If we didn't hit numCourses in our search we know we can't take all of the courses.
        return []
```