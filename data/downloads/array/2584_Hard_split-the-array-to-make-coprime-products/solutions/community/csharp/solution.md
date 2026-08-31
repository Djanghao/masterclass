# Beats 100% Run Time and 100% Memory.......

**Author:** dimplemithiya
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/5460363/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/5460363/)

---


# Code
```
public class Solution {
    public int FindValidSplit(int[] nums) {
        Dictionary<int,int> factorLastFound = new Dictionary<int,int>();
        HashSet<int> getPrimeFactor(int idx){
            int x = nums[idx];
            HashSet<int> res = new HashSet<int>();
            for(int i = 2;i * i <= x;i++){
                while(x % i == 0){
                    x/=i;
                    res.Add(i);
                    factorLastFound[i] = idx;
                }
            }
            if(x > 1){
                res.Add(x);
                factorLastFound[x] = idx;
            }
            return res;
        }

        HashSet<int>[] factors = new HashSet<int>[nums.Length];
        for(int i = 0; i < nums.Length;i++)
            factors[i] = getPrimeFactor(i);
           
        int res = -1,lastFactorFound = 0;
        for(int i = 0; i < nums.Length - 1;i++){
            HashSet<int> set1 = factors[i];
            foreach(var el in set1){
                if(factorLastFound[el] == nums.Length - 1) return res;
                lastFactorFound = Math.Max(factorLastFound[el],lastFactorFound);
            }
            if(lastFactorFound == i) return i;
        }
        return res;
    }
}
```