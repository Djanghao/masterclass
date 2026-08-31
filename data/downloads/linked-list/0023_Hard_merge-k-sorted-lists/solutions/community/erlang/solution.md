# Elixir Brute Force Using Erlang :gb_trees

**Author:** bpfaust
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/1748125/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/1748125/)

---

I first want to preface this post by saying I am not nearly as knowledgeable in the realm of software engineering as the vast majority of posters are here. As a result, I cannot speak intelligently on the topics of time complexity, space complexity, or finding the most optimal solution to a problem. 

Nonetheless, because I don't often see many posts providing solutions in Elixir, I thought it worthwhile to share the approach I took. 

The approach is as follows: 
1. Iterate over each linked-list, and count the number of times the value occurs into a General Balanced Tree, named ```values_and_frequencies``` in the code, by implementing the ```:gb_trees``` Erlang library. The data in the tree essentially follows the form of (value) => (number of times it occurs). 
2. Recurse over the ```values_and_frequencies``` tree from smallest to largest keys, consuming the tree in the process. Expanding on this, the frequency of a value's occurence is decremented with each passing until it reaches 0, at which point the value is removed from the tree altogether. When the final passed tree is empty, the operation is complete and the final linked-list can be returned. 

Elixir maps, ```%{}```, are not ordered. Attempting to work with Elixir maps in an ordered fashion is expensive. General Balanced Trees offer a means of stepping through the structure in order. 

I believe the first part of this approach is in O(n) time. Lookups, insertion, and deletion on General Balanced Trees are O(log_2 n). Ultimately, I believe this solution is just an Elixir implemention of the Brute Force solution. 

```
defmodule Solution do
  @spec merge_k_lists(lists :: [ListNode.t | nil]) :: ListNode.t | nil
  def merge_k_lists(lists) do
    Enum.reduce(lists, :gb_trees.empty, fn linked_list, acc ->
                  digest(acc, linked_list)
                end)
    |> eat_map()
  end
  
  def digest(values_and_frequencies, linked_list) when linked_list.val != nil do
    if :gb_trees.is_defined(linked_list.val, values_and_frequencies) do
      :gb_trees.update(linked_list.val, 
        :gb_trees.get(linked_list.val, values_and_frequencies) + 1, 
        values_and_frequencies)
    else
      :gb_trees.insert(linked_list.val, 1, values_and_frequencies)
    end
    |> digest(linked_list.next)
  end
    
  def digest(values_and_frequencies, _linked_list) do
    values_and_frequencies
  end
    
  def eat_map(values_and_frequencies) do
    if :gb_trees.is_empty(values_and_frequencies) do
      nil
    else
      case :gb_trees.smallest(values_and_frequencies) do
        {num, 0} -> eat_map(:gb_trees.delete(num, values_and_frequencies))
        {num, freq} -> %ListNode{val: num, next: eat_map(:gb_trees.update(num, freq - 1, values_and_frequencies))}
      end
    end
  end
end
```