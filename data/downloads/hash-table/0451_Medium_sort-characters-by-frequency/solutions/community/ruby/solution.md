# Ruby Solution

**Author:** yalanin
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/4689621/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/4689621/)

---

```
# @param {String} s
# @return {String}
def frequency_sort(s)
    result = ''
    arr = s.split('').sort!
    h = Hash.new {|h, k| h[k] = ''}
    p1 = p2 = 0
    while(p1 < arr.size || p2 < arr.size)
        if arr[p1] == arr[p2]
            p2 += 1
        else
            size = p2 - p1
            h[size] += arr[p1...p2].join('')
            p1 = p2
        end
    end
    h.keys.sort.reverse.each {|key| result += h[key] }
    result
end
```