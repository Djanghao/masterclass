# [Java] cross product

**Author:** 2481496
**Votes:** 1
**Link:** [https://leetcode.com/problems/convex-polygon/solutions/1688766/](https://leetcode.com/problems/convex-polygon/solutions/1688766/)

---

```

class Solution {
    
    public boolean isConvex(List<List<Integer>> points) {
        if (points.size() < 3) {
            return false;
        }
        
        int initProduct = this.crossProduct(points.get(0), points.get(1), points.get(2));
        boolean isPositive = initProduct > 0 ? true : false;
 
        for (int i = 1; i < points.size(); i++) {
            List<Integer> secondPoint = points.get((i + 1) % points.size());
            List<Integer> thirdPoint = points.get((i + 2) % points.size());                                       
            
            int product = this.crossProduct(points.get(i), secondPoint, thirdPoint);
            
            if (initProduct == 0) {
                initProduct = product;
                isPositive = initProduct > 0;
                continue;
            }
                                                   
            if (isPositive && product < 0) {
                return false;
            }                                                                                
            if (!isPositive && product > 0) {
                return false;
            } 
        }
        return true;       
     }
    
     private int crossProduct(List<Integer> p1, List<Integer> p2, List<Integer> p3) {
         return (p2.get(0) - p1.get(0)) * (p3.get(1) - p1.get(1)) - (p3.get(0) - p1.get(0)) * (p2.get(1) - p1.get(1));
     }
    
}

```