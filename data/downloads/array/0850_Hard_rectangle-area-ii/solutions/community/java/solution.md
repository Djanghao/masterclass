# Solution

**Author:** deleted_user
**Votes:** 5
**Link:** [https://leetcode.com/problems/rectangle-area-ii/solutions/3491510/](https://leetcode.com/problems/rectangle-area-ii/solutions/3491510/)

---

```C++ []
class Solution {
public:
    #define ll long long
    ll MOD=1e9+7;
    static bool cmp(vector<int>&v1,vector<int>&v2){
        if(v1[0]==v2[0]){
            return v1[2]<v2[2];
        }
        return v1[0]<v2[0];
    }
    int rectangleArea(vector<vector<int>>& rectangles) {
        ll n=rectangles.size(),answer=0;
        set<ll>ss;
        for(auto &x:rectangles){
            ss.insert(x[1]);ss.insert(x[3]);
        }
        sort(rectangles.begin(),rectangles.end(),cmp);
        ll lower=*ss.begin();
        for(auto &x:ss){
            ll upper=x;
            ll height=upper-lower;
            ll left=rectangles[0][0],right=left;
            for(auto &y:rectangles){
                if(y[1]<=lower && y[3]>=upper){
                    if(y[0]>right){
                        answer=(answer+height*(right-left))%MOD;
                        left=y[0];
                    }
                    if(y[2]>right){
                        right=y[2];
                    }
                }
            }
            answer=(answer+height*(right-left))%MOD;
            lower=upper;
        }
        return answer%MOD;
    }
};
```

```Python3 []
class Solution:
    MOD = (10 ** 9) + 7
    OPEN_EVENT = 0
    CLOSE_EVENT = 1

    def rectangleArea(self, rectangles: List[List[int]]) -> int:
        events = []
        for start_x, start_y, end_x, end_y in rectangles:
            events.append((start_x, self.OPEN_EVENT, start_y, end_y))
            events.append((end_x, self.CLOSE_EVENT, start_y, end_y))
        
        events.sort(key=lambda event: (event[0], event[1]))

        total_area = 0
        previous_sweep_line_halt_point_on_x_axis = float('-inf')
        currently_open_rectangles_y_intervals = []
        for current_x, event_type, rec_start_y, rec_end_y in events:
            total_area += self._calculate_current_area(
                open_rectangles_y_intervals=currently_open_rectangles_y_intervals,
                width=current_x - previous_sweep_line_halt_point_on_x_axis,
            )
            if event_type == self.OPEN_EVENT:
                currently_open_rectangles_y_intervals.append((rec_start_y, rec_end_y))
            
            elif event_type == self.CLOSE_EVENT:
                currently_open_rectangles_y_intervals.remove((rec_start_y, rec_end_y))
            
            previous_sweep_line_halt_point_on_x_axis = current_x
        
        return total_area % self.MOD
    
    def _calculate_current_area(self, open_rectangles_y_intervals, width):
        if len(open_rectangles_y_intervals) == 0:
            return 0
        
        open_rectangles_y_intervals.sort(key=lambda open_rectangle_y_interval: open_rectangle_y_interval[0])

        current_area = 0

        start = open_rectangles_y_intervals[0][0]
        end = open_rectangles_y_intervals[0][1]
        for i in range(1, len(open_rectangles_y_intervals)):
            current_start_y, current_end_y = open_rectangles_y_intervals[i]

            if current_start_y <= end:
                end = max(end, current_end_y)
            else:
                height = end - start
                current_area += (width * height)

                start = current_start_y
                end = current_end_y
        

        height = end - start
        current_area += (width * height)

        return current_area
```

```Java []
class Solution {
    public int rectangleArea(int[][] rectangles) {
        int n = rectangles == null ? 0 : rectangles.length;
        if (n == 0) return 0;
        long xmin = Long.MAX_VALUE;
        long ymin = Long.MAX_VALUE;
        long xmax = Long.MIN_VALUE;
        long ymax = Long.MIN_VALUE;
        for(int[] r: rectangles) {
            if (r[0] < xmin) xmin = r[0];
            if (r[1] < ymin) ymin = r[1];
            if (r[2] > xmax) xmax = r[2];
            if (r[3] > ymax) ymax = r[3];
        }
        Node root = new Node(xmin, ymin, xmax, ymax, false);
        for(int[] r: rectangles) {
            root.add(r[0], r[1], r[2], r[3]);
        }
        return (int)(root.getFilledArea() % 1000000007L);
    }
    static class Node {
        long x1, y1, x2, y2;
        boolean filled;
        Node tl, tr, bl, br;
        Node(long x1, long y1, long x2, long y2, boolean filled) {
            this.x1 = x1;
            this.x2 = x2;
            this.y1 = y1;
            this.y2 = y2;
            this.filled = filled;
        }
        void add(int x1, int y1, int x2, int y2) {
            if (tl == null && filled) {
                return;
            }
            if (x1 >= this.x2 || x2 <= this.x1 || y1 >= this.y2 || y2 <= this.y1) {
                return;
            }
            if (x1 <= this.x1 && y1 <= this.y1 && x2 >= this.x2 && y2 >= this.y2) {
                filled = true;
                tl = tr = bl = br = null;
                return;
            }
            if (tl == null) {
                long x = this.x1 < x1 ? x1 : Math.min(x2, this.x2);
                long y = this.y1 < y1 ? y1 : Math.min(y2, this.y2);
                bl = new Node(this.x1, this.y1, x, y, false);
                br = new Node(x, this.y1, this.x2, y, false);
                tl = new Node(this.x1, y, x, this.y2, false);
                tr = new Node(x, y, this.x2, this.y2, false);
            }
            bl.add(x1, y1, x2, y2);
            br.add(x1, y1, x2, y2);
            tl.add(x1, y1, x2, y2);
            tr.add(x1, y1, x2, y2);
        }
        long getFilledArea() {
            long area;
            if (tl == null) {
                area = filled ? (x2-x1) * (y2-y1) : 0;
            } else {
                area = tl.getFilledArea() + tr.getFilledArea() + bl.getFilledArea() + br.getFilledArea();
            }
            return area;
        }
    }
}
```
