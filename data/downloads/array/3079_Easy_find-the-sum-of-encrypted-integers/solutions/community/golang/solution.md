# I use strconv

**Author:** Sebasers
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/6127417/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/6127417/)

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
func sumOfEncryptedInt(nums []int) (r int) {
    t := []int{}
    for i := 0; i < len(nums); i++{
        s := strconv.Itoa(nums[i])
        x := 0
        for _, v := range s {
            n, _ := strconv.Atoi(string(v))
            if n > x {
                x = n
            }
        }
        k := ""
        for j := 0; j < len(s); j++{
            str := strconv.Itoa(x)
            k += str
        }
        kI, _ := strconv.Atoi(k)
        t = append(t, kI)   
    }
    for _, z := range t {
        r += z
    }
	return
}
```