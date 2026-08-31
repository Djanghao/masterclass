# ✅Short || C++ || Java || PYTHON || Explained Solution✔️ || Beginner Friendly ||🔥 🔥 BY MR CODER

**Author:** mrcoderrm
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2452689/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2452689/)

---

**Please UPVOTE if you LIKE!!**

https://t.me/dsacoder  \u2B05\u2B05 **Telegram link** to discuss leetcode daily questions and other dsa problems
**Watch this video \uD83E\uDC83 for the better explanation of the code.**
APPROACH- 1 Video Explanation \uD83E\uDC83\uD83E\uDC83
https://www.youtube.com/watch?v=iJfEo9g2zs4


**Also you can SUBSCRIBE  \uD83E\uDC81 \uD83E\uDC81 \uD83E\uDC81 this channel for the daily leetcode challange solution.**
**C++ Approach-1** 
```
 class Solution {
public:
    int minRefuelStops(int target, int startFuel, vector<vector<int>>& stations) {
        int n= stations.size();
        long dp[n+1];
        memset(dp, 0, sizeof(dp));
        dp[0]= startFuel;
        for(int i=0; i< n; i++){
           for(int j=i; j>=0 && dp[j]>= stations[i][0]; j--) {
          dp[j+1] = max(dp[j+1], (dp[j]+ stations[i][1]));
               }  
        }
        for(int i=0; i<=n ; i++){
            if(dp[i]>=target) return i;
        }
        return -1;
    }
};
```

**C++ Approach-2** 
```
class Solution {
public:
    int minRefuelStops(int target, int startFuel, vector<vector<int>>& stations) {
   int n= stations.size();
        int fuel=startFuel; int fuelno=0;
        int ans=0;
        priority_queue<int> pq;
        while(fuel<target){
           while(fuelno<n && fuel>= stations[fuelno][0]) 
           { 
               pq.push(stations[fuelno][1]);

            fuelno++;
           }
            
            
            
            
            if(pq.empty()) return -1;
          fuel = fuel+ pq.top();
            pq.pop();
            
            ans++;

        }
          return ans;
    }
};
```

**PYTHON**(copied)-https://leetcode.com/problems/minimum-number-of-refueling-stops/discuss/2451158/Java-Python-or-Heap-or-4ms-185ms

```
class Solution:
    def minRefuelStops(self, target: int, startFuel: int, stations: List[List[int]]) -> int:
        fuelInStation = []
        res = 0
        fuel = startFuel
        
        for station in stations:
            while (fuel < station[0]):
                if (not fuelInStation):
                    return -1
                fuel -= heapq.heappop(fuelInStation)
                res += 1
            heapq.heappush(fuelInStation, -station[1])
        
        while (fuel < target):
            if (not fuelInStation):
                return -1
            fuel -= heapq.heappop(fuelInStation)
            res += 1
        
        return res
```
**JAVA**(copied)-https://leetcode.com/problems/minimum-number-of-refueling-stops/discuss/2451158/Java-Python-or-Heap-or-4ms-185ms
```
class Solution {
    public int minRefuelStops(int target, int startFuel, int[][] stations) {
        PriorityQueue<Integer> fuelInStation = new PriorityQueue<>((x, y) -> (y - x));
        
        int res = 0;
        int fuel = startFuel;
        
        for (int[] station : stations) {
            while (fuel < station[0]) {
                if (fuelInStation.isEmpty()) return -1;
                fuel += fuelInStation.poll();
                res++;
            }
            fuelInStation.offer(station[1]);
        }
        
        while (fuel < target) {
            if (fuelInStation.isEmpty()) return -1;
            fuel += fuelInStation.poll();
            res++;
        }
        
        return res;
    }
}
```
**Please UPVOTE  to motivate me for solving more questions like this and clubbing all languages solution!!**