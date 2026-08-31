# [C++] Binary Search

**Author:** amansinghoriginal
**Votes:** 45
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/1224661/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/1224661/)

---

Simple binary search problem with some details to be careful about.
We only need to wait between two trains, so do a ceiling division of (distance/speed) for all trains but the last one, and do exact division for the last one.

Perform binary search on solution space.

Time Complexity: `O(N lg K)` where N = number of trains, K = range of solution space
Space Complexity: `O(1)` since no extra space.
```
class Solution
{
    bool canReachInTime(const vector<int>& dist, const double hour, int speed)
    {
        double time = 0;
        for (int i = 0; i < dist.size() - 1; ++i)
            time += ((dist[i] + speed - 1) / speed);
        
        time += ((double)dist.back()) / speed;
        return time <= hour;
    }
    
public:
    int minSpeedOnTime(vector<int>& dist, double hour)
    {
        int N = dist.size();
        if (hour <= (double)(N - 1))
            return -1;
        
        int lo = 1, hi = 1e7, mi;
        while (lo < hi)
        {
            mi = (lo + hi) / 2;
            if (canReachInTime(dist, hour, mi))
                hi = mi;
            else
                lo = mi + 1;
        }
        
        return hi;
    }
};
```