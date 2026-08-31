# Swift sorted array implementation.

**Author:** blest
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/3633839/](https://leetcode.com/problems/design-a-food-rating-system/solutions/3633839/)

---

# Swift: Two Maps
```
struct FoodRating: Comparable {
    let name: String
    let rating: Int

    static func < (lhs: Self, rhs: Self) -> Bool {
        (lhs.rating, lhs.name) < (rhs.rating, rhs.name)
    }

    static func == (lhs: Self, rhs: Self) -> Bool {
        (lhs.rating, lhs.name) == (rhs.rating, rhs.name)
    }
}

class FoodRatings {
    var foodRating: [String: SortedArray<FoodRating>]
    var foodStat: [String: (String, Int)]
    init(_ foods: [String], _ cuisines: [String], _ ratings: [Int]) {
        foodRating = [:]
        foodStat = [:]
        for (cuisine, (food, rating)) in zip(cuisines, zip(foods, ratings)) {
            foodRating[cuisine, default: SortedArray()].insert(FoodRating(name: food, rating: -rating))
            foodStat[food] = (cuisine, -rating)
        }
    }
    
    func changeRating(_ food: String, _ newRating: Int) {
        let (cuisine, rating) = foodStat[food]!
        foodStat[food] = (cuisine, -newRating)
        foodRating[cuisine]!.remove(FoodRating(name: food, rating: rating))
        foodRating[cuisine]!.insert(FoodRating(name: food, rating: -newRating))
    }
    
    func highestRated(_ cuisine: String) -> String {
        foodRating[cuisine]!.min()!.name
    }
}

struct SortedArray<T: Comparable> {
    private var arr: [T]
    var count: Int {
        arr.count
    }
    init(_ arr: [T]? = []) {
        self.arr = []
        for ele in arr ?? [] {
            self.insert(ele)
        }
    }
    
    mutating func insert(_ element: T) {
        let i = bisectRight(element)
        arr.insert(element, at: i)
    }
    
    mutating func remove(_ value: T) {
        let i = bisectRight(value) - 1
        arr.remove(at: i)
    }
    
    private func bisectRight(_ target: T) -> Int {
        var (lo, hi) = (0, count)
        while lo < hi {
            let mid = lo + (hi - lo) / 2
            if arr[mid] <= target {
                lo = mid + 1
            } else {
                hi = mid
            }
        }
        return lo
    }
    
    func min() -> T? {
        arr.min()
    }
}
```