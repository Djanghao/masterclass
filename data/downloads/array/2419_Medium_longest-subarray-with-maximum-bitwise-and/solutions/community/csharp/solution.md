# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5785283/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5785283/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)

<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/submissions/1389670171?envType=daily-question&envId=2024-09-14
- ***C++ Code -->*** https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/submissions/1389621456?envType=daily-question&envId=2024-09-14
- ***Python3 Code -->*** https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/submissions/1389661412?envType=daily-question&envId=2024-09-14
- ***Java Code -->*** https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/submissions/1389630884?envType=daily-question&envId=2024-09-14
- ***C Code -->*** https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/submissions/1389664343?envType=daily-question&envId=2024-09-14
- ***Python Code -->*** https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/submissions/1389658138?envType=daily-question&envId=2024-09-14
- ***C# Code -->*** https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/submissions/1389665379?envType=daily-question&envId=2024-09-14
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```cpp []
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int maxVal = 0, ans = 0, currentStreak = 0;

        for (int num : nums) {
            if (maxVal < num) {
                maxVal = num;
                ans = currentStreak = 0;
            }

            if (maxVal == num)
                currentStreak++;
            else
                currentStreak = 0;

            ans = fmax(ans, currentStreak);
        }
        return ans;
    }
};
```
![th.jpeg](./images/1.jpeg)
