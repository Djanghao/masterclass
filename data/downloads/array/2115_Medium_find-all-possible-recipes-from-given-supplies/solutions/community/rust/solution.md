# [Rust] topological sort with Cow::Borrowed, ~100ms

**Author:** night-crawler
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/2099892/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/2099892/)

---

`std::borrow::Cow` helps to avoid cloning the strings.

```rust
use std::borrow::Cow;
use std::collections::{HashMap, HashSet, VecDeque};

impl Solution {
    pub fn find_all_recipes(
        recipes: Vec<String>,
        ingredients: Vec<Vec<String>>,
        supplies: Vec<String>,
    ) -> Vec<String> {
        let (graph, mut indegree) = Self::build_graph(&recipes, &ingredients);
        let recipes = recipes.iter().collect::<HashSet<_>>();
        let supplies = supplies.into_iter().collect::<HashSet<_>>();

        let mut queue = supplies.iter().collect::<VecDeque<_>>();
        let mut result = vec![];

        while let Some(node) = queue.pop_front() {
            if recipes.contains(node) {
                result.push(node.clone());
            }

            for adjacent in graph.get(node).into_iter().flatten() {
                let node_indegree = indegree.get_mut(adjacent).unwrap();
                *node_indegree -= 1;
                if *node_indegree == 0 {
                    queue.push_back(adjacent);
                }
            }
        }

        result
    }

    fn build_graph<'a>(
        recipes: &'a [String],
        ingredients: &'a Vec<Vec<String>>,
    ) -> (HashMap<Cow<'a, String>, Vec<Cow<'a, String>>>, HashMap<Cow<'a, String>, i32>) {
        let mut graph = HashMap::new();
        let mut indegree = HashMap::new();
        for (recipe, recipe_ingredients) in recipes.iter().zip(ingredients) {
            for ingredient in recipe_ingredients {
                graph
                    .entry(Cow::Borrowed(ingredient))
                    .or_insert_with(|| Vec::with_capacity(recipe_ingredients.len()))
                    .push(Cow::Borrowed(recipe));
                *indegree.entry(Cow::Borrowed(recipe)).or_insert(0) += 1;
            }
        }

        (graph, indegree)
    }
}

```