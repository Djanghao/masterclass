# Easy range concept O(N) Solution ✅✅ | Beats 100% | C++ | Java | Python3 | Javascript

**Author:** be_fighter
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6027678/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solutions/6027678/)

---

# Intuition
1. This maxFrequency  approach range operations and frequency counting to determine the maximum achievable frequency of any number in the array, given that we can increment or decrement numbers up to k times and perform up to numOperations in total

# Approach
# Initialize Data Structures for Ranges and Frequencies

1. freq: An unordered map that tracks the frequency of each element in nums.
2. range: An unordered map that tracks the effect of adding or removing elements within a range.
3. Define Range of Influence for Each Number

# For each number nums[i] in the input:
1. Calculate l as the left bound (nums[i] - k) and r as the right bound (nums[i] + k), representing the range around each number within which it can adjust other numbers.
2. Update minrange and maxrange to keep track of the smallest and largest bounds across all elements.
3. Increment range[l] by 1 and decrement range[r + 1] by 1. This setup will allow us to build a "range frequency" map later.
# Calculate Prefix Sums to Build Ranges

1. After defining the ranges, we perform a prefix sum operation on range to determine the cumulative frequency influence at each position i. This effectively tells us how many times we can access or influence a number at each position based on the ranges we defined earlier.
2. Determine Maximum Frequency

# For each position i from minrange to maxrange:
1. cnt is the frequency of i (from freq).
maxfreq is the maximum number of operations we can apply to reach the count of i at this position, given by range[i] - freq[i]. This value is adjusted with min(maxfreq, numOperations) to ensure we don\u2019t exceed the allowed number of operations.
2. Update ans with cnt + maxfreq, which gives the maximum achievable frequency at this position.
# Return the Result

1. ans stores the highest frequency we can achieve by adjusting values within the allowed range and number of operations.

# important points about approach 
1. Range Influence with Prefix Sum: The prefix sum on range allows the algorithm to efficiently track the influence of each number across a range, making it possible to calculate the maximum achievable frequency at each point without having to iterate over all combinations.

2. Efficient Counting: By using a frequency map, the algorithm avoids recomputing counts, which helps make it more efficient in scenarios where nums contains many repeated elements.

3. Bounding Operations with numOperations: Using min(maxfreq, numOperations) ensures that we don\u2019t exceed the given number of operations, providing a balanced approach between maximizing the achievable frequency and respecting constraints.
# Complexity
- Time complexity:
o(N)+O(maxrange-minrange) for single traversal
where minrange=min(nums)-k
maxrange=max(nums)+k;

- Space complexity:
O(N)

# Code
```cpp []
class Solution {
public:
    int maxFrequency(vector<int>& nums, int k, int numOperations) {

        unordered_map<int,int>range;
        unordered_map<int,int>freq;

        int minrange=1e9;
        int maxrange=-1e9;

        for(int i=0;i<nums.size();i++){
            freq[nums[i]]++;
            int l=nums[i]-k;
            int r=nums[i]+k;

            minrange=min(minrange,l);
            maxrange=max(maxrange,r);
            range[l]++;
            range[r+1]--;
        }

        int ans=1;
        for(int i=minrange;i<=maxrange;i++){
            range[i]+=range[i-1];
            int cnt=freq[i];
            int maxfreq=range[i]-freq[i];
            maxfreq=min(maxfreq,numOperations);
            ans=max(ans,cnt+maxfreq);
        }

        return ans;
    }
};
```
```java []
import java.util.HashMap;

class Solution {
    public int maxFrequency(int[] nums, int k, int numOperations) {
        HashMap<Integer, Integer> range = new HashMap<>();
        HashMap<Integer, Integer> freq = new HashMap<>();

        int minrange = (int) 1e9;
        int maxrange = (int) -1e9;

        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
            int l = num - k;
            int r = num + k;

            minrange = Math.min(minrange, l);
            maxrange = Math.max(maxrange, r);
            range.put(l, range.getOrDefault(l, 0) + 1);
            range.put(r + 1, range.getOrDefault(r + 1, 0) - 1);
        }

        int ans = 1;
        for (int i = minrange; i <= maxrange; i++) {
            range.put(i, range.getOrDefault(i - 1, 0) + range.getOrDefault(i, 0));
            int cnt = freq.getOrDefault(i, 0);
            int maxfreq = range.get(i) - cnt;
            maxfreq = Math.min(maxfreq, numOperations);
            ans = Math.max(ans, cnt + maxfreq);
        }

        return ans;
    }
}

```
```python []
from collections import defaultdict

class Solution:
    def maxFrequency(self, nums, k, numOperations):
        range_map = defaultdict(int)
        freq = defaultdict(int)

        minrange = int(1e9)
        maxrange = -int(1e9)

        for num in nums:
            freq[num] += 1
            l = num - k
            r = num + k

            minrange = min(minrange, l)
            maxrange = max(maxrange, r)
            range_map[l] += 1
            range_map[r + 1] -= 1

        ans = 1
        for i in range(minrange, maxrange + 1):
            range_map[i] += range_map[i - 1]
            cnt = freq[i]
            maxfreq = range_map[i] - cnt
            maxfreq = min(maxfreq, numOperations)
            ans = max(ans, cnt + maxfreq)

        return ans

```
```javascript []
function maxFrequency(nums, k, numOperations) {
    const range = new Map();
    const freq = new Map();

    let minrange = 1e9;
    let maxrange = -1e9;

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
        const l = num - k;
        const r = num + k;

        minrange = Math.min(minrange, l);
        maxrange = Math.max(maxrange, r);
        range.set(l, (range.get(l) || 0) + 1);
        range.set(r + 1, (range.get(r + 1) || 0) - 1);
    }

    let ans = 1;
    for (let i = minrange; i <= maxrange; i++) {
        range.set(i, (range.get(i - 1) || 0) + (range.get(i) || 0));
        const cnt = freq.get(i) || 0;
        let maxfreq = range.get(i) - cnt;
        maxfreq = Math.min(maxfreq, numOperations);
        ans = Math.max(ans, cnt + maxfreq);
    }

    return ans;
}


```

![ee21a642-1977-4d3c-92d2-a2d0bba0416c_1719793102.706742.png](./images/0.png)
