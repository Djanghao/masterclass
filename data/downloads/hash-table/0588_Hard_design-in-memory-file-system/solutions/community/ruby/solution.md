# Ruby Trie - easy to follow

**Author:** SWAGLORDFLUFF
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-in-memory-file-system/solutions/1640343/](https://leetcode.com/problems/design-in-memory-file-system/solutions/1640343/)

---

```
class TrieNode
    attr_accessor :is_file, :content, :children
    
    def initialize(is_file = false, content = '')
        @is_file = is_file
        @content = content
        @children = {} 
    end
end

class FileSystem
    def initialize()
        @root = TrieNode.new
    end


=begin
    :type path: String
    :rtype: String[]
=end
    def ls(path)
        subdirs = path.split('/')[1..-1]
        return @root.children.keys.sort if subdirs.nil?
            
        node = @root
        
        subdirs.each do |dir|
            node = node.children[dir]
        end
        
        if node.is_file
            [subdirs[-1]]
        else
            node.children.keys.sort
        end
    end


=begin
    :type path: String
    :rtype: Void
=end
    def mkdir(path)
        subdirs = path.split('/')[1..-1]
        node = @root
        
        subdirs.each do |dir|
            if node.children[dir]
                node = node.children[dir]
            else
                # create the directory
                new_node = TrieNode.new()
                node.children[dir] = new_node
                node = new_node
            end
        end
    end


=begin
    :type file_path: String
    :type content: String
    :rtype: Void
=end
    def add_content_to_file(file_path, content)
        subdirs = file_path.split('/')[1..-1]
        node = @root
        
        subdirs.each_with_index do |dir, idx|
            if node.children[dir]
                node = node.children[dir]
            else
                # create the directory
                new_node = TrieNode.new()
                node.children[dir] = new_node
                node = new_node
            end
            
            if idx == subdirs.length - 1
                node.is_file = true
                node.content += content 
            end
        end
    end


=begin
    :type file_path: String
    :rtype: String
=end
    def read_content_from_file(file_path)
        subdirs = file_path.split('/')[1..-1]
        node = @root
        
        subdirs.each do |dir|
            node = node.children[dir]
        end
        
        node.content
    end
end
```