# Rust DoubleEndedIterator

**Author:** greczek
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/3869702/](https://leetcode.com/problems/watering-plants-ii/solutions/3869702/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn minimum_refill(plants: Vec<i32>, capacity_a: i32, capacity_b: i32) -> i32 {
        let mut a_cap = capacity_a;
        let mut b_cap = capacity_b;
        let mut plant_iter = plants.iter().peekable();
        let mut bob_plant = plant_iter.next_back();
        let mut refills = 0;

        while let Some(alice_plant) = plant_iter.next() {
            //alice needs a refill
            if alice_plant > &a_cap {
                a_cap = capacity_a;
                a_cap -= alice_plant;
                refills += 1;
            }
            //no refill needed
            else {a_cap -= alice_plant}
            
            if let Some(bob_plant) = bob_plant{
                //bob needs a refill
                if bob_plant > &b_cap{
                    b_cap = capacity_b;
                    b_cap -= bob_plant;
                    refills += 1;
                }
                //no refill needed
                else {b_cap -= bob_plant};
            }

            bob_plant = plant_iter.next_back();
            //check if alice and bob are at the same plant
            if(plant_iter.peek().is_none()){
                if let Some(plant) = bob_plant{
                    //if both alice and bob dont have enough water a final refill needed
                    if plant > &a_cap && plant >&b_cap {
                        refills += 1;
                    }
                }
            }
        }
        refills
    }
    
}
```