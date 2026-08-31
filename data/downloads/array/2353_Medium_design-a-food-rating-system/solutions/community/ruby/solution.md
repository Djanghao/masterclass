# Easy to understand yet performant solution

**Author:** gen1321
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/4416284/](https://leetcode.com/problems/design-a-food-rating-system/solutions/4416284/)

---

# Intuition
Basicly we gonna have 3 maps for effieicent look ups

```
{"kimchi"=>{:rating=>9, :cuisine=>"korean"}, "miso"=>{:rating=>12, :cuisine=>"japanese"}, "sushi"=>{:rating=>8, :cuisine=>"japanese"}, "moussaka"=>{:rating=>15, :cuisine=>"greek"}, "ramen"=>{:rating=>14, :cuisine=>"japanese"}, "bulgogi"=>{:rating=>7, :cuisine=>"korean"}}


{"korean"=>{9=>["kimchi"], 7=>["bulgogi"]},
 "japanese"=>{12=>["miso"], 8=>["sushi"], 14=>["ramen"]},
 "greek"=>{15=>["moussaka"]}}
```

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class FoodRatings

=begin
    :type foods: String[]
    :type cuisines: String[]
    :type ratings: Integer[]
=end
  def initialize(foods, cuisines, ratings)
    @foods = {}
    @cusines = {}


    foods.each_with_index do |f,i|
      c = cuisines[i]
      r = ratings[i]

      @foods[f] = {rating: r, cuisine: c}
      @cusines[c] ||= {}
      @cusines[c][r] ||= []
      @cusines[c][r] << f
    end

    
  end


=begin
    :type food: String
    :type new_rating: Integer
    :rtype: Void
=end
    def change_rating(food, new_rating)
    
      old_rating = @foods[food][:rating]
      cuisine = @foods[food][:cuisine]

      @foods[food][:rating] = new_rating
     
      @cusines[cuisine][old_rating] = @cusines[cuisine][old_rating].reject{|f| f == food}
      @cusines[cuisine].delete(old_rating) if  @cusines[cuisine][old_rating].empty?
      @cusines[cuisine][new_rating] ||= []
      @cusines[cuisine][new_rating] << food
    
    end


=begin
    :type cuisine: String
    :rtype: String
=end
    def highest_rated(cuisine)
      m = @cusines[cuisine].keys.max
      @cusines[cuisine][m].min
    end
end

# Your FoodRatings object will be instantiated and called as such:
# obj = FoodRatings.new(foods, cuisines, ratings)
# obj.change_rating(food, new_rating)
# param_2 = obj.highest_rated(cuisine)

```