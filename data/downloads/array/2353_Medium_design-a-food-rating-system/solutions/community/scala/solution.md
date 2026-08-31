# Scala solution

**Author:** danielOlivo
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/4417194/](https://leetcode.com/problems/design-a-food-rating-system/solutions/4417194/)

---

# Code
```
import scala.collection.mutable.ArrayBuffer
import scala.collection.mutable.Map
class FoodRatings(_food: Array[String], _cuisines: Array[String], _ratings: Array[Int]){

    def sorting(a1: (String, Int), a2: (String,Int)): Boolean = 
        if(a1._2 == a2._2) a1._1 < a2._1
        else a1._2 > a2._2

    val foodAndCuisines = 
        _food.zip(_cuisines).toMap

    val foodAndRatings = Map(
        _food.zip(_ratings).toIndexedSeq: _*)

    val cuisines = Map(
        (0 to _food.size - 1)
        .groupBy(_cuisines(_))
        .map{case (k,is) => (k,is.map(i => (_food(i),_ratings(i))).sortWith(sorting).toArray.to(ArrayBuffer))}
        .toIndexedSeq: _*)

    def changeRating(food: String, newRating: Int): Unit = {
        val cuisine = foodAndCuisines(food)
        val current = cuisines(cuisine)
        val idx = current.indexWhere{case (f,_) => f == food}
        current(idx) = (food, newRating)
        current.sortInPlaceWith(sorting)
    }

    def highestRated(cuisine: String): String = {
        cuisines(cuisine).head._1
    }
}
/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
```