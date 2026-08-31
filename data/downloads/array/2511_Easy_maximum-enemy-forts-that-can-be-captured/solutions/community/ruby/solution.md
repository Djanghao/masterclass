# Kadane

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/4430280/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/4430280/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} forts
# @return {Integer}
def capture_forts(forts)
    captured = 0
    i = 0
    start_point = nil
    start_point_sym = nil
    while i < forts.size
        if forts[i] != 0
            if start_point 
                if (forts[i] == 1 and start_point_sym == -1) ||( forts[i] == -1 and start_point_sym == 1 )
                    total = i - start_point - 1
                    captured = [total, captured].max
                end
            end
            
            start_point = i
            start_point_sym = forts[i]
        end
        i += 1
    end

    captured
end
```