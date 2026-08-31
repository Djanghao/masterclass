# [C++] Simplest DP Solution | Easy Explanation | Clean Code

**Author:** Mythri_Kaulwar
**Votes:** 8
**Link:** [https://leetcode.com/problems/remove-boxes/solutions/2241047/](https://leetcode.com/problems/remove-boxes/solutions/2241047/)

---

We need to return the maximum points we can get by removing continuous boxes of same colour from the array at a time until the array becomes empty (we get ```k * k``` points for removing ```k``` continuous boxes of same colour).

Let's take the following example to understand the approach.

```
 0  1  2  3  4  5  6  7
[2, 2, 2, 2, 3, 2, 2, 3]
```

1. It's better to choose to remove all contiguous boxes of same colour at a time rather than in more than 1 turn. 
Take boxes from index ```0``` to ```3``` for example. If we remove ```2``` boxes at a time and then the next ```2```, we get a score of ```2 * 2 + 2 * 2 = 8``` which is much lesser than ```4 * 4 = 16``` (This is because ```a^2 + b^2``` is always less than ```(a + b)^2```).


2. Let's say, we define ```dp[i][j]``` as the maximum points that can be scored in between indices ```[i, j]``` (both inclusive). But...
Let's suppose we remove box at index ```4``` first. Then there are ```6``` boxes of same colour / type (i.e; ```2```) that become contiguous. Instead of removing them separately in ```2``` turns, it's better to remove them all at once.
So this problem is similar to **Burst balloons**, where after bursting a balloon, the left and right subarrays come together. So, like the above problem, the sub-problems are not independent of each other. 
So, here we will define another variable ```cnt``` which will be the no. of boxes of similar colour as ```box[i]``` to the left of it. ```dp[i][j][cnt]``` can be calculated as follows :

   (i)    We increment ```cnt``` and ```i``` until we have all the contiguous boxes of same colour as ```boxes[i]``` and then ```ans = (cnt + 1) * (cnt + 1) + recur(boxes, i, j, 0)``` --> Since now, we have ```0``` boxes on the left of ```i``` that are of same colour.
   
   (ii)   But there might be more boxes in between indices ```[i, j]``` that are of same colour as ```box[i]```. Let's say at index ```k```, we've found a box of the same colour. So the answer is ```max(ans, recur(boxes, i+1, k-1, 0) //since there are 0 boxes of the same colour on the left + recur(boxes, k, j, cnt+1) //since one more balloon is now added to "cnt"```.
   
**Code:**
```
class Solution {
    vector<vector<vector<int>>> dp;
public:
    int removeBoxes(vector<int>& boxes) {
        int n = boxes.size();
        dp.resize(n+1, vector<vector<int>>(n+1, vector<int>(n+1, -1)));
        
        return solve(boxes, 0, n-1, 0);
    }
    
    int solve(vector<int> &boxes, int i, int j, int cnt) {
        if(i > j) return 0;
        
        if(dp[i][j][cnt] != -1) return dp[i][j][cnt];
        
        int i0 = i, cnt0 = cnt;
        
        while(i + 1 <= j && boxes[i] == boxes[i+1]) i++, cnt++;
        
        int ans = (cnt+1) * (cnt+1) + solve(boxes, i+1, j, 0);
        
        for(int k=i+1; k<=j; k++) {
            if(boxes[k] == boxes[i]) {
                ans = max(ans, solve(boxes, i+1, k-1, 0) + solve(boxes, k, j, cnt+1));
            }
        }
        return dp[i0][j][cnt0] = ans;
    }
};
```


