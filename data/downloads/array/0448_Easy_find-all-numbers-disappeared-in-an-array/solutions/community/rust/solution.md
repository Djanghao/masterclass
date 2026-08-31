# Rust: 8 ms, 2.7 MB, three lines, functional programming, iterators, essay explanation...!

**Author:** rabirabirara
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/661425/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/661425/)

---

```
impl Solution {
    pub fn find_disappeared_numbers(nums: Vec<i32>) -> Vec<i32> {
        let mut seq: Vec<i32> = [0].repeat(nums.len());
        nums.into_iter().for_each(|num| seq[(num-1) as usize] += 1);
        seq.into_iter().enumerate().filter(|&(x, y)| y == 0).map(|(x, y)| (x+1) as i32).collect::<Vec<i32>>()
    }
}
```
If you test this code, you'll see that it brings 8 ms and 2.7 MB, which are 100% better than all Rust submissions (as scored).  But, if you format the code properly:

```
impl Solution {
    pub fn find_disappeared_numbers(nums: Vec<i32>) -> Vec<i32> {
        let mut seq: Vec<i32> = [0].repeat(nums.len());
        nums.into_iter()
            .for_each(|num|
				seq[(num - 1) as usize] += 1
			);
        seq.into_iter()
            .enumerate()
            .filter(|&(index, count)| count == 0)
            .map(|(index, _)| (index + 1) as i32)
            .collect::<Vec<i32>>()
    }
}
```
... this code will bring you 12 ms and 2.5 MB.

Anyway, the idea is to keep an array that works as a sort of HashMap for number sequences.  The index of the array is a number that appears in the sequence; the value at the index is the count of how many times it appears.
Since the array's numbers are in the range of its size, we create an array (integer hashmap) that holds the indexes of the numbers we are looking for.

We pass through the array with `for_each(|num| seq[num...] += 1)` to keep a count of nums.  Notice that since arrays are 0-indexed but the sequence is annoyingly 1-indexed, we must subtract 1, and that Rust must use usize to index, so we must cast.  You can use a simple for loop instead of `for_each()`, and indeed, the Rust docs say that it is more idiomatic; but we want to save lines and look cool with a functional style, so we do this.

Since we use `into_iter()` instead of `iter()`, we are moving values into iterators, and thus destroying what we don't need; we can also do this because the function passes in arguments by move (rather un-Rust-like).  I don't know if it reduces memory usage at all, but it at least minimizes it - on principle, don't pay for what you don't use.

(Note that in general, moving and modifying a vector [temporarily allocates new space](https://users.rust-lang.org/t/into-iter-from-vec-vec-memory-consumption/35778/4) for it.)

We take the hashmap/array and `enumerate()` it to be able to see at what index each value lies.  We `filter()` to find all elements where the count value is 0; then `map()` to acquire the index part of the tuple (destructure the tuple).  We then `collect()` into a vector of i32 and return the vector expression-wise.

-==-

In Rust, iterators are lazy (and their implementation is abstracted to the source code), so it becomes challenging to describe the complexity of the program.  At the very least, the time complexity of the solution is O(n).  Each iterator encapsulates a single pass over the collection, so we might conjecture that the complexity is O(2n), with one complete pass over the array `nums` of length `n`, and one worst-case pass over `seq` over `n-1` elements.

The memory usage is also strange, since it's unclear how memory use is calculated.  Does leetcode consider the peak of memory usage in the lifetime of the solution?  Or does it consider the memory still allocated by the very end of the scope?  Or does it average out memory usage over time, or something weird.  No one knows.

At the least, we know that we can allocate one extra array (as described in the problem).  So the space complexity of this problem varies alongside our axioms and knowledge of iterator allocation (which you can find yourself by googling, or looking at the source code, both of which I have done but not accepted):

If we do not count the result vector we allocated, we have O(1); 
If we count the result vector, we have O(n); 
If we discover that moving a vector into an iterator and collecting again into a vector does consume more memory, we have O(2n), which degrades to O(n);
If we discover that discovery, but not count the result vector, we might claim that the extra allocation caused by `iterator -> collect`  is another vector, thus giving us O(n).

Overall, the solution is probably O(n) | O(n), which is embarassing since there are in-place solutions out there.  But  none of them are as flashy or as elegant as just calling a few functions.  Realistically, you'd want to get it done quickly, simply (idiomatically/structurally), and readably; well, this is good enough, I suppose.  Plenty of linear algebra libraries use cache-ignorant matrix operations... welp!