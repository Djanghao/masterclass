# typeScript solution

**Author:** mmSaif_64
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3945855/](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3945855/)

---



# Code
```
function maximizeTheProfit(n: number, offers: number[][]): number {
    offers.sort((a,b)=>a[1] - b[1]);
    var sellerEnd : number = 0;
    var dp = new Array(n+1).fill(0);
    for(let j=0;j<n;j++){
        let i : number = j+1;
       let max : number = dp[i-1];
        while(offers[sellerEnd] && offers[sellerEnd][1]==j){
            if((dp[offers[sellerEnd][0]]+offers[sellerEnd][2])>max){
                max = dp[offers[sellerEnd][0]]+offers[sellerEnd][2]
            }
            sellerEnd++;
        }
        dp[i]= max;
    }
return dp[n];
};



```