# C# Beats 100% Clean Code O(kn)

**Author:** jbaum517
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4060052/](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4060052/)

---

# Code
```
public class Solution {
    public int CountPairs(IList<IList<int>> coordinates, int k) {
        int count = 0;
        var map = new Dictionary<(int,int),int>();
        for (int i = 0; i < coordinates.Count; i++){
            int x1 = coordinates[i][0];
            int y1 = coordinates[i][1];
            var key1 = (x1,y1);
            for (int j = 0; j <= k; j++){
                int x2 = x1^j;
                int y2 = y1^(k-j);
                var key2 = (x2,y2);
                if (map.ContainsKey(key2)){
                    count += map[key2];
                }
            }
            if (!map.ContainsKey(key1)) map.Add(key1, 0);
            map[key1]++;
        }
        return count;
    }
}
```