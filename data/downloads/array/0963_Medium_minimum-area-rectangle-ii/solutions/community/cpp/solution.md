# Easy to understand C++ Solution | 🔥🔥

**Author:** rahul2140kumar
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/3300670/](https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/3300670/)

---



# Approach
The approach used in the code is to iterate through all possible combinations of three points, check if they form a right triangle, and then check if there exists a fourth point that can form a rectangle with the three original points. If such a rectangle exists, then its area is calculated and compared to the current minimum area. At the end of the iteration, the minimum area is returned.

Here is a breakdown of the main steps in the code:

1. First, an unordered_map is created to store all the points. The keys of the map are the x-coordinates and the values are sets of y-coordinates. This is done to easily access points with a particular x-coordinate while checking for rectangles.
2. Next, three nested loops are used to generate all possible combinations of three points from the given set of points.
3. For each triplet of points (i, j, k), the code checks if they form a right-angled triangle using the formula:
- (xj-xi)(xk-xi) + (yj-yi)(yk-yi) = 0

- This condition is simplified to dx1dx2 + dy1dy2 == 0
- If this condition is satisfied, it means that the three points form a right-angled triangle.

4. After finding a right-angled triangle, the code calculates the fourth point (m) which lies on the diagonal opposite to the right angle.
5. The coordinates of the fourth point are calculated using the formula:
for "xm" --> (xj+xk)/2 = (xm+xi)/2  and for "ym" --> (yj+yk)/2 = (ym+yi)/2. After simplify the equation 

- xm = xj+xk - xi
- ym = yj+yk - yi
6. Finally, the code calculates the area of the rectangle formed by the four points and checks if it is the minimum area seen so far. If it is, the minimum area is updated.
If no rectangle is found, the function returns 0.0.


# Complexity
- Time complexity:
Overall, the code uses a brute-force approach to check all possible combinations of points, but takes advantage of efficient data structures such as unordered maps and sets to reduce the number of operations required.
TC = O(n^3)
- Space complexity:
SC = O(N)

# Code
```
class Solution {
public:

    double minAreaFreeRect(vector<vector<int>>& points) {
        unordered_map<int, unordered_set<int>> mp;
        for(auto p: points){
            mp[p[0]].insert(p[1]); // x-->{y1,y2,..}
        }

        double area=DBL_MAX; 
        // Every time we will take three coordinate points(i, j, k) and we will check that can these three point form a right traingle. if slop1*slpo2=-1 then three points form right angle traingle
        // slope1 = (yj-yi)/(xj-xi) 
        // slope2 = (yk-yi)/(xk-xi)

        // slope1*slop2=-1, 
        // simpyfy this==> (xj-xi)*(xk-xi) + (yj-yi)*(yk-yi) =0
        // ===>dx1*dx2 + dy1*dy2 ==0[if right angle traingle]

        // then we will find fourth point, we know both digonal have same mid points then then 
        // fourth point(m) can be found as
        // (xj+xk)/2 = (xm+xi)/2 ===> xm = xj+xk - xi
        // (yj+yk)/2 = (ym+yi)/2 ===> ym = yj+yk - yi
        for(int i=0; i<points.size(); i++){
            for(int j=i+1; j<points.size(); j++){
                for(int k=j+1; k<points.size(); k++){
                    // finds dx1, dx2, dy1, dy2
                    int dx1 = points[j][0]-points[i][0];
                    int dx2 = points[k][0]-points[i][0];
                    int dy1 = points[j][1]-points[i][1];
                    int dy2 = points[k][1]-points[i][1];
                    // check these three points can form a right traingle
                    if(dx1*dx2 + dy1*dy2 ==0){ // right traingle
                        // find the fourht point 
                        // intersection point of two digonal will have same points
                        // xm = xj+xk - xi, ym = yj+yk - yi
                        int xm = dx1 + points[k][0];
                        int ym = dy1 + points[k][1];
                        // check this point exist into the map
                        if(mp[xm].find(ym)!=mp[xm].end()){
                            double area1 = sqrt(dx1*dx1 + dy1*dy1)*sqrt(dx2*dx2 + dy2*dy2);
                            if(area>area1){
                                area = area1;
                            }
                        }
                    }
                }
            }
        }

        if(area == DBL_MAX) return 0.0;
        return area;
    }
};
```