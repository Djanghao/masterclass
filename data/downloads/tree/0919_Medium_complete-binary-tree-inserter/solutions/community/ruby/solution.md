# BFS

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/complete-binary-tree-inserter/solutions/4855271/](https://leetcode.com/problems/complete-binary-tree-inserter/solutions/4855271/)

---


# Code
```
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
class CBTInserter

=begin
    :type root: TreeNode
=end
    def initialize(root)
        @root = root
        @nodes = [[@root]]
        @current_level = 1
        @max_count_at_level = 1
        @current_level_nodes = @nodes.first
        @current_level_nodes_count = @current_level_nodes.size
        # Appends all children of root to @nodes and updates all vals above based
        # on the depth and amount of nodes of root.
        setup @root 
    end


=begin
    :type val: Integer
    :rtype: Integer
=end
    # BFS Insertion
    def insert(val)
        if @max_count_at_level == @current_level_nodes_count
            @max_count_at_level *= 2
            @current_level_nodes_count = 0
            @nodes << []
            @current_level_nodes = @nodes.last
        end

        new_node = TreeNode.new(val)     
        @parent = @nodes[@nodes.size - 2][(@current_level_nodes_count/2).floor]
        if @parent.left == nil
            @parent.left = new_node
        else
            @parent.right = new_node
        end

        @current_level_nodes << new_node
        @current_level_nodes_count += 1
        @parent.val
    end


=begin
    :rtype: TreeNode
=end
    def get_root()
        @root
    end

    # Appends all children of root to @nodes and updates all vals above based
    # on the depth and amount of nodes of root.
    # This is done BFS Style. 
    def setup root
        if root.left == nil and root.right == nil
            
        else
            q = [root]
            next_level = []
            while q.size > 0
                node = q.shift
                if node.left
                    if @max_count_at_level == @current_level_nodes_count
                        @max_count_at_level *= 2
                        @current_level_nodes_count = 0
                        @nodes << []
                        @current_level_nodes = @nodes.last

                       
                    end

                    @current_level_nodes << node.left
                    @current_level_nodes_count += 1
                    next_level << node.left

                end

                if node.right
                    if @max_count_at_level == @current_level_nodes_count
                        @max_count_at_level *= 2
                        @current_level_nodes_count = 0
                        @nodes << []
                        @current_level_nodes = @nodes.last

                       
                    end

                    @current_level_nodes << node.right
                    @current_level_nodes_count += 1
                    next_level << node.right
                end

                if q.size == 0 and next_level.size > 0
                    q = next_level
                    next_level = []
                end
            end

        end
    end


end

# Your CBTInserter object will be instantiated and called as such:
# obj = CBTInserter.new(root)
# param_1 = obj.insert(val)
# param_2 = obj.get_root()
```