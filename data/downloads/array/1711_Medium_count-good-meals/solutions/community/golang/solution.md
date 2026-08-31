# [Go O(n)] Hashmap with math/bits help

**Author:** sdasia
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/5421589/](https://leetcode.com/problems/count-good-meals/solutions/5421589/)

---


I believe many explanation here has covered the basic idea of the solution using TwoSum and HashMap, so I\u2019ll write a little modification for said solution using `math/bits`. I know that some interviews might not let us using library, but hey we aren\u2019t in interview, so why don\u2019t I try?

### Let\u2019s define some rules first:

1. If there are $m$ number of 1 and $n$ number of 3 to create a sum of 4, there must be $m *  n$ possible combinations. *Except* for number that is paired by its own number, then the possible combination will be $(m * (m - 1)) / 2$
	- I will denote this as $f(m_{1}, n_{3})$
 1. Say the the current number is 7, then the possible of sum of good meals are 8, 16, 32, \u2026 2^21, with the possible pairs of 1, 9, 25, ... and so on.
	-  In the original solution we will find all the possible combination pair of 7 and add $sum(f(m, n_{[1,9\u2026]}))$ to `answer`. We can do this for every number in the array, then divided the result by 2 *because* we count both $f(m_{7}, n_{25})$ and $f(m_{25}, n_{7})$, when it's actually the same combination
	-  *But*, instead of counting every possible pair of 7, we will only count $f(m_{7}, n_{1})$ which will create the next bigger power of 2 (8 is the closest with 7). Why? If 25 exist in the array, the combination of $f(m_{25}, n_{7})$ will be counted in the process of finding the pair of 25 anyway.

3.  The special case: power of two number
	-  It can be paired by it\u2019s own number
	-  And it can be paired **with 0**

Where does the `math/bits` comes in? We'll use it to find the next power of 2. Back with our example number 7 (111), it has 3 bits, meaning the next power of 2 will have 4 bits with the first bit 1 and the rest 0 (1000)

Now that we\u2019ve covered the general rules, let\u2019s dive into the explanation more in the code

### Code
```go
import "math/bits"

func countPairs(deliciousness []int) int {
    // create frequency map
    countMap := make(map[int]int)
    for _, val := range deliciousness {
        countMap[val] += 1
    }

    total := int64(0)
    for key, _ := range countMap {
        // no need to process the 0 key, it will be processed
        // in the next line (the power of two case)
        if key == 0 {
            continue
        }

        // If the current N is a power of two, then bitwise
        // operation of (N and (N-1)) will equal to 0
        if (key & (key-1)) == 0 {
            if _, ok := countMap[0]; ok {
                total = total + int64(countMap[key] * countMap[0])
            }
        }

        // mask is the next bigger power of 2 after key, so
        // we'll shift 1 as many as the bit length of key
        mask := (1 << bits.Len(uint(key)))
        pair := mask - key
        if _, ok := countMap[pair]; !ok {
            continue
        }

        // if the pair is its own self use the (m * (m-1))/2
        // else use (m * n)
        if key == pair {
            total = total + int64(countMap[key] * (countMap[pair] - 1))/2
        } else {
            total = total + int64(countMap[key] * (countMap[pair]))
        }
        
    }

    // remember the modulo
    return int(total % int64(1e9+ 7))
}
```

### Complexity
**Time complexity**: $O(n)$ for creating the hashmap and $O(n)$ for counting the combinations, so end result? $O(n)$
**Space Complexity**: $O(n)$ for hashmap

p.s. Please correct me if there's something I miss or any weird math notation above bcs I honestly have forgotten many of it. Thank you!