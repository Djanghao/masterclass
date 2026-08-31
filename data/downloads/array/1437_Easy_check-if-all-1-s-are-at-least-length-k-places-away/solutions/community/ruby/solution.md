# 1-Line Ruby [[ NO LOOPS ]]

**Author:** code_report
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/609680/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/609680/)

---

```ruby
def k_length_apart(nums, k)
    return nums.all? { |x| x == 1 } || 
           nums.chunk_while{ |i, j| i == j }
               .select{ |x| x.first == 0 }
               .map( &:length )
               .min >= k
end
```
**One Liner:**
```
def k_length_apart(nums, k)
    return nums.all?{|x| x == 1} || nums.chunk_while{|i, j| i == j}.select{|x| x.[0] == 0}.map(&:length).min >= k
end
```