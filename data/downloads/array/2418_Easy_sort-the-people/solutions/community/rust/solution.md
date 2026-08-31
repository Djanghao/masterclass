# [Rust] Manual quicksort to avoid heap allocations

**Author:** tiedyedvortex
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-the-people/solutions/5514281/](https://leetcode.com/problems/sort-the-people/solutions/5514281/)

---

# Intuition
Rust has a built-in `std::slice::sort_unstable` function, which efficiently sorts a slice (or Vector) in-place. However, this only works on heights; if we sort heights alone, we will break the synchronization between names and heights.

We could fix this by writing names and heights into a new vector of `(String, i32)`s, sorting that, and then iterating over it to extract the `String`s. However, this requires doing a heap allocation. We'd like to avoid this.

Instead, if we do a comparison sort on heights and make sure that we always mirror the same swaps on `names` as we do on `heights`, then when we're done `names` will be sorted properly, and we can just return it.

Since we know all of the values in heights are unique, we don't need a stable sort, so quicksort is probably ideal. 

# Approach
Implement a basic recursive quicksort algorithm, that reflects any swaps in both arrays.

# Complexity
- Time complexity: O(n log n) worst-case; each elements is swapped at most once per partition, and we partition log n times.

- Space complexity: O(1), we perform an in-place quicksort.

# Code
```
impl Solution {
    pub fn sort_people(mut names: Vec<String>, mut heights: Vec<i32>) -> Vec<String> {
        dual_quicksort(&mut names, &mut heights);
        names
    }
}

fn dual_quicksort(names: &mut [String], heights: &mut [i32]) {
    if names.len() < 2 {
        // An empty list, or a single element, is already sorted
        return;
    }

    // Take the last element as the pivot
    // We want all values where the height > pivot on the left
    let mut pivot = names.len() - 1;
    let mut check = 0;
    while check + 1 < pivot {
        if heights[check] < heights[pivot] {
            // check is out of place
            // Need to move pivot one to the left
            // And put check where pivot is right now
            heights.swap(check, pivot-1);
            heights.swap(pivot-1, pivot);
            names.swap(check, pivot-1);
            names.swap(pivot-1, pivot);
            pivot -= 1;
        } else {
            // check is properly sorted
            check += 1;
        }
    }
    // check + 1 = pivot here
    if heights[check] < heights[pivot] {
        // check is the last element and is out of place
        heights.swap(check, pivot);
        names.swap(check, pivot);
        pivot -= 1;
    }

    // both array are partitioned
    // Recurse to sort left and right
    dual_quicksort(&mut names[0..pivot], &mut heights[0..pivot]);
    dual_quicksort(&mut names[pivot+1..], &mut heights[pivot+1..]);
}
```