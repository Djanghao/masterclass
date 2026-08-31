# [C++/Python3] | Explained why binary search ✅

**Author:** shriyansnaik
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3015105/](https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3015105/)

---

# Why Binary search?

Its a question that is **based on a certain pattern**. It is hard to come up with binary search without any hints if one hasn't ever solved a question of similar pattern. But once you have solved it then it is trivial to come up with this solution.

But let's say worst case scenario you hadn't solved this pattern, a **bruteforce** solution that may come to your mind is let me try all possible values of my final answer (minimum power in this question) and check if it is possible to have this value. We will linearly check the values and see if it satisfies the condition. If it doesn't, return the previous value since we want the maximum that does satisfy.

Now a point to observe here in this particular question is, if a value "x" does not satisfies the condition, then neither will x+1 or x+2 and so on. This is where binary search comes to play. We try a value and if it doesn't satisfy, we can reduce our search space to the left half. If it does satisfy then we want to find a bigger value so move to right half (pretty much like a normal binary search). 

# Tricks to identify that may work sometimes
1. When the question asks to return **maximum minimum value**. It doesn't work all the time so don't rely on it.
2. If you are thinking of applying DP but the constrains are too big.
3. Possible value of answer is an integer and lies between 1 and some big number (like $$10^{9}$$).

# Intuition
Binary search on possible values of power and check if this value is possible to have.

# Approach
1. I used binary search to try out different values of power.
2. To verify if this value of power is possible, we keep a track of cur_power as a sum of sliding window.
3. If the power is less we check if we have enough towers
    - If not we return False.
    - If yes, then we increase the power of rightmost tower in our window so that maximum cities benefit from it.

# Complexity
- Time complexity:
$$O(NlogN)$$

- Space complexity:
$$O(N)$$

# If this post helped, please do upvote : )


```cpp []
class Solution {
public:
    long long maxPower(vector<int>& stations, int r, int k) {
        long long right = LLONG_MAX, left = 0;
        long long best = 0;
        
        while(left<=right){
            long long mid = left+(right-left)/2;
            if(isPossible(mid,stations,r,k)){
                best = mid;
                left = mid+1;
            }else{
                right = mid - 1;
            }
        }
        return best;
    }
    


    bool isPossible(long long min_power, vector<int> stations, int r, int k){
        long long cur_power = 0,power_needed=0;
        int n = stations.size();
        for (int i = 0; i <= r; i++) cur_power += stations[i];

        int left = 0, right = r;
        for (int i = 0; i < n; i++){
            if (i-left>r){
                cur_power -= stations[left];
                left ++;
            }
            if (right-i<r and right<n-1){
                right ++;
                cur_power += stations[right];
            }

            if (cur_power < min_power){
                power_needed = min_power-cur_power;
                if (k<power_needed) return false;
                stations[right] += power_needed;
                cur_power += power_needed;
                k -= power_needed;
            }
        }
        return true;
    }
};
```
```python3 []
class Solution:
    def maxPower(self, stations: List[int], r: int, k: int) -> int:
        best = min(stations)
        left,right = 0,10**12
        
        while left<=right:
            mid = (left+right)//2
            
            if self.isPossible(mid,stations[:],r,k):
                left = mid+1
                best = mid
            else:
                right = mid - 1
        return best
    
    def isPossible(self,min_power,stations,r,k):
        cur_power = 0
        for i in range(r+1):
            cur_power += stations[i]
        
        left,right = 0,r
        for i in range(0,len(stations)):
            if i-left>r:
                cur_power -= stations[left]
                left+=1
            if right-i<r and right<len(stations)-1:
                right+=1
                cur_power += stations[right]
                
            if cur_power < min_power:
                power_needed = min_power-cur_power
                if k<power_needed: return False
                stations[right] += power_needed
                cur_power += power_needed
                k-=power_needed
        return True
            
```

***[This](https://leetcode.com/list/o2pr208d) is a list of similar questions. See if you can come up with a binary search approach for them. Good luck : )***


