# [Ruby] O(N)

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/947482/](https://leetcode.com/problems/basic-calculator-ii/solutions/947482/)

---

```
# @param {String} s
# @return {Integer}
def calculate(s)
  operators = Set.new(%w[+ - * /])
  digits = Set.new('0'..'9')
  
  num = 0
  presign = '+'
  stack = []
  
  (s.delete(' ') + '+').each_char do |char|
    if digits.include?(char)
      num = num*10 + char.to_i
    elsif operators.include?(char)
      stack << case presign 
        when '+' ; num
        when '-' ; -num
        when '*' ; stack.pop*num
        when '/' ; (stack.pop.to_f/num).to_i
      end
      
      presign = char
      num = 0
    end
  end
  
  stack.sum
end

```