# Verbosely commented Python, square root decomposition

**Author:** fortuna911
**Votes:** 43
**Link:** [https://leetcode.com/problems/design-most-recently-used-queue/solutions/3796593/](https://leetcode.com/problems/design-most-recently-used-queue/solutions/3796593/)

---

# Approach

1. Split up number range into buckets of size `sqrt(n)`.
    1.1. Each bucket is a double-ended queue so that we can append/pop from both sides of the bucket.
2. For fetching the k'th element:
    2.1. Find the bucket containing the k'th element
    2.2. Recreate the bucket without the element
    2.3. Append the k'th element to the last bucket (the tail)
    2.4. By removing the target number we created a gap in the bucket where k'th element was. For that bucket and each subsequent one move down an element so that all buckets (except the last) are full again.

# Complexity
- Time complexity:
    - init(n) : `O(n)`
    - fetch(k): `O(sqrt(n))`
        - To recreate a bucket without the target number; a bucket is of size `sqrt(n)`
        - Moving each element to fill the gap of the target number is `O(sqrt(n))` also because there are `O(sqrt(n))` buckets to iterate over.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
    - init(n): `O(n)` as we need to store all the numbers in the range.
    - fetch(k): `O(sqrt(n))` as we need to recreate the bucket without the target number, and buckets are of size `sqrt(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
from collections import deque

class MRUQueue:
    def __init__(self, n: int):
        # We're going to break up the numbers into buckets of size `sqrt(n)`.
        # Ceil because even if the bucket won't be full, we need the bucket
        # to store whatever numbers are there, e.g.
        # n = 8. We need 3 buckets: [1,2,3]  [4,5,6]  [7,8]
        # sqrt(8) is 2.82.. but we need 3 buckets.
        self.sqrt = ceil(math.sqrt(n))
        self.buckets = []

        nums = list(range(1, n + 1))
        # Break up the numbers into chunks of size sqrt(n).
        chunks = [nums[i: i + self.sqrt] for i in range(0, len(nums), self.sqrt)]

        for chunk in chunks:
            self.buckets.append(deque(chunk))

    def fetch(self, k: int) -> int:
        # Question says k is 1-indexed, but our buckets are 0-indexed.
        k -= 1
        bucket_idx = k // self.sqrt
        num_idx = k % self.sqrt  # Index in the bucket.
        bucket = self.buckets[bucket_idx]
        target_num = bucket[num_idx]

        # Remove the target number by re-creating the bucket without it.
        new_bucket = deque()
        for i, num in enumerate(bucket):
            if i != num_idx:
                new_bucket.append(num)
        self.buckets[bucket_idx] = new_bucket

        # Append the target num to the tail.
        self.buckets[-1].append(target_num)

        # For this bucket and each subsequent, move down 1 element
        # to fill the gap of the moved target number.
        for b in range(bucket_idx, len(self.buckets) - 1):
            left_bucket = self.buckets[b]
            right_bucket = self.buckets[b + 1]

            left_bucket.append(right_bucket.popleft())
        return target_num
```