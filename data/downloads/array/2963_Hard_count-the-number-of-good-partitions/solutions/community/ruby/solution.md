# Ruby O(N ln N)

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/5274586/](https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/5274586/)

---

# Intuition
Once we have all valid partitions with minimum length, we can start to combine the partitions. If we start from the left, we have:

- number of combinations for partitions[0..0] is 1 (as there's a single partition);
- for the number of combinations for partitions[0..1], we can combine partitions[1] with partitions[0] (1) OR leave them separeted (1). That means we have 2 combinations;
- for the number of combinations for partitions[0..2], we can combine partitions[2] with the combinations that partitions[0..1] have (2) OR leave them separated (2). That means we have 4 combinations
...
- for the partition N, we have 2^N combinations;

That means the problem is a simple as determining the valid partitions by merging intervals. Other Leetcode problems are very similar to that, but in summary:
- find the first and last position of each number;
- merge the intervals:
  - given intervals [a,b] and [c,d], if c <= b, the merged interval will be [a, max(b,d)]
  - if c > b, there's no overlap and we drop [a,b];
  - in our case, c == b does not exist, as we're extracting the intervals from the indexes of the nums array, that doesn't have repeated numbers;

Another important details is that we don't need to sort the intervals, as they are already sorted. That's because we extracted them in order from the array.

We only need to count those intervals instead of getting them, so that's what the code does.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N) - we iterate the array once to find the intervals (N), then we count the valid partitions (N in worst-case)

- Space complexity:
O(N) - we store at most N number in the positions hash;

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def number_of_good_partitions(nums)
    2 ** (count_valid_partitions(nums) - 1) % 1_000_000_007
end

def count_valid_partitions(nums)
   pos = {}
   nums.each.with_index do |n, idx|
     pos[n] ||= [idx, idx]
     pos[n][-1] = idx
   end 
   intervals = pos.values
   head = intervals.shift
   count = 0
   while intervals.length > 0
     if head[-1] > intervals[0][0]
        head[-1] = [intervals.shift[-1], head[-1]].max
     else
        count += 1
        head = intervals.shift
     end
   end
   count + 1
end
```