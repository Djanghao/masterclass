# Easy Explaination || Binary Search || 100%

**Author:** Adishka15
**Votes:** 18
**Link:** [https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5818296/](https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5818296/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
##### **Since the relationship between the height reduction and the time is monotonic, binary search takes advantage of this property by eliminating half of the possible values with each decision. This property is not utilized in linear search, which checks each value sequentially.**

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Optimization Problem:** We're trying to minimize the time it takes for workers to reduce the mountain height.
2. **Guessing Time:** For a guessed time t, we check if all workers can finish reducing the mountain in that time.
- If they can, we try for a smaller \uD835\uDC61.
- If they can't, we need a larger \uD835\uDC61.
3. **Search Range:** We search from 0 to a large number (like 1\uD835\uDC5218).
4. **Feasibility Check:** For each \uD835\uDC61.
- Calculate how much each worker can reduce the height using the formula for the sum of the first \uD835\uDC65 numbers.
- Stop when the total height reduced meets or exceeds the mountain height.
5. **Narrowing Down:** By repeating this process with binary search, we find the smallest feasible \uD835\uDC61 to reduce the mountain height to zero

# Complexity
- Time complexity: O(N*og(N))+O(N)\u2248 **O(N)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:

    bool canfind(long long t, int h, vector<int>& wt){
        long long totalH = 0;

        for (int w : wt) {
            long long left = 0, right = 1e6;
            while (left <= right) {
                long long mid = left + (right - left) / 2;
                if (w * mid * (mid + 1) / 2 <= t) left = mid + 1;
                else right = mid - 1;
            }
            totalH += right;
            if (totalH >= h) return true;
        }
        return totalH >= h;
    }

    long long minNumberOfSeconds(int h, vector<int>& wt) {
        long long s=0, e=1e18;
        long long ans=0;

        while(s<=e){
            long long mid=s+(e-s)/2;
            if(canfind(mid, h, wt)){
                e=mid-1;
                ans=mid;
            }else{
                s=mid+1;
            }
        }
        return ans;
    }
};
```