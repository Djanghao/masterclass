# best approach

**Author:** meghana_139
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-removal-game/solutions/6114657/](https://leetcode.com/problems/stone-removal-game/solutions/6114657/)

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
```c []
bool canAliceWin(int n) {
 if(n<10){
     return false;
 }   
    for(int i=10;i>0;i--){
        if(n-i<0&&i%2==0)
            return false;
    else if(n-i<0&&i%2!=0)
        return true;
        else n=n-i;
    }
    return true;
}
```