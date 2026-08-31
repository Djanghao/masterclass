# Trying to be the simplest O(n) explanation in Python

**Author:** jryzkns
**Votes:** 51
**Link:** [https://leetcode.com/problems/longest-well-performing-interval/solutions/1166155/](https://leetcode.com/problems/longest-well-performing-interval/solutions/1166155/)

---

## Preamble / Initial setup

Given our input array, lets start with identifying which days are the tiring ones and which aren't. If it is tiring, then we will have it be `+1`. If it isn't tiring, then it's a `-1`:
```py
>>> hours = [9,9,6,0,6,6,9] 
>>> tired = [1 if hour > 8 else -1 for hour in hours]
>>> tired
[1, 1, -1, -1, -1, -1, 1]
```
The idea in doing this is if you add all the numbers in a sub-array, you get a net tiredness value (we will call this ntv from here on forth):
```py
>>> tired[1:5]
[1, -1, -1, -1]
>>> sum(tired[1:5])
-2
```
A well performing interval (WPI) in this setup now means an interval `[a, b]` such that the ntv of this interval is positive (`sum(tired[a:b+1]) > 0`). Ideally we want to get ntv = 1, meaning we have maximized our tired days, and took enough non-tiring days to balance it out.

## A first stab to start the conversation (Brute Forcing)

The brute force solution would be to find every possible subinterval `[a, b]` and compute their sum, maximize the sum then get the length of the interval. However, the number of subintervals are in order of O(n^2) and each sum for that interval is O(n) for a total of O(n^3) time complexity. We can do much better than that. There are two optimizations that we can apply on top of this solution, and we will talk about these separately.

## Optimization 1: Prefix Sum

A [prefix sum](https://en.wikipedia.org/wiki/Prefix_sum) is basically an "integral" of the array that you are working with. Every element in a prefix sum is a sum of itself and the sum of everything that came before it (`prefix_sum_tired[i] = sum(tired[:i+1])`). You can compute a prefix sum in a single passthrough in O(n) time.
The reason why using a prefix sum is desirable is that a prefix sum allows you to sum over an interval in O(1) time: 
```py
# doesn't this look like the fundamental theorem of calculus II?
# https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus#Second_part
sum(tired[a:b+1]) == prefix_sum_tired[b] - prefix_sum_tired[a]
```
Using this method, you would apply prefix sum on the input first, before checking every interval: O(n) + O(n^2) = O(n^2). We have went from O(n^3) down to O(n^2). We can still do better!

## Optimization 2: Caching values in the Prefix Sum
Now that we have an understanding of the prefix sum, we can look at some properties that we can exploit. Suppose our prefix sum looks like this:
```py
prefix_sum_tired = [1,2,3,2,3,2,3,4]
```
We know that `prefix_sum_tired[7] - prefix_sum_tired[6] = 1`. However, we also know that `prefix_sum_tired[7] - prefix_sum_tired[4] = 1` and `prefix_sum_tired[7] - prefix_sum_tired[2] = 1`. This means that the ntv of `[7,6]`, `[7,4]`, and `[7,2]` are all the same. However, we definitely prefer `[7,2]` because that's the longest interval among the three. With the setup as is, we would need to scan backwards to find the earliest possible value of 3 in our prefix_sum, and that takes some work to do and scales O(n). This is where caching comes in.
We can cache the values in the prefix sum by setting up a map `prefix_sum_first_preimage` that maps ntv to the index of a day. Whenever we see an ntv for the first time, we want to add it to the map. If the ntv exists in the map already, then we don't touch it:
```py
prefix_sum_first_preimage = {}
# some other stuff that's not as relevant at the moment
if ntv not in prefix_sum_first_preimage:
	prefix_sum_first_preimage[ntv] = day_idx # suppose day_idx is the index of the current day in question
```
When we have this set up, then we can have something that looks like this: 
```py
day_idx = 6
ntv = 5
if ntv - 1 in prefix_sum_first_preimage:
	print(f"{day_idx - prefix_sum_first_preimage[ntv - 1]} is the longest WPI ending on {day_idx} with net 1")
```
We can now find the longest WPI given an end day in O(1) time as well.

## Piecing everything together

With all of the above knowledge, you probably noticed that we can construct the prefix sum on the fly and check for the longest WPI as we are going through the array instead of having to brute force everything. The final solution would look something like this:

```py
def longestWPI(hours):

    max_wpi, ntv, first_preimage = 0, 0, {}

    for day_idx, hrs_today in enumerate(hours):

        # check if today was a tiring day or not
        ntv += 1 if hrs_today > 8 else -1

        # if our net is positive (the net here is starting from first 
        # day), we just set the longest wpi to days that has passed
        if ntv > 0: max_wpi = day_idx + 1

        # if we haven't seen this ntv before, we store it
        if not ntv in first_preimage: first_preimage[ntv] = day_idx

        # if the ntv that is 1 less is seen before (for a net 1 ntv)
        # we compute the wpi from that and see if that's longer than
        # the longest we've seen so far
        if ntv - 1 in first_preimage:
            max_wpi = max(max_wpi, day_idx - first_preimage[ntv - 1])

    return max_wpi
```