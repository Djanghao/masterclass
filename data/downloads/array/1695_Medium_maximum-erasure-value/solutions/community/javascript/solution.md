# JS, Python, Java, C++ | Easy 2-Pointer Sliding Window Solution w/ Explanation

**Author:** sgallivan
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/1235716/](https://leetcode.com/problems/maximum-erasure-value/solutions/1235716/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Like most problems that ask about a contiguous subarray, this problem naturally calls for a **2-pointer sliding window** approach. There are a few ways we can keep track of the contents of the sliding window, but since the constraint upon **nums[i]** is fairly small, we can use the faster **arraymap** (**nmap**) method, rather than a **hashmap**.

So as we iterate our sliding window through **nums**, we'll move our **right** pointer forward, increasing the counter for the appropriate number in **nmap**. If that bucket in **nmap** goes above **1**, then we know that the newly-added number isn't unique in our sliding window, so we need to increase the **left** pointer until the counter is reduced back to **1**.

We should also, of course, keep track of the sum **total** of the sliding window. At each iteration, once we've confirmed the uniqueness of the contents of the sliding window, we should also update our **best** result so far. Then, once we're done, we can just **return best**.

 - _**Time Complexity: O(N)** where **N** is the length of **nums**_
 - _**Space Complexity: O(10001)** for **nmap** keeping track of numbers from **0** to **10^4**_

---

#### ***Javascript Code:***

The best result for the code below is **96ms / 49.4MB** (beats 100% / 100%).
```javascript
var maximumUniqueSubarray = function(nums) {
    let nmap = new Int8Array(10001), total = 0, best = 0
    for (let left = 0, right = 0; right < nums.length; right++) {
        nmap[nums[right]]++, total += nums[right]
        while (nmap[nums[right]] > 1)
            nmap[nums[left]]--, total -= nums[left++]
        best = Math.max(best, total)
    }
    return best
};
```

---

#### ***Python Code:***

The best result for the code below is **1180ms / 28.2MB** (beats 90% / 63%).
```python
class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        nmap, total, best, left = [0] * 10001, 0, 0, 0
        for right in nums:
            nmap[right] += 1
            total += right
            while nmap[right] > 1:
                nmap[nums[left]] -= 1
                total -= nums[left]
                left += 1
            best = max(best, total)
        return best
```

---

#### ***Java Code:***

The best result for the code below is **6ms / 47.5MB** (beats 97% / 100%).
```java
class Solution {
    public int maximumUniqueSubarray(int[] nums) {
        short[] nmap = new short[10001];
        int total = 0, best = 0;
        for (int left = 0, right = 0; right < nums.length; right++) {
            nmap[nums[right]]++;
            total += nums[right];
            while (nmap[nums[right]] > 1) {
                nmap[nums[left]]--;
                total -= nums[left++];
            }
            best = Math.max(best, total);
        }
        return best;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **129ms / 88.9MB** (beats 100% / 100%).
```c++
class Solution {
public:
    int maximumUniqueSubarray(vector<int>& nums) {
        char nmap[10001]{0};
        int total = 0, best = 0;
        for (int left = 0, right = 0; right < nums.size(); right++) {
            nmap[nums[right]]++, total += nums[right];
            while (nmap[nums[right]] > 1)
                nmap[nums[left]]--, total -= nums[left++];
            best = max(best, total);
        }
        return best;
    }
};
```