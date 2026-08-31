# [Ruby] O(1)

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-frequency-stack/solutions/1087220/](https://leetcode.com/problems/maximum-frequency-stack/solutions/1087220/)

---

```
class FreqStack
  def initialize()
    @freq = Hash.new(0)
    @stacks = Hash.new{|h, k| h[k] = []}
    @max_freq = 0
  end

  def push(x)
    freq_x = @freq[x] + 1
    @freq[x] = freq_x
    @max_freq = [@max_freq, freq_x].max
    @stacks[freq_x] << x
  end

  def pop
    x = @stacks[@max_freq].pop
    @freq[x] -= 1
    @max_freq -= 1 if @stacks[@max_freq].empty?
    x
  end
end


# Your FreqStack object will be instantiated and called as such:
# obj = FreqStack.new()
# obj.push(x)
# param_2 = obj.pop()
```