# Simple Solution, O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/5071334/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/5071334/)

---


# Code
```
# @param {Integer} num
# @return {Integer}
def min_max_difference(num)
    num_as_s = num.to_s
    max_num = nil
    num_as_s.each_char do |n_s|
        if n_s != "9"
            max_num = n_s
            break
        end
    end
    

    min_num = nil
    num_as_s.each_char do |n_s|
        if n_s != "0"
            min_num = n_s
            break
        end
    end

    if max_num == nil
        max_post_replace = num
    else
        max_post_replace = num_as_s.gsub(max_num, "9").to_i  
    end

    if min_num == nil
        min_post_replace = num
    else
        min_post_replace = num_as_s.gsub(min_num, "0").to_i
    end

    max_post_replace - min_post_replace
end
```