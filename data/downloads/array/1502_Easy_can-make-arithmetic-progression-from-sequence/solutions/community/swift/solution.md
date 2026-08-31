# Solutions explained: time: O(n log n),  O(4n), and O(2n), and space: O(n) and O(1). Swift examples.

**Author:** alextj
**Votes:** 3
**Link:** [https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/2413389/](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/2413389/)

---

I provide explanations for a few approaches here:

- Short and simple, uses sorting, time: `O(n log n)`, space: `O(n)`
- Faster, time: `O(n)` (does 4 loops over the input), space: `O(n)`
- Fastest, time: `O(n)` (does 2 loops over the input), space: `O(n)`
- Hypothetical in-place solution with time: `O(n)`, space: `O(1)`



## Approach 1: Using sort

Time: `O(n log n)`, space: `O(n)` or `O(1)`

This is the most straight forward approach and the one most answers here use. We sort the array in increasing order, and then iterate over it making sure the gap between each element is the same. This will have an overall `O(n log n)` time and `O(n)` space complexity. A variation of this approach could be doing the sorting in-place resulting in `O(1)` space complexity, but it's not possible in this LeetCode exercise, because it would require the `arr` paremter to be `inout`. But it is something you should bring up in an interview.

I would recommend this approach for any real-world application that's guaranteed to never have extremely large inputs, because of how simple and easy to understand it is (which is important!)

The exact implementation may vary slightly, but here's one possibility:

```
func canMakeArithmeticProgression(_ arr: [Int]) -> Bool {
    // 1. Place all elements in increasing order, like [1, 3, 5, 7, 9].
    //    Swift uses Timsort these days, which has time complexity of
    //    O(n log n) (best: O(n), worst: O(n log n)). This is what makes
    //    the overall solution have this time complexity.
    //    Also, since we are not sorting in-place, this allocates extra
    //    space that grows linearly with the size of the input. So the
    //    space complexity is O(n). Outside of LeetCode, you can always
    //    consider the option of having inout paremenr, and doing the
    //    sort in-place in case space is an issue.
    let arr = arr.sorted()

    // 2. Calculate the gap between the items. It should be the same
    //    across any two consecitive items in the sorted array.
    let gap = arr[1] - arr[0]

    // 3. Check that the gap is the same between all other consecutive
    //    items in the rest of the array.
    for i in 2..<arr.count {
        // If at any point the gap between two items is not the same
        // this means the array does not have arithmetic progression.
        if arr[i] - arr[i-1] != gap {
            return false
        }
    }

    // Since we checked all elements and the gap is the same everywhere,
    // that means the array has arithmetic progression.
    return true
}
```



## Approach 2: Using hash table and min/max

Time: `O(n)` with four loops, space: `O(n)`

In approach 1 the slowest part was sorting. If we could somehow solve the problem without sorting, we could improve the time complexity. Turns out we can!

It's a bit of a leap from the previous approach and not immediately obvious. The basic idea is that if we know the gap between the numbers, then for each number _n_ in the array we could check if there's another number that is (n+gap), except for the largest number.

### Okay, but how do we find if (n+gap) number is somewhere in the array?

Obviously since the array is not sorted, we'd need to look for (n+gap) number all over the place, and it would not be optimal. This is where hash table comes in. If we add all the numbers into a hash table, then we can look them up in `O(1)` time!

## How do we know what's the gap?

In progression [4, 7, 10, 13, 16, 19], if you take the difference between largest number `max` (19), and the smallest number `min` (4), and divide it by the number of gaps between the numbers (arr.count-1), then you get the gap size. So in this example it is: `(19 - 4) / (6 - 1) = 15 / 5 = 3`.

Additionally, if it turns out that the gap is not an round number, then it means that we can't have an arithmetic progression (at least not with integers), so we can exit early.

## The implementation

```
func canMakeArithmeticProgression(_ arr: [Int]) -> Bool {
    // 1. Find smallest and largest number in the array. Each operation has linear
    //    time complexity O(n).
    let min = arr.min()!
    let max = arr.max()!

    // 2. Copy all the numbers into a Set where we can look them up in constant time.
    //    Instantiating a Set from an array is a linear time operation O(n).
    let set = Set(arr)

    // 3. Figure out the gap. First, as we realized, if the gap is not a round number,
    //    then we can't have arithmetic progression with integers. Test that first, and
    //    exit early if needed.
    guard (max-min) % (arr.count-1) == 0 else { return false }
    let gap = (max-min)/(arr.count-1)

    // If gap is zero, it means all numbers are the same. That counts as arithmetic
    // progression, apparently, so we return true.
    guard gap > 0 else { return true }

    // 4. Now that we know the gap, min, max, and we have all our numbers quickly
    //    accessible in a Set, we can do the main logic of checking if each number n
    //    (except the last one) has another number that is (n + gap)
    var num = min
    while num < max {
        if !set.contains(num + gap) {
            // Couldn't find the next number in progression
            return false
        }
        // Move on to the next number
        num += gap
    }
    return true
}
```



