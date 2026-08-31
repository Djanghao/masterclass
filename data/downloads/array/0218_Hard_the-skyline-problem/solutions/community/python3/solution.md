# Solution

**Author:** deleted_user
**Votes:** 439
**Link:** [https://leetcode.com/problems/the-skyline-problem/solutions/2997005/](https://leetcode.com/problems/the-skyline-problem/solutions/2997005/)

---

```C++ []
class Solution {
public:
    vector<vector<int>> getSkyline(vector<vector<int>>& buildings) {
        int edge_idx = 0;
        vector<pair<int, int>> edges;
        priority_queue<pair<int, int>> pq;
        vector<vector<int>> skyline;

        for (int i = 0; i < buildings.size(); ++i) {
            const auto &b = buildings[i];
            edges.emplace_back(b[0], i);
            edges.emplace_back(b[1], i);
        }

        std::sort(edges.begin(), edges.end());

        while (edge_idx < edges.size()) {
            int curr_height;
            const auto &[curr_x, _] = edges[edge_idx];
            while (edge_idx < edges.size() &&
                    curr_x == edges[edge_idx].first) {
                const auto &[_, building_idx] = edges[edge_idx];
                const auto &b = buildings[building_idx];
                if (b[0] == curr_x)
                    pq.emplace(b[2], b[1]);
                ++edge_idx;
            }
            while (!pq.empty() && pq.top().second <= curr_x)
                pq.pop();
            curr_height = pq.empty() ? 0 : pq.top().first;
            if (skyline.empty() || skyline.back()[1] != curr_height)
                skyline.push_back({curr_x, curr_height});
        }
        return skyline;
    }
};
```

```Python3 []
from sortedcontainers import SortedList
class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        if len(buildings) == 0: 
            return []
        
        buildings.sort(key=lambda v: v[2])
        pos, height = [0], [0]
        for left, right, h in buildings: 
            i = bisect_left(pos, left)
            j = bisect_right(pos, right)
            height[i:j] = [h, height[j-1]]
            pos[i:j] = [left, right]
        print(height, pos)
        res = []
        prev = 0
        for v, h in zip(pos, height): 
            if h != prev:
                res.append([v,h]) 
                prev = h
                
        return res
```

```Java []
class TopNode {
    int x;
    int h;
    TopNode next;
    TopNode() {
    }
    TopNode(int x, int h) {
        this.x = x;
        this.h = h;
    }

    void insert(TopNode n) {
        n.next = next;
        next = n;
    }

}
class Solution {
    static final int LEFT=0, RIGHT=1, HEIGHT=2;
    public List<List<Integer>> getSkyline(int[][] buildings) {
        TopNode head = new TopNode(0,0);
        head.insert(new TopNode(Integer.MAX_VALUE, 0));
        TopNode start = head;
        
        for (int i = 0; i<buildings.length; i++) {
            int[] b = buildings[i];
            int bL = buildings[i][LEFT];
            int bR = buildings[i][RIGHT];
            int bH = buildings[i][HEIGHT];
            //System.out.println(Arrays.toString(buildings[i]));
            while (bL >= start.next.x) { start = start.next; } 
            //System.out.println(start.toString());
            for (TopNode t = start ; bR > t.x; t = t.next) {
                //System.out.println(head.toString());
                if (bH <= t.h) {
                    continue;
                }

                TopNode stop = t;
                while (stop.next != null && stop.next.x < bR && stop.next.h <= bH ) {
                    stop = stop.next;
                }
                
                if (bL <= t.x) {
                    if (bR >= stop.next.x) {
                        t.next = stop.next;
                        t.h = bH;
                    }
                    else if (t == stop) {
                        t.insert(new TopNode(bR,t.h));
                        t.h = bH;
                        break;
                    }
                    else {
                        stop.x = bR;
                        t.h = bH;
                        t.next = stop;
                        break;
                    }
                }
                else {
                    if (bR >= stop.next.x) {
                        if (t == stop) {
                            t.insert(new TopNode(bL, bH));
                        }
                        else {
                            t.next = stop;
                            stop.x = bL;
                            stop.h = bH;
                        }
                        break;
                    }
                    else if (t == stop) {
                        t.insert(new TopNode(bL,bH));
                        t.next.insert(new TopNode(bR,t.h));
                        break;
                    }
                    else {
                        t.next = stop;
                        t.insert(new TopNode(bL,bH));
                        stop.x = bR;
                        break;
                    }
                }
                t = stop;

            }
        }

        List<List<Integer>> skyline = new ArrayList<>();

        if (head.h == 0)
            head = head.next;
        while (head != null) {
            int height = head.h;
            skyline.add(List.of(head.x, height));
            while ( (head = head.next) != null && head.h == height) {}
        }

        return skyline;
    }

}
```
