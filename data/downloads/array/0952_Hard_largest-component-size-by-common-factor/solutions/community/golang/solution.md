# Sieve of Eratosthenes - UnionFind

**Author:** ligt
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/5783388/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/5783388/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
var primes = make([]int, 0, 10000)
var sieveArr = make([]bool, 100001)

func init() {
    for n := 2;n <= 100000;n++ {
        if sieveArr[n] {
            continue
        }
        primes = append(primes, n)
        for i := 2;i * n <= 100000;i++ {
            sieveArr[i * n] = true
        }
    }
}
func largestComponentSize(nums []int) int {
    commonPrimes := make(map[int][]int)
    for _, n := range nums {
        startNum := n
        for _, p := range primes {
            if p > n {
                break
            }
            if n % p == 0 {
                if _, ok := commonPrimes[p]; !ok {
                    commonPrimes[p] = make([]int, 0, 10)
                }
                commonPrimes[p] = append(commonPrimes[p], startNum)
                n /= p
            }
        }
    }

    arr := make(map[int]int, len(nums))
    arrSize := make(map[int]int, len(nums))
    for _, n := range nums {
        arr[n] = n
        arrSize[n] = 1
    }
    find := func(a int) int {
        p := arr[a]
        for a != p {
            a = p
            p = arr[p]
        }

        return p
    }
    union := func(a, b int) {
        pa, pb := find(a), find(b)
        if pa == pb {
            return
        }

        if arrSize[pa] > arrSize[pb] {
            // merge pb into pa
            pb = arr[b] 
            for pb != b {
                arr[b] = pa
                b = pb
                pb = arr[pb]
            }
            arr[b] = pa
            arrSize[pa] += arrSize[pb]
            return
        }
        // merge pa into pb
        pa = arr[a]
        for pa != a {
            arr[a] = pb
            a = pa
            pa = arr[pa]
        }
        arr[a] = pb
        arrSize[pb] += arrSize[pa] 
    }



    for _, listCommon := range commonPrimes {
        if len(listCommon) <= 1 {
            continue
        }
        for i := 1;i<len(listCommon);i++ {
            union(listCommon[0], listCommon[i])
        }
    }
    
    res := 1
    for v := range maps.Values(arrSize) {
        res = max(res, v)
    }
    return res
}
```