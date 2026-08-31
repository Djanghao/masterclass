# Simple Swift solution

**Author:** veki
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/103670/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/103670/)

---

Basic idea is first to map restaurants and indexes from the 1st list, and then map ones from the 2nd list and calculate index sums. After that find the ones with the minimum index sum.
```
func findRestaurant(_ list1: [String], _ list2: [String]) -> [String] {
	var list1Dictionary = [String: Int]()
	var list2Dictionary = [String: Int]()
	
	for (index, restaurant) in list1.enumerated() {
		list1Dictionary[restaurant] = index
	}
	
	var restaurants = [String: Int]()
	
	for (index, restaurant) in list2.enumerated() {
		list2Dictionary[restaurant] = index
		
		if let index2 = list1Dictionary[restaurant] {
			restaurants[restaurant] = abs(index2 + index)
		}
	}
	
	let minIndexSum = restaurants.values.min()
	
	return restaurants.filter({ $0.value == minIndexSum }).map({ $0.0 })
}
```