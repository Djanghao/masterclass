# Ruby Solution

**Author:** yalanin
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4117426/](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4117426/)

---

```
# @param {String} colors
# @return {Boolean}
def winner_of_game(colors)
    counta = 0
    countb = 0

    for i in(1).upto(colors.size - 1)
        if(colors[i - 1] == colors[i] && colors[i] == colors[i + 1])
            colors[i] == 'A' ? counta += 1 : countb += 1
        end
    end

    counta > countb
end
```