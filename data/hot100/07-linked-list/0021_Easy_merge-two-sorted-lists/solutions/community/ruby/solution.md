# Ruby beats 80%+ with explanation / recursion

**Author:** kenhufford
**Votes:** 13
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists/solutions/618937/](https://leetcode.com/problems/merge-two-sorted-lists/solutions/618937/)

---

1. So if we think about this problem recursively, at each step, we can compare the fronts of the lists and figure out which should be in front.
2. We then know that whatever comes after that front node, is the rest of the list merged, so it's time for our recursive call. 
3. Each time, we append the call to end of that point and return that point, connecting to the previous
4. The base case is for when we eventually run out of comparisons

```
def merge_two_lists(l1, l2)
    return l2 if l1.nil? 
    return l1 if l2.nil?
    if l1.val < l2.val
        l1.next = merge_two_lists(l1.next, l2)
        return l1
    else
        l2.next = merge_two_lists(l1, l2.next)
        return l2
    end
end
```