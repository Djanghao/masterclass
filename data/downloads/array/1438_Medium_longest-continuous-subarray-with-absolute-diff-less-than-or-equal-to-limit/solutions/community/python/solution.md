# ✅98.54%🔥Easy Solution🔥With Explanation🔥

**Author:** MrAke
**Votes:** 71
**Link:** [https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/5354709/](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/5354709/)

---

# Intuition
#### The main idea is to maintain a sliding window and use two deques to keep track of the minimum and maximum values in the current window. These deques help in efficiently calculating the maximum absolute difference between the elements of the window.

---
# Approach
#### 1. Sliding Window: We'll use two pointers (`left` and `right`) to represent the sliding window's boundaries.
#### 2. Deques for Min and Max:
- ##### `decQ` will store elements in a decreasing order to help track the maximum element in the current window.
- ##### `incQ` will store elements in an increasing order to help track the minimum element in the current window.
#### 3. Expand Window: For each element at the right pointer:
- ##### Insert the element into both deques while maintaining their properties.
- ##### Remove elements from the deques that are outside the current window.
#### 4. Shrink Window: If the difference between the maximum and minimum values in the current window exceeds the limit, increment the `left` pointer to shrink the window until the difference is within the limit.
#### 5. Track Maximum Length: Throughout the process, keep track of the maximum window length that satisfies the condition.
----


# Complexity
- ### Time complexity:$$O(n)$$
##### Each element is added and removed from the deques at most once, resulting in linear time complexity.


- ### Space complexity:$$O(n)$$
##### In the worst case, both deques can contain all elements of the input array.

----
# Code
```python []
class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        decQ = collections.deque() 
        incQ = collections.deque() 
        ans = 0
        left = 0

        for right, num in enumerate(nums):
            while decQ and num > decQ[-1]:
                decQ.pop()

            decQ.append(num)

            while incQ and num < incQ[-1]:
                incQ.pop()

            incQ.append(num)

            while decQ[0] - incQ[0] > limit:
                if decQ[0] == nums[left]:
                    decQ.popleft()

                if incQ[0] == nums[left]:
                    incQ.popleft()

                left += 1

            ans = max(ans, right - left + 1)

        return ans
```
```C++ []
class Solution {
public:
    int longestSubarray(std::vector<int>& nums, int limit) {
        std::deque<int> decQ;
        std::deque<int> incQ;
        int ans = 0;
        int left = 0;

        for (int right = 0; right < nums.size(); ++right) {
            int num = nums[right];

            while (!decQ.empty() && num > decQ.back()) {
                decQ.pop_back();
            }
            decQ.push_back(num);

            while (!incQ.empty() && num < incQ.back()) {
                incQ.pop_back();
            }
            incQ.push_back(num);

            while (decQ.front() - incQ.front() > limit) {
                if (decQ.front() == nums[left]) {
                    decQ.pop_front();
                }
                if (incQ.front() == nums[left]) {
                    incQ.pop_front();
                }
                ++left;
            }

            ans = std::max(ans, right - left + 1);
        }

        return ans;
    }
};

```
```java []
class Solution {
    public int longestSubarray(int[] nums, int limit) {
        Deque<Integer> decQ = new LinkedList<>();
        Deque<Integer> incQ = new LinkedList<>();
        int ans = 0;
        int left = 0;

        for (int right = 0; right < nums.length; ++right) {
            int num = nums[right];

            while (!decQ.isEmpty() && num > decQ.peekLast()) {
                decQ.pollLast();
            }
            decQ.addLast(num);

            while (!incQ.isEmpty() && num < incQ.peekLast()) {
                incQ.pollLast();
            }
            incQ.addLast(num);

            while (decQ.peekFirst() - incQ.peekFirst() > limit) {
                if (decQ.peekFirst() == nums[left]) {
                    decQ.pollFirst();
                }
                if (incQ.peekFirst() == nums[left]) {
                    incQ.pollFirst();
                }
                ++left;
            }

            ans = Math.max(ans, right - left + 1);
        }

        return ans;
    }
}

```
```javascript []
var longestSubarray = function(nums, limit) {
    let decQ = [];
    let incQ = [];
    let ans = 0;
    let left = 0;

    for (let right = 0; right < nums.length; ++right) {
        let num = nums[right];

        while (decQ.length > 0 && num > decQ[decQ.length - 1]) {
            decQ.pop();
        }
        decQ.push(num);

        while (incQ.length > 0 && num < incQ[incQ.length - 1]) {
            incQ.pop();
        }
        incQ.push(num);

        while (decQ[0] - incQ[0] > limit) {
            if (decQ[0] == nums[left]) {
                decQ.shift();
            }
            if (incQ[0] == nums[left]) {
                incQ.shift();
            }
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};

```
```C# []
public class Solution {
    public int LongestSubarray(int[] nums, int limit) {
        LinkedList<int> decQ = new LinkedList<int>();
        LinkedList<int> incQ = new LinkedList<int>();
        int ans = 0;
        int left = 0;

        for (int right = 0; right < nums.Length; ++right) {
            int num = nums[right];

            while (decQ.Count > 0 && num > decQ.Last.Value) {
                decQ.RemoveLast();
            }
            decQ.AddLast(num);

            while (incQ.Count > 0 && num < incQ.Last.Value) {
                incQ.RemoveLast();
            }
            incQ.AddLast(num);

            while (decQ.First.Value - incQ.First.Value > limit) {
                if (decQ.First.Value == nums[left]) {
                    decQ.RemoveFirst();
                }
                if (incQ.First.Value == nums[left]) {
                    incQ.RemoveFirst();
                }
                ++left;
            }

            ans = Math.Max(ans, right - left + 1);
        }

        return ans;
    }
}

```
----

