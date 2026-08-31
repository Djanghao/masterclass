# C/C++ Sliding windows & sort vs Freq count||Beats 100%

**Author:** anwendeng
**Votes:** 14
**Link:** [https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4300801/](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4300801/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort the array `nums`, and then use sliding windows to find the max frequency.

2nd approach uses frequency counting. For quick implementation, just use it as as a counting sort function replacing `sort`& reuse the rest of part of 1st code; both C & C++ are implemented.
# Approach
<!-- Describe your approach to solving the problem. -->
Compute `sum=sum(nums[l..r])`
if `(r-l+1)*x-sum>k`: `sum-=nums[l++];` slide the window.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n\\log n)$$
freq count:
$O(n+m)$ where $m=max(nums)$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$ vs $O(m)$
# Code 125ms Beats 97.71%
```
#pragma GCC optimize("O3")
class Solution {
public:
    int maxFrequency(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        int n=nums.size();
        int freq=0, l=0;
        long long sum=0;
        #pragma unroll
        for(int r=0; r<n; r++){
            long long x=nums[r];
            sum+=x;
            #pragma unroll
            while((r-l+1)*x-sum>k){
               sum-=nums[l++]; 
            }
            freq=max(freq, r-l+1);
        }       
        return freq;
    }
};
auto init = []()
{ 
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```
# 2nd C++ code runs in 100 ms Beats 99.96%|| C code beats 100%

```C []
#pragma GCC optimize("O3")
int freq[100001]={0};
void freqSort(int* nums, int n){
    memset(freq, 0, sizeof(freq));
    int M=0;
    #pragma unroll
    for(register int i=0; i<n; i++){
        int x=nums[i];
        freq[x]++;
        if (x>M) M=x;
    }
    int i=0;
    #pragma unroll
    for(register int x=1; x<=M; x++){
        while(freq[x]-->0){
            nums[i++]=x;
        }
    }

}
int maxFrequency(int* nums, int n, int k) {
    freqSort(nums, n);

    int Freq=0, l=0;
    long long sum=0;
    #pragma unroll
    for(register int r=0; r<n; r++){
        long long x=nums[r];
        sum+=x;
        #pragma unroll
        while((r-l+1)*x-sum>k)
            sum-=nums[l++]; 
        if (Freq<r-l+1)Freq=r-l+1;
    }       
    return Freq;
}
```

```C++ []
#pragma GCC optimize("O3")
class Solution {
public:
    vector<int> freq;
    void freqSort(vector<int>& nums,int n){
        int M=*max_element(nums.begin(), nums.end());
        freq.assign(M+1, 0);
        #pragma unroll
        for(int x: nums)
            freq[x]++;
        int i=0;
        #pragma unroll
        for(int x=0; x<=M; x++){
            int f=freq[x];
            if (f==0) continue;
            fill(nums.begin()+i, nums.begin()+(i+f), x);
            i+=f;
        }
    }

    int maxFrequency(vector<int>& nums, int k) {
        int n=nums.size();
        freqSort(nums, n);

        int freq=0, l=0;
        long long sum=0;
        #pragma unroll
        for(int r=0; r<n; r++){
            long long x=nums[r];
            sum+=x;
            #pragma unroll
            while((r-l+1)*x-sum>k){
               sum-=nums[l++]; 
            }
            freq=max(freq, r-l+1);
        }       
        return freq;
    }
};

```