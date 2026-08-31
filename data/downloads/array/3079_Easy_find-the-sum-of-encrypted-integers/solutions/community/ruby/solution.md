# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/5193551/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/5193551/)

---


```
# @param {Integer[]} nums
# @return {Integer}
def sum_of_encrypted_int(nums)
    answer = 0
    nums.each do |num|
        if num < 10
            answer += num
        else
            digits = num.digits
            answer += (digits.sort![-1].to_s * digits.size).to_i
        end
    end
    answer
end
```