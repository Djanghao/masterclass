# Simple Greedy Approach with explanation

**Author:** kmuhammadjon
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/5045704/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/5045704/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Greedy
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func getSmallestString(s string, k int) string {
    newStringWithKDiff := ""
    for i := 0; i < len(s); i++{
        if s[i] == 'a'{
            newStringWithKDiff += string(s[i])
            continue
        }
        // first we need know distances between current char and
        // 'a' why? to make smallest string it should move
        // to 'a' or to up in aphabetically
        // so if possible replace it with 'a' not replace it 
        // with one that is aphabetically small like 
        // 'a' not possible next best char is 'b' then 'c'
        // logic of problem is like that i hope you understood
        // any question feel free to comment
        distanceToZ := 123 - int(s[i])
        distanceToA := int(s[i]) - 97
        if distanceToZ > distanceToA && k >= distanceToA{
            k -= distanceToA
            newStringWithKDiff += "a"
        }else if distanceToZ < distanceToA && k >= distanceToZ{
            k -= distanceToZ
            newStringWithKDiff += "a"
        }else if distanceToZ == distanceToA && k >= distanceToZ{
            k -= distanceToZ
            newStringWithKDiff += "a"
        }else if k > 0{
            newStringWithKDiff += string(int(s[i]) - k)
            k = 0
        }else{
            newStringWithKDiff += string(s[i])
        }
    }
    return newStringWithKDiff
}
```