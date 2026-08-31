# Ruby || Trie || Looks like the only Ruby submission out of 100+K accepted

**Author:** alecn2002
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/1723638/](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/1723638/)

---

```ruby
class TrieNode
    attr_reader :children
        
    def initialize
        @children = []
    end
        
    def [](bit)
        children[bit]
    end
        
    def get!(bit)
        @children[bit] ||= TrieNode.new
    end
        
    def contains?(bit)
        !children[bit].nil?
    end
end

class Trie
    attr_reader :nbits, :root
    
    def initialize(a)
        @root = TrieNode.new
        @nbits = a.max.bit_length
        a.each {|x| put(x) }
    end
    
    def put(n)
        nbits.downto(0).inject(root) {|p, i| p.get!(n[i]) }
    end
    
    def max_compat(x)
        nbits.downto(0).inject([0, root]) {|(val, p), i|
            bit = x[i]
            nbit = bit ^ 1
            p.contains?(nbit) ? [val | (nbit << i), p[nbit]] : [val | (bit << i), p[bit]]
        }.first
    end
end

def find_maximum_xor(nums)
    trie = Trie.new(nums)
    nums.inject(0) {|r, x|
        [r, x ^ trie.max_compat(x)].max
    }
end
```