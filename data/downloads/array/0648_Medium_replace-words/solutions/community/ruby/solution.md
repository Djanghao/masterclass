# Ruby || Trie

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-words/solutions/5273491/](https://leetcode.com/problems/replace-words/solutions/5273491/)

---


# Code
```ruby
class String
    AORD = 'a'.ord

    def aord = (ord - AORD)
end

class NilClass
    def [](c) = self
    def wend? = false
end

class Trie
    class TrieNode
        attr_reader :c, :childs, :wend

        def initialize(c)
            @c, @childs, @wend = c, [], false
        end

        def add(w, i = 0)
            if i >= w.size then
                @wend = true
            else
                (childs[w[i].aord] ||= TrieNode.new(w[i])).add(w, i + 1)
            end
        end

        def wend? = wend

        def [](c) = childs[c.aord]
    end

    attr_reader :root

    def initialize
        @root = TrieNode.new('')
    end

    def add(w) = root.add(w)

    def minimize(w)
        cur = root
        w[0 .. w.size.times.find {|i| (cur = cur[w[i]]).wend? } || -1 ]
    end
end

def replace_words(dictionary, sentence)
    dict = dictionary.each_with_object(Trie.new) {|w, res| res.add(w) }
    sentence.split(' ').collect {|w| dict.minimize(w) }.join(' ')
end
```