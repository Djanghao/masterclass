# [C++] Simple D&C solution + math proof

**Author:** TopBaLiKeu
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/945231/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/945231/)

---

Code:
```
class Solution {
public:
    int countShips(Sea sea, vector<int> topRight, vector<int> bottomLeft) {
        if(topRight[0] >= bottomLeft[0] && topRight[1] >= bottomLeft[1] && sea.hasShips(topRight,bottomLeft)){
             // only one cell   
             if(topRight[0] == bottomLeft[0] && topRight[1] == bottomLeft[1]){
                 return 1;
             }
            
             int middleX = (topRight[0] + bottomLeft[0]) / 2;
             int middleY = (topRight[1] + bottomLeft[1]) / 2;
            
             return countShips(sea, {middleX, middleY}, bottomLeft)// bottom left corner
                 + countShips(sea, topRight, {middleX + 1, middleY + 1})// top right corner
                 + countShips(sea, {topRight[0], middleY}, {middleX + 1, bottomLeft[1]})// bottom right corner
                 + countShips(sea, {middleX, topRight[1]}, {bottomLeft[0], middleY + 1});// top right corner
         }
        
        return 0; // no ships in this rectangle
    }
};
```

Math proof (from https://leetcode.com/problems/number-of-ships-in-a-rectangle/discuss/447293/Math-Proof):

i. The maximum number of points is 1000*1000 (given in question)
ii. The maximum number of ships is 10 (given in question)

If we do a quartered search, the number of levels in the tree will be maximum of log(1000*1000)/log 4 which is 10 (from i.)
At each node , we will divide the node into 4 child nodes and call the hasShips method for each child node. We only add the child node to the next level if there is a ship in that child node.
The next level can only have 10 or less nodes (from ii.) (So each level can have a maximum of 10 nodes and for each node we need to call the hasShips 4 times i.e 40 times for each level.
The maximum number of levels is 10 . So the maximum number of calls to hasShips is 400