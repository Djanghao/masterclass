# DFS Approach and explanation using zombie apocalypse

**Author:** dvishal485
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/3196959/](https://leetcode.com/problems/number-of-provinces/solutions/3196959/)

---

# Intuition
Think of nothing but destruction of zombies living in cities. If there is an isolated city then send your army there and let them conquer the that city and the neighbouring cities. Assume there is no coming back from this war, so if you send an army to a place, they have to be sacrificed. So you will need a new army each time you see an isolated city or an isolated group of city.

# Approach
1. Find a city which still have zombies. (City with `is_destroyed == false`)
1. Send an army there (`army_required += 1`) and conquer it.
1. Conquer the neighbouring cities around this city your army is in (by doing a Depth First Search).
1. Destroy all these neighbouring cities at cost of that one single army.
1. Repeate this process till all cities are eventually destroyed.
1. Congratulations! The world is now a better place, all zombies have been destroyed at cost of `army_required`. Give them the respect they deserve.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```rust
impl Solution {
    pub fn find_circle_num(is_connected: Vec<Vec<i32>>) -> i32 {
        let mut is_destroyed = vec![false; is_connected.len()];
        let mut army_required = 0;
        for city in (0..is_connected.len()).rev() {
            if !is_destroyed[city] {
                army_required += 1;
                Self::destroy_city(city, &is_connected, &mut is_destroyed);
            }
        }
        army_required
    }

    fn destroy_city(city: usize, is_connected: &Vec<Vec<i32>>, is_destroyed: &mut Vec<bool>) {
        is_destroyed[city] = true;
        for (city_id, &connected) in is_connected[city].iter().enumerate() {
            if connected == 1 && !is_destroyed[city_id] {
                Self::destroy_city(city_id, is_connected, is_destroyed);
            }
        }
    }
}
```