# for-loop + slice/substring (Beats 100.00% of users with TypeScript)

**Author:** morris367
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/4377887/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/4377887/)

---

# Intuition
where put x ?

n = 157; x = 3
[3]157 1[3]57 15[3]7 157[3], max = [3]157

n = 571; x = 3
[3]571 5[3]71 57[3]1 571[3], max = 57[3]1

n = 351; x = 3
[3]351 3[3]51 35[3]1 351[3], max = 35[3]1

so put before number first smaller than x

---
n = -157; x = 3
-[3]157 -1[3]57 -15[3]7 -157[3], max = -1[3]57

n = -571; x = 3
-[3]571 -5[3]71 -57[3]1 -571[3], max = -[3]571

n = -351; x = 3
-[3]351 -3[3]51 -35[3]1 -351[3], max = -3[3]51 

so put before number first bigger than x

---
if n = 567; x = 3
[3]567 5[3]67 56[3]7 567[3]

if n = -132; x = 3
-[3]132 -1[3]32 -13[3]2 -132[3], max = -1323

so not smaller/bigger, just put to end


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxValue(n: string, x: number): string {
  for (let i: number = n[0] == "-" ? 1 : 0; i < n.length; i++) 
    if (n[0] == "-" ? parseInt(n[i]) > x : parseInt(n[i]) < x) 
      return n.slice(0, i) + x + n.slice(i);
  return n+x
};
```

![Screenshot 2023-12-08 at 4.09.45 PM.png](./images/0.png)
