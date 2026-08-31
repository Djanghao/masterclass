# A real working solution. Simple once you get proper sum + subtract bitwise functions.

**Author:** Chris1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-two-integers/solutions/4081381/](https://leetcode.com/problems/sum-of-two-integers/solutions/4081381/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(log b)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer} a
# @param {Integer} b
# @return {Integer}
def get_sum(a, b)

    subtract = false
    turn_neg = false
    if a < 1  and b < 1
        a = a.abs
        b = b.abs
        turn_neg = true
    elsif a < 0 || b < 0 
        original_a = a
        original_b = b

        a = a.abs
        b = b.abs

        if b > a
            tmp = a
            a = b
            b = tmp
            if original_b < 1
                turn_neg = true
            end
        end

        subtract = true
    end

    if subtract
        a = sub(a, b)
    else
        a = sum a, b
    end


    if turn_neg
        return -a
    else
        return a
    end
end


def sum a, b
    while b != 0
        temp = (a&b) << 1
        a = a^b
        b = temp
    end

    a
end


def sub a, b 
    while b != 0
        temp = (~a&b) 
        a = a^b
        b = temp << 1
    end

    a
end
```