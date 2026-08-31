# Ruby || Sorted Array || O(n*log(k))/O(k)

**Author:** alecn2002
**Votes:** 2
**Link:** [https://leetcode.com/problems/sliding-window-maximum/solutions/3918201/](https://leetcode.com/problems/sliding-window-maximum/solutions/3918201/)

---


# Code
```ruby
class Array
    def sorted(k)
        self[0...k].sort
    end

    def locate(v)
        bsearch_index {|w| w >= v}
    end

    def add_sorted!(v)
        insert(locate(v) || -1, v)
    end

    def del_sorted!(v)
        delete_at(locate(v))
    end

    def slide!(d, a)
        del_sorted!(d)
        add_sorted!(a)
        last
    end
end

def max_sliding_window(nums, k)
    return nums if k == 1
    a = nums.sorted(k)
    (nums.size - k).times.each_with_object([a.last]) {|i, r| r << a.slide!(nums[i], nums[i+k]) }
end

```