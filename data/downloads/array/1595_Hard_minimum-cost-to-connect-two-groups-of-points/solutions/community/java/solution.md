# [JAVA] Brute force...

**Author:** ycj28c
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/855222/](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/855222/)

---

We know 1 <= size1, size2 <= 12, so it is possible to brute force it, 
Each time hanlde one point, util complete process all points.
Include two part:
If current point is in group1, just try dfs connect to every group2 situation.
If current point is in group2, just find the min cost connect to group1.

```
class Solution {
	private int minCost;
	private int gp1Size;
	private int gp2Size;
	public int connectTwoGroups(List<List<Integer>> cost) {
		minCost = Integer.MAX_VALUE;
		gp1Size = cost.size();
		gp2Size = cost.get(0).size();
		boolean[] connected = new boolean[gp1Size + gp2Size];
		dfs(0, 0, cost, connected);
		return minCost;
	}
	private void dfs(int idx, int sum, List<List<Integer>> cost, boolean[] connected){
		if (idx == gp1Size + gp2Size) { 
			minCost = Math.min(minCost, sum);
			return;
		}
        //pruning
		if (sum >= minCost) {
            return; 
        }
		if (idx < gp1Size) {
			//in group 1
			connected[idx] = true; 
            //brute force try connect to every point in group 2
			for(int i = 0; i < gp2Size; i++){
                boolean oldVal = connected[i+gp1Size];
				connected[i+gp1Size] = true;
				dfs(idx+1, sum + cost.get(idx).get(i), cost, connected);
                connected[i+gp1Size] = oldVal;
			}
		} else {
			//in group 2
			if (!connected[idx]) {
				int min = Integer.MAX_VALUE;
				for(int i = 0; i < gp1Size; i++){
					min = Math.min(min, cost.get(i).get(idx-gp1Size));
				}
				dfs(idx+1, sum + min, cost, connected);
			} else {
                //if already connect, no need to connect to group 1 again
				dfs(idx+1, sum, cost, connected);
			}
		}
	}
}
```

Time spend is about 397ms, since it is brute force probably not very fast.
To improve is using the bit mask just as other discuss mentioned, then it will be able to cache the minCost for all the connected status.
```
class Solution {
	private int gp1Size;
	private int gp2Size;
    private Map<Integer, Integer> cache;
    private int[] right;
	public int connectTwoGroups(List<List<Integer>> cost) {
		gp1Size = cost.size();
		gp2Size = cost.get(0).size();
        cache = new HashMap<>();
		int mask = 0;
		return dfs(0, cost, mask);
	}
	private int dfs(int idx, List<List<Integer>> cost, int mask){
		if(idx == gp1Size + gp2Size) { 
			return 0;
		}
        int key = mask;
        if(cache.containsKey(key)) {
            return cache.get(key);
        }
        int min = Integer.MAX_VALUE;
		if(idx < gp1Size) {
			//in group 1
            mask = mask | (1 << idx);
			for(int i = 0; i < gp2Size; i++){
                int newMask = mask | (1 << (i + gp1Size));
			    min = Math.min(min, dfs(idx+1, cost, newMask) + cost.get(idx).get(i));
			}
		} else {
			//in group 2
			if((mask & (1 << idx)) == 0){
				int minVal = Integer.MAX_VALUE;
				for(int i = 0; i < gp1Size; i++){
				    minVal = Math.min(minVal, cost.get(i).get(idx-gp1Size));
				}
                min = dfs(idx+1, cost, mask) + minVal;
			} else {
				min = dfs(idx+1, cost, mask);
			}
		}
        cache.put(key, min);
        return min;
	}
}
```
After cache, time cost is reduce to 75ms