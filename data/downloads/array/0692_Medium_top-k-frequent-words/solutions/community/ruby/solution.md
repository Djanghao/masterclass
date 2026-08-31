# Ruby | 1-liner. Tally.to_a. Faster than 92%

**Author:** codingstar1
**Votes:** 2
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/2720134/](https://leetcode.com/problems/top-k-frequent-words/solutions/2720134/)

---

```ruby
def top_k_frequent(words, k)
    words.tally.to_a.sort_by { |w, count| [-count, w] }.first(k).map(&:first)
end
```
<hr>
Bonus. The second approach to sort.

```ruby
def top_k_frequent(words, k)
    words.tally.to_a.sort { |a, b| a[1] != b[1] ? a[1] <=> b[1] : b[0] <=> a[0] }[-k..-1].map(&:first).reverse
end
```
<hr>

Or for more comfort 3-lines view (the same solution): 
```ruby
def top_k_frequent(words, k)
    words.tally.to_a.sort { |a, b| 
		a[1] != b[1] ? a[1] <=> b[1] : b[0] <=> a[0]
	}[-k..-1].map(&:first).reverse
end
```
<hr>

# Tests:
```ruby
require 'test/unit'
class Test_top_k_frequent < Test::Unit::TestCase
    def test_
        assert_equal ["i","love"], top_k_frequent(["i","love","leetcode","i","love","coding"], k = 2)
        assert_equal ["the","is","sunny","day"], top_k_frequent(["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4)
    end
end
```