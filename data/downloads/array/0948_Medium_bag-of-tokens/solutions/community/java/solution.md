# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 53
**Link:** [https://leetcode.com/problems/bag-of-tokens/solutions/2564435/](https://leetcode.com/problems/bag-of-tokens/solutions/2564435/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
I'll explain my solution line by line daily and you can find the full list in my [Discord](https://discord.gg/Nqm4jJcyBf).
If you like it, please give a star, watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post.

**C++**

```
// Time Complexity: O(NlogN) (O(NlogN) for sorting & O(N) for two pointers.)
// Space Complexity: O(logN)
// where N is the number of tokens
class Solution {
public:
    int bagOfTokensScore(vector<int>& tokens, int power) {
        // play i-th token face up -> lose tokens[i] power -> choose the smallest one
        // play i-th token face down -> gain tokens[i] power -> choose the largest one
        // hence, sort tokens first
        sort(tokens.begin(), tokens.end());
        // two pointes - l for tracking face up & r for tracking face down
        int l = 0, r = tokens.size() - 1;
        int cur_score = 0, mx_score = 0;
        while (l <= r) {
            // there are 3 cases
            if (tokens[l] <= power) {
                // case 1. play l-th tokens face up if its power <= the current power
                // ---
                // losing tokens[l] power
                power -= tokens[l];
                // and gaining 1 score
                cur_score += 1;
                // cur_score can be mx_score potentially
                mx_score = max(mx_score, cur_score);
                // move the pointer to the right
                l += 1;
            } else if (cur_score >= 1) {
                // case 2. play r-th tokens face down if the current score is at least 1
                // ---
                // gaining tokens[r] power
                power += tokens[r];
                // and losing 1 score
                cur_score -= 1;
                // move the pointer to the left
                r -= 1;
            } else {
                // case 3. impossible to play
				// ---
                // either you don't enough power or enough score
                break;
            }
        }
        return mx_score;
    }
};
```


**Python**

```
# Time Complexity: O(NlogN) (O(NlogN) for sorting & O(N) for two pointers.)
# Space Complexity: O(N) - python's inbuilt sort uses TimSort
# where N is the number of tokens
class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        # play i-th token face up -> lose tokens[i] power -> choose the smallest one
        # play i-th token face down -> gain tokens[i] power -> choose the largest one
        # hence, sort tokens first
        tokens.sort()
        # two pointes - l for tracking face up & r for tracking face down
        l, r = 0, len(tokens) - 1
        cur_score = mx_score = 0
        while l <= r:
            # there are 3 cases
            if tokens[l] <= power:
                # case 1. play l-th tokens face up if its power <= the current power
                # ---
                # losing tokens[l] power
                power -= tokens[l]
                # and gaining 1 score
                cur_score += 1
                # cur_score can be mx_score potentially
                mx_score = max(mx_score, cur_score)
                # move the pointer to the right
                l += 1
            elif cur_score >= 1:
                # case 2. play r-th tokens face down if the current score is at least 1
                # ---
                # gaining tokens[r] power
                power += tokens[r]
                # and losing 1 score
                cur_score -= 1
                # move the pointer to the left
                r -= 1
            else:
                # case 3. impossible to play
                # ---
                # either you don't enough power or enough score
                break
        return mx_score
```


**Java**

```
// Time Complexity: O(NlogN) (O(NlogN) for sorting & O(N) for two pointers.)
// Space Complexity: O(logN)
// where N is the number of tokens
class Solution {
    public int bagOfTokensScore(int[] tokens, int power) {
        // play i-th token face up -> lose tokens[i] power -> choose the smallest one
        // play i-th token face down -> gain tokens[i] power -> choose the largest one
        // hence, sort tokens first
        Arrays.sort(tokens);
        // two pointes - l for tracking face up & r for tracking face down
        int l = 0, r = tokens.length - 1;
        int cur_score = 0, mx_score = 0;
        while (l <= r) {
            // there are 3 cases
            if (tokens[l] <= power) {
                // case 1. play l-th tokens face up if its power <= the current power
                // ---
                // losing tokens[l] power
                power -= tokens[l];
                // and gaining 1 score
                cur_score += 1;
                // cur_score can be mx_score potentially
                mx_score = Math.max(mx_score, cur_score);
                // move the pointer to the right
                l += 1;
            } else if (cur_score >= 1) {
                // case 2. play r-th tokens face down if the current score is at least 1
                // ---
                // gaining tokens[r] power
                power += tokens[r];
                // and losing 1 score
                cur_score -= 1;
                // move the pointer to the left
                r -= 1;
            } else {
                // case 3. impossible to play
                // ---
                // either you don't enough power or enough score
                break;
            }
        }
        return mx_score;
    }
}
```