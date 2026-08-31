# C++ solution using priority queue with explaination

**Author:** Maitreya47
**Votes:** 14
**Link:** [https://leetcode.com/problems/max-value-of-equation/solutions/1293582/](https://leetcode.com/problems/max-value-of-equation/solutions/1293582/)

---

The question asks us to maximise the value of {yi + yj + abs(xi-xj) }. Now if i<j, and we know all points are sorted according to x values. Thus, solving the equation we get- 
yi+yj-xi+xj => (xj+yj) + (yi-xi)
Now for a given point, xj+yj will be constant. We only need to check the maximum (yi-xi) point that satisfy's the condition (xj-xi)<=k. So we store the pair of (yi-xi) and xi in a priority_queue (that is basically a max heap).
If the difference between xj and x at top of priority queue is >k, we pop that element. Why do we permanently pop the element? Remember we already have a sorted vector of points, so any x value appearing any further in processing will definetly have xj > k+xi, hence if the x value at top of Priority Queue doesnt satisfy condition for current xj, it wont satisify condition for rest of the xj's > current xj.
Calculate the value of equation with current top after checking previous condition. Note that as we use priority queue, we will always have the highest difference (yi-xi) at top of the PQ. Compare it with max and insert current difference and x value in PQ. 
At last return the max value of equation.
```
class Solution {
public:
    int findMaxValueOfEquation(vector<vector<int>>& points, int k) {
        priority_queue<pair<int, int>> pq;
        int ret = INT_MIN;
        for(auto point:points)
        {
            while(pq.size() && point[0]-pq.top().second>k)
                pq.pop();
            if(!pq.empty())
                ret = max(ret, point[0] + point[1] + pq.top().first);
            pq.push(make_pair(point[1]-point[0], point[0]));
        }
        return ret;
    }
};
```