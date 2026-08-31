# Ruby solution

**Author:** clara_morgeneyer
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-transformation/solutions/1042427/](https://leetcode.com/problems/array-transformation/solutions/1042427/)

---

```
# @param {Integer[]} arr
# @return {Integer[]}
def transform_array(arr)
    changed = true
    while changed
        changed = false
        new_arr = []
        arr.each_with_index do |item, counter|
            if counter == 0 || counter == (arr.length - 1 )
                new_arr[counter] = item
                counter += 1
                next
            end

            left_n = arr[counter - 1]
            right_n = arr[counter + 1]
            if arr[counter] < right_n && arr[counter] < left_n
                new_arr[counter] = arr[counter] + 1
                changed = true
            elsif arr[counter] > right_n && arr[counter] > left_n
                new_arr[counter] = arr[counter] - 1
                changed = true
            else
              new_arr[counter] = arr[counter]
            end
            counter += 1
        end
        arr = new_arr
    end
    arr
end
```