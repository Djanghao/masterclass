# Slow 1-liner to Fast solutions

**Author:** StefanPochmann
**Votes:** 579
**Link:** [https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/84550/](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/84550/)

---

Several solutions from naive to more elaborate. I found it helpful to visualize the input as an **m\xD7n matrix** of sums, for example for nums1=[1,7,11], and nums2=[2,4,6]:

          2   4   6
       +------------
     1 |  3   5   7
     7 |  9  11  13
    11 | 13  15  17

Of course the smallest pair overall is in the top left corner, the one with sum 3. We don't even need to look anywhere else. After including that pair in the output, the next-smaller pair must be the next on the right (sum=5) or the next below (sum=9). We can keep a "horizon" of possible candidates, implemented as a heap / priority-queue, and roughly speaking we'll grow from the top left corner towards the right/bottom. That's what my solution 5 does. Solution 4 is similar, not quite as efficient but a lot shorter and my favorite.
<br>

## **Solution 1: Brute Force** <sup>(accepted in 560 ms)</sup>

Just produce all pairs, sort them by sum, and return the first k.

    def kSmallestPairs(self, nums1, nums2, k):
        return sorted(itertools.product(nums1, nums2), key=sum)[:k]

## **Solution 2: Clean Brute Force** <sup>(accepted in 532 ms)</sup>

The above produces tuples and while the judge doesn't care, it's cleaner to make them lists as requested:

    def kSmallestPairs(self, nums1, nums2, k):
        return map(list, sorted(itertools.product(nums1, nums2), key=sum)[:k])

## **Solution 3: Less Brute Force** <sup>(accepted in 296 ms)</sup>

Still going through all pairs, but only with a generator and `heapq.nsmallest`, which uses a heap of size k. So this only takes O(k) extra memory and O(mn log k) time.

    def kSmallestPairs(self, nums1, nums2, k):
        return map(list, heapq.nsmallest(k, itertools.product(nums1, nums2), key=sum))

Or (accepted in 368 ms):

    def kSmallestPairs(self, nums1, nums2, k):
        return heapq.nsmallest(k, ([u, v] for u in nums1 for v in nums2), key=sum)

## **Solution 4: Efficient**  <sup>(accepted in 112 ms)</sup>

The brute force solutions computed the whole matrix (see visualization above). This solution doesn't. It turns each row into a generator of triples [u+v, u, v], only computing the next when asked for one. And then merges these generators with a heap. Takes O(m + k\\*log(m)) time and O(m) extra space.

    def kSmallestPairs(self, nums1, nums2, k):
        streams = map(lambda u: ([u+v, u, v] for v in nums2), nums1)
        stream = heapq.merge(*streams)
        return [suv[1:] for suv in itertools.islice(stream, k)]

## **Solution 5: More efficient**  <sup>(accepted in 104 ms)</sup>

The previous solution right away considered (the first pair of) all matrix rows (see visualization above). This one doesn't. It starts off only with the very first pair at the top-left corner of the matrix, and expands from there as needed. Whenever a pair is chosen into the output result, the next pair in the row gets added to the priority queue of current options. Also, if the chosen pair is the first one in its row, then the first pair in the next row is added to the queue.

Here's a visualization of a possible state:
```
# # # # # ? . .
# # # ? . . . .
# ? . . . . . .   "#" means pair already in the output
# ? . . . . . .   "?" means pair currently in the queue
# ? . . . . . .
? . . . . . . .
. . . . . . . .
```
As I mentioned in the comments, that could be further improved. Two of those `?` don't actually need to be in the queue yet. I'll leave that as an exercise for the reader :-)
```
    def kSmallestPairs(self, nums1, nums2, k):
        queue = []
        def push(i, j):
            if i < len(nums1) and j < len(nums2):
                heapq.heappush(queue, [nums1[i] + nums2[j], i, j])
        push(0, 0)
        pairs = []
        while queue and len(pairs) < k:
            _, i, j = heapq.heappop(queue)
            pairs.append([nums1[i], nums2[j]])
            push(i, j + 1)
            if j == 0:
                push(i + 1, 0)
        return pairs