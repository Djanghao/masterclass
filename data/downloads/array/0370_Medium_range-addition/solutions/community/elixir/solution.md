# [Python][Elixir] Defining an IndexedMap module to handle access-by-index

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-addition/solutions/2050761/](https://leetcode.com/problems/range-addition/solutions/2050761/)

---

This problem is a nightmare in functional programming. 

In an imperative language, the rough algorithm is like this:

* Initialize an array of zeroes of length n
* Iterate over a list of updates. For each update, add the increment at the low index, then *subtract* the increment at one after the high index (if it exists).
* Do a prefix sum over the array, rewriting each element (after element 0) to be the sum of it and the previously-modified value.

In Python this looks like:

```
def get_modified_array(length, updates):
	result = [0] * length
	for lo, hi, inc in updates:
		result[low] += inc
		if hi < length + 1: result[hi] -= inc
	
	for i in range(1, length, 1):
		result[i] += result[i-1]
	return result
```

This is a clean O(n+m) solution. Doing each update is O(1) to access an array by position, O(1) to mutate the array at that position, performed for m updates, while the prefix sum is likewise O(1) to access, O(1) to mutate, and is performed n times. This means we have an O(n) + O(m) = O(n+m) solution.

But in functional programming, lists are immutable linked lists, not mutable arrays. This means that checking the length of the list, accessing a particular position in the list, and mutating an element in a list are all O(n) operations because you might need to traverse the entire list in order to get to the correct position, and rebuild the entire list up to that point. If we naively tried to do the same algorithm on a linked list, we would end up doing an O(n) operation m times and an O(n) operation n times, giving us a time complexity of O(n(n+m)) which is way too slow.

This means we have to convert from a linked list into a different data structure that is O(1) to access by position, and O(1) to modify. There is *no built-in data type* in Elixir that can handle both. Tuples are O(1) to access by position, but because they are contiguous in memory it is O(n) to mutate (and for that reason Elixir doesn't even have a Tuple.update function.) 

The only solution is that we need to define a data structure built out of a map, where the positions are keyed by an integer index. This IndexMap has the following requirements:

* Must be able to convert from a List to an IndexedMap in O(n) time
* Must be able to convert an IndexedMap to a List in O(n) time
* Must be able to add a given value to the IndexedMap at a given index in O(1) time
* Must be able to do a prefix sum over the IndexedMap in O(n) time

This is reusable functionality so we should build it in a new module, like so:

```
defmodule IndexedMap do
  def from_list(source, index \\\\ 0, target \\\\ %{})
  def from_list([], _index, target), do: target

  def from_list([head | tail], index, target) do
    from_list(tail, index+1, Map.put(target, index, head))
  end

  def to_list!(source, index \\\\ 0, backwards \\\\ [])

  def to_list!(source, _index, backwards) when source == %{} do
    Enum.reverse(backwards)
  end

  def to_list!(source, index, backwards) do
    to_list!(Map.delete(source, index), index+1, [source[index]] ++ backwards)
  end


  def add_at_index(indexed_map, index, increment) do
    if Map.has_key?(indexed_map, index) do
      %{indexed_map | index => indexed_map[index] + increment}
    else
      indexed_map
    end
  end

  def prefix_sum(source, index \\\\ 0) do
    cond do
      not Map.has_key?(source, index) -> source
      not Map.has_key?(source, index-1) -> prefix_sum(source, index+1)
      true -> prefix_sum(Map.update!(source, index, fn val -> val + source[index-1] end), index+1)
    end
  end
end
```

Armed with this new IndexedMap definition, we can do all of the accessing and updating we need to.

* We create an initial list of 0s of length s.
* We convert that list to an IndexedMap.
* We loop across the updates (using Enum.reduce), applying each in turn to the IndexedMap using the add_at_index function
* We do a prefix sum on the IndexedMap
* We convert the IndexedMap back to a list and return it

```
defmodule Solution do
  def apply_update([lo, hi, inc], indexed_map) do
    indexed_map |> IndexedMap.add_at_index(lo, inc) |> IndexedMap.add_at_index(hi+1, -inc)
  end

  @spec get_modified_array(length :: integer, updates :: [[integer]]) :: [integer]
  def get_modified_array(length, updates) do
    initial = IndexedMap.from_list(List.duplicate(0, length))

    updates
    |> Enum.reduce(initial, &apply_update/2)
    |> IndexedMap.prefix_sum
    |> IndexedMap.to_list!
  end
end
```

This gets us back to an O(n+m) solution that can pass the "Time limit exceeded" barrier.