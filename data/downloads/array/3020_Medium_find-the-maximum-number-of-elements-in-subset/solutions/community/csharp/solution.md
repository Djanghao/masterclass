# HashMap

**Author:** phuocich
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4637159/](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4637159/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaximumLength(int[] nums) {
        var dic = new Dictionary<int, int>();
        
        foreach(int num in nums){
            if(!dic.ContainsKey(num))
                dic.Add(num, 0);
            dic[num]++;
        }
        
        var ll = new List<List<int>>();
        foreach(int num in dic.Keys){
            // return a subset
            ll.Add(findSubset(dic, num));
        }
        
        int max = int.MinValue;
        foreach(var l in ll){
            max = Math.Max(max, l.Count);
        }
        
        return max;
        
    }
    
    private static List<int> findSubset(Dictionary<int, int> dic, int n){
        var subset = new List<int>();
        subset.Add(n);
        if(n == 1){
            int count = dic[n] % 2 == 0 ? dic[n] - 2 : dic[n] - 1;
            subset.AddRange(Enumerable.Repeat(n, count));
        }
        else {
            n = (int)Math.Sqrt(n);
            while(n >= 2){
                if(dic.ContainsKey(n) && dic[n] >= 2)
                {
                    subset.AddRange(Enumerable.Repeat(n, 2));
                }

                n = (int)Math.Sqrt(n);
            }
        }
        
        return subset;
    }
}
```