# [Java/C#] sliding window solution

**Author:** newbiecoder1
**Votes:** 8
**Link:** [https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/1199084/](https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/1199084/)

---

**Intution**
Maintain a sliding window of size k, then use a HashMap (Java) or Dictionary<C#> to get the number of unique numbers within the silding window.


**complexity**
- time: O(N) where N = nums.Length
- space: O(N)

**Java**
```
class Solution {
    public int[] distinctNumbers(int[] nums, int k) {
                
        if(nums == null || nums.length < k)
            return new int[0];
        
        int[] res = new int[nums.length - k + 1];
        int left = 0, right = 0, idx = 0;
        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        while(right < nums.length)
        {     
            map.put(nums[right], map.getOrDefault(nums[right],0) + 1);
            right++;
            
            if(right - left == k)
            {
                res[idx++] = map.size();
                map.put(nums[left], map.getOrDefault(nums[left], 0) - 1);
                if(map.get(nums[left]) == 0)
                    map.remove(nums[left]);
                left++;
            }
        }
        
        return res;
    }
}
```

**C#**
```
public class Solution {
    public int[] DistinctNumbers(int[] nums, int k) {
        
        if(nums == null || nums.Length < k)
            return new int[0];
        
        int[] res = new int[nums.Length - k + 1];
        int left = 0, right = 0, idx = 0;
        Dictionary<int,int> dic = new Dictionary<int,int>();
        while(right < nums.Length)
        {
            if(dic.ContainsKey(nums[right]))
                dic[nums[right]]++;
            else
                dic.Add(nums[right], 1);
            right++;
            
            if(right - left == k)
            {
                res[idx++] = dic.Count;
                dic[nums[left]]--;
                if(dic[nums[left]] == 0)
                    dic.Remove(nums[left]);
                left++;
            }
        }
        
        return res;
    }
}
```