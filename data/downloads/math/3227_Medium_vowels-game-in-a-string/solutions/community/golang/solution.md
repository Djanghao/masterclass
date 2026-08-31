# GO SOLUTION

**Author:** RICHWING
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-game-in-a-string/solutions/5561038/](https://leetcode.com/problems/vowels-game-in-a-string/solutions/5561038/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(len(s))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func doesAliceWin(s string) bool {
    vowels:=0
    for _,v:= range s{
        if v == 'a'|| v == 'e'|| v == 'i'|| v == 'o'|| v == 'u'{
            vowels++
        }
    }
    if vowels==0{
        return false
    }
    return true
}
```