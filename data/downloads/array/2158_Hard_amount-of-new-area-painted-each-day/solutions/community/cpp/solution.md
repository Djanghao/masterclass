# [C++] 2 solutions: Height balanced Tree | Sweep Line solution [Detailed Explanation]

**Author:** cryptx_
**Votes:** 3
**Link:** [https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/2268963/](https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/2268963/)

---

```
/*
    https://leetcode.com/problems/amount-of-new-area-painted-each-day/
    
    Solution 1: Height Balanced Tree
    
    Idea is to use a height balanced tree to save the intervals. Now for each interval
    we find the position where the interval should lie, then check with its previous if it overlaps.
    If previous overlaps, remove the portion of area common.
    Then start iterating through the intervals that lie after until they overlap. For each overlapping one, subtract
    the common area. We also merge the overlapping intervals. 
    Finally insert the merged interval.
    
    
    Solution 2: Sweep Line
    Imagine a 2D coordinate system. We have 2 kinds of event points: Start interval and End interval points.
    We create a point(index, event_type) and plot on the grid. Now imagine there is a vertical line going from left to
    right. for a given x coordinate, it will process all the points there. So Start interval events will result in the 
    points being added and End interval points will result in the points being removed from the sweep line.
    
    Now the idea is for a given interval point (x coordinate), the smallest index day will actually will paint that.
    So we pick the smallest event point and for that index do += 1, indicating that for that day a point was painted.
*/
class Solution {
private:
    struct Interval {
        int start, end;
        Interval(int start, int end): start(start), end(end) {};
    };
    
    struct Point {
        int pt;
        bool is_start;
        
        Point(int pt, bool is_start): pt(pt), is_start(is_start) {};
    };
public:
    ///////////////////////////////////// SOLTUION 1
    // TC: O(nlogn)
    // SC: O(n)
    // Worst case is when we have n disjoint intervals and current intervals overlaps all of them
    // Here it will take O(n) to merge all the intervals, and then insert an interval covering all of them
    // This scenario won't happen often as each time we push an interval covering all the disjoint ones, so the
    // next time even if there is another interval like this, it will see only one interval after it
    vector<int> treeSol(vector<vector<int>>& paint) {
        vector<int> painted(paint.size(), 0);
        
        // Comparator based on start time
        auto comp = [&](const Interval& a, const Interval& b) { return a.start < b.start; };
        set<Interval, decltype(comp)> intervals(comp);
        
        for(int i = 0; i < paint.size(); i++) {
            Interval interval = {paint[i][0], paint[i][1]};
            
            // find the position where the interval should lie
            auto it = intervals.lower_bound(interval);
            // max possible paintable length
            int length = interval.end - interval.start;
            // tracks the ongoing current interval
            Interval curr = interval;
            
            // check if the previous interval overlaps
            if(!intervals.empty() && it != intervals.begin() && prev(it)->end > interval.start) {
                --it;
                curr.start = min(curr.start, it->start);
            }
         
            // For all the overlapping intervals, remove the common time duration 
            // they share with the current interval
            while(it != intervals.end() && (interval.end > it->start)) {
                // remove the shared duration
                int shared_duration = (min(it->end, interval.end) - max(it->start, interval.start));
                length -= shared_duration;
                
                // merge the intervals
                curr.end = max(curr.end, it->end);
                ++it;
                intervals.erase(prev(it));
            }
            // insert the merged interval
            intervals.insert(curr);
            
            painted[i] = length;
        }
        return painted;
    }
    
    /////////////////////////////////////////// SOLUTION 2
    // TC: O(nlogn + m), n = no. of points, m = farthest point
    // SC: O(n)
    vector<int> sweepLineSol(vector<vector<int>>& paint) {
        vector<int> painted(paint.size(), 0);
        // Find the farthest right point
        auto comp = [](const vector<int>& a, const vector<int>& b) { return a[1] < b[1]; };
        int farthest_pt = (*max_element(paint.begin(), paint.end(), comp))[1];
        
        // Add the pts to the coordinate system
        // points[x] = [Point] Point events for given x coordinate
        vector<vector<Point> > points(farthest_pt + 1);
        for(int i = 0; i < paint.size(); i++) {
            points[paint[i][0]].emplace_back(Point(i, true)); // entry point
            points[paint[i][1]].emplace_back(Point(i, false)); // exit point
        }
        // This is an imaginary vertical line that will traverse from left to right
        // Stores the vertical points for a given x coordinate
        set<int> sweep_line;
        
        for(int x = 0; x <= farthest_pt; x++) {
            // Add all the event points for given x
            for(auto point: points[x]) {
                if(point.is_start)
                    sweep_line.emplace(point.pt);
                else
                    sweep_line.erase(point.pt);
            }
            // For the current x coordinate, pick the smallest day index
            // when the pt will be painted
            if(!sweep_line.empty())
                painted[*sweep_line.begin()] += 1;
        }
        return painted;
    }
    
    vector<int> amountPainted(vector<vector<int>>& paint) {
        // return treeSol(paint);
        return sweepLineSol(paint);
    }
};
```