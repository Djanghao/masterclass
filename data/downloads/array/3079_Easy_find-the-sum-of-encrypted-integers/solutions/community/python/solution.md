# 🔥🔥🔥🔥🔥 Beat 99% 🔥🔥🔥🔥🔥 EASY 🔥🔥🔥🔥🔥🔥

**Author:** abdallaellaithy
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4912601/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4912601/)

---

[![Screenshot 2024-03-22 175737.png](./images/0.png)](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/submissions/1211361415/)


# Code
```
class Solution(object):
    def sumOfEncryptedInt(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        output = 0
        for num in nums:
            num = str(num)
            output += int(max(num) * len(num))
        return output
```