# Beginner-Friendly C++ Solution || map || One Stop Solution.

**Author:** omkar_salunkhe
**Votes:** 28
**Link:** [https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/5419349/](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/5419349/)

---

# Intuition
To find the sum of the beauty for all substrings, we can iterate through all possible substrings and calculate this difference.


# Approach
1. Iterate through each character in the string as the starting point of the substring.
2. Use a map to keep track of the frequency of each character in the current substring.
3. For each new character added to the substring, update the frequency map.
4. Calculate the least frequent and most frequent character counts in the current substring.
5. Add the difference between the most frequent and least frequent counts to the total sum.
6. Return the total sum after all substrings have been processed.
# Complexity
- Time complexity:  The time complexity is $$O(n^2 \\cdot m)$$, where $$n$$ is the length of the string and $$m$$ is the number of unique characters in the substring. This is because for each starting point, we iterate through all possible substrings and update the frequency map.


- Space complexity:
  The space complexity is $$O(m)$$, where $$m$$ is the number of unique characters in the substring. This is due to the space needed for the frequency map.

# Code
```
class Solution {
public:
    int ans = 0;
    int beautySum(string s) {

        for (int i = 0; i < s.length(); i++) {
            map<char, int> mp;
            for (int j = i; j < s.length(); j++) {
                // counting the frequency of each character
                mp[s[j]]++;

                int leastFrequent = INT_MAX;
                int mostFrequent = INT_MIN;
                // Finding most frequent and least frequent chracter
                for (auto it : mp) {
                    leastFrequent = min(leastFrequent, it.second);
                    mostFrequent = max(mostFrequent, it.second);
                }
                ans += mostFrequent - leastFrequent;
            }
        }

        return ans;
    }
};
```
## \uD83D\uDE80 Upvote Alert! \uD83D\uDE80
Hey, awesome coder! If you found this explanation and solution helpful, please hit that upvote button! It'll make my day brighter than a perfectly optimized algorithm and keep me motivated to churn out more helpful content. \uD83C\uDF1F

Why upvote, you ask?

You'll make me smile \uD83D\uDE0A
It gives me the energy to tackle more tough problems \uD83D\uDCAA
You'll be spreading good coding karma in the community \u2728
So go ahead, smash that upvote button! You know you want to! \uD83D\uDD3C