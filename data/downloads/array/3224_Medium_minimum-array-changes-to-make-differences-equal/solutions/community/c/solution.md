# Beats 100% | Easy Solution | C++

**Author:** vaibhav_134
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5506835/](https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5506835/)

---

# Intuition
Initially you would think to find the max occurring difference in the array and use that but there is a loophole in it that we also need to find max attainable difference for each pair.

For example: 2,1,4,4,3,4,7,8 and k = 8

for this case
(2,8) pair will have differnece 6
(1,7) pair will have differnece 6
(4,4) pair will have differnece 0
(4,3) pair will have differnece 1

If you see max occurring difference is 6 and for that you will have to do 4 changes since 4,4 and 3,4 pair will require to change both no as changing only one no you cannot attain difference 6. So, the optimal solution in this case would be to achieve difference 1 or 0 i.e. only 3 changes.
Possible Solution: 8,7,4,4,4,4,7,8 for 0 difference


# Approach
So the basic approach in this problem would be that for each pair we will calculate max attainable difference after one operation and current difference and store count of these difference in two arrays. Now, for each difference (say x) we will calculate 3 values
1. no of pairs with tha difference x.
2. no of pairs having max attainable greater or equal than x but difference not equal to x.
3. no of pairs having max attainable less than x and obviously difference also less than x.
now based on these 3 values we will get count of operations needed to be performed. 

# Complexity
- Time complexity: O(k+n)
Since initially we are traversing given array of elements i.e. O(n) and after that again for each possible difference i.e O(k).

- Space complexity: O(k)
Since we are creating two arrays with size O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minChanges(vector<int>& nums, int k) {
        vector<int> diffCount(k+1,0),maxAttainable(k+1,0);
        int n = nums.size();

        for (int i=0;i<n-1-i;i++) {
            int diff = abs(nums[i] - nums[n-i-1]);
            diffCount[diff]++;

            int mxDiff = max(max(nums[i],k-nums[i]),max(nums[n-i-1],k - nums[n-i-1]));
            maxAttainable[mxDiff]++;
        }

        int ans = nums.size(),curSum = 0;
        for (int i=k;i>=0;i--) {
            curSum += maxAttainable[i];
            int countGroupRight = curSum - diffCount[i];
            int countGroupLeft = n/2 - countGroupRight - diffCount[i];

            int ops = countGroupLeft*2 + countGroupRight;
            ans = min(ans,ops);
        }

        return ans;
    }
};
```


![image](./images/0.png)
**Note**: I wrote this solution during contest so it may not be most optimal solution and can be further optimised.