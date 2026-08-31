# Java - 100% CPU - 100% Memory - O(N^3) - Area function

**Author:** jatish
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/880414/](https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/880414/)

---

**Steps to solve this**
1.   Fix the *first* point in the given list and see if it can be used to form a rectangle // loop (1)
2.   Fix the *second* point on the right of "First" point and check if it can be used for form a rectangle loop (2)
3.   Fix the *third* point to the right of "Second" and see if they form a Rectangle
	3.b Exception to this rule are if points form a straight line will make rectangle with Zero area
4.  Calculate the area that these points form
             |
			 |
			 |____________________
			 
			 In the above (x1,y1) (x2,y2) (x3,y3) = We can find the length and width that makes area
5. Calculate the area formed by three points 
  5.a Using the Length and Width
  5.b Using the points - Core maths function implemented in code calculateArea(int[][] points, int i, int j, int k)

	Note: What we have?
	  a. Three points
	  b. Area three points forming
	  c. Minimum area rectangle seen till now
  
6. Last check to perform?
  Does the "Fourth" point exists in the List of points?
  
7. Yes? Update the Tracked Minimum
6. 

```
class Solution {
    public double minAreaFreeRect(int[][] points) {
        Map<Integer, Set<Integer>> map = new HashMap<>();
        double area;
        
        for(int[] point: points){
            if(!map.containsKey(point[0])){
                map.put(point[0], new HashSet<>());
            }            
            map.get(point[0]).add(point[1]);
        }//end of for
        
        double minArea = Double.MAX_VALUE;
        
        int n = points.length;
        
        for(int i=0; i<n -2; i++){
            for(int j=i+1; j<n - 1; j++){
                int dx1 = points[j][0] - points[i][0];
                int dy1 = points[j][1] - points[i][1];
                //get the 3rd point
                for(int k = j+1; k<n; k++){
                    int dx2 = points[k][0] - points[i][0];
                    int dy2 = points[k][1] - points[i][1];
                    
                    if(dx1*dx2 + dy1*dy2 != 0){
                        continue;
                    }
                    //find the 4th point
                    int x = dx1 + points[k][0];
                    int y = dy1 + points[k][1];
                    
                    area = calculateArea(points, i, j, k);
                    if(area >= minArea){
                        continue;
                    }
                    //4th point exists
                    if(map.get(x) != null && map.get(x).contains(y)){
                        minArea = area;
                    }
                }
            }
        }
        return minArea == Double.MAX_VALUE ? 0.0 : minArea;
    }
    
    private double calculateArea(int[][] points, int i, int j, int k) {
        int[] first = points[i];
        int[] second = points[j];
        int[] third = points[k];
        return Math.abs((first[0] * (second[1] - third[1])) +
                (second[0] * (third[1] - first[1])) + 
            (third[0] * (first[1] - second[1])));
    }
}