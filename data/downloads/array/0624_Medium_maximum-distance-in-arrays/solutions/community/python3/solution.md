# Easy Greedy Solution | Beats 100%

**Author:** Sachinonly__
**Votes:** 343
**Link:** [https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5642927/](https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5642927/)

---

# Code
```python []
class Solution(object):
    def maxDistance(self, arrays):
        smallest = arrays[0][0]
        biggest = arrays[0][-1]
        max_distance = 0

        for i in range(1, len(arrays)):
            arr = arrays[i]
            max_distance = max(max_distance, abs(arr[-1] - smallest), abs(biggest - arr[0]))
            smallest = min(smallest, arr[0])
            biggest = max(biggest, arr[-1])

        return max_distance
```
```C++ []
class Solution {
public:
    int maxDistance(vector<vector<int>>& arrays) {
        int smallest = arrays[0][0];
        int biggest = arrays[0].back();
        int max_distance = 0;

        for (int i = 1; i < arrays.size(); ++i) {
            max_distance = max(max_distance, abs(arrays[i].back() - smallest));
            max_distance = max(max_distance, abs(biggest - arrays[i][0]));
            smallest = min(smallest, arrays[i][0]);
            biggest = max(biggest, arrays[i].back());
        }

        return max_distance;
    }
};
```
``` Java []
class Solution {
    public int maxDistance(List<List<Integer>> arrays) {
        int smallest = arrays.get(0).get(0);
        int biggest = arrays.get(0).get(arrays.get(0).size() - 1);
        int maxDistance = 0;

        for (int i = 1; i < arrays.size(); i++) {
            maxDistance = Math.max(maxDistance, Math.abs(arrays.get(i).get(arrays.get(i).size() - 1) - smallest));
            maxDistance = Math.max(maxDistance, Math.abs(biggest - arrays.get(i).get(0)));
            smallest = Math.min(smallest, arrays.get(i).get(0));
            biggest = Math.max(biggest, arrays.get(i).get(arrays.get(i).size() - 1));
        }

        return maxDistance;
    }
}
```
![unnamed.jpg](./images/0.jpeg)
