# 🔥 [LeetCode The Hard Way] 🔥 Line By Line Explanation

**Author:** tr1nity
**Votes:** 54
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551739/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551739/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
I'll explain my solution line by line daily and you can find the full list in my [Discord](https://discord.gg/Nqm4jJcyBf).
If you like it, please give a star, watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post.

**Solution 1: Hash Map + STL**

```cpp
class Solution {
public:
    // the idea is to
    // 1. rearrange the order of attack and defense
    // 2. count weak characters (those defenses less than the current maximum defense)
    // 3. update the maximum defense
    int numberOfWeakCharacters(vector<vector<int>>& p) {
        // the final answer to be returned
        int weakCharacters = 0;
        // record maximum defense. since 1 <= defense_i <= 10 ^ 5
        // we can set the init value to x where x < 1
        int maxDefense = 0;
        // use a hash map to map the attack and defense with greater<int> as a key_compare
        map<int, vector<int>, greater<int>> m;
        for(auto x : p) m[x[0]].push_back(x[1]);
        // for each attack
        for(auto x : m) {
            // we count the number of weak characters 
            // and add it to `weakCharacters`
            weakCharacters += count_if(x.second.begin(), x.second.end(), [&](int curDefense){ return curDefense < maxDefense;});
            // then update `maxDefense` which is the maximum value in current defenses
            maxDefense = max(maxDefense, *max_element(x.second.begin(), x.second.end()));
        }
        return weakCharacters;
    }
};
```

**Solution 2: Sort**

```cpp
class Solution {
public:
    // the idea is to
    // 1. rearrange the order of attack and defense
    // 2. count weak characters (those defenses less than the current maximum defense)
    // 3. update the maximum defense
    int numberOfWeakCharacters(vector<vector<int>>& p) {
        // the final answer to be returned
        int weakCharacters = 0;
        // record maximum defense. since 1 <= defense_i <= 10 ^ 5
        // we can set the init value to x where x < 1
        int maxDefense = 0;
        // sort properties with custom sort comparator
        sort(p.begin(), p.end(), [](const vector<int>& x, const vector<int>& y) {
            // if the attack is same, then sort defense in ascending order  
            // otherwise, sort attack in in descending order 
           return x[0] == y[0] ? x[1] < y[1] : x[0] > y[0];
        });
        // by doing so, we don't need to compare starting from the back
        for (auto& x : p) {
            // x[1] is defense of properties[i]
            // if it is less than current maxDefense, then it means it is a weak character
            weakCharacters += x[1] < maxDefense;
            // update maxDefense
            maxDefense = max(maxDefense, x[1]);
        }
        return weakCharacters;
    }
};
```

**Python**

```py
class Solution:
    # the idea is to
    # 1. rearrange the order of attack and defense
    # 2. count weak characters (those defenses less than the current maximum defense)
    # 3. update the maximum defense
    def numberOfWeakCharacters(self, p: List[List[int]]) -> int:
        # the final answer to be returned
        weakCharacters = 0
        # record maximum defense. since 1 <= defense_i <= 10 ^ 5
        # we can set the init value to x where x < 1
        maxDefense = 0
        # sort properties with custom sort comparator
        # if the attack is same, then sort defense in descending order  
        # otherwise, sort attack in in ascending order 
        p.sort(key = lambda x: (x[0], -x[1]), reverse = True)
		# or we can do it like 
		# p.sort(key = lambda x: (-x[0], x[1]))
        for _, defense in p:
            # if it is less than current maxDefense, then it means it is a weak character
            if defense < maxDefense: weakCharacters += 1
            # update maxDefense
            else: maxDefense = defense
        return weakCharacters
```
