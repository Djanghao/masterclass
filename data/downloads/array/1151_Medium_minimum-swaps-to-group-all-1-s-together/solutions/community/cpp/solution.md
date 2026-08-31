# Sliding Window C++ | Easy to Understand

**Author:** hxuuu
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/3948927/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/3948927/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minSwaps(vector<int>& data) {
        // get sum of vector/number of ones in vector
        int totalOnes = reduce(data.begin(), data.end());

        // initialize number of ones in sliding window of size totalOes
        int currOnes = reduce(data.begin(), data.begin() + totalOnes);

        // number of swaps needed will just be total number of ones in vector - current number of ones in sliding window
        int ans = totalOnes - currOnes;

        // iterate through rest of vector
        for (int i = totalOnes; i < data.size(); i++) {
            // if the removed value from the sliding window is one, we decrement the current number of ones in sliding window
            if (data[i - totalOnes] == 1) {
                currOnes--;
            }
            // if the added value to sliding window is one, we increment
            if (data[i] == 1) {
                currOnes++;
            }
            ans = min(ans, totalOnes - currOnes);
        }
        return ans;
    }
};
```