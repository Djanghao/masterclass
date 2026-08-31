# Sliding Window C++

**Author:** therealchainman
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/1631303/](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/1631303/)

---


Solution: sliding window algorithm

Solution 1:  Count the number of unique flavors outside of the k-sized window. 

```c++
const int N = 1e5+1;
class Solution {
public:
    int freq[N];
    int shareCandies(vector<int>& candies, int k) {
        int uniqueCount = 0, n = candies.size();
        for (int& can : candies) {
            uniqueCount += (freq[can]++==0);
        }
        if (k==0) {return uniqueCount;}
        int maxUnique = 0;
        for (int i = 0;i<n;i++) {
            uniqueCount -= (--freq[candies[i]]==0);
            if (i>=k-1) {
                maxUnique = max(maxUnique, uniqueCount);
                uniqueCount += (freq[candies[i-k+1]]++==0);
            }
        }
        return maxUnique;
    }
};
```