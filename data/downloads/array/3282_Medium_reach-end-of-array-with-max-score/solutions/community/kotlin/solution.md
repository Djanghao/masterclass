# Kotlin | 100% (because it's the only one) | explained

**Author:** JaninBV
**Votes:** 1
**Link:** [https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5753877/](https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5753877/)

---

This was an interesting problem!  Since this was a contest problem, I decided to try the brute force approach, which of course got time limit exceeded.  Then, I decided to try a greedy approach.  This worked amazingly well, but got time limit exceeded as well, end of contest.  Oh well!

I realized that the best solution would be, at each step, find the largest number in the array, and jump from there to the end, giving the greatest possible score.  Then, the end is set to where I just jumped from, where the maximum number was found.  When looking for the maximum number, never use the last number since you need to jump there.  The time-consuming part then was finding the maximum number from the start to the end at each step.  This still resulted in time-limit exceeded.

So, after the contest was over, and discussion with my husband, he was really close and failed to convert everything to long in the computation.  My solution has failed for the same reason.  I had the maximum as a long, but didn't convert (end - maxNdx) to long, and the number from the array to long.  When I fixed that, I got the right answer on the last failure, and then got time limit exceeded again.  This time, the offending problem had 100,000 numbers, all in incrementing values.  This meant that over and over again, having to search for the largest number.

My last attempt involved a priority queue.  No more searching, but have to initially got through all the numbers and put them in the priority queue.  Since I needed to know the index of the next largest number, I added Pairs, the first number being the number out of the nums array, the second is the index.  Now, all that remains to be done is take the items out of the priority queue one at a time, compute the addition to the score,  end is initialized to nums.lastIndex.  Each addition is the value times the distance of the jump.  We'll always jump the max to end.  Then, end is set to the second of the pair.  Any max values retrieved from the queue that occur after end are ignored.  And voila, no more time limit exceeded.  Here is the code:

```
fun findMaximumScore(nums: List<Int>): Long {

        var pq = PriorityQueue<Pair<Int, Int>>{ p1, p2 -> p2.first - p1.first }
        for (x in 0..nums.lastIndex) {
            pq.add(Pair<Int, Int>(nums[x], x))
        }
        var score = 0L
        var pair : Pair<Int, Int>
        var end = nums.lastIndex
        while (!pq.isEmpty()) {
            pair = pq.remove()
            if (pair.second < end) {
                score += pair.first.toLong() * (end - pair.second).toLong()
                end = pair.second
            }
        }
        return score
    }
```

Now, I have to say, my husband found a much cleverer algorithm.  No searching, no priority queue, simply go from first to last.  Here's the simple explanation:  set max to the first item in nums, and add it to the score.  Go to the second item.  If it is bigger than max, set max to that item and add it to the score.  And so on and so forth until getting to the second-to-last item, and there is your answer!!  What a beautiful and elegant solution!

Here is the new and improved version, and took half the time!
```
fun findMaximumScore(nums: List<Int>): Long {

        var score = 0L
        var max = 0
        for (x in 0..nums.lastIndex - 1) {
            max = Math.max(max, nums[x])
            score += max
        }
        return score
}
```

If you like my solution and/or explanation, please upvote.  Thank you for reading!