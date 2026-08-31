# In case you are wondering why greedy works for this problem

**Author:** XavierWantMoreMoney
**Votes:** 147
**Link:** [https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3395952/](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3395952/)

---

There are many good answers binary search + greedy now. I will just explain why greedy works for this problem.

Imagine you have `[a,b,c,d]`, abcd are just sorted numbers

Greedy tells us if `b - a < the threshold we set`, we just pick it. The cost of doing this is if `c - b < threshold` as well, you can never pick `bc` pair anymore because b has been paired with a.

Will this cause any problems?

The answer is no

Because if you pick `ab` pair, you will have one pair now. If you pick `bc` pair, you also have one pair, however, if you pick `bc` now what's left is `[a, d]`. Because we have sorted `abcd`, `d - a` is likely to be bigger so it is more likely to exceed the threshold we set.
On the other hand, if we greedily pick `ab` pair, what's left is `[c,d]` and `d - c` is guaranteed to be smaller or equal to `d - a`, so `d-c` is more likely to be a pair that we can pick as well -> being greedy (pick a and b) is more likely to let us have more pairs then not being greedy (pick b and c). Hence for this problem, greedy works

# Code
```
class Solution {
public:
    int minimizeMax(vector<int>& nums, int p) {
        if (p == 0) return 0;
        
        sort(nums.begin(), nums.end());
        
        int minThrehold = 0;
        int maxThrehold = nums[nums.size() - 1] - nums[0];

        while (minThrehold < maxThrehold) {
            int candidateThrehold = minThrehold + (maxThrehold - minThrehold) / 2; // middle threshold
            // check how many pairs we can pick with this threshold

            int pairs = 0;

            // greedily pick pairs
            for (int i = 1; i < nums.size(); ++i) {
                if (candidateThrehold >= nums[i] - nums[i - 1]) {
                    ++pairs;
                    ++i; // you have picked i and i -1, you can't pick [i + 1, i] pair anymore
                }
            }

            if (pairs >= p) { // we are being to loose on the threshold and have too many pairs, be more strict on the threhold
                maxThrehold = candidateThrehold;
            } else { // we are being too strict about threshold and we do not have enough pairs, be more loose on threshold
                minThrehold = candidateThrehold + 1;
            }
        }

        return minThrehold;
    }
};
```