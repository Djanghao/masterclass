# Minimum Swaps | C++ | O(n) with two passes.

**Author:** deleted_user
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/1160480/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/1160480/)

---

```
class Solution {
public:
    int minSwaps(vector<int>& data) {
        // Make a full pass to count the number of ones.
        int numOnesOverall = 0;
        for (int datum : data)
            if (datum == 1) numOnesOverall++;
        
        // Make a second pass with a sliding window to find the window with the largest number of ones.
        const int slidingWindowWidth = numOnesOverall;
        int numOnesInSlidingWindow = 0;
        int maxOnesInSlidingWindow = 0;
        for (int slidingWindowEnd = 0; slidingWindowEnd < data.size(); slidingWindowEnd++) {
            if (data[slidingWindowEnd] == 1) numOnesInSlidingWindow++;
            if (slidingWindowEnd >= slidingWindowWidth - 1) {
                int slidingWindowStart = slidingWindowEnd + 1 - slidingWindowWidth;
                if (slidingWindowStart >= 1 && data[slidingWindowStart - 1] == 1) --numOnesInSlidingWindow;
            }
            maxOnesInSlidingWindow = max(maxOnesInSlidingWindow, numOnesInSlidingWindow);
        }
        
        // The result is the fewest number of zeros in a sliding window.
        return numOnesOverall - maxOnesInSlidingWindow;
    }
};
```