# [Rust] 3 idiomatic solutions explained: sort, heap and quickselect.

**Author:** marccarre
**Votes:** 5
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/660092/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/660092/)

---

#### 1. Sorting

This solution is the simplest, but the most expensive with a complexity of `O(n.log(n) + k)`.
N.B.: `distance` doesn't need to be the Euclidian distance per-se and use `sqrt`, since the `sqrt` function is monotone and, therefore, wouldn't change the ordering.

```rust
const X: usize = 0;
const Y: usize = 1;

impl Solution {
    pub fn k_closest(mut points: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
        let k = k as usize; // Thanks Leetcode -_-
        let distance = |p: &Vec<i32>| p[X] * p[X] + p[Y] * p[Y];
        points.sort_by(|p1, p2| distance(p1).cmp(&distance(p2)));
        points[..k].to_vec()
    }
}
```

##### Performance

> Runtime: 40 ms, faster than 44.83% of Rust online submissions for K Closest Points to Origin.
> Memory Usage: 3 MB, less than 100.00% of Rust online submissions for K Closest Points to Origin.

#### 2. Heap

Another approach is to keep adding items to a max heap capped at size `k`, removing the largest item every time the heap is "full", and returning the resulting content as a vector. This allows us reduce the complexity to be `O(n.log(k) + k)`.

However, a `Point` struct and a fair bit of conversions and boilerplate is required to have an idiomatic solution.
N.B.: Depending on how idiomatic you want your solution to be, some of that boilerplate can be replaced by explicit conversions.

```rust
use std::iter::FromIterator;
use std::cmp::Ordering;
use std::collections::BinaryHeap;
use std::convert::From;

impl Solution {
    pub fn k_closest(points: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
        let k = k as usize; // Thanks Leetcode -_-
        let mut heap = BinaryHeap::with_capacity(k + 1);
        for point in points.iter() {
            heap.push(point.into()); // Enabled by: From<&Vec<i32>> for Point
            if heap.len() == k + 1 {
                heap.pop(); // Remove the point with largest distance to origin. Enabled by: Ord for Point
            } 
        }
        heap.into_sorted_vec().iter().collect::<Vec<Vec<i32>>>() // Enabled by: FromIterator
    }
}

#[derive(Eq, PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

impl Point {
    fn distance(&self) -> i32 {
        self.x * self.x + self.y * self.y
    }    
}

impl Ord for Point {
    fn cmp(&self, other: &Point) -> Ordering {
        self.distance().cmp(&other.distance())
    }
}

impl PartialOrd for Point {
    fn partial_cmp(&self, other: &Point) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

const X: usize = 0;
const Y: usize = 1;

impl From<&Vec<i32>> for Point {
    // Converts from a &Vec<i32> to a Point, which lets us call vec.into() when constructing the heap.
    fn from(point: &Vec<i32>) -> Self {
        Point{ x: point[X], y: point[Y] }
    }
}

impl From<&Point> for Vec<i32> {
    // Converts from a &Point to a Vec<i32>, which lets us call point.into() when converting from iterator of points into an iterator of Vec<i32>.
    fn from(point: &Point) -> Self {
        vec![point.x, point.y]
    }
}

impl<'a> FromIterator<&'a Point> for Vec<Vec<i32>> {
    fn from_iter<I: IntoIterator<Item=&'a Point>>(iter: I) -> Self {
        let mut points = Vec::new();
        for point in iter {
            points.push(point.into()); // Enabled by: From<&Point> for Vec<i32>
        }
        points
    }
}
```

##### Performance

> Runtime: 36 ms, faster than 82.76% of Rust online submissions for K Closest Points to Origin.
> Memory Usage: 3 MB, less than 100.00% of Rust online submissions for K Closest Points to Origin.

#### 3. QuickSelect

Another solution is to implement the [QuickSelect](https://en.wikipedia.org/wiki/Quickselect) algorithm, which, in the average case, should give us `O(n + k)`:

```rust
impl Solution {
    pub fn k_closest(mut points: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
        let k = k as usize; // Thanks Leetcode -_-
        let (mut lo, mut hi) = (0, points.len() - 1);
        while lo <= hi {
            let pivot = partition(&mut points, lo, hi);
            if pivot < k {
                lo = pivot + 1;
            } else if pivot > k {
                hi = pivot - 1;
            } else {
                break;
            }
        }
        points[..k].to_vec()
    }
}

const X: usize = 0;
const Y: usize = 1;

fn distance(point: &Vec<i32>) -> i32 {
    point[X] * point[X] + point[Y] * point[Y]
}

fn partition(points: &mut Vec<Vec<i32>>, mut lo: usize, mut hi: usize) -> usize {
    // Approach: Hoare partitioning.
    let pivot = lo;
    while lo < hi {
        while lo < hi && distance(&points[pivot]) <= distance(&points[hi]) {
            hi -= 1;
        }
        while lo < hi && distance(&points[lo]) <= distance(&points[pivot]) {
            lo += 1;
        }
        points.swap(lo, hi);
    }
    points.swap(lo, pivot);
    lo
}
```

An alternative partitioning is the following one:
```rust
fn partition(points: &mut Vec<Vec<i32>>, mut lo: usize, mut hi: usize) -> usize {
    // Approach: Lomuto partitioning.
    // Partition points so that we end up with:
    //   lo            l        r  hi
    //   [ point <=, pivot, < point ]
    //
    // The pivot value can be chosen randomly in [lo, hi],
    // but here we just pick points[hi] for convenience.
    let mut l = lo;
    for r in lo..hi {
        if distance(&points[r]) <= distance(&points[hi]) {
            points.swap(l, r);
            l += 1;
        }
    }
    points.swap(l, hi);
    l
}
```



##### Performance

> Runtime: 24 ms, faster than 100.00% of Rust online submissions for K Closest Points to Origin.
> Memory Usage: 3 MB, less than 100.00% of Rust online submissions for K Closest Points to Origin.