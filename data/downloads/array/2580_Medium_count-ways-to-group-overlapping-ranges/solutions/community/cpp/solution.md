# Explained - Sorting & power 2 || very simple & easy to understand solution

**Author:** kreakEmp
**Votes:** 21
**Link:** [https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3256408/](https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3256408/)

---


```
/*

1. Count number of separate range groups (say n)
    - To do this we can simply sort the array 
    - travese the array tracking end of a reange
    
2. return answer as the 2 power n
    - as it can be large, need to use standard power technique to calculate.

FAQ: why power of 2?
ans. if we have n groups, tgen to dived them into two groups,
we need to think like we need to have 1group  where the question becomes if we have n number then how many ways they can be grouped together  lead to summation of all coefficients of a binomial expansion, which in turn results in power of two. 
*/

class Solution {
public:
    int mod= 1000000007;
    int power(int n){
        if(n == 1) return 2;
        long long t = power(n/2);
        t = (t * t)%mod;
        if(n%2) { return (t*2)%mod; }
        return t;
    }
    int countWays(vector<vector<int>>& ranges) {
        auto comp = [](vector<int>& a, vector<int>& b){
            if(a[0] == b[0]) return a[1] <= b[1];
            return a[0] < b[0];
        };
        sort(ranges.begin(), ranges.end(), comp);
        int n = 1, end = ranges[0][1];
        for(auto r: ranges){
            if(r[0] <= end){
                end = max(end, r[1]);
            }else{
                n++;
                end = r[1];
            }
        }
        return power(n);
    }
};
```