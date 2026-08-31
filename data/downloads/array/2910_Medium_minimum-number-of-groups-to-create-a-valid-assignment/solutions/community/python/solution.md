# O(n) | O(n) python 9 lines with explanation

**Author:** sroninio
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/5165862/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/5165862/)

---

# Approach
We first divide the balls to groups of same balls. The only thing we actually care about is the size of each such group.

We also maintain a map: boxSize -> [number of groups which elements can be divided to boxes such that each box conatins boxSize OR boxSize+1 balls, total size of boxes we used for this deviation ]

Now for each group G with size S we iterate with variable boxSize on 1,2..,S
and for each such boxSize we check (*) either S balls can be splitted to boxes such that each box conatins boxSize OR boxSize+1 elements. 
If indeed the answer is yes then we do:
map[boxSize][0] += 1 //add this group to the count
map[boxSize][1] += number of boxes needed to devide the balls in this group to boxes of size boxSize OR boxSize+1. (**)

So now the answer is simply min{map[boxSize][1]) | map[boxSize][0] == number of groups)


(*) In order to check either  S balls can be splitted to boxes such that each box conatins boxSize OR boxSize+1 elements all we need to do is check either 
S % boxSize <= S / boxSize
Bcs S / boxSize indicates how many boxes of size boxSize we have, and the S % boxSize is the leftover balls, so if this leftover is not larger than the number of boxes of size boxSize then we can split the leftover between the boxes and still have boxSize or boxSize+1

(**) in order to check how many boxes we need in case we already know that S can be splitted to boxes of size boxSize OR boxSize + 1. We simpply do ceil(S / (boxSize + 1))



# Complexity
- Time complexity:
O(n)
we iterate it once to devide to groups
per each group we iterate with boxSize from 1 to the size of the group, the toatal sizes of groups is n so totally we do n steps 
- Space complexity:
O(n) the deviation to groups + the map
# Code
```
class Solution(object):
    def minGroupsForValidAssignment(self, balls):
        """
        :type balls: List[int]
        :rtype: int
        """
        c, boxSizeToNumSupporting, res = Counter(balls), defaultdict(lambda:[0,0]), 10**10
        for numOfSort in c.values():
            for boxSize in range(1, numOfSort + 1):
                if numOfSort % boxSize <= numOfSort / boxSize:
                    boxSizeToNumSupporting[boxSize][0] += 1
                    boxSizeToNumSupporting[boxSize][1] += math.ceil(float(numOfSort) / (boxSize + 1))
                    if boxSizeToNumSupporting[boxSize][0] == len(c):
                        res = min(res, boxSizeToNumSupporting[boxSize][1])
        return int(res)

        
```