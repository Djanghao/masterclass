# Messy Rust Solution

**Author:** Imyr
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/5248893/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/5248893/)

---

Used Kahn's Algorithm to first topologically sort groups, then items within groups.
Not a good solution, neither by metrics (50 ms, 12.55 MB), nor by implementation.
I was too bent on not creating an adjacency matrix (because I implemented Kahn's Algorithm using two HashMaps, for inedges and outedges, respectively, for a previous question) and wasted too much time on this effort.
We need to learn to let go sometimes.
# Code
```
use std::collections::{HashMap, HashSet, VecDeque};
impl Solution {
    pub fn sort_items(n: i32, m: i32, group: Vec<i32>, before_items: Vec<Vec<i32>>) -> Vec<i32> {
        let (after, mut before) = before_items.into_iter().enumerate()
        .fold((HashMap::new(), HashMap::new()), |(mut a, mut b), (i, v)| {
            for x in v { 
                a.entry(x).or_insert(HashSet::new()).insert(i as i32);
                b.entry(i as i32).or_insert(HashSet::new()).insert(x);
            } (a, b)
        });
        let mut no_group_num = -1;
        let (mut group, which_group) = group.into_iter().enumerate().fold((HashMap::new(), HashMap::new()), |(mut g, mut wg), (i, x)| { 
            if x != -1 {
                g.entry(x).or_insert(HashSet::new()).insert(i as i32);
                wg.insert(i as i32, x);
            } else {
                g.entry(no_group_num).or_insert(HashSet::new()).insert(i as i32);
                wg.insert(i as i32, no_group_num);
                no_group_num -= 1;
            }
            (g, wg)
        });
        let (mut group_before, group_after) = group.keys().fold((HashMap::new(), HashMap::new()), |(mut a, mut b), x| {
            for i in group[&x].iter() {
                if let None = before.get(i) {}
                else {
                    for g in before[i].iter() {
                        if x != &which_group[g] { 
                            a.entry(x).or_insert(HashSet::new()).insert(which_group[g]);
                            b.entry(which_group[g]).or_insert(HashSet::new()).insert(x);
                        }
                    }
                }  
            } (a, b)
        });

        let mut sorted_groups = VecDeque::new();
        let mut no_group_before = (no_group_num+1..m).filter(|x| group_before.get(&x).is_none() && group.get(&x).is_some()).into_iter().collect::<VecDeque<i32>>();
        
        while let Some(gr) = no_group_before.pop_front() {
            sorted_groups.push_back(gr);
            if let None = group_after.get(&gr) { continue; }
            for &ga in group_after[&gr].iter() {
                group_before.get_mut(ga).unwrap().remove(&gr);
                if group_before[ga].is_empty() {
                    group_before.remove(ga);
                    no_group_before.push_back(*ga);
                }
            }
        }
        if group_before.len() != 0 { return vec![] };
        let mut result = vec![];
        while let Some(gr) = sorted_groups.pop_front() {
            let mut no_before = group[&gr].iter().filter(|x| before.get(x).is_none()).map(|&x| x).collect::<VecDeque<i32>>();
            while let Some(item) = no_before.pop_front() {
                result.push(item);
                if let None = after.get(&item) { continue; }
                for &a in after[&item].iter() {
                    before.get_mut(&a).unwrap().remove(&item);
                    if before[&a].is_empty() {
                        before.remove(&a);
                        if group[&gr].contains(&a) {
                            no_before.push_back(a);
                        }
                    }
                }
            }
        }
        if before.len() != 0 { vec![] } else { result }
    }   
}

```