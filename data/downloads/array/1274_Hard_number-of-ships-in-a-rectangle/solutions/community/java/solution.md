# Java, recursive, explained, beats 100%

**Author:** gthor10
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/447220/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/447220/)

---

We can check every 1/4 of the rectangle recursively, eleminating every rectangle that doesn't have any ships. Base case if when both points are the same - in this case return 1.

O(n) - we can check every cell. Space is O(lgn) - memory required for the call stack.

```
    public int countShips(Sea sea, int[] topRight, int[] bottomLeft) {
        int res = 0;
        //only continue with rectangles that are valid and have ships
        if (topRight[0] >= bottomLeft[0]
                && topRight[1] >= bottomLeft[1]
                && sea.hasShips(topRight, bottomLeft)) {

            //this is rect of 1 point only - return 1
            if (topRight[0] == bottomLeft[0]
                    && topRight[1] == bottomLeft[1])
                return 1;
            //center point
            int newX = (bottomLeft[0] + topRight[0])/2;
            int newY = (bottomLeft[1] + topRight[1])/2;

            //split into 4 squares
            //up-right
            res+= countShips(sea, topRight, new int[] {newX + 1, newY + 1});
            //up-left
            res+= countShips(sea,
                    new int[] {newX, topRight[1]},
                    new int[] {bottomLeft[0], newY + 1});

            //bottom-left
            res+= countShips(sea, new int[] {newX, newY}, bottomLeft);
            //bottom-right
            res+= countShips(sea,
                    new int[] {topRight[0], newY},
                    new int[] {newX + 1, bottomLeft[1]});
        }
        return res;
    }
```