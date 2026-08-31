# 🎯📈 Targeting Subarrays: Maximizing Maximum Element Occurrences 🎯📈

**Author:** Hunter_0718
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4940007/](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4940007/)

---


**Intuition**

The problem asks us to find subarrays in the `nums` array where the maximum element (`maxi`) appears at least `k` times. We can achieve this by using a sliding window technique:

1. **Initialize a window:** We start with two pointers, `i` and `j`, marking the left and right ends of the window, respectively. We also create a frequency map (`freq`) to track the occurrences of each element within the window.
2. **Expand the window:** We increment `j` to grow the window until `freq[maxi]` (the count of the maximum element) becomes less than `k`. This ensures the window includes at least `k` occurrences of `maxi`.
3. **Count subarrays within the window:** Once `freq[maxi]` is less than `k`, we can determine the number of subarrays within the current window that satisfy the condition. The idea is that any remaining subarray starting from the current `i` position onwards will have `maxi` appearing at least `k` times because the window was constructed to guarantee this. To count these subarrays, we simply subtract the current `i` from the total length `n` (the number of possible right endpoints for each subarray starting from `i`). This gives us `n - i`.
4. **Shrink the window:** We continue by shrinking the window from the left using `i++`. As we remove elements, we update `freq` accordingly. This process continues until `freq[maxi]` becomes greater than or equal to `k` again, indicating that the window might now contain enough occurrences of `maxi` to satisfy the condition.
5. **Repeat:** We repeat steps 2-4 until the window reaches the end of the array (`j = n`).

**Approach**

The code implements the sliding window technique described above. We maintain a frequency map to track element counts and two pointers to manage the window boundaries.

**Time Complexity**

- In the worst case, each element might be added and removed from the frequency map `freq` once. In the average case, this can be optimized if there are repeated occurrences of the maximum element, leading to fewer additions/removals.
- Therefore, the time complexity is typically `O(n)`, where `n` is the length of the input array.

**Space Complexity**

- We use a frequency map `freq` to store element counts, which can potentially hold up to `n` unique elements in the worst case.
- Thus, the space complexity is `O(n)`.

```C++ []
class Solution {
public:
    typedef long long ll;
    long long countSubarrays(vector<int>& nums, int k) {
        int n = nums.size();
        map<int,int>freq;
        int  maxi= *max_element(nums.begin(),nums.end());
        int i=0,j=0;
        ll ans=0;
        while(j < n){
            freq[nums[j]]++;
            while(freq[maxi] >= k){
                ans += n-j;
                freq[nums[i]]--;
                i++;
            }
            j++;   
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public long countSubarrays(int[] nums, int k) {
        int n = nums.length;
        Map<Integer, Integer> freq = new HashMap<>();
        int maxi = Arrays.stream(nums).max().getAsInt();
        int i = 0, j = 0;
        long ans = 0;
        while (j < n) {
            freq.put(nums[j], freq.getOrDefault(nums[j], 0) + 1);
            while (freq.getOrDefault(maxi, 0) >= k) {
                ans += n - j;
                freq.put(nums[i], freq.get(nums[i]) - 1);
                i++;
            }
            j++;
        }
        return ans;
    }
}

```Python3 []

class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        n = len(nums)
        freq = defaultdict(int)
        maxi = max(nums)
        i = j = 0
        ans = 0
        while j < n:
            freq[nums[j]] += 1
            while freq.get(maxi, 0) >= k:
                ans += n - j
                freq[nums[i]] -= 1
                i += 1
            j += 1
        return ans

```
```Kotlin []
class Solution {
    fun countSubarrays(nums: IntArray, k: Int): Long {
        val freq = mutableMapOf<Int, Int>()
        val maxi = nums.maxOrNull()!!
        var i = 0
        var j = 0
        var ans = 0L
        val n = nums.size
        while (j < n) {
            freq[nums[j]] = freq.getOrDefault(nums[j], 0) + 1
            while (freq.getOrDefault(maxi, 0) >= k) {
                ans += n - j
                freq[nums[i]] = freq.getOrDefault(nums[i], 0) - 1
                i++
            }
            j++
        }
        return ans
    }
}

```

```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
        const freq = new Map();
        const maxi = Math.max(...nums);
        let i = 0, j = 0;
        let ans = 0;
        const n = nums.length;
        while (j < n) {
            freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
            while (freq.get(maxi) >= k) {
                ans += n - j;
                freq.set(nums[i], freq.get(nums[i]) - 1);
                i++;
            }
            j++;
        }
        return ans;
};
```


