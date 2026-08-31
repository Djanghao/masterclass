# [Python] DP vs Backtracking with comments

**Author:** fireland
**Votes:** 28
**Link:** [https://leetcode.com/problems/campus-bikes-ii/solutions/303471/](https://leetcode.com/problems/campus-bikes-ii/solutions/303471/)

---

At first I implemented the solution with **backtracking**, but with this approach you need to **generate all possible assignments which has factorial complexity**. I was passing over the bikes that were not assigned yet (left_bikes) and the current worker I was assigning a bike to, and effectively in this situation we have repeated calls:

I assign the first bike to the first worker, and then I assign the second bike to the second worker, my current worker will be 3 and my left bikes will be all but first and second. On a different branch I assign the first bike to the second worker, and then the second bike to the first worker, and I have the same as before, current worker 3 and left bikes all but first and second.

**The thing is, I cannot memoize with this approach, because the assignments are different, so I cannot use the information from the past branch to get the distance on this different branch, then I will get time limit**.

Clearly, the way to go is **dynamic programming**, if I build a bottom up solution then I can use the information from the past seen calls into my current assignment:

- left_bikes is an array the size of bikes, which has a 0 if bike[i] has been assigned or not. You can generate a new array on every call or pass it by reference and update it in a backatracking fashion, which I did to save space.
- cur_worker is the index of the current worker I need to assign a bike to
- In order to memoize, left_bikes need to be transformed into a tuple, since lists are not hashable.

```
class Solution(object):

    def assignBikes(self, workers, bikes):
	
        def _assign(left_bikes, cur_worker):
            info = (cur_worker, tuple(left_bikes)) # unique identifier of the call parameters 
            if info in self.seen: # if I have computed the min distance for this paramenters before
                return self.seen[info]
            if cur_worker == len(workers): #\xA0if I already assigned all workers
                return 0
            temp = float('inf') # start calculating the minimum from this assignment onwards
            for j in range(len(left_bikes)): 
                if left_bikes[j] == 0: # assign all left bikes to the current worker
                    left_bikes[j] = 1
                    wx, wy = workers[cur_worker]
                    bx, by = bikes[j]
                    temp = min(temp, abs(wx - bx) + abs(wy - by) + _assign(left_bikes, cur_worker + 1)) # update my minimum considering the minimum between what I had and the distance of this assignment + the minimum distance for the future assignments 
                    left_bikes[j] = 0 # unassign bike (instead of creating new left_bike array for every call)
            self.seen[info] = temp # memoize
            return temp 
			
        self.seen = dict() # initialize my memoization structure
        return _assign([0 for _ in range(len(bikes))], 0) # start with all bikes unassigned and with worker 0