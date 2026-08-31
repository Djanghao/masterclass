# [Ruby] Fibonacci

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/1361724/](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/1361724/)

---

```
# @param {Integer} n
# @return {Integer}
def find_integers(num)
  num = (num+1).to_s(2)
  n = num.length
  fibo = [1, 2]
  
  (n-1).times do
    fibo << fibo[-1] + fibo[-2]
  end

  result = 0
  
  n.times do |i|
    v = num[i...i+2]
    if v == '11'
      result += fibo[n-i]
      break
    elsif v == '10'
      result += fibo[n-i-1]
    elsif v == '1'
      result += 1
    end
  end
  
  result
end

```