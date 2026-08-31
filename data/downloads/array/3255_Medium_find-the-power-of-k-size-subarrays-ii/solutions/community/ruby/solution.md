# NO DP | 2 pointers🔥 | Time: O(N) Space: O(1) ✅

**Author:** divas-sagta
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5654473/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5654473/)

---

# Intuition
![Screenshot 2024-08-18 133342.png](./images/0.png)
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Basic Sliding window approach (using 2 pointers)..
- Just keep a variable(here, prevind) to track the position of last element in the window that is causing problem or not as expected from the sequence.

- If prevind for any window lie in the range of window except starting of window beacuse starting of window will start the sequence(consecutive increasing) --> then store -1.

- Else store the value at end of the current sliding window.

- In my code i=> points to end+1 of the window and j=> points to start of the window.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) (not considering result array)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    vector<int> resultsArray(vector<int>& nums, int k) {
        if(k==1) return nums;
        vector<int>res;
        int i=1, j=0, prevind=-1, n=nums.size();
        while(i<n){
            while(i-j<k){
               if(nums[i]!=nums[i-1]+1) prevind=i;
               i++;
            }
            if(prevind>i-k) res.push_back(-1);
            else res.push_back(nums[i-1]);
            j++;
        }
        return res;
    }
};
```
```java []
class Solution {
    public int[] resultsArray(int[] nums, int k) {
        if (k == 1) return nums;
        int[] res = new int[nums.length - k + 1];
        int resIndex = 0;
        int i = 1, j = 0, prevind = -1, n = nums.length;
        
        while (i < n) {
            while (i - j < k) {
                if (nums[i] != nums[i - 1] + 1) prevind = i;
                i++;
            }
            if (prevind > i - k) {
                res[resIndex++] = -1;
            } else {
                res[resIndex++] = nums[i - 1];
            }
            j++;
        }
        return res;
    }
}
```
```javascript []
var resultsArray = function(nums, k) {
    if (k === 1) return nums;
    let res = [];
    let i = 1, j = 0, prevind = -1, n = nums.length;

    while (i < n) {
        while (i - j < k) {
            if (nums[i] !== nums[i - 1] + 1) prevind = i;
            i++;
        }
        if (prevind > i - k) {
            res.push(-1);
        } else {
            res.push(nums[i - 1]);
        }
        j++;
    }
    return res;
};

```
```python []
class Solution:
    def resultsArray(self, nums, k):
        if k == 1:
            return nums
        res = []
        i, j, prevind = 1, 0, -1
        n = len(nums)

        while i < n:
            while i - j < k:
                if nums[i] != nums[i - 1] + 1:
                    prevind = i
                i += 1
            if prevind > i - k:
                res.append(-1)
            else:
                res.append(nums[i - 1])
            j += 1
        return res

```
```ruby []
def results_array(nums, k)
    return nums if k == 1
    res = []
    i, j, prevind = 1, 0, -1
    n = nums.length

    while i < n
        while i - j < k
            prevind = i if nums[i] != nums[i - 1] + 1
            i += 1
        end
        if prevind > i - k
            res << -1
        else
            res << nums[i - 1]
        end
        j += 1
    end
    res
end

```