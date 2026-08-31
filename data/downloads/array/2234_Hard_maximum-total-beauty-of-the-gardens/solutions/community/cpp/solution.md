# [C++/Java/Python]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms // APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/1977624/](https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/1977624/)

---

***C++***
```
class Solution 
{
    public:
        long long maximumBeauty(vector<int>& flowers, long long newFlowers, int target, int full, int partial) 
        {
            int n = flowers.size();
            sort(flowers.begin(), flowers.end());
            if(n == 0)
                return 0;
            
   
            vector<long long>pre(n + 1, 0);
            
            for(int i = 1; i <= n; i++)
                pre[i] = pre[i - 1] + (long long)flowers[i - 1];
            
            long long res = LLONG_MIN;
            
            for(int t = n; t >= 0; t--)
            {
               
                long long fullCost = 0;
                long long partialCost = 0;
                
            
                if(t < n)
                {
                    if(flowers[t] < target)
                    {
                        long long need = (long long)target - (long long)flowers[t];
                        
                   
                        if(need > newFlowers)
                            break;
                        newFlowers -= need;
                    }
                }
                
                fullCost  = (long long)(n - t) * full;
                
                int l = 0;
                int r = target - 1;
                
                while(l <= r)
                {
                    int mid = l + (r - l) / 2; 
                    int idx = upper_bound(flowers.begin(), flowers.begin() + t, mid) - flowers.begin(); 
                    
                    if(idx == 0)
                    {
                        l = mid + 1;
                    }
                    else
                    {
                      
                        long long needToPlant = ((long long)mid * (long long)idx - pre[idx]);
                        
                        if(needToPlant > newFlowers)
                            r = mid - 1;
                        else
                        {
                            l = mid + 1;
                            partialCost = (long long)mid * partial;
                        }
                    }
                }
           
                res = max(res, fullCost + partialCost);
            }
            
            return res;
        }
};
```

***Java***
```
class Solution {
    public long maximumBeauty(int[] flowers, long newFlowers, int target, int full, int partial) {
        int n = flowers.length;
        long[] prefix = new long[n + 1];
        Arrays.sort(flowers);
        for (int i = 0; i < n; ++i) prefix[i + 1] = prefix[i] + Math.min(flowers[i], target);
        long res = 0;
        for (int c = 0, i = n - 1; c <= n; ++c) {
            long remain = prefix[n] - prefix[n - c] + newFlowers - c * (long) target, min = 0;
            if (0 > remain) break;
            i = Math.min(i, n - c - 1);
            while (0 <= i && (target <= flowers[i] || flowers[i] * (long) (i + 1) - prefix[i + 1] > remain)) i--;
            if (0 <= i) {
                long dif = flowers[i] * (long) (i + 1) - prefix[i + 1];
                min = Math.min(target - 1, flowers[i] + (remain - dif) / (i + 1));
                if (i + 1 < n - c) min = Math.min(min, flowers[i + 1]);
            }
            res = Math.max(res, c * (long) full + min * (long) partial);
        }
        return res;
    }
}
```

***Python***
```
import bisect
class Solution:
    def maximumBeauty(self, flowers: List[int], newFlowers: int, target: int, full: int, partial: int) -> int:
        n = len(flowers)
        flowers.sort()
        pre,lack = [0],[0]
        
        # corner case in which no incomplete garden can be created. 
        if flowers[0] >= target:
            return n*full
        
        # pre-sum in an ascending order
        for i in flowers:
            pre.append(pre[-1]+i)
        
        # pre-sum in a descending order, meanwhile, count how many gardens are already full
        cnt = 0
        for i in flowers[::-1]:
            if i >= target:
                cnt+=1
            lack.append(lack[-1]+max(target-i,0))
        
        # conditional checker: whether all first k elements can >= flower after adding f to them
        def fill(flower,f,k):
            i = bisect.bisect_left(flowers,flower,lo=0,hi=k)
            return pre[i] + f >= i*flower
            
        res = 0
        # start from the min number of full gardens
        for k in range(cnt,n):
            if lack[k] < newFlowers:
                left, right = flowers[0], target+1
                while left < right:
                    mid = (left+right)//2
                    if not fill(mid,newFlowers-lack[k],n-k):
                        right = mid
                    else:
                        left = mid + 1
                left -= 1
                
                if left >= target:
                    # the n-k gardens must be incomplete, which can have a max value as target-1
                    
                    res = max(res,(target-1)*partial+k*full)
                else:
                    res = max(res,k*full+left*partial)
        
        # A corner case: All n gardens can be full, no incomplete gardens
        if lack[-1] <= newFlowers:
            res = max(res,n*full)
        return res
```

***Consider upvote if useful!***