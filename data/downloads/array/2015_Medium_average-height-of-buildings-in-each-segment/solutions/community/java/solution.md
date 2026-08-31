# Java Concise TreeMap 18 Lines

**Author:** Student2091
**Votes:** 1
**Link:** [https://leetcode.com/problems/average-height-of-buildings-in-each-segment/solutions/1714374/](https://leetcode.com/problems/average-height-of-buildings-in-each-segment/solutions/1714374/)

---

- This is kind of like the skyline problem on leetcode except we have way less edge cases to watch out for. 
- The only edge case is when buildings end and start, the average does not change. 
- So in order to address that, we only add stuff to our answer array when the average changes.
- Also, note that `average` has to be at least 1, if it is 0, then there is no building and we don't add it either.
```
class Solution {
    public int[][] averageHeightOfBuildings(int[][] buildings) {
        List<int[]> ans = new ArrayList<>();
        TreeMap<Integer, Integer> map = new TreeMap<>();
        HashMap<Integer, Integer> cntMap = new HashMap<>();
        for (int[] b : buildings){
            map.merge(b[0],  b[2], Integer::sum);
            map.merge(b[1], -b[2], Integer::sum);
            cntMap.merge(b[0],  1, Integer::sum);
            cntMap.merge(b[1], -1, Integer::sum);
        }

        int sum = 0, cnt = 0, start = -1, average = 0;
        for (int key : map.keySet()){
            sum += map.get(key);
            cnt += cntMap.get(key);
            int nextAverage = cnt > 0? sum / cnt : 0; //avoid division by 0 error
            if (nextAverage == average) continue;  //average is the same, don't add
            if (start >= 0 && average > 0) ans.add(new int[]{start, key, average});
            average = nextAverage;
            start = key;
        }

        return ans.toArray(new int[0][]);
    }
}
```