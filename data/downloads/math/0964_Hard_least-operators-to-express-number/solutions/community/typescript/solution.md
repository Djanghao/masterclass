# least-operators-to-express-number- TS Solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/least-operators-to-express-number/solutions/5961071/](https://leetcode.com/problems/least-operators-to-express-number/solutions/5961071/)

---


# Code
```typescript []
function leastOpsExpressTarget(x: number, target: number): number {
    let r = target%x, c = x - r;
    let nr = Math.min(2*r, 1 + 2*(x - r));
    let nc = Math.min(2*c, 1 + 2*(x-c));
    return Math.min(nr + dfs(target - r, x), nc + dfs(target + c, x)) - 1;
}

function dfs(target: number, x: number): number {
    if (target == 0)
        return 0;
    
    let num = target;
    let c = 0;
    let lowestPower = 1;
    
    while (num && (num%x == 0)) {
        num /= x;
        ++c;
        lowestPower *= x;
    }
    let lowestPowerCoeff = (target/lowestPower)%x;
    let distToHigherPower = lowestPower*(x - lowestPowerCoeff);
   
    if (lowestPowerCoeff*lowestPower == target) {
        return Math.min(lowestPowerCoeff*c, (x - lowestPowerCoeff)*c + c + 1);
    }
    let dp1 = lowestPowerCoeff*c + dfs(target - lowestPowerCoeff*lowestPower, x);
    let dp2 = (x - lowestPowerCoeff)*c + dfs(target + distToHigherPower, x);
    
    return Math.min(dp1, dp2); 
}
```