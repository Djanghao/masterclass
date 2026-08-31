# Simple Python Solution

**Author:** krush_r_sonwane
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2977312/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2977312/)

---

- *Time Complexity:* **O(N)**
- *Space Complexity:* **O(1)**
```
class Solution(object):
    def countDigits(self, num):
        str_num, count = str(num), 0
        for digit in str_num:
            if num % int(digit) == 0:
                count += 1
        return count
```
**UpVote**, if you like it **:)**