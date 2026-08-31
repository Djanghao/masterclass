# Python||Very Easy Implementation||

**Author:** shubham2505
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/2811996/](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/2811996/)

---


    def gcd(a,b):
        while b:
            a,b = b, a%b
        return abs(a)
    def lcm(a,b):
        return a*b / gcd(a,b)
    def subarrayLCM(self, nums: List[int], k: int) -> int:
        c=0
        l=len(nums)
        for i in range(l):
            x=nums[i]
            for j in range(i,l):
                x=lcm(x,nums[j])
                if x==k:
                    c+=1
        return c