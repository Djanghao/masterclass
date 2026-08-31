# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5832232/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5832232/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1401843227
- ***C++ Code -->*** https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1401688178
- ***Python3 Code -->*** https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1401716449
- ***Java Code -->*** https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1401834311
- ***C Code -->*** https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1401707200
- ***Python Code -->*** https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1401824108
- ***C# Code -->*** https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1401839002
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     (N * M)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```python3 []
class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        cnt = 0
        for i in range(len(words)):
            for j in range(i + 1, len(words)):
                if words[j].find(words[i], 0, len(words[i])) == 0  and words[j][::-1].find(words[i][::-1], 0, len(words[i])) == 0:
                    cnt += 1
        return cnt  
```
![th.jpeg](./images/1.jpeg)
