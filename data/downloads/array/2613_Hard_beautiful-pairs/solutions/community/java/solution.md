# Solution

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/beautiful-pairs/solutions/3439176/](https://leetcode.com/problems/beautiful-pairs/solutions/3439176/)

---

```C++ []
class Solution {
public:
    vector<int> beautifulPair(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size();
        unordered_map<long long, vector<int>> pl;
        for (int i = 0; i < n; ++i) {
            pl[f(nums1[i], nums2[i])].push_back(i);
        }
        vector<tuple<int, int, int>> points;
        for (int i = 0; i < n; ++i) {
            long long z = f(nums1[i], nums2[i]);
            if (pl[z].size() > 1) {
                return {i, pl[z][1]};
            }
            points.emplace_back(nums1[i], nums2[i], i);
        }
        function<tuple<int, int, int>(int, int)> dfs = [&](int l, int r) -> tuple<int, int, int> {
            if (l >= r) {
                return {1 << 30, -1, -1};
            }
            int m = (l + r) >> 1;
            int x = get<0>(points[m]);
            auto t1 = dfs(l, m);
            auto t2 = dfs(m + 1, r);
            if (get<0>(t1) > get<0>(t2) || (get<0>(t1) == get<0>(t2) && (get<1>(t1) > get<1>(t2) || (get<1>(t1) == get<1>(t2) && get<2>(t1) > get<2>(t2))))) {
                swap(t1, t2);
            }
            vector<tuple<int, int, int>> t;
            for (int i = l; i <= r; ++i) {
                if (abs(get<0>(points[i]) - x) <= get<0>(t1)) {
                    t.emplace_back(points[i]);
                }
            }
            sort(t.begin(), t.end(), [](const tuple<int, int, int>& a, const tuple<int, int, int>& b) {
                return get<1>(a) < get<1>(b);
            });
            for (int i = 0; i < t.size(); ++i) {
                for (int j = i + 1; j < t.size(); ++j) {
                    if (get<1>(t[j]) - get<1>(t[i]) > get<0>(t1)) {
                        break;
                    }
                    int pi = min(get<2>(t[i]), get<2>(t[j]));
                    int pj = max(get<2>(t[i]), get<2>(t[j]));
                    int d = dist(get<0>(t[i]), get<1>(t[i]), get<0>(t[j]), get<1>(t[j]));
                    if (d < get<0>(t1) || (d == get<0>(t1) && (pi < get<1>(t1) || (pi == get<1>(t1) && pj < get<2>(t1))))) {
                        t1 = {d, pi, pj};
                    }
                }
            }
            return t1;
        };
        sort(points.begin(), points.end());
        auto [_, pi, pj] = dfs(0, points.size() - 1);
        return {pi, pj};
    }
    long long f(int x, int y) {
        return x * 100000LL + y;
    }
    int dist(int x1, int y1, int x2, int y2) {
        return abs(x1 - x2) + abs(y1 - y2);
    }
};
```

```Python3 []
class Solution:
    def beautifulPair(self, nums1: List[int], nums2: List[int]) -> List[int]:
        def dist(x1: int, y1: int, x2: int, y2: int) -> int:
            return abs(x1 - x2) + abs(y1 - y2)

        def dfs(l: int, r: int):
            if l >= r:
                return inf, -1, -1
            m = (l + r) >> 1
            x = points[m][0]
            d1, pi1, pj1 = dfs(l, m)
            d2, pi2, pj2 = dfs(m + 1, r)
            if d1 > d2 or (d1 == d2 and (pi1 > pi2 or (pi1 == pi2 and pj1 > pj2))):
                d1, pi1, pj1 = d2, pi2, pj2
            t = [p for p in points[l: r + 1] if abs(p[0] - x) <= d1]
            t.sort(key=lambda x: x[1])
            for i in range(len(t)):
                for j in range(i + 1, len(t)):
                    if t[j][1] - t[i][1] > d1:
                        break
                    pi, pj = sorted([t[i][2], t[j][2]])
                    d = dist(t[i][0], t[i][1], t[j][0], t[j][1])
                    if d < d1 or (d == d1 and (pi < pi1 or (pi == pi1 and pj < pj1))):
                        d1, pi1, pj1 = d, pi, pj
            return d1, pi1, pj1

        pl = defaultdict(list)
        for i, (x, y) in enumerate(zip(nums1, nums2)):
            pl[(x, y)].append(i)
        points = []
        for i, (x, y) in enumerate(zip(nums1, nums2)):
            if len(pl[(x, y)]) > 1:
                return [i, pl[(x, y)][1]]
            points.append((x, y, i))
        points.sort()
        _, pi, pj = dfs(0, len(points) - 1)
        return [pi, pj]
```

```Java []
class Solution {
    private List<int[]> points = new ArrayList<>();
    public int[] beautifulPair(int[] nums1, int[] nums2) {
        int n = nums1.length;
        Map<Long, List<Integer>> pl = new HashMap<>();
        for (int i = 0; i < n; ++i) {
            long z = f(nums1[i], nums2[i]);
            pl.computeIfAbsent(z, k -> new ArrayList<>()).add(i);
        }
        for (int i = 0; i < n; ++i) {
            long z = f(nums1[i], nums2[i]);
            if (pl.get(z).size() > 1) {
                return new int[]{i, pl.get(z).get(1)};
            }
            points.add(new int[]{nums1[i], nums2[i], i});
        }
        points.sort((a, b) -> a[0] - b[0]);
        int[] ans = dfs(0, points.size() - 1);
        return new int[]{ans[1], ans[2]};
    }
    private long f(int x, int y) {
        return x * 100000L + y;
    }
    private int dist(int x1, int y1, int x2, int y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
    private int[] dfs(int l, int r) {
        if (l >= r) {
            return new int[]{1 << 30, -1, -1};
        }
        int m = (l + r) >> 1;
        int x = points.get(m)[0];
        int[] t1 = dfs(l, m);
        int[] t2 = dfs(m + 1, r);
        if (t1[0] > t2[0] || (t1[0] == t2[0] && (t1[1] > t2[1] || (t1[1] == t2[1] && t1[2] > t2[2])))) {
            t1 = t2;
        }
        List<int[]> t = new ArrayList<>();
        for (int i = l; i <= r; ++i) {
            if (Math.abs(points.get(i)[0] - x) <= t1[0]) {
                t.add(points.get(i));
            }
        }
        t.sort((a, b) -> a[1] - b[1]);
        for (int i = 0; i < t.size(); ++i) {
            for (int j = i + 1; j < t.size(); ++j) {
                if (t.get(j)[1] - t.get(i)[1] > t1[0]) {
                    break;
                }
                int pi = Math.min(t.get(i)[2], t.get(j)[2]);
                int pj = Math.max(t.get(i)[2], t.get(j)[2]);
                int d = dist(t.get(i)[0], t.get(i)[1], t.get(j)[0], t.get(j)[1]);
                if (d < t1[0] || (d == t1[0] && (pi < t1[1] || (pi == t1[1] && pj < t1[2])))) {
                    t1 = new int[]{d, pi, pj};
                }
            }
        }
        return t1;
    }
}
```
