# Beats 100%

**Author:** vigneshreddy06
**Votes:** 32
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5360812/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5360812/)

---

# Intuition
![image.png](./images/0.png)

![image.png](./images/1.png)

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
 O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
 O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code C++
```
#pragma GCC optimize("03")
static int __star = []{
    ios_base::sync_with_stdio(0);
    cin.tie(NULL),cout.tie(NULL);
    return 0;
}();
class Solution {
public:
    int minKBitFlips(vector<int>& v, int k) {
        int ans=0,x,n=v.size();
        vector<int> m(n,0);
        for(int i=0;i<n;i++)
        {
            x=0;
            if((i-1)>=0){ x=m[i-1];
            if((i-k)>=0) x=x-m[i-k];}

            if(((x%2)^v[i])==0 )
            {
                if(i>n-k) return -1;
                m[i]=1;
                ans++;
            }
            if(i>0)
            m[i]+=m[i-1];
        }
        return ans;
    }
};
//if you upvote this you will get a good job     
```
# Code Python3
```
class Solution:
    def minKBitFlips(self, nums: List[int], k: int) -> int:
        flips = [False] * (len(nums) + 1)

        result = 0
        current_flips = False
        for i in range(len(nums) - k + 1):
            current_flips ^= flips[i]
            if nums[i] == current_flips:
                result += 1
                current_flips ^= 1
                flips[i + k] = 1

        for i in range(len(nums) - k + 1, len(nums)):
            current_flips ^= flips[i]
            if nums[i] == current_flips:
                return -1

        return result
#if you upvote this you will get a good job        
```