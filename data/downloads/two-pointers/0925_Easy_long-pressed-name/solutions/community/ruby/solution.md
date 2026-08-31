# 100% Ruby solution

**Author:** nickdual
**Votes:** 0
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/5434887/](https://leetcode.com/problems/long-pressed-name/solutions/5434887/)

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
# @param {String} name
# @param {String} typed
# @return {Boolean}
def is_long_pressed_name(name, typed)
    n = 0
    t = 0
    ts = typed.size
    ns = name.size
    while t < ts and n < ts
        return false if name[n] != typed[t]
            tc = 0
            nc = 0
        while typed[t] == typed[t + 1]
            tc += 1
            t += 1
        end
        while name[n] == name[n + 1]
            nc += 1
            n += 1
        end
        return false if nc > tc
        t += 1
        n += 1
    end
    return true if t == ts and n == ns
    false
end
def is_long_pressed_name1(name, typed)
    name = name.chars.chunk(&:itself).map{|_,c| c.join}
    typed = typed.chars.chunk(&:itself).map{|_,c| c.join}
    sn = name.size
    st = typed.size
    return false if sn != st
    (0...sn).each do |i|
        return false if (name[i][0] == typed[i][0] && name[i].size > typed[i].size) or name[i][0] != typed[i][0]
    end
    true
end
```