## Approach 3: Same as before but slighly faster

Time: `O(n)` with two loops, space: `O(n)`

In the approach 2 we iterated over the array total four times. We could easily reduce this number of iterations to two. This has the same time complexity (`O(n)`), but it's slightly faster in practice. If for whatever reason you're crunching a lot of insanely large inputs, this could make a difference.

```
func canMakeArithmeticProgression(_ arr: [Int]) -> Bool {
    // Instead of finding min, max, and adding numbers to set in 3 separate
    // loops, we will just do it all in one loop! This is slighly faster than
    // the earlier approach.
    var min = Int.max, max = Int.min, set = Set<Int>()
    for num in arr {
        if num < min {
            min = num
        }
        if num > max {
            max = num
        }
        set.insert(num)
    }

    // And that's it. The rest of the code is the same.
    guard (max-min) % (arr.count-1) == 0 else { return false }
    let gap = (max-min)/(arr.count-1)
    guard gap > 0 else { return true }
    var num = min
    while num < max {
        if !set.contains(num + gap) {
            return false
        }
        num += gap
    }
    return true
}
```



## Approach 4: In-place without using standard library sort

Time: `O(n)`, space: `O(1)`

Let's say space became an issue and we don't want to use sort, because we want it to be as fast as possible. We're in luck, because we can do this without sort in constant space! Obviously we can't do it here in LeetCode, because the input parameter is not `inout`, but this is worth discussing in a real interview where you can propose to use `inout`.

If don't want to use any extra space, that means we can't use Set like we did in the two previous approaches. Then how can we verify if numbers have even gaps, since they are not sorted? What if we could efficiently put each number in the right place without using a generic sorting algorithm?

Since we know the gap between the numbers, then given random number from this array we can calculate it's sorted position. Let's think about how this works.

Here's an example `arr`:

```
[19, 10, 22,  4, 16, 13,  7]   // arr
  0   1   2   3   4   5   6    // array indices (just for convenience)
```

Let's take the first number: `19`. How do we know where is its sorted position? Since the gap in this progression is `3` (and we can calcualte that in linear time as in approaches 2 and 3), could we just divide `19` by `3` and get its position? `19/3 = 6.3333333`. Doesn't look like an array index. Oh, but our numbers don't start from 0, our smallest number is 4. So what we should do instead is `(19-4)/3 = 5`. So the sorted index of `19` is `5`!

Let's see if this is currect. Here's the same input sorted:

```
[ 4,  7, 10, 13, 16, 19, 22]   // arr sorted
  0   1   2   3   4   5   6    // array indices
```

Indeed `19` is at index `5`. Let's try some other numbers:

```
(4-4)/3 = 0
(7-4)/3 = 1
(10-4)/3 = 2
(13-4)/3 = 3
```

You get the idea.

So we can find the sorted index of any number in constant time. Great, what do we do with that? We can sort it! Here's our unsorted array again, and let's start with the first number `19`:

```
  0   1   2   3   4   5   6    // array indices (just for convenience)
[19, 10, 22,  4, 16, 13,  7]   // arr
  ^
```

Let's start with the first number `19`:
`(19-4)/3 = 5`, so we want to move `19` to index `5`. But there's `13`. Well, let's swap them:

```
arr.swapAt(0, 5)

  0   1   2   3   4   5   6
[13, 10, 22,  4, 16, 19,  7]
  ^
```

While we're here, let's see where `13` should go:
`(13-4)/3 = 3`. Let's swap `13` with whatever is in index `3`:

```
arr.swapAt(0, 3)

  0   1   2   3   4   5   6
[ 4, 10, 22, 13, 16, 19,  7]
  ^
```

Still at index `0`. Let's see where `4` should go:
`(4-4)/3 = 0`. So `4` is already in its sorted location. Let's not swap it anymore and move on to the next index.

```
  0   1   2   3   4   5   6
[ 4, 10, 22, 13, 16, 19,  7]
      ^
```

Now we're at index `1`. Let's see where `10` should be:
`(10-4)/3 = 2`. Let's swap it with whatever is in index `2`:

```
arr.swapAt(1, 2)
  0   1   2   3   4   5   6
[ 4, 22, 10, 13, 16, 19,  7]
      ^
```

