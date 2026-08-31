# Solution

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/line-reflection/solutions/3331741/](https://leetcode.com/problems/line-reflection/solutions/3331741/)

---

```C++ []
class Solution {
public:
    struct Hash {
        size_t operator()(const pair<int, int>& key) const {
            return (hash<int>()(key.first) << 32) | hash<int>()(key.second);
        }
    };
    bool isReflected(vector<vector<int>>& points) {
        auto [it1, it2] = minmax_element(points.begin(), points.end(), [](const vector<int>& p, const vector<int>& q) {
            return p[0] < q[0];
        });
        int a = (*it1)[0];
        int b = (*it2)[0];
        
        unordered_set<pair<int, int>, Hash> set;
        for (const auto& p : points) {
            int x = p[0], y = p[1];
            set.emplace(x, y);
        }
        
        for (const auto& p : points) {
            int x = p[0], y = p[1];
            int x2 = a + b - x;
            if (!set.count({x2, y}))
                return false;
        }
        return true;
    }
};
class Solution1 {
public:
    bool isReflected(vector<vector<int>>& points) {
        int minX = points[0][0];
        int maxX = minX;
        for (auto& p : points) {
            minX = min(minX, p[0]);
            maxX = max(maxX, p[0]);
        }
        int center2 = minX + maxX;
        
        set<pair<int, int>> set;
        for (auto& p : points) {
            int x = p[0];
            int y = p[1];
            set.insert({x, y});
        }
        for (auto [x, y] : set) {
            int x2 = center2 - x;
            if (!set.count({x2, y}))
                return false;
        }
        return true;
    }
};
```

```Python3 []
class Solution:
    def isReflected(self, points: List[List[int]]) -> bool:
        res = True
        x0 = 0
        table = {}
        for (x, y) in points:
            table[(x, y)] = 0
        for (x, y) in table:
            x0 += x
        x0 /= len(table)
        for (x, y) in table:
            x_ref = 2 * x0 - x
            y_ref = y
            if (x_ref, y_ref) not in table:
                res = False
                break
        return res
```

```Java []
class Solution {
    public boolean isReflected(int[][] points) {
        Arrays.sort(points, (a,b) -> {
            if(a[0] != b[0]){
                return a[0] - b[0];
            }else{
                return a[1] - b[1];
            }
        });
        int min = points[0][0];
        int max = points[points.length - 1][0];
        int sum = max + min;
        for(int[] p : points){
            int target = sum - p[0];
            if(!binary(points, target, p[1])){
                return false;
            }
        }
        return true;
    }
    public boolean binary(int[][] points, int x, int y){
        int left = 0;
        int right = points.length - 1;
        while(left <= right){
            int mid = left + (right - left) / 2;
            if(points[mid][0] == x && points[mid][1] == y)return true;
            if(points[mid][0] == x){
                if(points[mid][1] > y){
                    right = mid - 1;
                }else{
                    left = mid + 1;
                }
            }else{
                if(points[mid][0] > x){
                    right = mid - 1;
                }else{
                    left = mid + 1;
                }
            }

        }
        return false;
    }
}
```
