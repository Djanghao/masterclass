# Count sub-strings using Sliding window, Prefix sum, Binary search (beats 100%)

**Author:** Jaswanth_9989
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5654564/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5654564/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Initially, You can think of running a loop for every query. But it will be slow.
So, I used prefix sums. And can we use the monotonic property of start indices?

# Approach
<!-- Describe your approach to solving the problem. -->
Firstly, I used sliding window to calculates number of 0's and 1's.
I stored l for each r in prev, such that subarray *[l....r]* is has all valid sub-strings.
And also store number of possible subarrays ending at each index r.
Calculate prefix sum of these counts such that it helps as in range queries. 
For each query,
Since **prev[i+1]>=prev[i]** (as ***l*** will either remain same or increase for each index) for any case, find the first index 'pos' such that ****prev[pos]>=query[0]****.
From this it is clear that for any index < pos, prev[index] will be definitely less than query[0].

So, it is monotonic. We can use binary search to find that index 'pos'.

After finding the index, we can now divide that query into 2 parts.
[L....pos-1] and [pos.....R].

1. In the first case, number of subarrays will be i-l+1 for each index. So, total sum will be (pos-l)*(pos-l+1)/2.
2. In second case, number of subarrays will be i-prev[i]+1 for each index. So, total sum will be pre[R]-pre[pos-1].

So, just add these to get the final answer for each query.





# Complexity
- Time complexity: O(n+q*logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    
    vector<long long> countKConstraintSubstrings(string s, int k, vector<vector<int>>& queries) 
    {
        int n = s.size();
        vector <long long> ans,pre(n),prev(n);
        int l = 0,zeros=0,ones=0;
        for(int r=0;r<n;r++)
        {
            if(s[r]=='1') ones++;
            else zeros++;
            while(zeros > k && ones > k)
            {
                if(s[l]=='1') ones--;
                else zeros--;
                l++;
            }
            prev[r] = l;
        }

        <!-- Calculating prefix sums -->
        pre[0]=1;
        for(int i=1;i<n;i++)
        {
            pre[i] = pre[i-1] + i-prev[i]+1;
        }
        for(auto &q : queries)
        {
            long long l = q[0];
            long long r = q[1];
            long long cur = 0;
            long long pos=r+1;
            <!-- Finding pos -->
            while(l<=r)
            {
                long long mid = (l+r)/2;
                if(prev[mid]>=q[0])
                {
                    pos=mid;
                    r=mid-1;
                } 
                else l=mid+1;
            }

            <!-- If there exists such index -->
            
            if(pos<=q[1])
            {
                cur+=pre[q[1]];
                if(pos>0)cur-=pre[pos-1];
            }
            cur+=(pos-q[0])*(pos-q[0]+1)/2;
            
            ans.push_back(cur);
        }
        return ans;
    }
};
```