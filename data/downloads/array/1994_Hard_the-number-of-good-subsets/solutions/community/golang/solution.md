# Go - bitmask + dp

**Author:** roman-dubrovsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-good-subsets/solutions/5896935/](https://leetcode.com/problems/the-number-of-good-subsets/solutions/5896935/)

---

# Intuition

This problem does not look really hard firstly if you know how to work with dynamic programming and bitmasks. But I spent some time on that cause it has some pitfalls which make this problem more complex and complex. So firstly, I want to write some thoughts that build my solution:

- Permutations 

It's not clear firstly but for array `[2,3,2,3]` subsets `[2, 3]` (with indexes 0 and 1) and `[2, 3]` (with indexes 2 and 3) are different and should be calculated in the result. Btw, it's written in the last paragraph of problem description.

- Prime numbers and bit mask

We have the requirement that `1 <= nums[i] <= 30` so we have only 10 prime numbers which we'll use in our solution. So it allows us to use bitmask for tracking prime numbers which we use for current state. The 0 bit is used for 2, 1 bit - for 3 and etc.

For example, number 30 we can show as `110` or 6. It allows us to filter all number which can't be created via product prime numbers ones. 

- Filter original array

For numbers which created by producting one prime number more that ones we can't create bit mask which were described above. So we can filter original array and ignore numbers where we can't create a mask. 

- Dynamic programming

For finding count for subsets we can use dp. `dp[mask]` is a count of subsets which use prime number from mask in the result product. 

Initially, all these values are zero. After that, we try to process every number `i` from filterred array. If for some value `x` which we can product on i and don't use some prime number twice we can change `dp[i*x] = dp[i*x] + dp[x]`. Also we increase `dp[i]` by 1. 

So that as dp indexes we use masks instead if raw value and we can get mask for value `i`. We can change operation above:

product `x*i` is `x | i` 
check if product `x*i` uses prime number onces `x & i`

So as result, we need to sum all values from dp array.

- 1, 1, 1, 1

We don't really need care about numbers which we can't convert to mask. But we have one exception: is `1`. 

Let's see on example [1, 2, 1]. Via the algorithm above, we have only one subset `[2]` cause we can't convert `1` to mask and we should ingone it. But in reality, we have next subsets:

```
[2]
[1, 2]
[2, 1]
[1, 2, 1]
```

Also we can see that for two `1` in the array, we have 4 permutations and they will be applied to all subsets from dynamic programming. 

So I decidede to process `1` separatelly. Probably, there are some way how to process it in dynamic programming approach. 

So we need to calculate all `1` it original array and find count permutations by formula: `2^n` where n is number of ones

- Modulo

Also, there are some basic arithmetic rules

```
(a + b) % m == ((a % m) + (b % m)) % m
(a * b) % m == ((a % m) * (b % m)) % m
```

# Approach

So we have the next algorithm

1) Filter original nums and convert numbers to mask (and store it in the `masks` slice) and count `1` (`oneCount` variable). It implemented in `filterNumbers` function. Also I calculate `bitsLength` variable which saves bit for bigger prime number which we can use in our solution.

2) Run dynamic programming (`InitializeDp` and `RunDp` functions). The approach was written above. 

3) Count permutations for `1` via `OnePermutations` function.

4) Sum dynamic programming calculations and product value to `1` permutations count. 


# Complexity

- Time complexity:
O(n * 2^10)

# Code
```golang []
func numberOfGoodSubsets(nums []int) int {
    solution := Solution{}
    solution.filterNumbers(nums)
    solution.InitializeDp()
    solution.RunDp()
    return solution.Result()
}

type Solution struct {
    oneCount int
    masks []int

    modulo int
    bitsLength int
    dp []int
}

func (this *Solution) Result() int {
    dpResult := 0

    for _, v := range this.dp {
        dpResult = (dpResult + v) % this.modulo
    }

    dpResult *= this.OnePermutations()
    return dpResult % this.modulo
}

func (this *Solution) OnePermutations() int {
    result := 1

    for i := 0; i < this.oneCount; i++ {
        result *= 2
        result %= this.modulo
    }

    return result
}

func (this *Solution) RunDp() {
    for _, mask := range this.masks {
        this.ProcessMask(mask)
    }
}

func (this *Solution) ProcessMask(mask int) {
    n := 1 << this.bitsLength

    for i := 0; i < n; i++ {
        if mask & i == 0 {
            this.dp[mask | i] += this.dp[i] 
            this.dp[mask | i] %= this.modulo
        }
    }

    this.dp[mask] += 1
    this.dp[mask] %= this.modulo
}

func (this *Solution) InitializeDp() {
    n := 1 << this.bitsLength
    this.dp = make([]int, n)
    this.modulo = 1000000007
}

func (this *Solution) filterNumbers(nums []int) {
    primeHelper := buildPrimeHelper()

    for _, num := range nums {
        if num == 1 {
            this.oneCount += 1
        } else {
            mask := primeHelper.CreateMask(num)
            if mask != -1 {
                this.masks = append(this.masks, mask)

                if this.bitsLength < bits.Len(uint(mask)) {
                    this.bitsLength = bits.Len(uint(mask))
                }
            }
        }
    }
}

type PrimeHelper struct {
    primeNumbers []int
}

func (this *PrimeHelper) CreateMask(num int) int {
    i := 0
    mask := 0

    for num > 1 && i < len(this.primeNumbers) {
        prime := this.primeNumbers[i]

        if num % prime == 0 {
            num /= prime
            c := 1 << i
            if mask & c != 0 {
                return -1
            } else {
                mask = mask | c
            }
        } else {
            i++
        }
    }

    return mask
}

func buildPrimeHelper() *PrimeHelper {
    prime := []int{2, 3, 5, 7, 11, 13, 17, 19, 23, 29}
    return &PrimeHelper{prime}
}
```