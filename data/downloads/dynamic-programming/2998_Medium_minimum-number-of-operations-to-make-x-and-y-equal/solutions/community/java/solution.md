# C++ & JAVA || Simple DP || very easy and simple to understand

**Author:** kreakEmp
**Votes:** 66
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4518333/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4518333/)

---


# Approach
We need to check for 5 ways in our recursive calls :
1. Just abs diff of x & y can be ans. So initialise res = abs(x - y)
2. We may go to multiple of 5 which is smaller than x. This can be achieved by just subtracting x%5 from x and divide x by 5. Here total operations = x%5 ( this many time decreament )  + 1( for division by 5).
3. We may go to multiple of 5 which is larger than x. This can be achieved by just adding (5 - x%5) to x and then divid x by 5. Here total operations = 5 - x%5 ( this many time increment )  + 1( for division by 5).
4. We may go to multiple of 11 which is smaller than x. This can be achieved by just subtracting x%11 from x and divide x by 11. Here total operations = x%11 ( this many time decreament )  + 1( for division by 11).
5. We may go to multiple of 11 which is larger than x. This can be achieved by just adding (11 - x%11) to x and then divid x by 11. Here total operations = 11 - x%11 ( this many time increment )  + 1( for division by 11).
- With considereing above cases we need to write recursive code to find the min operations.

# Complexity 
- Time : O(N)
- Space : O(N)

# C++
```
vector<int> dp;
int solve(int x, int y){
    if(x <= y) return y - x;
    if(dp[x] != -1) return dp[x];
    int res = abs(x - y);                                 //case 1
    res = min(res, 1 + x%5 + solve(x/5, y));              //case 2
    res = min(res, 1 + (5 - x%5) + solve(x/5 + 1, y));    //case 3
    res = min(res, 1 + x%11 + solve(x/11, y));            //case 4
    res = min(res, 1 + (11 - x%11) + solve(x/11 + 1, y)); //case 5
    return dp[x] = res;
}

int minimumOperationsToMakeEqual(int x, int y) {
    dp.resize(10011, -1);
    return solve(x, y);
}
```

# Java
```
private int[] dp;
public int solve(int x, int y) {
    if (x <= y) return y - x;
    if (dp[x] != -1) return dp[x];
    int res = Math.abs(x - y);
    res = Math.min(res, 1 + x % 5 + solve(x / 5, y));
    res = Math.min(res, 1 + (5 - x % 5) + solve(x / 5 + 1, y));
    res = Math.min(res, 1 + x % 11 + solve(x / 11, y));
    res = Math.min(res, 1 + (11 - x % 11) + solve(x / 11 + 1, y));
    return dp[x] = res;
}
public int minimumOperationsToMakeEqual(int x, int y) {
    dp = new int[10011];
    Arrays.fill(dp, -1);
    return solve(x, y);
}
```


---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---


