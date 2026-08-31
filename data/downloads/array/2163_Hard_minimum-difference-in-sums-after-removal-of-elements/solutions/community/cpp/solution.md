# [C++] Simple C++ Code || Min Heap + Max Heap || O(NlogN)

**Author:** _pros_
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/2302608/](https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/2302608/)

---

# **If you like the implementation then Please help me by increasing my reputation. By clicking the up arrow on the left of my image.**
```
class Solution {
public:
    long long minimumDifference(vector<int>& nums) {
        priority_queue<int> pqmx; //desc
        priority_queue<int, vector<int>, greater<int>> pqmn; // asce
        int N = nums.size();
        int n = N/3;
        vector<long long> fn;
        long long sumf = 0, sumt = 0;
        //cout<< N;
        for(int i = 0; i < n; i++)
        {
            sumf += nums[i];
            pqmx.push(nums[i]);
            sumt += nums[N-1-i];
            pqmn.push(nums[N-1-i]);
        }
        //cout << sumf << " " << sumt;
        fn.push_back(sumf);
        for(int i = n; i < 2*n; i++)
        {
            sumf += nums[i];
            pqmx.push(nums[i]);
            sumf -= pqmx.top();
            fn.push_back(sumf);
            pqmx.pop();
        }
        //cout << fn[0] << " " << fn[1] << " " << fn[2];
        int j = fn.size()-1;
        long long ans = 1e12;
        fn[j] -= sumt;
        //cout << sumt;
        //cout << nums[2*n];
        for(int i = 2*n-1; i >= n; i--)
        {
            if(fn[j] < ans)
                ans = fn[j];
            sumt += nums[i];
            pqmn.push(nums[i]);
            sumt -= pqmn.top();
            j--;
            fn[j] -= sumt;
            pqmn.pop();
        }
        if(fn[j] < ans)
            ans = fn[j];
        return ans;
    }
};
```