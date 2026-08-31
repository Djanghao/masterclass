# Python Easy Solution , BEATS ~ 100% Faster and 100% Memory Usage

**Author:** rnyati2000
**Votes:** 6
**Link:** [https://leetcode.com/problems/watering-plants/solutions/1589981/](https://leetcode.com/problems/watering-plants/solutions/1589981/)

---

Here we first store the value of capacity into x variable after that we work on the plants list and check for each index value , and if the can capacity x is less then the plant required value we add its travelling back and forth value to the count and decrease its current index value from the max capacity at the same time .
```
class Solution:
    def wateringPlants(self, plants: List[int], capacity: int) -> int:
        x=capacity
        count=0
        for i in range(len(plants)):
            if(x<plants[i]):
                count=count+i+i+1
                x=capacity-plants[i]
            
            else:
                count=count+1
                x=x-plants[i]
                  
        return(count)
```
If u understood the code then plz...UPVOTE