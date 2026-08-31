# ✅C++✅ C# ✅JavaScript.🔥Explained and very simple solutions for all.💯

**Author:** aloneguy
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/3508946/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/3508946/)

---



# Approach:First of all,we have to sort the given array from min to max.Pay attention,to collect the maximum number of coins we always choose 3 piles,which contains two maximum piles and minimum pile.It means we always get the second maximum amount after Alice.
<!-- Describe your approach to solving the problem. -->


```javascript []
var maxCoins = function(piles) {
    piles.sort((a,b)=>a-b);
     let ans = 0;
        for (let i =0, j= piles.length -2; i < j; i++, j-=2)
        ans += piles[j];
        return ans; 
};
```
```C# []
public class Solution {
    public int MaxCoins(int[] piles) {
        Array.Sort(piles);
        int ans = 0;
        for (int i =0, j= piles.Length -2; i < j; i++, j-=2)
        {
            ans += piles[j];
        }
        return ans;    
    }
}
```
```C++ []
class Solution {
public:
    int maxCoins(vector<int>& piles) {
        sort(piles.begin(),piles.end());
        int total=0;
        int last=piles.size()-2;
        for(int i=0;i<piles.size()/3;i++){
           total+=piles[last];
           last-=2; 
        }
        return total;
    }
};
```


