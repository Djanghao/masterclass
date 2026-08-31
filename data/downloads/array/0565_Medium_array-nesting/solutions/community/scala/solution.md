# [C++/Python/Scala] Straight DFS

**Author:** adityaavi2100
**Votes:** 1
**Link:** [https://leetcode.com/problems/array-nesting/solutions/1438994/](https://leetcode.com/problems/array-nesting/solutions/1438994/)

---

**C++ Solution:-**
```
class Solution {
    
    int solve(vector<int>&nums,int i,vector<bool>& vis)
    {
        int ans=1;
        vis[i]=true;
        if(!vis[nums[i]])
            ans+=solve(nums,nums[i],vis);
        return ans;    
    }
    
    
public:
    int arrayNesting(vector<int>& nums) {
        int n=nums.size();
        vector<bool>vis(n,false);
        int maxi=1;
        for(int i=0;i<n;i++)
        {
            if(!vis[i])
                maxi=max(maxi,solve(nums,i,vis));
        }
        return maxi;
    }
};
```

**Python Solution:-**
```
class Solution:
    def arrayNesting(self, nums: List[int]) -> int:
        vis=[False]*len(nums)
        def solve(i):
            ans=1
            vis[i]=True
            if vis[nums[i]]==False:
                ans+=solve(nums[i])
            return ans
        maxi=1
        for i in range(len(nums)):
            if vis[i]==False:
                maxi=max(maxi,solve(i))
        return maxi   
```

**Scala Solution:-**
```
object Solution {
    def arrayNesting(nums: Array[Int]): Int = {
        val n=nums.length
        val vis=new Array[Boolean](n)
        def solve(i:Int):Int={
            var ans=1
            vis(i)=true
            if(!vis(nums(i)))
            ans+=solve(nums(i))
            ans
        }
        var maxi=1;
        for(i <- 0 until n)
        maxi=maxi max solve(i)
        maxi
    }
}
```

*If you liked the Solution. Do UPVOTE it!!!!!!*