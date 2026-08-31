# Sharing my simple solution with explanation

**Author:** zxyperfect
**Votes:** 281
**Link:** [https://leetcode.com/problems/max-points-on-a-line/solutions/47117/](https://leetcode.com/problems/max-points-on-a-line/solutions/47117/)

---

    int maxPoints(vector<Point> &points) {
        int result = 0;
        for(int i = 0; i < points.size(); i++){
            int samePoint = 1;
            unordered_map<double, int> map;
            for(int j = i + 1; j < points.size(); j++){
                if(points[i].x == points[j].x && points[i].y == points[j].y){
                    samePoint++;
                }
                else if(points[i].x == points[j].x){
                    map[INT_MAX]++;
                }
                else{
                    double slope = double(points[i].y - points[j].y) / double(points[i].x - points[j].x);
                    map[slope]++;
                }
            }
            int localMax = 0;
            for(auto it = map.begin(); it != map.end(); it++){
                localMax = max(localMax, it->second);
            }
            localMax += samePoint;
            result = max(result, localMax);
        }
        return result;
    }

First, let's talk about mathematics.

How to determine if three points are on the same line?

The answer is to see if slopes of arbitrary two pairs are the same.

Second, let's see what the minimum time complexity can be.

Definitely, O(n^2). It's because you have to calculate all slopes between any two points. 

Then let's go back to the solution of this problem.

In order to make this discussion simpler, let's pick a random point A as an example.

Given point A, we need to calculate all slopes between A and other points. There will be three cases:

1. Some other point is the same as point A.

2. Some other point has the same x coordinate as point A, which will result to a positive infinite slope.

3. General case. We can calculate slope.

We can store all slopes in a hash table. And we find which slope shows up mostly. Then add the number of same points to it. Then we know the maximum number of points on the same line for point A.

We can do the same thing to point B, point C...

Finally, just return the maximum result among point A, point B, point C...