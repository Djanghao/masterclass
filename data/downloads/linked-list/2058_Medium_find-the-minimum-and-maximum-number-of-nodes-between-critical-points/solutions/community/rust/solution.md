# Rust, `successors`, Single Statement Functional Approach with Iterators

**Author:** dgrantpete
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5423309/](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5423309/)

---

We're leveraging the power of functional programming and combinators here pretty heavily to make the algorithm much more readable than some of the imperative approaches once you understand what the combinators do. Some of the less typical but very powerful usages of these include:
- Using `successors` to very concisely turn the linked list head into a normal iterator.
- Combining `scan` with `flatten` can be very powerful. If we have `scan` return an iterator of `Option<T>`, since `Option<T>` implements `IntoIterator` (with the `Some` variant returning a single value and the `None` variant being empty), we can use `flatten` to remove `None` variants and unwrap `Some` variants, filtering out any point where we return `None` in the `scan`. It allows us to essentially yield arbitrary values at any point during iteration *and* have access to shared state.
    - We use it to do pairwise comparisons in the first `scan`/`flatten`, skipping the first element since there is nothing to compare against yet.
    - We use it in a similar way on the second `scan`/`flatten`, except that we are checking if it is a peak or a valley ("critical point") using the pattern `(Greater, Less) | (Less, Greater)`.
    - Finally, we use it one last time to return an iterator that gives us the distances between each pair of critical points.

If any of you have any questions on how any of this works, please let me know in the comments!

# Code
```
use std::iter::successors;
use std::cmp::Ordering::{Less, Greater};

pub fn nodes_between_critical_points(head: Option<Box<ListNode>>) -> Vec<i32> {
    successors(head.as_deref(), |&node| node.next.as_deref())
        .map(|node| node.val)
        // Transform node values into a pairwise comparison between 2 values
        // a[0].cmp(a[1]), a[1].cmp(a[2]), ..., a[n - 1].cmp(a[n])
        // Note this shrinks the iterator size from n to n - 1
        .scan(None, |prev, current|
            Some(prev.replace(current).map(|prev| prev.cmp(&current)))
        )
        .flatten()
        // Checks for a peak or a valley using the patterns `(Greater, Less)` (valley) or `(Less, Greater)` (peak)
        // Because this is another pairwise function, it again shrinks the iterator size from n - 1 to n - 2
        // In other words, think of it as an iterator that covers every 3 consecutive elements.
        // This should make sense, since we need the context of both the left and right values from a point to know if it is a critical point.
        .scan(None, |prev, current| 
            Some(prev.replace(current).map(|prev| matches!((prev, current), (Greater, Less) | (Less, Greater))))
        )
        .flatten()
        // Transforms into an iterator of distances between each of these critical points by iteratively returning distances between current and previous points.
        // Will return an iterator of length `critical_points` - 1, since the first point doesn't yet have another point to compare to.
        .enumerate()
        .scan(None, |prev_point_index, (current_index, is_critical_point)| if is_critical_point {
            Some(prev_point_index.replace(current_index).map(|prev_point_index| current_index - prev_point_index))
        } else {
            Some(None)
        })
        .flatten()
        // Finally, take all of these distances between points and fold them into the minimum and maximum distances between points.
        // The max distance will always be the 2 points to the farthest left and farthest right, therefore we simply need the sum of all distances.
        // The min distance will be the smallest of any 2 gaps.
        .fold(None::<(usize, usize)>, |min_max, distance|
            Some(min_max.map_or((distance, distance), |(min, max)| (min.min(distance), max + distance)))
        )
        .map_or_else(|| vec![-1, -1], |(min, max)| vec![min as i32, max as i32])
}
```