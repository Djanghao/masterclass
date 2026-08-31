# [Python] Simple & Fast Solution, explained

**Author:** tomzy
**Votes:** 17
**Link:** [https://leetcode.com/problems/kth-smallest-instructions/solutions/918388/](https://leetcode.com/problems/kth-smallest-instructions/solutions/918388/)

---

**Observations**
1. We know for certain number of **'H'** and **'V'**, the total number of instructions are **comb(h + v, v)**
2. They should be sorted **lexicographically**, which means: the **order** of instructions with first character of **'H'** are always smaller than instructions with first character of **'V'**:
For example, **destination = [2,3], k = 1**:
["**H**HHVV", "**H**HVHV", "**H**HVVH", "**H**VHHV", "**H**VHVH", "**H**VVHH", "**V**HHHV", "**V**HHVH", "**V**HVHH", "**V**VHHH"]
3. If the first character is **'H'**, we know there will be **comb(h + v - 1, v)** number of instructions for the rest of characters because we used **one** **'H'**.

**Algo**
1. Use the above 3 facts, we know after sored, **comb(h + v - 1, v)** number of instructions starting with **'H'**, and the rest of the instructions are starting with **'V'**
2. Based on value of **k**, we will know which **group** the kth instructions belongs to
3. Then we can get the characters one by one
4. Available characters will be **decreasing** until one of them hit **0**

**Code:**
```
class Solution:
    def kthSmallestPath(self, destination: List[int], k: int) -> str:
        v, h = destination
        res = ''
        while h > 0 and v > 0:
            pre = comb(h + v - 1, v)
            
            if k <= pre:
                res += 'H'
                h -= 1
            else:
                res += 'V'
                v -= 1
                k -= pre

        if h == 0:
            res += 'V' * v
        if v == 0:
            res += 'H' * h
            
        return res
```
**Runtime: 32ms**