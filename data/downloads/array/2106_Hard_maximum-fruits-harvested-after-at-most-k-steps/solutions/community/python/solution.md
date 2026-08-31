# Straight forward O(N) solution

**Author:** YJL1228
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1624366/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1624366/)

---

By ignoring those out of range, we can simplify the given fruits into a new array, where the size of window is 2k+1. So  the new array looks like: [ arr[0] ..... arr[k] = fruits[startPos]  ..... arr[2k+1]]

Note that we can also operate on the given array to save few lines (the pre-treatment above is also a O(N)).

First, we begin from the sum of left part and sum of right part.

Next, handle the cases when there's a change of direction:  we use 2 moves when we go 1 step, turn back, and 1 step back to original spot. **Compared with no change of direction, we've lost 2 positions.**

e.g. 
say we initially go right, but change direction at arr[k+1] 
=> we can no longer reach arr[0] and arr[1] 
=> simply use leftSum+arr[k+1] - arr[0] - arr[1]

Keep increase the turning point (both at left and right side), so on and so forth. Both python and c++ are provided below. The logic is the same and I believe there's some room to make the code more concise. See [this](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/discuss/1624423/10-lines-Python-solution)  for a 10 liner solution.

**Trick**: using ~ in the Python index assignment to avoid counting index with array length.

**Python**
```
class Solution:
    def maxTotalFruits(self, fruits: List[List[int]], startPos: int, k: int) -> int:
        arr = [0 for _ in range(2*k+1)]
        for pos, numOfFruit in fruits:
            if pos < startPos-k or pos > startPos+k:
                continue
            arr[pos-(startPos-k)] += numOfFruit
        
        left, right = sum(arr[:k+1]), sum(arr[k:])
        maxSeen = max(left, right)
        
        turn = 1                            # turning point
        for i in range(2, k+1, 2):
            left = left-arr[i-2]-arr[i-1]+arr[k+turn]
            right = right-arr[~(i-2)]-arr[~(i-1)]+arr[k-turn]
            maxSeen = max(maxSeen, left, right)
            turn += 1
        
        return maxSeen
```

**C++**
```
class Solution {
public:
    int maxTotalFruits(vector<vector<int>>& fruits, int startPos, int k) {
        vector<int> arr;
        for (int i=0; i<2*k+1; ++i) {
            arr.push_back(0);
        }
        
        for (int i=0; i<fruits.size(); ++i) {
            if ((fruits[i][0] < startPos-k) || (fruits[i][0] > startPos+k)) continue;
            arr[fruits[i][0]-(startPos-k)] += fruits[i][1];
        }
        
        int left = 0, right = 0;
        for (int i = 0; i <= k; ++i) {
            left += arr[i];
            right += arr[k+i];
        }
        int maxSeen = max(left, right);
        int L = arr.size();
        int turn = 1;
        for (int i = 2; i < k+1; i += 2) {
            left = left+arr[k+turn]-arr[i-1]-arr[i-2];
            right = right+arr[k-turn]-arr[L-1-(i-1)]-arr[L-1-(i-2)];
            if (left > maxSeen) maxSeen = left;
            if (right > maxSeen) maxSeen = right;
            turn++;
        }
        return maxSeen;
        
        
    }
};

```
