# C/C++/Python Freq array counting||0ms  beats 100%

**Author:** anwendeng
**Votes:** 36
**Link:** [https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4840098/](https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4840098/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It needs a container for storing the counting results

2nd Approach is a 1 pass solution implemented in C++ which runs in 0ms & beats 100%.
# Approach
<!-- Describe your approach to solving the problem. -->
[Please turn English subtitles if necessary]
[https://youtu.be/Q7RhgO8bby4?si=ahsR9BPXvqIBQ7DE](https://youtu.be/Q7RhgO8bby4?si=ahsR9BPXvqIBQ7DE)
Since the constraints `1 <= nums[i] <= 100`, an array of size 101 is suitable for solving problem, no need for a hash table(C++ unordered_map).
1. Use a loop to count the frequencies storing in `freq` & max frequency `maxF`
2. Use a loop to find the number f in `freq` with `f==maxF` & add it to `ans`
3. return `ans`

2nd approach is just to combine the 2 loops into one loop which is more compact written.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n+m)$$ where $m=|freq|\\leq \\max(nums)\\leq 100$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(m)$$
# Code||C/C++ 0ms Beats 100%
```Python []
class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        freq=[0]*101
        maxF=0
        for x in nums:
            freq[x]+=1
            maxF=max(maxF, freq[x])
        ans=0
        for f in freq:
            if f==maxF:
                ans+=f
        return ans
```
```C []
int maxFrequencyElements(int* nums, int numsSize) {
    int freq[101]={0}, maxF=0;
    for(register i=0; i<numsSize; i++){
        int x=nums[i];
        freq[x]++;
        maxF=(maxF<freq[x])?freq[x]:maxF;
    }
    int ans=0;
    for(register i=1; i<=100; i++){
        if (freq[i]==maxF) ans+=freq[i];
    }
    return ans;
}
```

```C++ []

#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    int maxFrequencyElements(vector<int>& nums) {
        int freq[101]={0}, maxF=0;
        for (int x: nums){
            freq[x]++;
            maxF=max(maxF, freq[x]);
        }
        int ans=0;
        for (int f: freq){
            if (f==maxF)
                ans+=f;
        }
        return ans;
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
# C++ 1 pass solution||0ms  beats 100%
```
class Solution {
public:
    int maxFrequencyElements(vector<int>& nums) {
        int freq[101]={0}, maxF=0, f=0;
        for (int x: nums){
            freq[x]++;
            f+=(freq[x]==maxF);
            if (freq[x]> maxF) f=1, maxF=freq[x];
        }
        return f*maxF;
    }
};
```