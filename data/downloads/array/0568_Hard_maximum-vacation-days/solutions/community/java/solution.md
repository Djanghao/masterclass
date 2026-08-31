# [Java] DFS with Memo 98%

**Author:** kelvin2180
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-vacation-days/solutions/939615/](https://leetcode.com/problems/maximum-vacation-days/solutions/939615/)

---

dp array record at location x during week y the maximum holiday you can get until the Kth week.
dfs simulate options you have at week x in particular location.

```
class Solution {
    
    Map<Integer, List<Integer>> flightMap = new HashMap<>();
    int k;
    Integer[][] dp;
    
    public int maxVacationDays(int[][] flights, int[][] days) {
        if(flights.length == 0 || flights[0].length == 0)
            return 0;
        
        
        k = days[0].length;
        int n = flights.length;
        dp = new Integer[k][n];
            
        for(int i = 0; i < n; i++){
            flightMap.put(i, new ArrayList<>());
            flightMap.get(i).add(i);
            for(int j = 0; j < n; j++){
                if(flights[i][j] == 1)
                    flightMap.get(i).add(j);
            }
        }
        
        return dfs(0, 0, days);    
    }
    
    int dfs(int loc, int week, int[][] days){
        if(week == k)
            return 0;
        
        if(dp[week][loc] != null)
            return dp[week][loc];
        
        int local = 0;
        for(Integer to : flightMap.get(loc)){
            local = Math.max(local, days[to][week] + dfs(to, week+1, days));
        }
        
        dp[week][loc] = local;
        return local;
    }
}