# Segment Tree

**Author:** donpaul271
**Votes:** 34
**Link:** [https://leetcode.com/problems/peaks-in-array/solutions/5320039/](https://leetcode.com/problems/peaks-in-array/solutions/5320039/)

---



Pre requisite for this approach is that you gotta know how segment trees work.

-------

Initially create a peak array.
If peak[i] = 1, it implies there is a peak at index i
(make sure you dont consider boundary elements)

Now build a segment tree using the peak array.


________________________

QUERY TYPE-1

Just do a query using segment tree from l to r (log(N) time complexity).

If either index l or r is peak make sure you subtract it from the total sum as boundaries should not be considered.

Also if l==r, answer will be by default 0;

___________

QUERY TYPE-2

When a number at index i is modified three indexes will be affected.
Index i-1, i, i+1.

For each of those indexes check if a peak is formed or not.

If its formed update the peak value to 1. Update the segment tree as well(log(N) time complexity)
If its not formed update the peak value to 0. Again update the segment tree as well.

_______

(please upvote if it helped)

# Code
```
#define ll long long

class SGT 
{
    
public:

    vector<ll> seg;

    SGT(int n) 
    {
        seg.resize(4 * n + 1);
    }

    void build(int ind, int low, int high, vector<ll> &arr) 
    {
        if (low == high) 
        {
            seg[ind] = arr[low];
            return;
        }

        int mid = (low + high) / 2;

        build(2 * ind + 1, low, mid, arr);
        build(2 * ind + 2, mid + 1, high, arr);

        seg[ind] = seg[2 * ind + 1] + seg[2 * ind + 2];
    }

    int query(int ind, int low, int high, int l, int r) 
    {

        if (r < low || high < l) 
            return 0;

        if (low >= l && high <= r) 
            return seg[ind];

        int mid = (low + high) >> 1;
        int left = query(2 * ind + 1, low, mid, l, r);
        int right = query(2 * ind + 2, mid + 1, high, l, r);

        return left + right;
    }
    
    void update(int ind, int low, int high, int i, int val) 
    {
        if (low == high) 
        {
            seg[ind] = val;
            return;
        }

        int mid = (low + high) >> 1;

        if (i <= mid) 
            update(2 * ind + 1, low, mid, i, val);

        else 
            update(2 * ind + 2, mid + 1, high, i, val);

        seg[ind] = seg[2 * ind + 1] + seg[2 * ind + 2];
    }
};


class Solution {
public:
    vector<int> countOfPeaks(vector<int>& nums, vector<vector<int>>& q) {

        int n = nums.size();
        vector<ll> peak(n, 0);
        
        for(int i=1; i<n-1; ++i)
        {
            if(nums[i] > nums[i-1] && nums[i] > nums[i+1])
                peak[i] = 1;
        }
            
        vector<int> ans;
        
        SGT st(n);
        st.build(0, 0, n-1, peak);
            
        for(int i=0; i<q.size(); ++i)
        {
            int type = q[i][0];
             
            if(type == 1)
            {
                int l = q[i][1];
                int r = q[i][2];
                
                if(l == r)
                {
                    ans.push_back(0);
                    continue;
                }
                
                ll red = 0;
                
                if(peak[l] == 1)
                    ++red;
                
                if(peak[r] == 1)
                    ++red;
            
                int res = st.query(0, 0, n-1, l, r);
                ans.push_back(res-red);
            }
        
        
            else if(type == 2)
            {
                int p = q[i][1];
                int x = q[i][2];
            
                nums[p] = x;
                
                if(p-1>=0 && p+1<n) // checking index p
                {
                    if(nums[p]>nums[p-1] && nums[p]>nums[p+1])
                    {
                        st.update(0, 0, n-1, p, 1);
                        peak[p] = 1;
                    }
                    
                    else
                    {
                        st.update(0, 0, n-1, p, 0);
                        peak[p] = 0;
                    }
                    
                }
                
                if(p-2>=0 && p<n) // checking index p-1
                {
                    if(nums[p-1]>nums[p-2] && nums[p-1]>nums[p])
                    {
                        st.update(0, 0, n-1, p-1, 1); 
                        peak[p-1] = 1;
                    }
                    
                    else
                    {
                        st.update(0, 0, n-1, p-1, 0);
                        peak[p-1] = 0;
                    }
                }
                
                if(p>=0 && p+2<n) // checking index p+1
                {
                    if(nums[p+1]>nums[p] && nums[p+1]>nums[p+2])
                    {
                        st.update(0, 0, n-1, p+1, 1); 
                        peak[p+1] = 1;
                    }
                    
                    else
                    {
                        st.update(0, 0, n-1, p+1, 0);
                        peak[p+1] = 0;
                    }
                }
            }
        }
        
        return ans;
    }
};


```