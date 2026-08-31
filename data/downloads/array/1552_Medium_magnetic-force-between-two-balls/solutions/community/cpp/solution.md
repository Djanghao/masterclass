# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS -Binary Search -Interview Solution

**Author:** lancertech6
**Votes:** 159
**Link:** [https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5339212/](https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5339212/)

---

![Screenshot 2024-06-20 060039.png](./images/0.png)


# YouTube Video Explanation:

**If you want a video for this question please write in the comments**

https://youtu.be/EeNZiPUc6BY


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2200 Subscribers*
*Current Subscribers: 2124*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is to distribute `m` balls into `n` baskets such that the minimum magnetic force between any two balls is maximized. The magnetic force between two balls at positions `x` and `y` is defined as `|x - y|`.

This can be approached as a maximization problem where we want to find the largest possible minimum distance between any two balls. Binary search is a suitable technique for this type of optimization problem because it allows us to efficiently explore the range of possible minimum distances.


# Approach
<!-- Describe your approach to solving the problem. -->
1. **Sorting**:
   - First, we sort the array of basket positions. This helps us to efficiently check the possible placement of balls in increasing order of positions.

2. **Binary Search**:
   - We perform binary search on the possible values of the minimum distance (`dist`) between two balls.
   - The lower bound (`lo`) of our search range is `1` (the smallest possible distance).
   - The upper bound (`hi`) is `(position[n-1] - position[0]) / (m-1)`, which is the maximum possible minimum distance when placing `m` balls in `n` baskets.

3. **Placement Check**:
   - For each mid value in our binary search, we check if it is possible to place `m` balls such that the minimum distance between any two balls is at least `mid`.
   - We start by placing the first ball in the first basket and then attempt to place each subsequent ball in the next available basket that is at least `mid` distance away from the last placed ball.
   - If we successfully place all `m` balls, it means `mid` is a feasible distance, and we try for a larger distance. If not, we try a smaller distance.

# Complexity
- **Time Complexity**:
  - Sorting the `position` array takes \\(O(n \\log n)\\).
  - Binary search involves \\(O(\\log((position[n-1] - position[0]) / (m-1)))\\) iterations.
  - Each iteration of binary search involves a linear scan through the baskets to check the feasibility, which takes \\(O(n)\\).
  - Combining these, the overall time complexity is \\(O(n \\log n + n \\log ((position[n-1] - position[0]) / (m-1)))\\).

- **Space Complexity**:
  - The space complexity is \\(O(1)\\) as we are only using a few extra variables for binary search and placement check.

# Step by Step Explanation

### Explanation Using Tables

To explain the logic using tables, you can break down the steps as follows:

1. **Initial Setup and Sorting**:
   - Sort the `position` array.
   - Initialize `lo` and `hi` for binary search range.
   
2. **Binary Search**:
   - Perform binary search to find the maximum possible minimum distance.
   - For each `mid` value, check if it is possible to place `m` balls with at least `mid` distance apart.
   
3. **Placement Check**:
   - Traverse the `position` array to place balls.
   - Use a counter to count the number of balls placed and update the position of the last placed ball.
   - If the required number of balls are placed, return `true`, otherwise return `false`.

| Step                | Description                                                                                                  |
|---------------------|--------------------------------------------------------------------------------------------------------------|
| Sort `position`     | Ensure the positions are in ascending order for easier placement checking.                                   |
| Initialize `lo`, `hi` | Set `lo` to 1 and `hi` to the maximum possible minimum distance `(position[n-1] - position[0]) / (m - 1)`.  |
| Binary Search       | Iterate until `lo` is less than or equal to `hi`. Calculate `mid` and check placement feasibility.            |
| Check Placement     | Start from the first position, place balls if the distance from the last placed ball is at least `mid`.       |
| Update Search Range | If placement is feasible, set `ans` to `mid` and move `lo` to `mid + 1`. Otherwise, move `hi` to `mid - 1`.  |
| Return Result       | The variable `ans` holds the maximum possible minimum distance after the search completes.                    |


# Code
```java []
class Solution {
    public int maxDistance(int[] position, int m) {
        Arrays.sort(position);
        int lo = 1;
        int hi = (position[position.length-1]-position[0])/(m-1);
        int ans = 1;
        while(lo<=hi)
        {
            int mid = lo+(hi-lo)/2;
            if(canWePlace(position, mid, m))
            {
                ans = mid;
                lo=mid+1;
            }
            else
            {
                hi = mid-1;
            }
        }
        return ans;
    }
    private boolean canWePlace(int[] arr, int dist, int cows)
    {
        int cntCows=1;
        int last = arr[0];
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]-last>=dist)
            {
                cntCows++;
                last = arr[i];
            }
            if(cntCows>=cows)
            {
                return true;
            }
        }
        return false;
    }
}
```
```C++ []
class Solution {
public:
    int maxDistance(vector<int>& position, int m) {
        sort(position.begin(), position.end());
        int lo = 1;
        int hi = (position.back() - position[0]) / (m - 1);
        int ans = 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (canWePlace(position, mid, m)) {
                ans = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return ans;
    }

private:
    bool canWePlace(const vector<int>& arr, int dist, int balls) {
        int countBalls = 1;
        int lastPlaced = arr[0];
        for (int i = 1; i < arr.size(); i++) {
            if (arr[i] - lastPlaced >= dist) {
                countBalls++;
                lastPlaced = arr[i];
            }
            if (countBalls >= balls) {
                return true;
            }
        }
        return false;
    }
};
```
```Python []
class Solution(object):
    def maxDistance(self, position, m):
        position.sort()
        lo, hi = 1, (position[-1] - position[0]) // (m - 1)
        ans = 1
        
        while lo <= hi:
            mid = lo + (hi - lo) // 2
            if self.canWePlace(position, mid, m):
                ans = mid
                lo = mid + 1
            else:
                hi = mid - 1
        
        return ans
    
    def canWePlace(self, arr, dist, balls):
        countBalls = 1
        lastPlaced = arr[0]
        for i in range(1, len(arr)):
            if arr[i] - lastPlaced >= dist:
                countBalls += 1
                lastPlaced = arr[i]
            if countBalls >= balls:
                return True
        return False
        
```
```JavaScript []
var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);
    let lo = 1;
    let hi = Math.floor((position[position.length - 1] - position[0]) / (m - 1));
    let ans = 1;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (canWePlace(position, mid, m)) {
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    
    return ans;
};

function canWePlace(arr, dist, balls) {
    let countBalls = 1;
    let lastPlaced = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - lastPlaced >= dist) {
            countBalls++;
            lastPlaced = arr[i];
        }
        if (countBalls >= balls) {
            return true;
        }
    }
    return false;
}

```

![upvote.png](./images/1.png)
