# Ruby Solution Using BFS

**Author:** hamzashariq123
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4528752/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4528752/)

---



# Code
```
# @param {Integer} x
# @param {Integer} y
# @return {Integer}

def minimum_operations_to_make_equal(x, y)
    que = [[x, 0]]
    seen = {}

    while que[0][0] != y
        val, cnt = que.shift
        next if seen[val]

        seen[val] = true

        que << [val / 5, cnt + 1] if val % 5 == 0
        que << [val / 11, cnt + 1] if val % 11 == 0
        que << [val - 1, cnt + 1] if val > 1
        que << [val + 1, cnt + 1]
    end

    return que.first[1]
end
```