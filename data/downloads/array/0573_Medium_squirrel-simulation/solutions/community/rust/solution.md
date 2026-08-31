# Rust Brutality

**Author:** sharp_ninja
**Votes:** 0
**Link:** [https://leetcode.com/problems/squirrel-simulation/solutions/1048512/](https://leetcode.com/problems/squirrel-simulation/solutions/1048512/)

---

```rust
use std;

#[derive(Debug)]
enum ItemTypes {
    Tree, Nut, Squirrel
}

#[derive(Debug)]
struct Item {
    pub x : i32,
    pub y : i32,
    pub moved : i32,
    pub item : ItemTypes
}

impl Item {
    pub fn new(i: ItemTypes, position: &Vec<i32> ) -> Item {
        Self {
            item: i,
            x: match position.get(0) { Some(i) => *i, _ => -1},
            y: match position.get(1) { Some(i) => *i, _ => -1},
            moved: 0,
        }
    }
}

impl Item {
    pub fn get_distance(&self, otherItem: &Item) -> i32 {
        let x = if otherItem.x > self.x { otherItem.x - self.x } else { self.x - otherItem.x };
        let y = if otherItem.y > self.y { otherItem.y - self.y } else { self.y - otherItem.y };
        (x + y)
    }
}

impl Item {
    pub fn moveItem(&mut self, otherItem: &Item) -> i32 {
        let dist = self.get_distance(otherItem);
        self.moved += dist;
        self.x = otherItem.x;
        self.y = otherItem.y;
        
        self.moved
    }
}


impl Solution {
    pub fn min_distance(height: i32, width: i32, tree: Vec<i32>, squirrel: Vec<i32>, nuts: Vec<Vec<i32>>) -> i32 {
        let mut distance : i32 = 0;
        let mut treeItem = Item::new(ItemTypes::Tree, &tree);
        let mut squirrelItem : Item;
        
        let mut shortest = -1;
        let mut nutItems = Vec::<Item>::new();
        
        for n in &nuts 
        {
            match n.get(0) 
            { 
                Some(x) if x >= &0 && x <= &height => 
                {
                    match n.get(1) 
                    { 
                        Some(y) if y >= &0 && y <= &width =>
                        {
                            let mut nutItem = Item::new(ItemTypes::Nut, &n);

                            nutItems.push(nutItem);
                        },
                        _ => println!("Out of bounds: {:#?} {}", n.get(1), &width)
                    }
                },
                _ => println!("Out of bounds: {:#?} {}", n.get(0), &height)
            }
        }        
        
        for item in &nutItems 
        {
            squirrelItem = Item::new(ItemTypes::Squirrel, &squirrel);
            
            squirrelItem.moveItem(&item);
            squirrelItem.moveItem(&treeItem);
            
            let items = nutItems.iter();
            
            for n in items {
                if n.x != item.x || n.y != item.y {
                    squirrelItem.moveItem(&n);
                    squirrelItem.moveItem(&treeItem);
                }
            }
            
            if shortest == -1 || squirrelItem.moved < shortest {
                shortest = squirrelItem.moved;
            }
            
            println!("shortest: {}, current: {:?}", shortest, squirrelItem);
        }
        
        shortest
    }
}
```