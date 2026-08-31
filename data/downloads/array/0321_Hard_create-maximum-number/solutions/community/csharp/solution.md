# C# Recursion + Memo

**Author:** olegbelousov77
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-maximum-number/solutions/1604538/](https://leetcode.com/problems/create-maximum-number/solutions/1604538/)

---

```cs
public class Solution {

    public int[] MaxNumber(int[] nums1, int[] nums2, int k) {
        var lst = MaxNumber(GetMap(nums1), GetMap(nums2), nums1.Length + nums2.Length, 0, 0, k); lst.Reverse();
        return lst.ToArray();
    }
        
    
    private IDictionary<(int,int,int),List<int>> memo = new Dictionary<(int,int,int),List<int>>();
    
    private List<int> MaxNumber(IReadOnlyDictionary<int,List<int>> map1, IReadOnlyDictionary<int,List<int>> map2, int count, int pos1, int pos2, int k) {
        
        if (k == 0)
            return new List<int>();
        
        var key = (pos1,pos2,k);
        if (memo.TryGetValue(key, out List<int> m))
            return new List<int>(m);
        
        var has1 = TryGetValue(map1, pos1, count - pos2 - k, out int val1, out int next1);
        var has2 = TryGetValue(map2, pos2, count - pos1 - k, out int val2, out int next2);
        
        if (!has1 || has2 && val2 > val1) {
            var list = MaxNumber(map1, map2, count, pos1, next2 + 1, k - 1); list.Add(val2);
            memo[key] = new List<int>(list);
            return list;
        }
            
        if (!has2 || has1 && val1 > val2) {
            var list = MaxNumber(map1, map2, count, next1 + 1, pos2, k - 1); list.Add(val1);
            memo[key] = new List<int>(list);
            return list;
        }
        
        var list1 = MaxNumber(map1, map2, count, next1 + 1, pos2, k - 1);
        var list2 = MaxNumber(map1, map2, count, pos1, next2 + 1, k - 1);
        
        var lst = IsLess(list1, list2) ? list2 : list1; lst.Add(val1);
        memo[key] = new List<int>(lst);
        return lst;
    }
    
    private IReadOnlyDictionary<int,List<int>> GetMap(int[] nums) {
        var dic = Enumerable.Range(0, 10).ToDictionary(i => i, i => new List<int>());
        for(var i = 0; i < nums.Length; i++)
            dic[nums[i]].Add(i);
        return dic;
    }
    
    private bool TryGetValue(IReadOnlyDictionary<int,List<int>> map, int from, int to, out int value, out int pos) {
        for(value = 9; value >= 0; value--) {
            var idx = map[value].BinarySearch(from);
            if (idx < 0)
                idx = ~idx;
            if (idx >= map[value].Count)
                continue;
            if (map[value][idx] > to)
                continue;
            pos = map[value][idx];
            return true;
        }
        pos = -1;
        return false;
    }
    
    private bool IsLess(List<int> lst1, List<int> lst2) {
        for(var i = lst1.Count - 1; i >= 0; i--) {
            if (lst1[i] < lst2[i])
                return true;
            if (lst1[i] > lst2[i])
                return false;
        }
        return false;
    }
}
```