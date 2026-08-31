# C# using Dictionary | Beats 73.68%

**Author:** Malvika02
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/2943796/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/2943796/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int FindPairs(int[] nums, int k) {
        Dictionary<int,int> dict = new Dictionary<int,int>();
        int count=0;
        for(int i=0;i<nums.Length;i++){
            if(!dict.ContainsKey(nums[i])){
                dict.Add(nums[i],1);
            }
            else{
                dict[nums[i]]++;
            }
        }
        foreach(var c in dict){
            Console.WriteLine(c.Value);
            if(k==0 && c.Value>1){
                count+=1;
            }
            else if(dict.ContainsKey(c.Key+k) && k!=0){
                count++;
            }
            else{
                continue;
            }
        }
        return count;
    }
}
```