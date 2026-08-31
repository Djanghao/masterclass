# Simple Solution. O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/baseball-game/solutions/4859117/](https://leetcode.com/problems/baseball-game/solutions/4859117/)

---


# Code
```
# @param {String[]} operations
# @return {Integer}
def cal_points(operations)
    scores = []
    operations.each do |op|
        case op
        when "+"
            score = scores[-1] + scores[-2]
            scores << score
        when "D"
            score = scores.last * 2
            scores << score
        when "C"
            scores.pop 
        else
            scores << op.to_i
        end
    end

    scores.sum
end
```