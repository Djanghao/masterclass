# 142ms | beats 100% | simple solution with explanation

**Author:** nzspider
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/3120089/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/3120089/)

---

# Intuition
Keep a copy of original array. Then sort original array and take first nums.Length-k numbers. Remove them one by one from the copy array of original array. Then we get the result. 

![image.png](./images/0.png)


# Code
```
public class Solution {
    public int[] MaxSubsequence(int[] nums, int k) {
        int len = nums.Length, index = 0;
        //to keep the order of original array
        var copy = new int[len];
        Array.Copy(nums,copy,len);
        Array.Sort(nums);
        var excludes = nums[0..(len-k)].ToList();
        var res = new int[k];
        foreach(var c in copy){
            if(excludes.Contains(c)){
                excludes.Remove(c);
            }
            else{
                res[index++] = c;                
            }
        }
        return res;
    }
}
```