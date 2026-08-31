# Greedy

**Author:** votrubac
**Votes:** 111
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/1599341/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/1599341/)

---

When we see a house, we have to place a bucket. We should place the bucket on the right side - so that bucket can be (potentially) used by the next house.

- Continue if we already have a bucket on the left.
- Place a bucket on the right, if possible.
	- Place a bucket on the left, if we can.
		- We are unable to collect water, return -1. 


**C++**
```cpp
int minimumBuckets(string st) {
    for (int i = 0; i < st.size(); ++i) {
        if (st[i] == 'H') {
            if (i > 0 && st[i - 1] == 'B')
                continue;
            if (i < st.size() - 1 && st[i + 1] == '.')
                st[i + 1] = 'B';
            else if (i > 0 && st[i - 1] == '.')
                st[i - 1] = 'B';
            else
                return -1;
        }
    }
    return count(begin(st), end(st), 'B');
}
```