# JavaScript solution using Array methods and destructuring

**Author:** mrchakooo
**Votes:** 8
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/872260/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/872260/)

---

For my solution, I use array methods and destructuring;
it's a valuable tool to make readable JavaScript code! Check it out here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

```
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    
    // Use array.filter() to gather filtered restaurants
    // I use array destructuring to label the values in the array for readibility
    //
    // Note that if veganFriendly is false, we don't care about the restaurant's vegan-friendliness
    // If veganFriendly is true, we do care about the restaurant's vegan-friendliness
    // This is a pattern of 'if p then q' in boolean algebra which is equivalent to 'not p or q'
    
    const filteredRestaurants = restaurants.filter(([id, rating, vegan, price, distance]) => 
        (!veganFriendly || vegan) && price <= maxPrice && distance <= maxDistance
    )
    
    // Use array.sort() to sort our array
    //
    // I could just reference directly to the array values in my return statement to make a single statement, 
    // but I think readability is more important than the increased memory and lines
    // 
    // Note that we're sorting from highest to lowest hence b - a instead of a - b
    
    filteredRestaurants.sort((a, b) => {
        const [aId, aRating]  = a
        const [bId, bRating] = b
        
        return aRating !== bRating ? bRating - aRating : bId - aId
    })
    
    // Use array.map() to create an array solely of sorted Ids
    // 
    // Note that I'm destructuring each restaurant array to 
    // its first value and returning it in an array
    
    return filteredRestaurants.map(([id]) => id)
};
```