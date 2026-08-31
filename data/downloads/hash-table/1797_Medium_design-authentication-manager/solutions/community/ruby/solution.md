# Ruby - One Hash for tokens

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-authentication-manager/solutions/1118943/](https://leetcode.com/problems/design-authentication-manager/solutions/1118943/)

---


```ruby
class AuthenticationManager
  def initialize(time_to_live)
    @time_to_live = time_to_live
    @token = {}
  end
  attr_reader :time_to_live, :token

  def generate(token_id, current_time)
    token[token_id] = current_time + time_to_live
  end

  def renew(token_id, current_time)
    token[token_id] = current_time + time_to_live if token[token_id] && token[token_id] > current_time
  end

  def count_unexpired_tokens(current_time)
    token.delete_if { _2 <= current_time }
    token.size
  end
end
```