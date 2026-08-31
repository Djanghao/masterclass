# [C++} Simple ingenious approach, explained

**Author:** saritb734
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/1580830/](https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/1580830/)

---

**Idea**
The problem is quite hard if the constraints are made large. But, for such a small constraint, I came up with a solution which will run in ```O(360n^2)``` time. The idea is to iterate through each point and for the ```ith``` point, we consider a circle of radius ```r``` (given) and centered at a distance ```r``` in  ```360``` different directions from the ```ith``` point. The idea is to consider all circles which includes the ```ith``` point at it's circumference. Then, for each such circle we find out how many of the given ```n``` points lie within it. We take maximum of these values and our answer.

**C++ Solution**
```
int numPoints(vector<vector<int>>& points, int r) {
	int n = points.size();
	int count = 0;
	double d2r = 3.14/180.00;
	int res = 0;

	for(int i = 0; i < n; i++){
		double pa = points[i][0];
		double pb = points[i][1];

		for(int ang = 0; ang < 360; ang++){
			// center of the circle
			double a = pa + (double)r*cos(d2r*ang);
			double b = pb + (double)r*sin(d2r*ang);

			int count = 0;
			for(int k = 0; k < n; k++){
				double dist = sqrt(pow(a-points[k][0], 2) + pow(b-points[k][1], 2));

				if(dist <= (double)(r+0.01)){
					count += 1;
				}
			}
			res = max(res, count);
		}
	}

	return res;
}
```