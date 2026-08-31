# Straightforward two pointer | C++

**Author:** madhavrathi
**Votes:** 3
**Link:** [https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/4630087/](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/4630087/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Keep two pointers to iterate over both arrays and keep update frequencies as you go. Store the answer in a separate vector and keep checking if the product is same as the last inserted value.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<vector<int>> findRLEArray(vector<vector<int>>& encoded1, vector<vector<int>>& encoded2) {
        vector<vector<int>> ans;
        int i = 0 ,j = 0;

        while(i < encoded1.size() && j < encoded2.size()) {
            int minFreq = min(encoded1[i][1], encoded2[j][1]);
            int product = encoded1[i][0]*encoded2[j][0];

            if(ans.size() && ans.back()[0] == product) ans.back()[1] += minFreq;
            else ans.push_back({product , minFreq});

            // adjust the frequency in encoded arrays
            if(encoded1[i][1] < encoded2[j][1]) {
                encoded2[j][1] -= minFreq;
                i++;
            } else if(encoded1[i][1] > encoded2[j][1]) {
                encoded1[i][1] -= minFreq;
                j++;
            } else {
                i++;
                j++;
            }
        }
        return ans;
    }
};
```