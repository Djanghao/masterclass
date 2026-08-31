# 3 Approaches | Brute Force -> optimize | C++ | Python | BEST explanation

**Author:** DevSahani
**Votes:** 1
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4978067/](https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4978067/)

---

# Approach-1: using recursion
# Intuition
As mentioned in the problem, at every second we have 3 choices:
- Choose an index i in the range [1, n] and decrement nums[i] by 1.
- If nums[changeIndices[s]] is equal to 0, mark the index changeIndices[s].
- Do nothing.

The last choice of no use. So we can neglect it. Based on the first two choice you can easily create recursion tree. 

In the solution, we have a variable ***decreamentCount*** that keeps track of among all the seconds that have been past how many of those have not been used to mark any index in nums array. 
Whilest the variable ***markCount*** is used to keep track of among all the seconds that have been past, how many of those have been used to mark the indices in the nums array.

Suppose you are at the i<sup>th</sup> second, and the values of decreamentCount = **d**, markCount = **m**, changeIndices[i] = **c**, nums[c] = **value**. 
then, if (d >= value)   => you can mark index c of nums. 
else you have only one option which is to use the current second to decrease the value of any element in nums. i.e., we can say that d has increased here.

To not mark the already mark index we are using a **mark** array.
# Complexity
- Time complexity: **O(2<sup>M</sup>)**

- Space complexity: **O(N)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` C++ []
class Solution {
    vector<bool> mark;
    int solve(vector<int>& nums, vector<int>& changeIndices, int s=0, int decrementCount=0, int markCount=0) 
    {
        int n = nums.size(), m = changeIndices.size();
        if(markCount == n) return s;
        if(s >= m) return INT_MAX;

        int ans = solve(nums, changeIndices, s+1, decrementCount+1, markCount);
        if(!mark[changeIndices[s]] && decrementCount >= nums[changeIndices[s]-1]) 
        {
            mark[changeIndices[s]] = true;
            ans = min(ans, solve(nums, changeIndices, s+1, decrementCount - nums[changeIndices[s]-1], markCount+1));
            mark[changeIndices[s]] = false;
        }

        return ans;
    }
public:
    int earliestSecondToMarkIndices(vector<int>& nums, vector<int>& changeIndices) {
        mark.resize(nums.size()+1, false); 
        int ans = solve(nums, changeIndices); 
        return ans == INT_MAX ? -1 : ans; 
    }
};
```
``` Python []
class Solution:
    def earliestSecondToMarkIndices(self, nums: List[int], changeIndices: List[int]) -> int:
        mark = [False] * (len(nums) + 1)

        def solve(nums, changeIndices, s=0, decrementCount=0, markCount=0):
            n = len(nums)
            m = len(changeIndices)
            if markCount == n:
                return s
            if s >= m:
                return float('inf')

            ans = solve(nums, changeIndices, s+1, decrementCount+1, markCount)
            if not mark[changeIndices[s]] and decrementCount >= nums[changeIndices[s]-1]:
                mark[changeIndices[s]] = True
                ans = min(ans, solve(nums, changeIndices, s+1, decrementCount - nums[changeIndices[s]-1], markCount+1))
                mark[changeIndices[s]] = False

            return ans

        ans = solve(nums, changeIndices)
        return ans if ans != float('inf') else -1

```

# Approach-2: using two loops
# Intuition
In the second approach, for every i<sup>th</sup> second, We are just checking that is it possible to mark all indices or not. the first second when it is possible will be the answer. And if there does not exists any such second, answer will be -1.

In order to check that we can mark all indices in i seconds. We use the following algorithm:

# Complexity
- Time complexity: **O(M<sup>2</sup>)**

- Space complexity: **O(M)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` C++ []
class Solution {
public:
    int earliestSecondToMarkIndices(vector<int>& nums, vector<int>& changeIndices) 
    {
        int n = nums.size(), m = changeIndices.size();

        for(int i=0; i<m; i++) 
        {
            int extra = 0;
            vector<bool> mark(n, false);
            int markCount = 0;
            for(int j=i; j>=0; j--) 
            {
                int indx = changeIndices[j]-1;
                
                if(!mark[indx] && j + extra >= nums[indx]) {
                    mark[indx] = true;
                    extra -= nums[indx];
                    markCount ++;
                } else if(mark[indx]) {
                    extra = min(extra+1, 0);
                }
            }

            return i+1;
        }

        return -1;
    }
};
``` 
``` Python []
class Solution:
    def earliestSecondToMarkIndices(self, nums, changeIndices):
        n = len(nums)
        m = len(changeIndices)

        for i in range(m):
            extra = 0
            mark = [False] * n
            markCount = 0
            for j in range(i, -1, -1):
                indx = changeIndices[j] - 1
                
                if not mark[indx] and j + extra >= nums[indx]:
                    mark[indx] = True
                    extra -= nums[indx]
                    markCount += 1
                elif mark[indx]:
                    extra = min(extra + 1, 0)

            if markCount == n:
                return i+1

        return -1

```

# Approach-3: using Binary Search
# Intuition
The above code can be written using binary search, as after a particular second **l**, You can always mark all indices of nums. So the earliest Second is the s.
# Complexity
- Time complexity: **O(M*log(M))**

- Space complexity: **O(M)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` C++ []
class Solution {
    bool predicateFunction(vector<int>& nums, vector<int>& changeIndices, int i) 
    {
        int n = nums.size(), m = changeIndices.size(), ans = INT_MAX;
        int extra = 0;
        vector<bool> mark(n, false);
        int markCount = 0;
        for(int j=i; j>=0; j--) 
        {
            int indx = changeIndices[j]-1;
            
            if(!mark[indx] && j + extra >= nums[indx]) {
                mark[indx] = true;
                extra -= nums[indx];
                markCount ++;
            } else if(mark[indx]) {
                extra = min(extra+1, 0);
            }
        }
        return markCount == n;
    }
public:
    int earliestSecondToMarkIndices(vector<int>& nums, vector<int>& changeIndices) 
    {
        int m = changeIndices.size(), ans = INT_MAX;

        int l=0, h=m-1, mid;
        while(h-l > 1) 
        {
            mid = (l+h)>>1;
            if(predicateFunction(nums, changeIndices, mid)) {
                h = mid;
            } else {
                l = mid+1;
            }
        }
        if(predicateFunction(nums, changeIndices, l)) return l+1;
        else if(predicateFunction(nums, changeIndices, h)) return h+1;
        return -1;
    }
};
``` 
``` Python []
class Solution:
    def earliestSecondToMarkIndices(self, nums, changeIndices):
        def predicateFunction(nums, changeIndices, i):
            n = len(nums)
            extra = 0
            mark = [False] * n
            markCount = 0
            for j in range(i, -1, -1):
                indx = changeIndices[j] - 1
                
                if not mark[indx] and j + extra >= nums[indx]:
                    mark[indx] = True
                    extra -= nums[indx]
                    markCount += 1
                elif mark[indx]:
                    extra = min(extra + 1, 0)
            return markCount == n

        m = len(changeIndices)
        l, h = 0, m - 1
        while h - l > 1:
            mid = (l + h) >> 1
            if predicateFunction(nums, changeIndices, mid):
                h = mid
            else:
                l = mid + 1
        if predicateFunction(nums, changeIndices, l):
            return l + 1
        elif predicateFunction(nums, changeIndices, h):
            return h + 1
        return -1

```
