# Ruby solution, checks if already used short code

**Author:** brianh1j2k3
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/2356933/](https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/2356933/)

---

```ruby
require 'securerandom'

def encode(long_url)
  short_code = random_alpha_num

  # Handle edge case, where already used that short_url code
  short_code = random_alpha_num while cache[short_code]

  cache[short_code] = long_url
  "http://tinyurl.com/#{short_code}"
end

def decode(short_url)
  short_code = short_url.gsub('http://tinyurl.com/', '')
  cache[short_code]
end

def cache
  @cache ||= {}
end

def random_alpha_num(length = 6)
  SecureRandom.alphanumeric(length)
end

```