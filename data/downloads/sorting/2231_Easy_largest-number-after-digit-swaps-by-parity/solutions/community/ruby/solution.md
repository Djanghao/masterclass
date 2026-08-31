# O(n log n) time O(n) space. String conversion, sort once.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/4065307/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/4065307/)

---


# Code
```
# @param {Integer} num
# @return {Integer}
def largest_integer(num)

    s_num = num.to_s
    nums = []
    s_num.each_char do |char|
        nums << char.to_i
    end

    nums.sort!{|a, b| b<=>a}
    odd = []
    even = []

    nums.each do |n|
        if n.odd?
            odd << n
        else
            even << n
        end
    end

    answer = ""
    index = 0
    while index < s_num.size
        if s_num[index].to_i.odd?
            answer = answer + odd.shift.to_s
        else
            answer = answer + even.shift.to_s
        end
        index = index + 1
    end


    answer.to_i
end



```