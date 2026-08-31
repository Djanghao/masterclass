# solved with || sliding window | brute force|| yes with brute force also

**Author:** CS_MONKS
**Votes:** 45
**Link:** [https://leetcode.com/problems/binary-subarrays-with-sum/solutions/4872579/](https://leetcode.com/problems/binary-subarrays-with-sum/solutions/4872579/)

---

# Intuition
To count the number of non-empty subarrays with a sum equal to the given goal, we iterate through the array while maintaining two pointers, i and j, representing the start and end of the subarray respectively. We update the goal variable based on the elements encountered and count the number of valid subarrays along the way.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize variables i, count, and res to 0. i represents the start of the subarray, count keeps track of the number of subarrays with the sum equal to the goal, and res stores the total count.
2. Iterate through the array using pointer j.
3. If the current element nums[j] is 1, decrement the goal variable and reset count to 0.
4. While goal is 0 and i is less than or equal to j, update goal by adding nums[i], increment i, increment count, and check if i exceeds j - goal + 1. If so, break the loop.
5. While goal is less than 0, update goal by adding nums[i] and increment i.
6. Add count to res.
7. Return res as the result.
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Brute Force and Modified brute force
```c++ []
//This will give TLE 
//modified brute force--> --> --> --> --> --> -->
class Solution {
public:
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        int res = 0;
        for (int start = 0; start < nums.size(); ++start) {
            int sum = 0;
            for (int end = start; end < nums.size(); ++end) {
                sum += nums[end];
                if (sum == goal)
                    ++res;
            }
        }
        return res;
    }
};
```
```c++ []
//This will run
//Although time complexity is (n^2)
//some cases are handeled smartly 
class Solution {
public:
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        int res=0;
        int n=size(nums);
        for(int s=0;s<n;s++){
            int sum=0;
            int flag=0;
            for(int e=s;e<n;e++){
                sum+=nums[e];
                if(sum==goal){
                    flag=1;
                    res++;
                    e++;
                    while(e<n && nums[e]==0){
                        e++;
                        res++;
                    }                   
                    break;
                }
            }
            if(flag==0 && goal!=0)break;
        }
        return res;
    }
};
```
# Sliding Window appoach
```c++ []
class Solution {
public:
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        int i = 0, count = 0, res = 0;
        for (int j = 0; j < nums.size(); ++j) {
            if (nums[j] == 1) {
                goal--;
                count = 0;
            }
            
            while (goal == 0 && i <= j) {
                goal += nums[i];
                i++;
                count++;
                if (i > j - goal + 1)
                    break;
            }
            
            while (goal < 0) {
                goal += nums[i];
                i++;
            }
            
            res += count;
        }
        return res;
    }
};

```
```python3 []
class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        pri={0:1}
        res=0
        summ=0
        for i in nums:
            summ+=i
            res+=pri.get(summ-goal,0)
            pri[summ]=pri.get(summ,0)+1
        return res
```
```java []
import java.util.*;

class Solution {
    public int numSubarraysWithSum(int[] nums, int goal) {
        int i = 0, count = 0, res = 0;
        for (int j = 0; j < nums.length; ++j) {
            if (nums[j] == 1) {
                goal--;
                count = 0;
            }
            
            while (goal == 0 && i <= j) {
                goal += nums[i];
                i++;
                count++;
                if (i > j - goal + 1)
                    break;
            }
            
            while (goal < 0) {
                goal += nums[i];
                i++;
            }
            
            res += count;
        }
        return res;
    }
}

```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let i = 0, count = 0, res = 0;
    for (let j = 0; j < nums.length; ++j) {
        if (nums[j] === 1) {
            goal--;
            count = 0;
        }
        
        while (goal === 0 && i <= j) {
            goal += nums[i];
            i++;
            count++;
            if (i > j - goal + 1)
                break;
        }
        
        while (goal < 0) {
            goal += nums[i];
            i++;
        }
        
        res += count;
    }
    return res;
};

```
```kotlin []
class Solution {
    fun numSubarraysWithSum(nums: IntArray, goal: Int): Int {
        var goalMutable = goal
        var i = 0
        var count = 0
        var res = 0
        for (j in nums.indices) {
            if (nums[j] == 1) {
                goalMutable--
                count = 0
            }
            
            while (goalMutable == 0 && i <= j) {
                goalMutable += nums[i]
                i++
                count++
                if (i > j - goalMutable + 1)
                    break
            }
            
            while (goalMutable < 0) {
                goalMutable += nums[i]
                i++
            }
            
            res += count
        }
        return res
    }
}
```

```