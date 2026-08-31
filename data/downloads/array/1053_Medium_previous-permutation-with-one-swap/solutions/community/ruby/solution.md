# Ruby beats 100% || Simple approach || Clean Code

**Author:** debanshumajumdar18
**Votes:** 0
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/4385719/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/4385719/)

---

# Approach

- Iterate from reverse 
- The last element has the least power and the first pos has the highest weightage 
- Check for the first unsorted element (desc order e.g. 9358 - 9 is the first unsorted element)
- Run a loop from i+1 to n-1 where i is the index of the first unsorted element
- In the i+1 to n-1 find the position (pos) of the element smaller than arr[i] but largest in the range i+1 to n-1
- Swap arr[i] and arr[pos] and return array
- Otherwise outside this logic return the array as it is

# Complexity
- Time complexity: O(n^2)


# Code
```
# @param {Integer[]} arr
# @return {Integer[]}
def prev_perm_opt1(arr)

    n = arr.length
    curr_elem = arr[-1]
    swap_1 = pos = -1
    max = -10**9

    (0..n-2).reverse_each do |i|
        if curr_elem >= arr[i]
            curr_elem = arr[i]
        else
            curr_elem = arr[i]
            swap_1 = i
            (i+1..n-1).each do |k|
                if arr[k] < curr_elem
                    if arr[k] > max
                        max = arr[k]
                        pos = k
                    end
                end
            end
            arr[pos], arr[swap_1] = arr[swap_1], arr[pos]
            return arr
        end
    end
    arr
end
```