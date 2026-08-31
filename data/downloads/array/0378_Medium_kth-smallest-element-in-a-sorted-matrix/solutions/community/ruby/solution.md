# Quick Select and Binary Search (detailed notes)

**Author:** NikkiNicholas
**Votes:** 24
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/85225/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/85225/)

---

### Quick Select

The first solution comes into my mind is Quick Select, which flattens the matrix into an array with `n^2` elements. Hence, the time complexity is `O(n^2)`.

```ruby
  # O(n^2) where n is the rows count
  def kth_smallest(matrix, k)
    nums = matrix.flatten

    shuffle!(nums)

    k -= 1

    lo, hi = 0, nums.count-1

    loop do
      break if lo >= hi
      j = partition(nums, lo, hi)

      if j == k
        return nums[k]
      elsif j < k
        lo = j + 1
      else
        hi = j - 1
      end
    end

    nums[k]
  end

  def shuffle!(nums)
    (1..nums.count-1).each do |i|
      j = rand(i+1)
      swap(nums, i, j)
    end
  end

  def partition(array, lo, hi)
    v = lo
    i, j = lo, hi+1

    loop do
      loop do
        i += 1
        break if i == hi or array[i] >= array[v]
      end

      loop do
        j -= 1
        break if j == lo or array[j] <= array[v]
      end

      break if i >= j
      swap(array, i, j)
    end

    swap(array, j, v)
    return j
  end

  def swap(array, i, j)
    t = array[i]; array[i] = array[j]; array[j] = t
  end

```

### Binary Search (solution)

While the Quick Select solution doesn't make good use of the properties the matrix has, I browsed the discussion to see this solution. To be honest, it's kind of new to me. I put some effort on it to learn about the idea.

```ruby
  # Binary Search on values - O(logN n logn) where n is the rows count and N is the largest element
  def kth_smallest(matrix, k)
    lo, hi = matrix[0][0], matrix[-1][-1]

    p = ->(x) {
      count = 0
      matrix.each do |row|
        # b-searching (equals: count += row.count {|num| num <= x})
        count += ( (0..row.count-1).bsearch{|i| row[i] > x } or row.count )
      end

      count >= k
    }

    while lo < hi
      mid = (lo+hi)/2

      if p[mid]
        hi = mid
      else
        lo = mid + 1
      end
    end

    return lo
  end
```

### Binary Search (notes)

I happened to read the article [Binary Search - topcoder](https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/), which really helped me get a better understanding about Binary Search. So I made some notes here:

#### What I know before
![0_1480565606773_upload-6a3c67a2-7025-43c8-a323-5445cd827d4c](/uploads/files/1480565611163-upload-6a3c67a2-7025-43c8-a323-5445cd827d4c.png) 

#### Search Space

Binary search maintains a contiguous subsequence of the starting sequence where the target value is surely located. This is called the **search space**. The search space is initially the entire sequence. At each step, the algorithm compares the median value in the search space to the target value. Based on the comparison and because the sequence is sorted, it can then eliminate half of the search space.

#### Beyond arrays: the discrete binary search

A sequence (array) is really just a function which associates integers (indices) with the corresponding values. However, there is no reason to restrict our usage of binary search to tangible sequences. In fact, we can use the same algorithm described above on any monotonic function f whose domain is the set of integers. The only difference is that we replace an array lookup with a function evaluation: we are now looking for some x such that f(x) is equal to the target value.

![0_1480565648520_upload-bfdd4f36-1165-4a4f-90df-f8aa0b4e782e](/uploads/files/1480565648725-upload-bfdd4f36-1165-4a4f-90df-f8aa0b4e782e.png) 

#### Taking it further: the main theorem

Binary search can be used **if and only if for all x in S, p(x) implies p(y) for all y > x**.

![0_1480565671955_upload-dda6d146-b78b-4861-98dd-594b45b2628e](/uploads/files/1480565672118-upload-dda6d146-b78b-4861-98dd-594b45b2628e.png) 

These two parts are most often interleaved: when we think a problem can be solved by binary search, we aim to **design the predicate so that it satisfies the condition in the main theorem.**

#### Implementing the discrete algorithm

The idea is **always making sure the search space contains what you aim to find**. (when you adjust lo and hi)

Find the first `x` for which `p(x)` is true:

![0_1480565728997_upload-fcfae7e6-b2be-4da2-85a4-89798f52b1ba](/uploads/files/1480565730107-upload-fcfae7e6-b2be-4da2-85a4-89798f52b1ba.png) 

The two crucial lines are `hi = mid` and `lo = mid+1`. When `p(mid)` is true, we can discard the second half of the search space, since the predicate is true for all elements in it (by the main theorem). However, we can not discard `mid` itself, since it may well be the first element for which `p` is true. This is why moving the upper bound to mid is as aggressive as we can do without introducing bugs.
In a similar vein, if `p(mid)` is false, we can discard the first half of the search space, but this time including `mid`. `p(mid)` is false so we don\u2019t need it in our search space. This effectively means we can move the lower bound to `mid+1`.

*Q. Why use `lo < hi` rather than `lo <= hi`?*

Because the `hi = mid` when `p(mid)` is true. Think of the situation when `lo == hi`, it would be lost in the loop.

Find the last `x` for which `p(x)` is false:

![0_1480565748645_upload-ef26dc31-1529-4c33-9cb6-6339b0cbeb3a](/uploads/files/1480565749648-upload-ef26dc31-1529-4c33-9cb6-6339b0cbeb3a.png) 

The bug is the code would be lost in loop when

![0_1480565766425_upload-cf312d3a-75bf-4f3a-8754-07248338b1ce](/uploads/files/1480565766615-upload-cf312d3a-75bf-4f3a-8754-07248338b1ce.png) 

Why?

*Q. What does `mid = lo + (hi-lo)/2` mean?*

The answer is it always round down. So to fix the bug, we would use `mid = lo + (hi-lo+1)/2` to round up.

![0_1480565787293_upload-8b103094-76fc-4d75-8ee3-9c03dfe9c1f5](/uploads/files/1480565787443-upload-8b103094-76fc-4d75-8ee3-9c03dfe9c1f5.png) 

*Q. Why don\u2019t we just use `mid = (lo+hi)/2` instead?*

This is to avoid another potential rounding bug: when `lo+hi` would be negative, it would start rounding towards the higher bound.

![0_1480565806172_upload-dfe77566-7797-4adf-ba82-45adf207f3e2](/uploads/files/1480565806362-upload-dfe77566-7797-4adf-ba82-45adf207f3e2.png) 


The takeaway of these question: **always check on two-element set**.

#### Conclusion

- **Design a predicate** which can be efficiently evaluated and so that binary search can be applied
- Decide on what you\u2019re looking for and code so that **make sure the search space always contains that** (if it exists)
- If the search space consists only of integers, **test your algorithm on a two-element set** to be sure it doesn\u2019t lock up
- **Verify that the lower and upper bounds** are not overly constrained: it\u2019s usually better to relax them as long as it doesn\u2019t break the predicate

#### What I know after

- Design the predict if I\u2019m about to use Binary Search.
- When adjusting `lo` and `hi`, always make sure the Search Space contains the target (if exists)
- Think about two-element situation, and adjust the loop condition, like whether is `lo < hi` or `lo <= hi`.