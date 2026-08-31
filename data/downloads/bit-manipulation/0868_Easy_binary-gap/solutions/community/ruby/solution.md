# Simple Solution, O(n), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-gap/solutions/5348310/](https://leetcode.com/problems/binary-gap/solutions/5348310/)

---


# Code
```
# @param {Integer} n
# @return {Integer}
def binary_gap(n)
    val = n.to_s(2)
    if val.count("1") < 2
        return 0
    else
        max = 0
        i = 0
        first_1 = nil
        while i < val.size
            if val[i] == "1"
                if first_1 == nil
                    first_1 = i
                else
                    max = [max, i - first_1].max
                    first_1 = i
                end
            end
            i += 1
        end
        return max
    end
end
```