# [Ruby] Trie Solution

**Author:** Brandon_Tat
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-file-system/solutions/2641307/](https://leetcode.com/problems/design-file-system/solutions/2641307/)

---

```
class TrieNode
  attr_accessor :children, :value
  
  def initialize
    @children = {}
    @value = nil
  end
end

class FileSystem
  def initialize
    @root = TrieNode.new
  end

  def create_path(path, value)
    split_path = path.split("/")
    current_node = @root
    
    (1...split_path.length).each do |i|
      directory = split_path[i]
      
      unless current_node.children.key?(directory)
        return false unless i == split_path.length - 1
        
        new_node = TrieNode.new
        current_node.children[directory] = new_node
      end
      
      current_node = current_node.children[directory]
    end
    
    return false unless current_node.value.nil?
      
    current_node.value = value
    true
  end

  def get(path)
    split_path = path.split("/")
    current_node = @root
    
    (1...split_path.length).each do |i|
      directory = split_path[i]
      
      return -1 unless current_node.children.key?(directory)
      current_node = current_node.children[directory]
    end
    
    current_node.value.nil? ? -1 : current_node.value
  end
end
```