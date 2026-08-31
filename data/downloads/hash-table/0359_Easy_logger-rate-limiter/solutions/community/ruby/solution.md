# Ruby solutions beats 100% memory

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/5451128/](https://leetcode.com/problems/logger-rate-limiter/solutions/5451128/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(M) -> M = length of all messages

# Code
```
class Logger
    def initialize()
        @hash = {}
    end


=begin
    :type timestamp: Integer
    :type message: String
    :rtype: Boolean
=end
    def should_print_message(timestamp, message)
        puts @hash
        if @hash.key?(message)
            t = @hash[message]
            if (timestamp - t) >= 10
                @hash[message] = timestamp
                true
            else
                false
            end
        else
            @hash[message] = timestamp
            true
        end
    end


end

# Your Logger object will be instantiated and called as such:
# obj = Logger.new()
# param_1 = obj.should_print_message(timestamp, message)
```