Still at index `1`. Let's see where `22` should be:
`(22-4)/3 = 6`. Let's swap it with whatever is in index `6`:

```
arr.swapAt(1, 2)
  0   1   2   3   4   5   6
[ 4,  7, 10, 13, 16, 19, 22]
      ^
```

Still at index `1`. Let's see where `7` should be:
`(7-4)/3 = 1`. So `7` is already in its sorted location. Let's move on to the next index.

```
  0   1   2   3   4   5   6
[ 4,  7, 10, 13, 16, 19, 22]
          ^
```

`(10-4)/3 = 2` - `10` is already in its sorted location. Moving on...

```
  0   1   2   3   4   5   6
[ 4,  7, 10, 13, 16, 19, 22]
              ^
```

`(13-4)/3 = 3` - `13` is already in its sorted location. In fact, if we keep doing this, we will go through the rest of the array and see that all the numbers are in their sorted location.

This means we can now check the gaps between all numbers as we did in the approach 1.

Does this work on all inputs? You might have already realized, this can easily lead to infinite loop, if we have a duplicate in the input. For example:

```
  0   1   2   3    // array indices
[ 1,  3,  3,  7]   // arr
```

In the 1337 example above, we will be moving 3 from index 2 to index 1, and getting back the other 3. So we'll move it again, and again, and again. This applies to any two numbers that would be going into the same index. Here's a couple more examples:

```
[1, 5, 5, 7]
```

Same as `1337` above, except that here we'd be trying to move `5` at index `1` forward into index `2`, and that would create an infinite loop.

This same problem occurs also for numbers that aren't duplicates, but have their sorted index smaller than `i`, for example:

```
  0   1   2   3    // array indices
[ 1,  3,  4,  7]   // arr
```

Number `4`'s sorted index will be `(4-1)/2 = 1`, so it would be swapped with `3`, and then we'll look at `3` and its index is also `1`, and we have an infinite loop again.

So the general rule here is, whenever we're replacing a number, if the number to be replaced is alread in its sorted index, that means we don't have arithmetic progression and we should exit early with `false`.

### This is great! But what is the time complexity of this?

Good question! Let's see best and worst case scenarios for this.

The best case is when all the numbers are already in the correct places and we don't have to swap anything. We just iterate over the array and check that each number is indeed where it should be:

```
// We iterate over each number and confirm that it's where it should be: O(n)
[ 4,  7, 10, 13, 16, 19, 22]
```

What about the worst case? That's where we have to do as many number swaps as possible. What could be the maximum number of times we have to place a number into its sorted position? It is n times, because once a number is placed in its position, we will not swap it again, and because we have n numbers, that means we will have at most n swaps.

This might look like `O(n^2)` sorting, but it's not, it's `O(2n)`, or if we remove the constnts: `O(n)`. This is definitely better than using a more generic sorting algorithm, and we can do this because we can calculate the right index for each number.

So we can sort it in-place (space: `O(1)`) and do it fast (time: `O(n)`)!

### The implementation

This might not be the most elegant implementation of this apporach, but it will do:

```
func canMakeArithmeticProgression(_ arr: [Int]) -> Bool {
    // We need min, max, and gap, just like in the past.
    var min = Int.max, max = Int.min
    for num in arr {
        if num < min { min = num }
        if num > max { max = num }
    }
    guard (max-min) % (arr.count-1) == 0 else { return false }
    let gap = (max-min)/(arr.count-1)
    guard gap > 0 else { return true }

    // Now we're gonna do the in-place sort. This is a little fake,
    // because our LeetCode function signature doesn't have an inout
    // parameter, so we'll have to just go ahead and make a mutable
    // copy of it. Obviously, this is going to be O(n) space, but it's
    // just to demonstrate the logic that we'd use if we had the option
    // to use an inout parameter.
    var arr = arr

    for i in 0..<arr.count {
        // Calcualte where the number at current index should be.
        var sortedIdx = (arr[i] - min) / gap

        // If it's not where it should be, swap. And keep swapping numbers
        // until number at this index is the one that should be here.
        while sortedIdx != i {
            if (arr[sortedIdx] - min) / gap == sortedIdx {
              // The number we're trying to swap with is already in its sorted location.
              // So we can't have arithmetic progression.
              return false
            }
            arr.swapAt(i, sortedIdx)
            // Once swapped, calculate the sorted index for the new
            // number that we have here:
            sortedIdx = (arr[i] - min) / gap
        }
    }
    return true
}
```

While this last approach doesn't bring any benefit here in LeetCode, as we can't write into the input array, it is good to remember in case an interview asks you how would you do it in-place with optimal performance.
