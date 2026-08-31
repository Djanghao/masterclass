# Easy To Understand Approach || Beats 100% ✅✅☑️☑️

**Author:** swapneel_singh
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5905710/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5905710/)

---


# Steps to Solve the Problem
1. Frequency Map:
- Use an unordered map to count the frequency of elements in the current subarray of length k.
2. Initial Window:
- Populate the frequency map for the first subarray (nums[0..k-1]).
3. Calculate x-sum:

- For the first window, determine the x-sum using the most frequent elements. If frequencies are tied, choose the larger value. Use a max heap for efficient retrieval of the top x elements.
3. Sliding Window:

-  Slide the window across the array:
Remove the outgoing element from the frequency map.
Add the new incoming element.
Calculate the x-sum for the updated window.
4. Return Results:

- Store the x-sums in a result vector and return it.

# Complexity
- Time complexity: O(n\u22C5klogk)
- Space complexity: O(n+k)

# Code
```cpp []
class Solution {
public:
    vector<int> findXSum(vector<int>& nums, int k, int x) 
    {
        int n = nums.size();
        vector<int> answer;
        unordered_map<int, int> freq;

        // Initialize frequency map for the first window
        for (int j = 0; j < k; j++) {
            freq[nums[j]]++;
        }

        // Calculate x-sum for the first window
        answer.push_back(calculateXSum(freq, x));

        // Slide the window
        for (int i = 1; i <= n - k; i++) {
            // Remove the element going out of the window
            freq[nums[i - 1]]--;
            if (freq[nums[i - 1]] == 0) {
                freq.erase(nums[i - 1]);
            }

            // Add the new element coming into the window
            freq[nums[i + k - 1]]++;

            // Calculate x-sum for the current window
            answer.push_back(calculateXSum(freq, x));
        }
        
        return answer;
    }

private:
    int calculateXSum(const unordered_map<int, int>& freq, int x) {
        // Use a priority queue (max heap) to get the top x elements
        priority_queue<pair<int, int>> pq; // (frequency, value)

        for (const auto& entry : freq) {
            pq.push({entry.second, entry.first});
        }

        int sum = 0;
        for (int i = 0; i < x && !pq.empty(); i++) {
            auto top = pq.top();
            pq.pop();
            sum += top.second * top.first; // sum = value * frequency
        }

        return sum;
    }
};

```