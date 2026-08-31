# Ruby - O(N) Time and O(1) Space

**Author:** GuptaPrachur10
**Votes:** 4
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/1899951/](https://leetcode.com/problems/jump-game-ii/solutions/1899951/)

---

```
def jump(nums)
    res = cur = max = 0
    for i in 0...nums.size-1
        cur = [cur, i+nums[i]].max
        if i == max
            max = cur
            res+=1
        end
    end
    res
end
```