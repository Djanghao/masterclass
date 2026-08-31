# Ruby | Recursion 👯‍♀️

**Author:** fabianaramos
**Votes:** 0
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4480331/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4480331/)

---

```
def find_final_value(nums, original)
    if nums.include?(original)
        find_final_value(nums, original *= 2)
    else
        original
    end
end
```