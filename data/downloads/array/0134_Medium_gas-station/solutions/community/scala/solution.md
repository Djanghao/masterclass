# DP + Recursion

**Author:** harishkumarn
**Votes:** 1
**Link:** [https://leetcode.com/problems/gas-station/solutions/3014300/](https://leetcode.com/problems/gas-station/solutions/3014300/)

---

# Java
```
class Solution {
    int start ;
    int[] gas;
    int[] cost;
    Integer[] dp ; 
    public int canCompleteCircuit(int[] gas, int[] cost){
        this.gas = gas;
        this.cost = cost;
        dp = new Integer[gas.length];
        for(start = 0; start < gas.length;++start){
            if(dfs(start,0)) return start;
        }
        return -1;
    }
    public boolean dfs(int i , int currentCost) {
        if(dp[i] != null && dp[i] >= currentCost){
            return false;
        }
        dp[i] = currentCost;
        if(currentCost + gas[i] >= cost[i]){
            return ( i + 1) % gas.length  == start ? true : dfs(( i + 1) % gas.length,currentCost + gas[i] -cost[i] );
        }
        return false;
    }
}
```

# Scala

```
object Solution {
    var start : Int = 0;
    var dp : Array[Int] = null;
    var gasA: Array[Int] = null;
    var costA: Array[Int] = null;
    def canCompleteCircuit(gas: Array[Int], cost: Array[Int]): Int = {
        gasA = gas;
        costA = cost;
        dp = new Array[Int](gas.length);
        for(i <- 0 until gas.length){
            start = i;
            if(dfs(i,0)) return i;
        }
        return -1;
    }
    def dfs(i : Int, currentGas : Int ): Boolean={
        if(dp(i) >= currentGas && i != start) return false;
        dp(i) = currentGas;
        if(currentGas + gasA(i) >= costA(i)){
            return if((i+1) % gasA.length == start ) true else dfs((i+1) % gasA.length,currentGas + gasA(i) - costA(i));
        }
        return false;
    }
}
```