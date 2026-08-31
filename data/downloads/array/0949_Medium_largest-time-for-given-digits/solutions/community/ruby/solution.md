# 43ms, handles difficult edge case. O(n log n) time.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-time-for-given-digits/solutions/4062057/](https://leetcode.com/problems/largest-time-for-given-digits/solutions/4062057/)

---

This question is definitely do-able in 30 minutes or less if you have not encountered it before just really try your best to beat out the edge case early. I was able to solve this problem in 29 minutes.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} arr
# @return {String}
def largest_time_from_digits(arr)
    # Used to detect edge case where we have a 2 val and 2 vals larger
    # than 5 in array.
    digits_over_5 = 0
    arr.sort!{|a, b| b<=>a}
    nums_hash = {}
    arr.each do |n|
        if !nums_hash[n]
            nums_hash[n] = 0
        end

        nums_hash[n] = nums_hash[n] + 1
        if n > 5
            digits_over_5 = digits_over_5 + 1
        end
    end

    # If we have 2 val and 2 vals larger
    # than 5 in array the first digit cannot be a 2 
    # or else we invalidate the time.
    answer = ""
    if digits_over_5 > 1 and nums_hash[2]
        if nums_hash[1]
            answer = "1"
            nums_hash[1] = nums_hash[1] - 1
            if nums_hash[1] == 0
                nums_hash.delete 1
            end
        elsif nums_hash[0]
            answer = "0"
            nums_hash[0] = nums_hash[0] - 1
            if nums_hash[0] == 0
                nums_hash.delete 0
            end
        else
            return ""
        end

        limiting_factors = [10, 6]

    # In the situation where we do hit our edge case of 2 val + 2x vals larger than 5
    # we use our simple limiting factors array to put together our string.
    else
        limiting_factors = [3, "x", 6]
    end

    
    limiting_factors.each do |limiting_factor|
        if limiting_factor == "x"
            if answer[0]
                if answer[0] == "2"
                    limiting_factor = 4
                else
                    limiting_factor = 10
                end
            else
                return ""
            end
        end

        nums_hash.keys.each do |n|
            if n < limiting_factor
                answer = answer + n.to_s
                nums_hash[n] = nums_hash[n] - 1
                if nums_hash[n] == 0
                    nums_hash.delete n
                end
                break
            end
        end
    end

    if answer.size < 3
        return ""
    else
        return answer[0] + answer[1] + ":" + answer[2] + nums_hash.keys[0].to_s
    end
end


```