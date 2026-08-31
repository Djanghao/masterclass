# Python Easy Greedy O(1) Space approach

**Author:** constantine786
**Votes:** 101
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/2211602/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/2211602/)

---

```
class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        output=[] 
        
        # sort the array in decreasing order of height 
        # within the same height group, you would sort it in increasing order of k
        # eg: Input : [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
        # after sorting: [[7,0],[7,1],[6,1],[5,0],[5,2],[4,4]]
        people.sort(key=lambda x: (-x[0], x[1]))                
        for a in people:
            # Now let's start the greedy here
            # We insert the entry in the output array based on the k value
            # k will act as a position within the array
            output.insert(a[1], a)
        
        return output  
```

**Time - O(nlogn + n * n)** - We sort the array in **O(nlogn)** and the greedy algorithm loop takes **O(n * n)** because of array insert operation.
**Space - O(1)** - If you exclude the output array.


---

***Please upvote if you find it useful***