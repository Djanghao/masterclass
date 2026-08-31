# C# Solution

**Author:** BinksWang
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/5051533/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/5051533/)

---

# Code
```
public class Solution {
    
    public bool rs = false;

    public bool CanSplitArray(IList<int> nums, int m) {
        var list = new List<int>(nums);
        var n = list.Count;
        if(n <= 2) return true;
        helper(list, m);
        return rs; 
    }

    void helper(List<int> list, int m){
        if(list.Count <= 2){
            rs = true;
            return;
        }
        
        if(list.Sum() - list[0] >= m){
            var temp = list[0];
            list.RemoveAt(0);
            helper(list, m);
            list.Insert(0, temp);
        }

        if(list.Sum() - list[list.Count - 1] >= m){
            var temp = list[list.Count - 1];
            list.RemoveAt(list.Count - 1);
            helper(list, m);
        }
    }




}
```