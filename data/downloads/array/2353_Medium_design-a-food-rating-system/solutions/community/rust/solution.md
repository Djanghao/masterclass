# Rust - HashMap and BTreeSet

**Author:** idiotleon
**Votes:** 6
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/2342927/](https://leetcode.com/problems/design-a-food-rating-system/solutions/2342927/)

---

Solution - [github](https://github.com/An7One/lc_soln_rust_leon/tree/main/src/leetcode/ood/lvl3/lc2353)

<b>Problem List</b>
#HashMap - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_data_structure/map/hashmap)
#TreeSet - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/set/treeset.txt)

```
use std::cmp::{Ord, Ordering, PartialEq, PartialOrd};
use std::collections::{BTreeSet, HashMap};

/// @author: Leon
/// https://leetcode.com/problems/design-a-food-rating-system/
/// Time Complexities:
///     `new()`:            O(`len_fs`)
///     `change_rating`:    O(lg(`len_fs`))
///     `highest_rated`:    O(1)
/// Space Complexity:       O(`len_fs`)
struct FoodRatings {
    cuisine_to_foods: HashMap<String, BTreeSet<Food>>,
    name_to_food: HashMap<String, Food>,
    name_to_cuisine: HashMap<String, String>,
}

impl FoodRatings {
    fn new(foods: Vec<String>, cuisines: Vec<String>, ratings: Vec<i32>) -> Self {
        let len_fs: usize = foods.len();
        let mut cuisine_to_foods: HashMap<String, BTreeSet<Food>> = HashMap::new();
        let mut name_to_food: HashMap<String, Food> = HashMap::new();
        let mut name_to_cuisine: HashMap<String, String> = HashMap::new();
        for idx in 0..len_fs {
            let name: &String = &foods[idx];
            let cuisine: &String = &cuisines[idx];
            let rating: i32 = ratings[idx];
            let food: Food = Food {
                name: name.to_owned(),
                rating,
            };
            cuisine_to_foods
                .entry(cuisine.to_owned())
                .or_default()
                .insert(food.clone());
            name_to_cuisine.insert(name.to_owned(), cuisine.to_owned());
            name_to_food.insert(name.to_owned(), food.clone());
        }
        FoodRatings {
            cuisine_to_foods,
            name_to_food,
            name_to_cuisine,
        }
    }

    fn change_rating(&mut self, name: String, new_rating: i32) {
        if let Some(food) = self.name_to_food.get_mut(&name) {
            if let Some(cuisine) = self.name_to_cuisine.get(&name) {
                if let Some(foods) = self.cuisine_to_foods.get_mut(cuisine) {
                    foods.remove(food);
                    food.rating = new_rating;
                    foods.insert(food.clone());
                }
            }
        }
    }

    fn highest_rated(&self, cuisine: String) -> String {
        if let Some(foods) = self.cuisine_to_foods.get(&cuisine) {
            if let Some(last) = foods.iter().last() {
                return last.name.to_owned();
            }
        }
        unreachable!();
    }
}

#[derive(Clone)]
struct Food {
    name: String,
    rating: i32,
}

impl Ord for Food {
    fn cmp(&self, other: &Self) -> Ordering {
        (self.rating, &other.name).cmp(&(other.rating, &self.name))
    }
}

impl PartialOrd for Food {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        if self.rating != other.rating {
            Some(self.rating.cmp(&other.rating))
        } else {
            Some(other.name.cmp(&self.name))
        }
    }
}

impl Eq for Food {}

impl PartialEq for Food {
    fn eq(&self, other: &Self) -> bool {
        self.name == other.name && self.rating == other.rating
    }
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn test_with_sample_input_1_should_return_expected() {
        let foods: Vec<String> = vec![
            "kimchi".to_owned(),
            "miso".to_owned(),
            "sushi".to_owned(),
            "moussaka".to_owned(),
            "ramen".to_owned(),
            "bulgogi".to_owned(),
        ];
        let cuisines: Vec<String> = vec![
            "korean".to_owned(),
            "japanese".to_owned(),
            "japanese".to_owned(),
            "greek".to_owned(),
            "japanese".to_owned(),
            "korean".to_owned(),
        ];
        let ratings: Vec<i32> = vec![9, 12, 8, 15, 14, 7];
        let mut food_ratings: FoodRatings = FoodRatings::new(foods, cuisines, ratings);
        let expected1: String = "kimchi".to_owned();
        let actual1: String = food_ratings.highest_rated("korean".to_owned());
        assert_eq!(expected1, actual1);
        let expected2: String = "ramen".to_owned();
        let actual2: String = food_ratings.highest_rated("japanese".to_owned());
        assert_eq!(expected2, actual2);
        food_ratings.change_rating("sushi".to_owned(), 16);
        let expected3: String = "sushi".to_owned();
        let actual3: String = food_ratings.highest_rated("japanese".to_owned());
        assert_eq!(expected3, actual3);
        food_ratings.change_rating("ramen".to_owned(), 16);
        let expected4: String = "ramen".to_owned();
        let actual4: String = food_ratings.highest_rated("japanese".to_owned());
        assert_eq!(expected4, actual4);
    }
}
```

To reply on vectors, with sorting them everytime one changing ratings, leads to TLE.

```
use std::cell::RefCell;
use std::cmp::{Ord, Ordering, PartialEq, PartialOrd};
use std::collections::HashMap;
use std::rc::Rc;

/// @author: Leon
/// https://leetcode.com/problems/design-a-food-rating-system/
/// Time Complexities:
///     `new()`:            O(`len_fs`)
///     `change_rating`:    O(lg(`len_fs`))
///     `highest_rated`:    O(1)
/// Space Complexity:       O(`len_fs`)
#[allow(dead_code)]
struct FoodRatings {
    cuisine_to_foods: HashMap<String, Vec<Rc<RefCell<Food>>>>,
    name_to_food: HashMap<String, Rc<RefCell<Food>>>,
    name_to_cuisine: HashMap<String, String>,
}

#[allow(dead_code)]
impl FoodRatings {
    fn new(foods: Vec<String>, cuisines: Vec<String>, ratings: Vec<i32>) -> Self {
        let len_fs: usize = foods.len();
        let mut cuisine_to_foods: HashMap<String, Vec<Rc<RefCell<Food>>>> = HashMap::new();
        let mut name_to_food: HashMap<String, Rc<RefCell<Food>>> = HashMap::new();
        let mut name_to_cuisine: HashMap<String, String> = HashMap::new();
        for idx in 0..len_fs {
            let name: &String = &foods[idx];
            let cuisine: &String = &cuisines[idx];
            let rating: i32 = ratings[idx];
            let food: Rc<RefCell<Food>> = Rc::new(RefCell::new(Food {
                name: name.to_owned(),
                rating,
            }));
            cuisine_to_foods
                .entry(cuisine.to_owned())
                .or_default()
                .push(food.clone());
            name_to_cuisine.insert(name.to_owned(), cuisine.to_owned());
            name_to_food.insert(name.to_owned(), food.clone());
        }
        for (_cuisine, foods) in cuisine_to_foods.iter_mut() {
            foods.sort();
        }
        FoodRatings {
            cuisine_to_foods,
            name_to_food,
            name_to_cuisine,
        }
    }

    fn change_rating(&mut self, name: String, new_rating: i32) {
        if let Some(food) = self.name_to_food.get(&name) {
            food.borrow_mut().rating = new_rating;
            if let Some(cuisine) = self.name_to_cuisine.get(&name) {
                if let Some(foods) = self.cuisine_to_foods.get_mut(cuisine) {
                    foods.sort();
                }
            }
        }
    }

    fn highest_rated(&self, cuisine: String) -> String {
        if let Some(foods) = self.cuisine_to_foods.get(&cuisine) {
            if let Some(last) = foods.last() {
                return last.borrow().name.to_owned();
            }
        }
        unreachable!();
    }
}

struct Food {
    name: String,
    rating: i32,
}

impl Ord for Food {
    fn cmp(&self, other: &Self) -> Ordering {
        (self.rating, &other.name).cmp(&(other.rating, &self.name))
    }
}

impl PartialOrd for Food {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        if self.rating != other.rating {
            Some(self.rating.cmp(&other.rating))
        } else {
            Some(other.name.cmp(&self.name))
        }
    }
}

impl Eq for Food {}

impl PartialEq for Food {
    fn eq(&self, other: &Self) -> bool {
        self.name == other.name && self.rating == other.rating
    }
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn test_with_sample_input_1_should_return_expected() {
        let foods: Vec<String> = vec![
            "kimchi".to_owned(),
            "miso".to_owned(),
            "sushi".to_owned(),
            "moussaka".to_owned(),
            "ramen".to_owned(),
            "bulgogi".to_owned(),
        ];
        let cuisines: Vec<String> = vec![
            "korean".to_owned(),
            "japanese".to_owned(),
            "japanese".to_owned(),
            "greek".to_owned(),
            "japanese".to_owned(),
            "korean".to_owned(),
        ];
        let ratings: Vec<i32> = vec![9, 12, 8, 15, 14, 7];
        let mut food_ratings: FoodRatings = FoodRatings::new(foods, cuisines, ratings);
        let expected1: String = "kimchi".to_owned();
        let actual1: String = food_ratings.highest_rated("korean".to_owned());
        assert_eq!(expected1, actual1);
        let expected2: String = "ramen".to_owned();
        let actual2: String = food_ratings.highest_rated("japanese".to_owned());
        assert_eq!(expected2, actual2);
        food_ratings.change_rating("sushi".to_owned(), 16);
        let expected3: String = "sushi".to_owned();
        let actual3: String = food_ratings.highest_rated("japanese".to_owned());
        assert_eq!(expected3, actual3);
        food_ratings.change_rating("ramen".to_owned(), 16);
        let expected4: String = "ramen".to_owned();
        let actual4: String = food_ratings.highest_rated("japanese".to_owned());
        assert_eq!(expected4, actual4);
    }
}
```

To reply on heaps, even though to leverage interior mutability is technically feasible, it is <b>not</b> recommended to do so, and the order of elements in the heap does <b>not</b> change.

This is a wrong solution.

```
use std::cell::RefCell;
use std::cmp::{Ord, Ordering, PartialEq, PartialOrd};
use std::collections::{BinaryHeap, HashMap};
use std::rc::Rc;

/// @author: Leon
/// https://leetcode.com/problems/design-a-food-rating-system/
/// Time Complexitiy:   N.A.
/// Space Complexity:   N.A.
/// Note:
/// this is a wrong solution.
/// Note - Lessons Learned:
/// https://stackoverflow.com/questions/58790368/updating-structs-inside-a-btreeset/58790477#58790477
/// https://stackoverflow.com/questions/53111721/can-i-modify-a-value-inside-a-binaryheap-that-isnt-the-top-value
#[allow(dead_code)]
struct FoodRatings {
    cuisine_to_foods: HashMap<String, BinaryHeap<Rc<RefCell<Food>>>>,
    name_to_food: HashMap<String, Rc<RefCell<Food>>>,
}

#[allow(dead_code)]
impl FoodRatings {
    fn new(foods: Vec<String>, cuisines: Vec<String>, ratings: Vec<i32>) -> Self {
        let len_fs: usize = foods.len();
        let mut cuisine_to_foods: HashMap<String, BinaryHeap<Rc<RefCell<Food>>>> = HashMap::new();
        let mut name_to_food: HashMap<String, Rc<RefCell<Food>>> = HashMap::new();
        for idx in 0..len_fs {
            let name: String = foods[idx].to_owned();
            let cuisine: String = cuisines[idx].to_owned();
            let rating: i32 = ratings[idx];
            let food: Rc<RefCell<Food>> = Rc::new(RefCell::new(Food {
                name: name.to_owned(),
                rating,
            }));
            cuisine_to_foods
                .entry(cuisine)
                .or_default()
                .push(food.clone());
            name_to_food.insert(name.to_owned(), food.clone());
        }
        FoodRatings {
            cuisine_to_foods,
            name_to_food,
        }
    }

    fn change_rating(&mut self, name: String, new_rating: i32) {
        if let Some(food) = self.name_to_food.get(&name) {
            food.clone().borrow_mut().rating = new_rating;
        }
    }

    fn highest_rated(&self, cuisine: String) -> String {
        if let Some(heap) = self.cuisine_to_foods.get(&cuisine) {
            if let Some(top) = heap.peek() {
                return top.clone().borrow().name.to_owned();
            }
        }
        unreachable!();
    }
}

struct Food {
    name: String,
    rating: i32,
}

impl Ord for Food {
    fn cmp(&self, other: &Self) -> Ordering {
        (self.rating, &self.name).cmp(&(other.rating, &other.name))
    }
}

impl PartialOrd for Food {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        if self.rating != other.rating {
            Some(self.rating.cmp(&other.rating))
        } else {
            Some(self.name.cmp(&other.name))
        }
    }
}

impl Eq for Food {}

impl PartialEq for Food {
    fn eq(&self, other: &Self) -> bool {
        self.name == other.name && self.rating == other.rating
    }
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    #[should_panic]
    fn test_with_sample_input_1_should_return_expected() {
        let foods: Vec<String> = vec![
            "kimchi".to_owned(),
            "miso".to_owned(),
            "sushi".to_owned(),
            "moussaka".to_owned(),
            "ramen".to_owned(),
            "bulgogi".to_owned(),
        ];
        let cuisines: Vec<String> = vec![
            "korean".to_owned(),
            "japanese".to_owned(),
            "japanese".to_owned(),
            "greek".to_owned(),
            "japanese".to_owned(),
            "korean".to_owned(),
        ];
        let ratings: Vec<i32> = vec![9, 12, 8, 15, 14, 7];
        let mut food_ratings: FoodRatings = FoodRatings::new(foods, cuisines, ratings);
        let expected1: String = "kimchi".to_owned();
        let actual1: String = food_ratings.highest_rated("korean".to_owned());
        assert_eq!(expected1, actual1);
        let expected2: String = "ramen".to_owned();
        let actual2: String = food_ratings.highest_rated("japanese".to_owned());
        assert_eq!(expected2, actual2);
        food_ratings.change_rating("sushi".to_owned(), 16);
        let expected3: String = "sushi".to_owned();
        let actual3: String = food_ratings.highest_rated("japanese".to_owned());
        assert_eq!(expected3, actual3);
        food_ratings.change_rating("ramen".to_owned(), 16);
        let expected4: String = "ramen".to_owned();
        let actual4: String = food_ratings.highest_rated("japanese".to_owned());
        assert_eq!(expected4, actual4);
    }
}
```