# Step by Step to Solve This Problem

**Author:** gcl272633743
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/1146819/](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/1146819/)

---

### Understand the Problem
  People visited the Donuts shop by group, if this group of people eat new bach of donuts then
  there are happy, other wise(they eat the dounts left by last group) they are unhappy.

### how to slove the problem
the initive thoughs is that try every possible permutations all input groups. by the time complexity will be O(2^n) 
there is a typical way to reduce the time complexity of this problem, we can group the groups by bathSize, suppose  the batch size is k , every group has n/k element, the complexity is O(k^(n/k))



### two pre compute method
1 for every group the num can be mod by batsize, it does not influnce the result
2 if the mod is zero we do not need to process this group add them to result directly.


### Solution1 simulation TLE
```
public int maxHappyGroups(int batchSize, int[] groups) {
        int[] count = new int[batchSize];
        for(int x : groups){
            count[x % batchSize]++;
        }
        return dfs(count, 0, 0, groups.length);
    }
    public int dfs(int[] count, int preSum, int i, int n) {
        if (i == n) return 0; // attention there the n is groups.length  not batch size, because we need to process all groups 
        int ret = 0;
        int bonus = preSum % count.length == 0 ? 1 : 0;
        for (int j = 0; j < count.length; j++) {
            if (count[j] == 0) continue;
            count[j]--;
            ret = Math.max(ret, dfs(count, preSum + j, i + 1, n));
            count[j]++;
        }
        return ret + bonus;
    }
```

### Solution2 simulation with Memo TLE
```
Map<String,Integer> map = new HashMap<>();
    public int maxHappyGroups(int batchSize, int[] groups) {
        int[] count = new int[batchSize];
        for(int x : groups){
            count[x % batchSize]++;
        }
        return dfs(count, 0, 0, groups.length);
    }
    public int dfs(int[] count, int preSum, int i, int n) {
        if (i == n) return 0; 
        int ret = 0;
        String key = getKey(count);
        if(map.containsKey(key)) return map.get(key);
        int bonus = preSum % count.length == 0 ? 1 : 0;
        for (int j = 0; j < count.length; j++) {
            if (count[j] == 0) continue;
            count[j]--;
            ret = Math.max(ret, dfs(count, preSum + j, i + 1, n));
            count[j]++;
        }
        map.put(key, ret + bonus);
        return ret + bonus;
    }
    public String getKey(int[] count){
        StringBuffer sb = new StringBuffer();
        for(int x : count){
            sb.append(x).append("-");
        }
        return sb.toString();
    }
```

### Solution3 simulation plus Memo plus pre computation
```
Map<String,Integer> map = new HashMap<>();
    public int maxHappyGroups(int batchSize, int[] groups) {
        int[] count = new int[batchSize];
        for(int x : groups){
            count[x % batchSize]++;
        }
		// count[0] means if we set thoese group in front of others, all thoese group can eat fresh dounts
        return count[0] + dfs(count, 0, count[0], groups.length);
    }
    public int dfs(int[] count, int preSum, int i, int n) {
        if (i == n) return 0; 
        int ret = 0;
        String key = getKey(count);
        if(map.containsKey(key)) return map.get(key);
        int bonus = preSum % count.length == 0 ? 1 : 0;
        for (int j = 1; j < count.length; j++) {
            if (count[j] == 0) continue;
            count[j]--;
            ret = Math.max(ret, dfs(count, preSum + j, i + 1, n));
            count[j]++;
        }
        map.put(key, ret + bonus);
        return ret + bonus;
    }
    public String getKey(int[] count){
        StringBuffer sb = new StringBuffer();
        for(int x : count){
            sb.append(x).append("-");
        }
        return sb.toString();
    }
```