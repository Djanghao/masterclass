# Ruby solution with explanation and using hashes

**Author:** juliangallegos
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/253829/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/253829/)

---

```
def find_restaurant(list1, list2)
  interest = {}
  matches = {}
    
  # iterate through first list and set the index as the key value  
  
  list1.each_with_index do |restaurant, index|
    interest[restaurant] = index    
  end
    
  # since we only care about matches, if there is a match from the first list, we only add the index for where the match occurs  
  
  list2.each_with_index do |restaurant, index|
    if interest[restaurant]     
      matches[restaurant] = (interest[restaurant] + index)
    end    
  end  
    
  # this will give us the lowest sum of the matched indexes  
  
  lowest_index_sum = matches.values.min  
    
  # we now need to select the keys that match our lowest index sum  
  
  matches.keys.select {|match| lowest_index_sum == matches[match]}
end
```


- Use a hash to capture the indexes of the restaurants of the first list
- Create a second hash to check for the matches from the first list and the second list
  - if there is a match, increment the index value by the index value of the second list
- This will leave us a hash of matches and the sum of their indexes
  -  for example: 
  - `list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]`
  -  `list2 = ["KFC", "Shogun", "Burger King"]`
  - `{"KFC"=>3, "Shogun"=>1, "Burger King"=>4}`
- grab the key with the lowest index sum 
- select they keys from the matches that has the lowest index sum.