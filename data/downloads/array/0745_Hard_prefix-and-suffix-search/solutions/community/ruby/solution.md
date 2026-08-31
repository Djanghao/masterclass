# Ruby || HashMap || Fastest, very simple

**Author:** alecn2002
**Votes:** 0
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/2167653/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/2167653/)

---

```ruby
class WordFilter
    attr_reader :dict

    def initialize(words)
        @dict = words.each_with_index.inject({}) {|r, (w, idx)|
            w.size.times {|i|
                key = "#{w[0..i]}."
                w.size.times {|j|
                    r.update((key + w[j..-1]) => idx)
                }
            }
            r
        }
    end

    def f(prefix, suffix)
        dict["#{prefix}.#{suffix}"] || -1
    end
end
```