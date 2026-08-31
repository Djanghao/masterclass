# with minimal use of in build functions

**Author:** Milan_Mundhava
**Votes:** 0
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/4900497/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/4900497/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> filterRestaurants(List<List<int>> restaurants, int veganFriendly, int maxPrice, int maxDistance) {
    
     List<int> filter =[];
    List<List<int>> filterdwithrating =[];


    for(int i=0;i<restaurants.length;i++){
        var id=restaurants[i][0];
        var rating=restaurants[i][1];
        var isvegen=restaurants[i][2];
        var price=restaurants[i][3];
        var distance=restaurants[i][4];

        if(veganFriendly<=isvegen){
          if(price<=maxPrice){
            
            if(distance<=maxDistance){

              filterdwithrating.add([id,rating]);
            }
            
          }

          
        }
        
      
      
      }
      filterdwithrating.sort((a, b) {
        if (b[1] != a[1]) {
          // If ratings are different, sort by rating in descending order
          return b[1].compareTo(a[1]);
        } else {
          // If ratings are the same, sort by ID in ascending order
          return b[0].compareTo(a[0]);
        }
    });


      
       for(int i=0;i<filterdwithrating.length;i++)
         {
          filter.add(filterdwithrating[i][0]);
        }
      
      return filter;

  }
}
```