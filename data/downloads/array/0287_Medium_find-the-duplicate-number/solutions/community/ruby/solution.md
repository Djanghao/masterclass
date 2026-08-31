# O(nlogN) Binary Search and O(n) Circle Detect

**Author:** NikkiNicholas
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-the-duplicate-number/solutions/72929/](https://leetcode.com/problems/find-the-duplicate-number/solutions/72929/)

---

The special of this problem is its space limitation

> 1. You must not modify the array (assume the array is read only).
> 2. You must use only constant, O(1) extra space.

So, we could turn to Binary Search on values (not the index). I'm still learning this approach. What I could conclude is that:

Suppose there is an unsorted array with `n` elements, each element is less than `N`, how could we find the `k`th smallest element?

![0_1480497634375_upload-efc9a5d3-221d-4080-aea3-104af07cea6f](/uploads/files/1480497637382-upload-efc9a5d3-221d-4080-aea3-104af07cea6f.png) 

We could tweak it to fit finding the duplicate one:

```ruby
  def find_duplicate(nums)
    left, right = 1, nums.max

    while left < right
      mid = (left + right)/2

      count = nums.count{|x| x <= mid}

      if count > mid
        right = mid
      else
        left = mid + 1
      end
    end

    left
  end
```

P.S. There is also a `O(n)` solution. I'm working on it.

- - -

*Update*

Oh, I love this problem. The `O(n)` solution makes use of **Circle Detection** in a perfect way. I've checked several posts in the discussion. Here is my note:

First, we could transfer the problem into a linked list one, as it says

> Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive)

![0_1480513558264_upload-5ab3fbe9-fe5a-4fed-87d9-c8a6dc51a945](/uploads/files/1480513561443-upload-5ab3fbe9-fe5a-4fed-87d9-c8a6dc51a945.png)

Then I learnt [Floyd's cycle-finding algorithm](https://www.wikiwand.com/en/Cycle_detection): Two pointers, `slow` runs 1 step each time and `fast` runs 2, would definitely meet if there is a cycle.

Well, they might meet any position in the circle, how would we find the entry point?

![0_1480514894297_LeetCode_287_Circle_Detect.2.png](/uploads/files/1480514898071-leetcode_287_circle_detect.2.png) 

What we know

1. `fast` has run `a+b+c+b` steps, and `slow` with `a+b` steps
2. `fast` runs double steps of `slow`

We could conclude that

```
a+b+c+b = 2*(a+b)
# => a == c
```

It means, steps between start point to circle entry equals steps between meet point to circle entry. So when we find the meet point, we could set a new pointer at start position, which would meet `slow` at the entry point.

Code

```ruby
  def find_duplicate(nums)
    slow, fast = nums[0], nums[ nums[0] ]

    # A loop guaranteed
    while slow != fast
      slow = nums[slow]
      fast = nums[ nums[fast] ]
    end

    # Set a tag at start point. It would meet slow at the entry of circle.
    tag = 0
    while tag != slow
      tag  = nums[tag]
      slow = nums[slow]
    end

    return slow
  end

```

Reference:

+ [Linked List Cycle](https://siddontang.gitbooks.io/leetcode-solution/content/linked_list/linked_list_cycle.html)

+ [My easy understood solution with O(n) time and O(1) space without modifying the array. With clear explanation.](https://discuss.leetcode.com/topic/25913/my-easy-understood-solution-with-o-n-time-and-o-1-space-without-modifying-the-array-with-clear-explanation)