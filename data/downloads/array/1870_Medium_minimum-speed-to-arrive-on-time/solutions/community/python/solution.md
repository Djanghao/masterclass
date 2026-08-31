# Binary search || Video Explanation in depth || C++||  java || Python

**Author:** shivam-727
**Votes:** 39
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3816882/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3816882/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
By linearly checking from speed 1 to 1^7 we will get tle its better to check by binary search because from binary search we can ignore the range which can not be answer.This will  help in finding efficiently.

For detailed explanation you can refer to my youtube channel (hindi Language) 
https://youtu.be/-PXB7UH4xc4
or link in my profile.Here,you can find any solution in playlists monthwise from June 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation (5-10) minutes.

# Approach
<!-- Describe your approach to solving the problem. -->
time=distance/speed;
if speed increase time will decrease.

1. We will perform a binary search to find Minimum Speed to Arrive on Time .

2. Initialize two pointers, `i` and `j`, where `i` points to the minimum possible speed (1) and `j` points to the maximum possible speed (1e7 or 10^7).

3. In each iteration of the binary search:
   - Calculate the mid-point `mid` between `i` and `j`.
   - Check if it is possible to reach office in time `hour` at the speed `mid`. If yes, update the minimum speed candidate and continue the search in the lower half by updating `j = mid - 1`.
   - If it is not possible to reach office at the current speed i.e taking time more than given hour then increase the speed so time will decrease , continue the search in the upper half by updating `i = mid + 1`.

4. The binary search continues until `i` becomes greater than `j`.

5. The function returns the minimum speed to arrive on time 

# Complexity
- Time complexity:$$O(nlogk)$$
(where k is 10^7)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` C++ []
class Solution {
public:
    bool ispossible(vector<int>& dist,int speed,double hour){
        double ans=0;
        for(int i=0;i<dist.size();i++){
            double d=dist[i]*1.0/speed;
            if(i!=dist.size()-1)
            ans=ans+ceil(d);
            else
            ans+=d;
            if(ans>hour)
            return false;
        }
       if(ans<=hour)
       return true;
       return false;
    }
    int minSpeedOnTime(vector<int>& dist, double hour) {
        int i=1;
        int j=1e7;
        int minspeed=-1;
        while(i<=j){
            int mid=i+(j-i)/2;
            if(ispossible(dist,mid,hour)){
               minspeed=mid;
               j=mid-1;
            }
            else
            i=mid+1;
        }
        return minspeed;
    }
};
```
```java []

class Solution {
     public boolean isPossible(int[] dist, int speed, double hour) {
        double ans = 0;
        for (int i = 0; i < dist.length; i++) {
            double d = dist[i] * 1.0 / speed;
            if (i != dist.length - 1)
                ans = ans + Math.ceil(d);
            else
                ans += d;
            if (ans > hour)
                return false;
        }
        return ans <= hour;
    }

    public int minSpeedOnTime(int[] dist, double hour) {
         int i = 1;
        int j = (int) 1e7;
        int minSpeed = -1;
        while (i <= j) {
            int mid = i + (j - i) / 2;
            if (isPossible(dist, mid, hour)) {
                minSpeed = mid;
                j = mid - 1;
            } else
                i = mid + 1;
        }
        return minSpeed;
    }
}

```
```python3 []

class Solution:
    def isPossible(self, dist: List[int], speed: int, hour: float) -> bool:
        ans = 0
        for i in range(len(dist)):
            d = dist[i] * 1.0 / speed
            if i != len(dist) - 1:
                ans = ans + math.ceil(d)
            else:
                ans += d
            if ans > hour:
                return False
        return ans <= hour

    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
        i, j = 1, int(1e7)
        min_speed = -1
        while i <= j:
            mid = i + (j - i) // 2
            if self.isPossible(dist, mid, hour):
                min_speed = mid
                j = mid - 1
            else:
                i = mid + 1
        return min_speed

```

