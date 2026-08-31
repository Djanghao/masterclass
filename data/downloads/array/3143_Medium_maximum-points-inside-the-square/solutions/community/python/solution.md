# Easy solution - Contest  11/05/2024

**Author:** MangeurDeSushi
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5143826/](https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5143826/)

---

# Approach
to begin with, we create a dict where we add for each point, we get the maximum absolute value between x and y and associate it with the key.
Ex : b = [-1,-2] => ptstag[2] = b
So we keep track of the visited points, and as long as we don't see a point we already visited, we continue to increate the size of the square.
if tag in ptstag[r] and r<top: top = r
this line is important because if 2 tags are at the same distance, we can create a square with one of them so that's the max distance !

```python []
class Solution:
    def maxPointsInsideSquare(self, points: List[List[int]], s: str) -> int:
        ptstag = defaultdict(set)
        top = float('inf')
        
        for (x, y), tag in zip(points, s):
            r = max(abs(x), abs(y))
            if tag in ptstag[r] and r<top:
                top = r
            ptstag[r].add(tag)

        visited = []
        maxi = 0
        
        for r in sorted(ptstag):
            if r>=top:
                return maxi
            tmp = 0
            for v in ptstag[r]:
                if v in visited:
                    return maxi
                else:
                    tmp += 1
                    visited.append(v)
            maxi += tmp

        return maxi
```
```cpp []
class Solution {
public:
    int maxPointsInsideSquare(vector<vector<int>>& points, string s) {
        unordered_map<int, unordered_set<char>> ptstag;
        int top = INT_MAX;
        
        for (int i = 0; i < points.size(); i++) {
            int x = points[i][0];
            int y = points[i][1];
            char tag = s[i];
            int r = max(abs(x), abs(y));
            if (ptstag.count(r) && ptstag[r].count(tag) && r < top) {
                top = r;
            }
            if (ptstag.find(r) == ptstag.end()) {
                ptstag[r] = unordered_set<char>();
            }
            ptstag[r].insert(tag);
        }

        vector<char> visited;
        int maxi = 0;

        vector<int> sortedR;
        for (auto const& entry : ptstag) {
            sortedR.push_back(entry.first);
        }
        sort(sortedR.begin(), sortedR.end());

        for (int r : sortedR) {
            if (r >= top) {
                return maxi;
            }
            int tmp = 0;
            for (char v : ptstag[r]) {
                if (find(visited.begin(), visited.end(), v) != visited.end()) {
                    return maxi;
                } else {
                    tmp++;
                    visited.push_back(v);
                }
            }
            maxi += tmp;
        }

        return maxi;
    }
};
```
```java []
class Solution {
    public int maxPointsInsideSquare(int[][] points, String s) {
        Map<Integer, Set<Character>> ptstag = new HashMap<>();
        int top = Integer.MAX_VALUE;
        
        for (int i = 0; i < points.length; i++) {
            int x = points[i][0];
            int y = points[i][1];
            char tag = s.charAt(i);
            int r = Math.max(Math.abs(x), Math.abs(y));
            if (ptstag.containsKey(r) && ptstag.get(r).contains(tag) && r < top) {
                top = r;
            }
            if (!ptstag.containsKey(r)) {
                ptstag.put(r, new HashSet<>());
            }
            ptstag.get(r).add(tag);
        }

        List<Character> visited = new ArrayList<>();
        int maxi = 0;

        List<Integer> sortedR = new ArrayList<>(ptstag.keySet());
        Collections.sort(sortedR);

        for (int r : sortedR) {
            if (r >= top) {
                return maxi;
            }
            int tmp = 0;
            for (char v : ptstag.get(r)) {
                if (visited.contains(v)) {
                    return maxi;
                } else {
                    tmp++;
                    visited.add(v);
                }
            }
            maxi += tmp;
        }

        return maxi;
    }
}
```
