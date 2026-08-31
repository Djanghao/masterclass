# C++ Simple and Easy Solution With Detailed Explanation

**Author:** YehudisK
**Votes:** 78
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/1503157/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/1503157/)

---

**Idea:**
First, we store in a map the frequencies of the strings, so that we can find easily which strings we have and how many.
Now, we iterate through the `freq` map.
For every string:
1. We check if it's a prefix of our `target`.
2. If yes, first case is that the target is exactly twice the prefix. If so, we add `frq*(frq-1)` to `res`.
The reason is that the number of combinations for a pattern with frequency n is n * (n-1).
3. Otherwise we look in the map if we have the suffix, if so - we add the product of their frequencies to `res`.

**Time Complexity:** O(n)
**Space Complexity:** O(n)
```
class Solution {
public:
    int numOfPairs(vector<string>& nums, string target) {
        unordered_map<string, int> freq;
        for (auto num : nums) if (num.size() < target.size()) freq[num]++;
        
        int res = 0;
        for (auto [s, frq] : freq) {
            
            if (target.find(s) == 0) {
                
                if (s + s == target) 
                    res += frq*(frq-1);
                
                else 
                    res += frq * freq[target.substr(s.size())];
            }
        }
        
        return res;
    }
};
```
**Like it? please upvote!**