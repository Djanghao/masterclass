# Java & Python | 100% Runtime | with Explanation

**Author:** suraj008
**Votes:** 57
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/690440/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/690440/)

---

The question statement is a bit confusing. The chips array is basically any chip which is at some position and that position is given to us in the form of an array. So incase of 2,2,2,3,3 there are 5 chips. 3 chips are at position 2 and 2 chips are at position 3. So our aim is to move all the chips to single position and in this case position 2 or position 3.

The logic here is that the minimum number of odd values and even values that are given in chips array will be result in minimum cost. Moving element at odd to even position will cost 1 and even to odd position will cost 1. Where as moving odd to odd position costs 0 and even to even position also costs 0.

Eg: 1 1 2 2 2 4 4

Here, there are 2 chips which are at position 1, 3 chips at position 2 and 2 chips at position 4.
Our aim is to move all the chips to one position and in this case all 1's will move to position 2 with a cost of 1 (1 is 1 unit away from 2) and all 4's can move to position 2 with a cost of 0 (4 is 2 units left from 2).  
Also, all 1's can move to position 4 with a cost of only 1 (1 + 2units +1unit) and all 2's can move to position 4 with cost of 0.
So the answer is 2.

**Java** 

```
class Solution {
    public int minCostToMoveChips(int[] chips) {
        int even = 0;
        for(int i:chips)
            if(i%2==0)
                even++;
        return Math.min(even,chips.length-even);
    }
}
```

**Python**
```
class Solution:
    def minCostToMoveChips(self, chips: List[int]) -> int:
        even = 0
        for i in chips:
            if(i%2==0):
                even+=1
        return min(even,len(chips)-even);
```