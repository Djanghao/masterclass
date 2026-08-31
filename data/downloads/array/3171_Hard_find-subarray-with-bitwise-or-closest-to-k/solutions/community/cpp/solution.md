# Sliding window with frequency counter (Question has been edited)

**Author:** donpaul271
**Votes:** 60
**Link:** [https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5243400/](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5243400/)

---

(This solution is for AND operation not OR)

Use a frequency array of size 32 to keep track of number of 0s at each bit position.

Each element in the array will keep track of number of 0s in that particular bit position of numbers inside the sliding window. 

The bit will be set only if number of zeroes at that bit position is 0(property of bitwise AND).

Keep sliding the window until the and value of window goes below k.
 
When it goes below k there is no point in further increasing the size of the window as Bitwise AND always reduces the value and the absolute difference will keep increasing.

At this point start reducing the size of the window till the value of the window goes above k.

Continue this process till the end of array and keep track of the min absolute difference.

(please upvote if it helped)

# Code
```
#define ll long long

ll cal(vector<int> &fr) // function for calculating the value of the window
{
    ll ans = 0;
 
    for(int i=0; i<32; ++i)
    {
        if(fr[i] == 0)          // setting the bit if zero count is 0.
            ans+=pow(2, i);
    }
    
    return ans;
}


void add(vector<int> &fr, int val) // function for adding to the window
{
    
    for(int i=0; i<32; ++i)
    {
        if( !((val>>i) & 1) ) // checking if the bit is zero
            fr[i]++;
    }   
}


void sub(vector<int> &fr, int val) // function for removing from window
{
    for(int i=0; i<32; ++i)
    {
        if( !((val>>i) & 1) ) // checking if the bit is zero
            fr[i]--;
    }   
}

class Solution {
public:
    int minimumDifference(vector<int>& nums, int k) {
            
        int n = nums.size();
        int high = *max_element(nums.begin(), nums.end());
        
        if(nums.size() == 1)
            return abs(k - nums[0]);
        
        if(k >= high)         // if k > max value there is no point in further calculation as bitwise AND alays reduces the value.
            return k - high;
        
        vector<int> fr(32, 0);
        
        int p1 = 0;
        int p2 = 1;
        
        ll curr = nums[0]; 
        add(fr, nums[0]);
        
        ll ans = 1e9+1;
        
        while(p2<n)
        {
            ans = min(ans, abs(curr-k));
            
            while(curr > k && p2 < n)
            {
                add(fr, nums[p2]);
                curr = cal(fr);
                ans = min(ans, abs(curr-k));
                ++p2;
            }
        
            
            while(curr < k && p1 < p2)
            {
                sub(fr, nums[p1]);
                curr = cal(fr);
                ans = min(ans, abs(curr-k));
                ++p1;
            }
                
            if(curr == k)
                return 0;    
        }

        return ans;   
    }
};
```