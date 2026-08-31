# Ruby solution with O(N) space and O(N) time complexity (no sorting)

**Author:** crgandhi
**Votes:** 1
**Link:** [https://leetcode.com/problems/distant-barcodes/solutions/896519/](https://leetcode.com/problems/distant-barcodes/solutions/896519/)

---

Idea is to capture the number with max occurrence while building hash of numbers with occurrence count. Place that number with gaps and then use remaining numbers to fill gaps.

```
def rearrange_barcodes(barcodes)
  result = Array.new(barcodes.length)
  i = 0
  max_num = nil
  max_count = 0
  
  barcodes_hash = barcodes.inject(Hash.new(0)) do |memo, b| 
    memo[b] += 1
    
    if memo[b] > max_count
      max_num = b
      max_count = memo[b]
    end  
    
    memo
  end
  
  barcodes_hash[max_num].times do
    result[i] = max_num
    i += 2
    i = 1 if i >= barcodes.length
  end  
  
  barcodes_hash.delete(max_num)
  
  barcodes_hash.each do |k, v|
    v.times do
      result[i] = k
      i += 2
      i = 1 if i >= barcodes.length
    end
  end
  
  result
end
```

Space Complexity: O(N) to store result
Time Complexity: O(N) to iterate over each element while building hash