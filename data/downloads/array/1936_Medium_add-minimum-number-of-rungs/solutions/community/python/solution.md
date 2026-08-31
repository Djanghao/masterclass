# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 3
**Link:** [https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/5530651/](https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/5530651/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int addRungs(int[] rungs, int dist) {
        int count=0;
        int curr = 0;
        for(int i=0; i<rungs.length; i++){
            int diff = rungs[i]-curr;
            if(diff>dist){
                count+= (diff%dist==0)? diff/dist-1: diff/dist;
                curr = rungs[i];
            } else{
                curr = rungs[i];
            }
        }
        return count;
    }
}
```

![a9a682ef-8a56-461e-9e1b-7654b114838f_1721590703.0971212.jpeg](./images/0.jpeg)