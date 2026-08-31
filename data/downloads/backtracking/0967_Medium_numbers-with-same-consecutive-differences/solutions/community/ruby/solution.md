# [Ruby] Easy Iterative Solution with explanation

**Author:** MrPhantomT
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2526149/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2526149/)

---

**Explanation**:
Solution consist of two steps: 
1. As first step we find each possible first digit. To do it we select all possible digits between 1 to 9 from which we can add/subtract "K" and get result between 0 and 9.
2. As second step we need add digits to numbers from previous step to get desired length. During that step digit from previous step can result in 1 or 2 new numbers.

**Code:**
```
def nums_same_consec_diff(n, k)
  initial_digits = (1..9).select do |num|
    num + k < 10 || num - k >= 0
  end
  
 # We took "n - 1" because we already calculated first digit of number
  (n - 1).times.reduce(initial_digits) do |acc, index|
    acc.flat_map do |num|
      prev_digit = num % 10 
      
      # We need to check only 2 cases: "previous digit + k" and "previous digit - k" all other cases would not be valid according to requirements
      # We need to use ".uniq" there to workaroud case when K == -K (K = 0)
      [k, -k].uniq.filter_map do |difference|
        digit = prev_digit + difference
        
        num * 10 + digit if digit < 10 && digit >= 0
      end
    end
    
  end
end
```