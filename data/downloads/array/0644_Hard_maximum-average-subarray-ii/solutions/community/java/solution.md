# Solution

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-average-subarray-ii/solutions/3418043/](https://leetcode.com/problems/maximum-average-subarray-ii/solutions/3418043/)

---

```C++ []
class Solution {
public:
    bool check(vector<int>& nums, double mid, int k) {
        double sum=0, pre=0, minSum=0;
        for (int i=0; i<k; i++)
            sum += nums[i] - mid;
        if (sum >= 0) return true;
        for (int i=k; i<nums.size(); i++) {
            sum += nums[i] - mid;
            pre += nums[i-k] - mid;
            minSum = min(minSum, pre);
            if (sum >= minSum)
                return true;            
        }
        return false;
    }
    double findMaxAverage(vector<int>& nums, int k) {
        double lo = INT_MAX, hi = INT_MIN;
        for (int n : nums) {
            hi = max(hi, (double)n);
            lo = min(lo, (double)n);
        }
        double preMid = hi, error=INT_MAX;
        while(error > 0.00001) {
            double mid = (lo+hi)/2;
            if (check(nums, mid, k))
                lo = mid;
            else
                hi = mid;
            error = abs(preMid - mid);
            preMid = mid;
        }
        return lo;
    }
};
```

```Python3 []
import numpy as np

class Solution(object):
    def findMaxAverage(self, nums, k):
        lo, hi = min(nums), max(nums)
        nums = np.array([0] + nums)
        while hi - lo > 1e-5:
            mid = nums[0] = (lo + hi) / 2.
            sums = (nums - mid).cumsum()
            mins = np.minimum.accumulate(sums)
            if (sums[k:] - mins[:-k]).max() > 0:
                lo = mid
            else:
                hi = mid
        return lo
```

```Java []
class Solution {
public double findMaxAverage(int[] nums, int k) {
        LinkedList<Integer> ll=new LinkedList();
        double[] sum=new double[nums.length+1];
        for(int j=0;j<nums.length;++j){
            sum[j+1]=sum[j]+nums[j];
        }
        double res=sum[k]/k;
        for(int i=0,j=k;j<nums.length;++j){
            while(!ll.isEmpty()){
                int t=ll.pollLast();
                int a=ll.isEmpty()?i-1:ll.peekLast();
                if((sum[j-k+1]-sum[t+1])/(j-k-t) > (sum[t+1]-sum[a+1])/(t-a)){
                    ll.add(t);
                    break;
                }
            }
            ll.add(j-k);
            while(!ll.isEmpty()){
                int t=ll.peek();
                if((sum[t+1]-sum[i])/(t-i+1) < (sum[j+1]-sum[i])/(j-i+1)){
                    ll.poll();
                    i=t+1;
                }else break;
            }
            res = Math.max(res, (sum[j+1]-sum[i])/(j-i+1));
        }
        return res;
    }
}
```
