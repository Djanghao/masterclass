# ✅ [Python/C++/JavaScript] O(n) beats 100%

**Author:** sezanhaque
**Votes:** 20
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/2832078/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/2832078/)

---

# Intuition
Calculate the `sum of prev freq & next freq and sum them`.

# Approach
1. Iterate over frequencies.
2. Track the sum of previous frequencies.
3. Track the sum of next frequences.
4. Sum them all.
#### Example
Let `nums = [1, 3, 1, 2, 4]`
Frequiencies: `1: 2, 3: 1, 2: 1, 4: 1`
```
    prev       frequency       nxt                 count
      0            2          5-2=3             0+(0*2*3)=0
      2            1          3-1=2             0+(2*1*2)=4
      3            1          2-1=1             4+(3*1*1)=7
      4            1          1-1=0             4+(4*1*0)=7
prev += freq               nxt -= freq      count += (prev * freq * nxt)
count = 7
```


# Code

```python []
class Solution:
    def unequalTriplets(self, nums: List[int]) -> int:
        count = 0
        prev, nxt = 0, len(nums)
        for _, frequency in Counter(nums).items():
            nxt -= frequency
            count += prev * frequency * nxt
            prev += frequency
        return count
```
```C++ []
class Solution {
public:
    int unequalTriplets(vector<int>& nums) {
        int count = 0, prev = 0, nxt = nums.size();
        unordered_map<int, int> frequency;

        for (int n : nums) 
            frequency[n]++;
        
        for (auto[n, freq] : frequency)
        {
            nxt -= freq;
            count += prev * freq * nxt;
            prev += freq;
        }
        return count;
    }
};
```
```JavaScript []
var unequalTriplets = function(nums) {
    let count = 0,
        prev = 0,
        nxt = nums.length;
    let frequencies = nums.reduce((count, currentValue) => {
        return (count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1), count);
    }, {});
    
    for (freq of Object.values(frequencies)) {
        nxt -= freq;
        count += (prev * freq * nxt);
        prev += freq
    }
    return count
};
```


# Complexity
- Time complexity: O(n)
- Space complexity: O(n)