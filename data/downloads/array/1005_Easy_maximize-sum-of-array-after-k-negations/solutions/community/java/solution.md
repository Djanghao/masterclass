# Solution

**Author:** deleted_user
**Votes:** 450
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/3540706/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/3540706/)

---

```C++ []
class Solution {
public:
long long getSum(vector<int> negate, vector<int>positive)
{
    long long sum =0;
                for(int i=0;i<negate.size();i++)
            {
                sum+=negate[i];
            }
        for(int i=0;i<positive.size();i++)
            {
                sum+=positive[i];
            }
            return sum;
}
    int largestSumAfterKNegations(vector<int>& nums, int k) {
   vector<int>negate;
   vector<int>positive;
    for(int i=0;i<nums.size();i++)
    {
        if(nums[i]>=0)
        {
            positive.push_back(nums[i]);
        }
        else{
            negate.push_back(nums[i]);
        }
    }
    if(negate.size()>k)
    {
        sort(negate.begin(), negate.end());
        for(int i=0;i<k;i++)
        {
            negate[i] = abs(negate[i]);
        }
        return getSum(negate, positive);
    } else {
        for(int i=0;i<negate.size();i++)
        {
            negate[i] = abs(negate[i]);
        }
        int remainingcount = k-negate.size();
        if(remainingcount%2==0)
        {
            return getSum(negate, positive);
        } else {
        int mini = INT_MAX;
            for(int i=0;i<negate.size();i++)
            {
                mini = min(mini, negate[i]);
            }
        for(int i=0;i<positive.size();i++)
            {
                mini = min(mini, positive[i]);
            }
cout<<mini<<endl;
cout<<getSum(negate, positive)<<endl;
            return (getSum(negate, positive) - 2*mini);
        }
    }
    }
};
```

```Python3 []
class Solution:
    def largestSumAfterKNegations(self, nums: List[int], k: int) -> int:
        nums = sorted(nums)
        for i in range(len(nums)):
            if nums[i] < 0 and k > 0:
                nums[i] = -nums[i]
                k -= 1
        nums = sorted(nums)
        if k > 0 and k % 2 != 0: 
            nums[0] = -nums[0]
        return sum(nums)
```

```Java []
class Solution {
    public int largestSumAfterKNegations(int[] nums, int k) {
        int[] numbers = new int[201];
        int sum = 0;
        int maxAbs = 0;
        for (int n: nums) {
            maxAbs = Math.max(maxAbs, Math.abs(n));
            numbers[100 + n]++;
            sum += n;
        }
        if (maxAbs == 0) {
            return 0;
        }
        while (k-- != 0) {
            int i = 100 - maxAbs;
            while (numbers[i] == 0) {
                i++;
            }
            numbers[i]--;
            numbers[200 - i]++;
            sum -= 2 * (i - 100);
        }
        return sum;
    }
}
```