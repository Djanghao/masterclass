# [GO] Easy | Greedy | 0ms

**Author:** adithyasashasai
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/4604890/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/4604890/)

---



# Code
```
func minimumBuckets(hamsters string) int {
    ans, i := 0, 0
    for i < len(hamsters) {
        if hamsters[i] == '.' {
            i += 1
            continue
        } else if  (i < len(hamsters)-1 && hamsters[i+1] == '.') {
            ans += 1
            i += 3
        } else if  (i > 0 && hamsters[i-1] == '.') {
            ans += 1
            i += 1
        } else {
            return -1
        }
    }
    return ans
}
```