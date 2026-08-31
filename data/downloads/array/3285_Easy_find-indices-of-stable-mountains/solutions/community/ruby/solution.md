# Ruby Solution through Array

**Author:** rashmi_kumari_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/6000468/](https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/6000468/)

---


# Code
```ruby []
def stable_mountains(height, threshold)
    output = []
    for i in 1..(height.length())-1 do
        if height[i-1]> threshold
            output.push(i)
        end
    end
    return output
end
```