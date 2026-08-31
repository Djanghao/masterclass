# C++ | Easy C++ Solution | Prefix Sum |  Array | O(N)

**Author:** shibu_10
**Votes:** 17
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3659461/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3659461/)

---

1. The k-radius subarray average centred at i only exists if number of elements to it's left and right are **greater than or equal to k**
2. We try to maintain the left count and right count which indicates the counts of elements to left and right side of the element respectively.
3. If both the counts are greater than or equal to k, we can calculate the k-radius subarray average. If not, answer is -1.
4. To get the sum of the right and left segments, we use the concept of **Prefix-Sums** to calculate it in O(1) time.
5. The total number of elements in the subarray will be **2*k + 1**.
6. Hence the average can be easily calculated with the total sum of segment and total number of elements by dividing them.

Time Complexity : O(n)
Space Complexity : O(n)

```
vector<int> getAverages(vector<int>& arr, int k) {
        int n = arr.size();
        vector<int>ans(n);
        
        vector<long long>pref(n);
        pref[0] = arr[0];
        for (int i = 1; i < n; i++)
            pref[i] = pref[i - 1] + arr[i];
        
        for (int i = 0; i < n; i++)
        {
            int lcnt = i;
            int rcnt = n - i - 1;
            if (lcnt >= k and rcnt >= k)
            {
                long long lsum = 0;
                long long rsum = pref[i + k];
                
                if (i - k > 0)
                    lsum = pref[i - k - 1];
                    
                ans[i] = (rsum - lsum) / (2*k + 1);
            }
            else
                ans[i] = -1;
        }
        
        return ans;
    }
```
