# [Ruby] Simple Sliding Window, Easy to Understand + Comments

**Author:** sidank
**Votes:** 1
**Link:** [https://leetcode.com/problems/fruit-into-baskets/solutions/1616084/](https://leetcode.com/problems/fruit-into-baskets/solutions/1616084/)

---

```
# @param {Integer[]} fruits
# @return {Integer}
def total_fruit(fruits)
    #handle bad input
    return 0 if fruits.nil? || fruits.empty?
  
    #init max_fruits = 0, cur_fruits = 0, fruit_baskets hash (fruit = frequency)
    max_fruits, cur_fruits, fruit_baskets = 0, 0, Hash.new { |hash, key| hash[key] = 0 }
  
    #init left = 0
    left = 0
  
    #sliding window
    fruits.each do |right|     
      #increment current fruit frequency
      fruit_baskets[right] += 1
      
      #increment cur_fruits
      cur_fruits += 1
      
      #close window while invalid
      while fruit_baskets.length > 2
        #decrement cur_fruits
        cur_fruits -= 1
        
        #decrement frequency of left
        fruit_baskets[fruits[left]] -= 1
        
        #delete key is frequency is 0
        fruit_baskets.delete(fruits[left]) if fruit_baskets[fruits[left]] == 0
        
        #increment left
        left += 1
      end
      
      #update max_fruits if applicable
      max_fruits = [max_fruits, cur_fruits].max
    end
      
    #return max_fruits
    max_fruits
end
```