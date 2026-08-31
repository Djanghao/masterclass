# Horrible eval Ruby solution

**Author:** killer-whale
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-atoms/solutions/5478761/](https://leetcode.com/problems/number-of-atoms/solutions/5478761/)

---

```ruby
# @param {String} formula
# @return {String}
def count_of_atoms(formula)
    eval(formula.gsub(/[A-Z][a-z]?/, 'Counter.new("\\&")+').gsub(/\\d+/, '*\\&+').gsub('+*', '*').gsub(/\\+\\)/, ')').gsub(/\\+$/, '').gsub(')C', ')+C').gsub(')(', ')+(')).sort.map{ |k, v| k + (v > 1 ? v.to_s : '')}.join
end

class Counter < Hash
  def initialize(other = nil)
    super(0)
    if other.is_a? Hash
      other.each{ |k,v| self[k] = v }
    end
    if other.is_a? String
      self[other] += 1
    end
  end

  def +(rhs)
     result = Counter.new(self)
     rhs.each{ |k, v| result[k] += v }
     result
  end
  
  def *(rhs)
     result = Counter.new
     self.each{ |k, v| 
        result[k] = v * rhs
     }
     result
  end
end
```