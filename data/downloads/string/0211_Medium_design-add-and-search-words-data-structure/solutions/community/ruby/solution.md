# Ruby solution

**Author:** ozovalihasan
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/3315521/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/3315521/)

---

# Code
```ruby []
class WordDictionary
  def initialize()
    @trie = Trie.new
    @cache = {}
  end

  def add_word(word)
    @trie.insert word
    @cache = {}
  end

  def search(word)
    return @cache[word] unless @cache[word].nil?
    
    @cache[word] = @trie.search(word)
  end
end

class Trie
  def initialize()
    @root = NodeTrie.new
  end

  def insert(word)
    word = word.split("")
    cursor = @root

    while char = word.shift
      cursor = (cursor.chars[char] ||= NodeTrie.new)
    end
    
    cursor.word = true
  end

  def search(word)
    depth_search(@root, word, 0)
  end

  def depth_search(cursor, word, index)
    return false if cursor.nil?

    char = word[index]
    index += 1
    if char == "."
      return cursor.chars.any? {|_, next_cursor| depth_search(next_cursor, word, index)}
    elsif char.nil?
      return cursor.word?
    else
      return depth_search(cursor.chars[char], word, index)
    end
  end

end

class NodeTrie
  attr_accessor :chars, :word
  def initialize(chars = {}, word = false)
    @chars = chars
    @word = word
  end

  alias_method :word?, :word
end
```