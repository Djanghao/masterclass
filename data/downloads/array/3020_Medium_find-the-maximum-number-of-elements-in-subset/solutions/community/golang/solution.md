# Modular code with helper functions. Easy to read

**Author:** aevani
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/5055390/](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/5055390/)

---

# Intuition
The idea is to convert each number that is a square into its base^ exponent format. Having a hashmap of all numbers in the array, and the base^ exponent format, it's easy to look up how many base^ (exponent/2) numbers exist to build the result array.

# Approach
- Add all numbers to map. Create a list of keys where a key is any number that has an integer square root (no decimals). 
- Account for the edge case of ones (ex: 3 ones will satisfy [x^k/2, x^k, x^k]). 
- For each key, drill down to find as many nExp.Base^ (nExp.Power/2) where nExp is the base^ exponent format of key.

# Complexity
- Time complexity:
$$O(nlog(n))$$

- Space complexity:
$$O(n)$$

# Code
```
func maximumLength(nums []int) int {
    nMap := make(map[int]int)
    keys := make([]int, 0)
    ones := 0
    for _, num := range nums {
        nMap[num]++
        if num == 1 {
            ones++
        }

        if !hasSqrt(num) {
            continue
        }
        keys = append(keys, num)
    }
    
    maxCount := 1
    if ones != 0 {
        if ones % 2 == 0 {
            maxCount = ones - 1
        } else {
            maxCount = ones
        }
    }

    for i := 0; i < len(keys); i++ {
        key := keys[i]

        nExp := getNexp(key)
        if nExp.Power == 0 {
            continue
        }
        count := 1
        next := key
        for next != 1 {
            nExp.Power = nExp.Power / 2
            next = int(math.Pow(float64(nExp.Base), float64(nExp.Power)))
            if next != 1 && nMap[next] >= 2 {
                count += 2
            } else {
                break
            }
        }
        maxCount = maxInt(maxCount, count)
    }

    return maxCount
}

type NExp struct {
    Base int
    Power int
}

func getNexp(x int) NExp { 
    mul := 0 
    divisor := getBase(x)
    //fmt.Println("base", x, divisor)
    xRoot := x
    for xRoot != 1 {
        xRoot = xRoot/divisor
        mul++
    }
    
    return NExp{Base:divisor, Power:mul}
}

func getBase(x int) int {
    base := x 
    for hasSqrt(base) && base != 1 {
        base = getIntSqrt(base)
        x = base
    }
    return x
}

func maxInt(x int, y int) int {
    if x > y {
        return x
    }
    return y
}

func getIntSqrt(x int) int{
    val := int(math.Sqrt(float64(x)))
    return val
}

func hasSqrt(x int) bool {
    val := math.Sqrt(float64(x))
    val = val - float64(int(val))
    
    return val < 0.001
}



```