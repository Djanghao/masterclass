# C++ ,Java Easy Fastest using Binary Search and Follow up Solution Explanation

**Author:** raghav9352
**Votes:** 19
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1206199/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1206199/)

---

Easiest approach we see is using brute force for each query we'll iterate over all points and find weather particular point is in circle or not this will take O(n) time for each Query

Follow Up Solution
To reduce comparisons we can think of that in each query we are serching points by comparing each and every point with central point and by this argument first intution comes in mind to fasten every searching we use binary search.


1. Sort points array on basis of one axis either x or y (here we are using x axis)
2. For each query:
	a.  Now if we find the first point fp which is coming inside or on boundry of circle on the x axis then we won't need to iterate other points (it's saving our extra comparison)
	b. Because points array is sorted on the basis of x-axis so we just need to iterate from fp point to untill we get out from the circle (we can imagine like we are travelling on parallel line of x-axis that is intersecting centre point of circle)
	c. now we can just compare point with centre point to know weather it's inside or outside.

C++   CODE --

```

int sqr(int a) {
    return a * a;
}

//find lower bound of left boundry
int find_left_boundry_index(vector<vector<int> > & points , int x_center , int y_center , int r) {

    int lo = 0, hi = points.size();

    while (lo < hi) {

        int mi = lo + (hi - lo ) / 2;

        if (x_center - r <= points[mi][0])
            hi = mi;
        else
            lo = mi + 1;

    }
    return hi;

}
vector<int> countPoints(vector<vector<int>>& points, vector<vector<int>>& queries) {

    sort(points.begin(), points.end());
    vector<int> ans;

    for (int i = 0; i < queries.size(); i++) {

        int x_center = queries[i][0], y_center = queries[i][1], r = queries[i][2];
        int index = find_left_boundry_index(points, x_center , y_center, r); 
        int count = 0;

        for (int j = index; j < points.size() and points[j][0] <= x_center + r; j++) {

            int x = points[j][0];
            int y = points[j][1];
			// square of distance from center
            count += sqr(x_center - x) + sqr(y_center - y) <= r * r;
        }

        ans.push_back(count);
    }
    return ans;
}

```


JAVA CODE --
```
class Solution {
    int sqr(int a) {
        return a * a;
    }

    //find lower bound of left boundry
    int findLeftBoundryIndex(int [][] points, int x_center , int y_center , int r) {

        int lo = 0, hi = points.length;

        while (lo < hi) {

            int mi = lo + (hi - lo ) / 2;

            if (x_center - r <= points[mi][0])
                hi = mi;
            else
                lo = mi + 1;

        }
        return hi;

    }
    public int[] countPoints(int[][] points, int[][] queries) {
        Arrays.sort(points, (a, b) -> a[0] - b[0]);

        int n = queries.length;
        int ans[] = new int[n];

        for (int i = 0; i < n; i++) {
            int x_center = queries[i][0], y_center = queries[i][1], r = queries[i][2];
            int index = findLeftBoundryIndex(points, x_center , y_center, r);
            int count = 0;

            for (int j = index; j < points.length && points[j][0] <= x_center + r; j++) {

                int x = points[j][0];
                int y = points[j][1];
                // square of distance from center
                int dist = sqr(x_center - x) + sqr(y_center - y);
                if (dist <= r * r)
                    count++;
            }
            ans[i] = count;
        }
        return  ans;
    }
}
```

It won't reduce our time complexity from O(n) to smaller because to count we have to compare points in certain search space but in above code we are reducing our search space so it will definately speed up with above optimizations.

Improvements or suggestions would be highly appreciated in comments :)