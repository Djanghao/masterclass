# [Python] BFS * BFS  | 130ms | beats 95% | Explained & Commented

**Author:** zypher27
**Votes:** 197
**Link:** [https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/693918/](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/693918/)

---

Lets break the question into simple parts:

1. Lets think that we have no person and we have to find the minimum path between box and the target. Easy right? Simple BFS.

2. If you know how to solve the first part, what I actually do is modify first part with few constraints. 
	* 	I just check whether the box can be shifted to the new position(up, down, left, right)
	* 	For it to be shifted to the new position the person has to be in a corresponding position right?
	* 	So we check if the person can travel from his old position to his corresponding new position(using another BFS). 
	* 	If the person can travel to his new position than the box can be shifted, otherwise the box cannot be shifted.

3. We keep repeating step 2 until we reach the target or it is not possible to move the box anymore.

NOTE :  If you know A* algorithm, you can use Euclidean distance as heuristic and use a priority queue instead of normal queue, the worst case time might increase but average case will get better.


```
class Solution:
def minPushBox(self, grid: List[List[str]]) -> int:

    # this loop is to get the coordinates of target, box and person. Nothing else is gained here
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == "T":
                target = (i,j)
            if grid[i][j] == "B":
                box = (i,j)
            if grid[i][j] == "S":
                person = (i,j)

    # this function checks whether the given coordinates/indices are valid to go
    def valid(x,y):
        return 0<=x<len(grid) and 0<=y<len(grid[0]) and grid[x][y]!='#'

    # this function checks whether the person can travel from current position to the destination position.
    # used simple bfs(dfs can also be used here), should be self explainatory if you know BFS.
    def check(curr,dest,box):
        que = deque([curr])
        v = set()
        while que:
            pos = que.popleft()
            if pos == dest: return True
            new_pos = [(pos[0]+1,pos[1]),(pos[0]-1,pos[1]),(pos[0],pos[1]+1),(pos[0],pos[1]-1)]
            for x,y in new_pos:
                if valid(x,y) and (x,y) not in v and (x,y)!=box:
                    v.add((x,y))
                    que.append((x,y))
        return False

    q = deque([(0,box,person)])
    vis = {box+person}
    # this is the main bfs which gives us the answer
    while q :
        dist, box, person = q.popleft()
        if box == target: # return the distance if box is at the target
            return dist

        #these are the new possible coordinates/indices box can be placed in (up, down, right, left).
        b_coord = [(box[0]+1,box[1]),(box[0]-1,box[1]),(box[0],box[1]+1),(box[0],box[1]-1)]
        #these are the corresponding coordinates the person has to be in to push .. the box into the new coordinates
        p_coord = [(box[0]-1,box[1]),(box[0]+1,box[1]),(box[0],box[1]-1),(box[0],box[1]+1)]

        for new_box,new_person in zip(b_coord,p_coord): 
            # we check if the new box coordinates are valid and our current state is not in vis
            if valid(*new_box) and new_box+box not in vis:
                # we check corresponding person coordinates are valid and if it is possible for the person to reach the new coordinates
                if valid(*new_person) and check(person,new_person,box):
                    vis.add(new_box+box)
                    q.append((dist+1,new_box,box))

    return -1
```

Time = Space = O((rows*cols)^2)