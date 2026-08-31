# Simple Hashmap , Beginner friendly ,O(n) time

**Author:** Krishna1164
**Votes:** 0
**Link:** [https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6098977/](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6098977/)

---

# Intuition

1. Calculate the total sum of the array and count the frequency of each number.
2. For each element nums[i], remove it from the sum and check if the remaining sum is even.
3. If it's even, check if half of this sum exists in the array (either as a different number or the same number with a frequency > 1).
4. The largest such element nums[i] is considered the outlier, which is returned. 

# Approach
1. Find the total sum of all the numbers in the array.
2. For each number, remove it from the total sum and check if the remaining sum is even.
3. If the remaining sum is even, check if half of that sum exists in the array.
4. If it does, that number is an outlier. Keep track of the largest one.
Finally, return the largest outlier found.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```cpp []
class Solution {
public:
    int getLargestOutlier(vector<int>& nums) {
        int tot_sum = 0;
        unordered_map<int, int> mp;
        int res = INT_MIN;
        int n = nums.size();
        
        for (auto ch : nums) {
            tot_sum += ch;
            mp[ch]++;
        }

        for (int i = 0; i < n; i++) {
            int temp = tot_sum - nums[i]; 

        
            if (temp % 2 != 0) {
                continue;
            }

            int val = temp / 2; 
            
            if (mp.find(val) != mp.end() &&  (val!=nums[i] || mp[val]>1)) {
                res = max(res, nums[i]);
            }
        }

        return res;
    }
};


```

```java []
  import java.util.HashMap;
import java.util.Map;

class Solution {
    public int getLargestOutlier(int[] nums) {
        int totSum = 0;
        Map<Integer, Integer> freqMap = new HashMap<>();
        int res = Integer.MIN_VALUE;

        for (int num : nums) {
            totSum += num;
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        for (int num : nums) {
            int temp = totSum - num;

            if (temp % 2 != 0) continue;

            int val = temp / 2;

            if (freqMap.containsKey(val) && (val != num || freqMap.get(val) > 1)) {
                res = Math.max(res, num);
            }
        }

        return res;
    }
}

```
```javascript []
var Solution = function() {};

Solution.prototype.getLargestOutlier = function(nums) {
    const totSum = nums.reduce((acc, num) => acc + num, 0);
    const freqMap = nums.reduce((map, num) => map.set(num, (map.get(num) || 0) + 1), new Map());
    let res = -Infinity;

    for (let num of nums) {
        const temp = totSum - num;

        if (temp % 2 !== 0) continue;

        const val = temp / 2;

        if (freqMap.has(val) && (val !== num || freqMap.get(val) > 1)) {
            res = Math.max(res, num);
        }
    }

    return res;
};

```
```python []
from collections import Counter

class Solution:
    def getLargestOutlier(self, nums):
        tot_sum = sum(nums)
        freq_map = Counter(nums)
        res = float('-inf')
        
        for num in nums:
            temp = tot_sum - num
            
            if temp % 2 != 0:
                continue
            
            val = temp // 2
            
            if val in freq_map and (val != num or freq_map[val] > 1):
                res = max(res, num)
        
        return res

```
```ruby []
class Solution
  def get_largest_outlier(nums)
    tot_sum = nums.sum
    freq_map = nums.each_with_object(Hash.new(0)) { |num, hash| hash[num] += 1 }
    res = -Float::INFINITY

    nums.each do |num|
      temp = tot_sum - num

      next if temp.odd?

      val = temp / 2

      if freq_map.key?(val) && (val != num || freq_map[val] > 1)
        res = [res, num].max
      end
    end

    res
  end
end

```





