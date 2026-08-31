# C++ and C# very easy solution.Beats 100%.

**Author:** aloneguy
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/3424286/](https://leetcode.com/problems/number-of-distinct-averages/solutions/3424286/)

---

![photo_2023-04-16_22-23-21.jpg](./images/0.jpeg)
![photo_2023-04-16_22-23-27.jpg](./images/1.jpeg)

```C++ []
class Solution {
public:
    int distinctAverages(vector<int>& nums) {
         sort(nums.begin(),nums.end());
        set<double> my;
        for(int i=0;i<nums.size()/2;i++)
        my.insert((double)(nums[i]+nums[nums.size()-i-1])/2);
        return my.size(); 
    }
};
```
```C# []
public class Solution {
    public int DistinctAverages(int[] nums) {
        Array.Sort(nums);
        HashSet<double> my=new();
        for(int i=0;i<nums.Length/2;i++)
            my.Add((double)(nums[i]+nums[nums.Length-i-1])/2);
        return my.Count;
    }
}
```


